import React, { useState, useContext } from "react";
import EmployeeContext from "../context/EmployeeContext";
import { Eye, EyeOff } from "lucide-react";

function EmployeeLogin() {
  const [employeeName, setEmployeeName] = useState("");
  const [employeePassword, setEmployeePassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(true);

  const { setEmployee } = useContext(EmployeeContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmployee({ employeeName, employeePassword });
  };
  const showHidePassword = (e) => {
    e.preventDefault();
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div>
      <h2>Employee Login</h2>
      <div>
        <input
          type="text"
          placeholder="email"
          value={employeeName}
          onChange={(e) => setEmployeeName(e.target.value)}
        />
      </div>
      <div className="flex">
        <input
          type={passwordVisible ? "password" : "text"}
          value={employeePassword}
          placeholder="Password"
          onChange={(e) => setEmployeePassword(e.target.value)}
        />
        <div className="-ml-10 cursor-pointer">
          {passwordVisible ? (
            <EyeOff onClick={showHidePassword} />
          ) : (
            <Eye onClick={showHidePassword} />
          )}
        </div>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default EmployeeLogin;
