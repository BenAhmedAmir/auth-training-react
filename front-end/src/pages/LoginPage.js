import { useState } from "react";
import { useHistory } from "react-router-dom";
import {useToken} from "../auth/useToken";
import axios from "axios";
export const LoginPage = () => {
    const [token,setToken] = useToken()
  const [errorMessage, setErrorMessage] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const onLoginClicked = async () => {
    const reponse = await axios.post('/api/login', {
        email: emailValue,
        password: password

    })
      const {token} = reponse.data
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
      ></input>
      <button onClick={onLoginClicked} disabled={!emailValue || !password}>Log In</button>
      <button onClick={() => history.push("/forgot-password")}>
        Forget your password
      </button>
      <button onClick={() => history.push("/signup")}>
        Don't have an account ? Sing Up
      </button>
    </div>
  );
};
