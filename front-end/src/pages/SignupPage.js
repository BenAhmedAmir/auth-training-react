import {useState} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";
import {useToken} from "../auth/useToken";

export const SignupPage = () => {
    const [token, setToken] = useToken()
    const [errorMessage, setErrorMessage] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const history = useHistory();
    const onSignupClicked = async () => {
        const response = await axios.post('/api/signup', {
            email: emailValue,
            password: password
        })
        const {token} = response.data
        setToken(token)
        history.push('/please-verify')
    };
    return (
        <div className="content-container">
            <h1>Sign Up</h1>
            {errorMessage && <div className="fail">{errorMessage}</div>}
            <input
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
                placeholder="your email"
            ></input>
            <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="your password"
                type="password"
            ></input>
            <input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                type="password"
            ></input>
            <button
                disabled={!emailValue || !password || password !== confirmPassword}
                onClick={onSignupClicked}
            >
                Sign Up
            </button>
            <hr/>
            <button onClick={() => history.push("/login")}>
                Already have an account ? Login
            </button>
        </div>
    );
};
