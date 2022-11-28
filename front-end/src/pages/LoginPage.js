import { useState } from "react";
import { useHistory } from "react-router-dom";
export const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const onLoginClicked = async () => {
    alert("login not implemented yet");
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
      <button disabled={!emailValue || !password}>Log In</button>
      <button onClick={() => history.push("/forget-password")}>
        Forget your password
      </button>
      <button onClick={() => history.push("/signup")}>
        Don't have an account ? Sing Up
      </button>
    </div>
  );
};
