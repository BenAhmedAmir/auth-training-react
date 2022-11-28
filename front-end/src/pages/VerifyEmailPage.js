import {useHistory} from "react-router-dom";
import {useEffect} from "react";

export const VerifyEmailPage = () => {
    const history = useHistory()
    useEffect(() => {
        setTimeout(() => {
            history.push('/')

        },3000)
    }, [history])
    return(
        <div className="content-container">
            <h1>Thanks for Signing Up !</h1>
            <p>
                A verification email has been sent to email address you provided
                Please verify your email to unlock full site feature
            </p>
        </div>
    )
}