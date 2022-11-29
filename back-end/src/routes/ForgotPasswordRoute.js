import {getDbConnection} from "../db";
import {v4 as uuid} from 'uuid'
import {sendEmail} from "../utils/sendEmail";
export const forgotPasswordRoute = {
    path: '/api/forgot-password/:email',
    method: 'put',
    handler: async (req, res) =>{
        const { email } = req.params

        const db = getDbConnection('react-auth-db')

        const passwordResetCode = uuid()
        const {result} = await db.collection('users')
            .updateOne({
                email
            }, { $set : { passwordResetCode } })
        //mongoDB specifies how many documents were actually modified here
        if (result.nModified > 0 ) /* if there is a user in our database with that email*/ {
            try {
                await sendEmail({
                    from: 'benahmedamir@hotmail.fr',
                    to: email,
                    subject: 'Password reset',
                    text:`
                        To reset your password, click this link:
                        http://localhost:3000/reset-password/${passwordResetCode} 
                    `
                })
            }catch (e) {

                console.log(e)
                res.sendStatus(500)
                
            }
        }
        res.sendStatus(200)
    }
}