import {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {useToken} from "../auth/useToken";
import axios from "axios";
import {useQueryParams} from "../util/useQueryParams";

export const LoginPage = () => {
    const [,setToken] = useToken()
    const [errorMessage, setErrorMessage] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [password, setPassword] = useState("");

    const [googleOauthUrl, setGoogleOauthUrl] = useState('')
    const {token: oauthToken} = useQueryParams()
    const history = useHistory();
    useEffect(() => {
        if(oauthToken){
            setToken(oauthToken)
            history.push('/')
        }
    }, [oauthToken, setToken, history])
    useEffect(() => {
        const loadOauthUrl = async () => {
            try {
                const response = await axios.get('/auth/google/url')
                const {url} = response.data
                setGoogleOauthUrl(url)
            } catch (e) {
                console.log(e)
            }
        }
        loadOauthUrl()
    }, [])

    const onLoginClicked = async () => {
        const response = await axios.post('/api/login', {
            email: emailValue,
            password: password

        })
        const {token} = response.data
        setToken(token)
        history.push('/')
    };
    return (
        <div className="content-container">
            <h1>Log In</h1>
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
            <button onClick={onLoginClicked} disabled={!emailValue || !password}>Log In</button>
            <button onClick={() => history.push("/forgot-password")}>
                Forget your password
            </button>
            <button onClick={() => history.push("/signup")}>
                Don't have an account ? Sing Up
            </button>
            <button disabled={!googleOauthUrl} onClick={() => window.location.href = googleOauthUrl}>
                Login with Google</button>
        </div>
    );
};
