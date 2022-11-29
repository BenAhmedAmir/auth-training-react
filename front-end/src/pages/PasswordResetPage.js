import {useState} from "react";
import {PasswordResetFail} from "../components/PasswordResetFail";
import {PasswordResetSuccess} from "../components/PasswordResetSuccess";
import axios from "axios";
import {useParams} from "react-router-dom";

export const PasswordResetPage = () => {
    const [isSuccess, setIsSuccess] = useState(false)
    const [isFailure, setIsFailure] = useState(false)

    const [password,setPassword] = useState('')
    const [confirmPassword,  setConfirmPassword] = useState('')

    const {passwordResetCode} = useParams()

    const onResetClicked = async () => {

        try{
            await axios.put(`/api/users/${passwordResetCode}/reset-password/`,
                {newPassword: password})
            setIsSuccess(true)
        }catch (e) {
            setIsFailure(true)
        }

    }
    if(isFailure) return <PasswordResetFail/>
    if(isSuccess) return  <PasswordResetSuccess/>

    return (
        <div className="content-container">
            <h1>Reset Password</h1>
            <p>Please enter new password</p>
            <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="new password"
            />
            <input
                type="password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                placeholder="confirm password"
            />
            <button disabled={!password || !confirmPassword || password !== confirmPassword}
                    onClick={onResetClicked}>Reset password</button>
        </div>
    )
}