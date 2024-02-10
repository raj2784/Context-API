import React, { useState, useContext } from "react";
import StudentContext from "../context/StudentContext";
import { Eye, EyeOff } from "lucide-react";

function StudentLogin() {
  const [studentName, setStudentName] = useState("");
  const [studentPassword, setStudentPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(true);

  const { setSudent } = useContext(StudentContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSudent({ studentName, studentPassword });
  };
  const showHidePassword = (e) => {
    e.preventDefault();
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div>
      <div>
        <h2>Student Login</h2>
      </div>
      <div>
        <input
          type="text"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          placeholder="Student Name"
        />
        <div className="flex">
          <input
            type={passwordVisible ? "password" : "text"}
            value={studentPassword}
            onChange={(e) => setStudentPassword(e.target.value)}
            placeholder="Student Password"
          />
          <div className="-ml-10">
            {passwordVisible ? (
              <EyeOff onClick={showHidePassword} />
            ) : (
              <Eye onClick={showHidePassword} />
            )}
          </div>
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}
export default StudentLogin;
