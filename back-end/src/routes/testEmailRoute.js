import {sendEmail} from "../utils/sendEmail";

export const testEmailRoute = {
    path:'/api/test-email',
    method: 'post',
    handler: async (req, res) => {
        try{
            await sendEmail({
                from: 'benahmedamir@hotmail.fr',
                to: 'benamir184@gmail.com',
                subject: 'React Auth Training',
                text: 'salem 3alykom ya amir react tla3 nes mla7 🫢🤭'
            })
            res.sendStatus(200)
        }
        catch (e) {
            console.log(e)
            res.sendStatus(500)
        }
    }
}