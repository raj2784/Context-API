import React, { useState } from "react";
import EmployeeContext from "./EmployeeContext";

const EmployeeContextProvider = ({ children }) => {
  const [employee, setEmployee] = useState("");
  return (
    <EmployeeContext.Provider value={{ employee, setEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeContextProvider;
