import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";
import { Eye, EyeOff } from "lucide-react";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(true);

  const { setUser } = useContext(UserContext);

  const handleSubmitUser = (e) => {
    e.preventDefault();
    setUser({ userName, password });
  };
  const showHidePassword = (e) => {
    e.preventDefault();
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div>
      <h2>Login</h2>
      <div>
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="username"
        />
      </div>
      <div className="flex items-center justify-center">
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={passwordVisible ? "password" : "text"}
          placeholder="Password"
        />
        <div className="-ml-10 cursor-pointer">
          {passwordVisible ? (
            <EyeOff onClick={showHidePassword} />
          ) : (
            <Eye onClick={showHidePassword} />
          )}
        </div>
      </div>
      <button onClick={handleSubmitUser}>Submit</button>
    </div>
  );
}

export default Login;
