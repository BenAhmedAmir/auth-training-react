import {useState} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";


export const ForgotPasswordPage = () => {
    const [errorMessage, setErrorMessage] = useState('')
    const [success, setSuccess] = useState(false)
    const [email, setEmail] =useState('')

    const history = useHistory()
    const onSubmitClicked = async () => {
        try {
            await axios.put(`/api/forgot-password/${email}`)
            setSuccess(true)
            setTimeout(() => {
                history.push('/login')
            }, 3000)
        }catch (e) {
            setErrorMessage(e.message)
        }
    }
    return success ? (
        <div className="content-container">
            <h1>Success</h1>
            <p>Check your email for a reset link</p>
        </div>

    ) : (
        <div className="content-container">
            <h1>Forgot Password</h1>
            <p>Enter your email and we'll send you a reset link</p>
            {errorMessage && <div className="fail">{errorMessage}</div>}
            <input value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="your email "/>
            <button disabled={!email}
            onClick={onSubmitClicked}>
            Send reset link
            </button>
        </div>
    )

}