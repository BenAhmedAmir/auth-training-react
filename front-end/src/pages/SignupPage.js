import { useState } from "react";
import { useHistory } from "react-router-dom";
export const SignupPage = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const history = useHistory();
  const onLoginClicked = async () => {
    alert("login not implemented yet");
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
      ></input>
      <input
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirme your password"
      ></input>
      <button
        disabled={!emailValue || !password || password !== confirmPassword}
      >
        Sign Up
      </button>
      <hr />
      <button onClick={() => history.push("/login")}>
        Already have an acounnt ? Login
      </button>
    </div>
  );
};
