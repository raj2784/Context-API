import React, { useState } from "react";
import StudentContext from "./StudentContext";

const StudentContextProvider = ({ children }) => {
  const [student, setSudent] = useState("");

  return (
    <StudentContext.Provider value={{ student, setSudent }}>
      {children}
    </StudentContext.Provider>
  );
};

export default StudentContextProvider;
