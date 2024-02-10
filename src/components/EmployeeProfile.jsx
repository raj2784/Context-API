import React, { useContext } from "react";
import EmployeeContext from "../context/EmployeeContext";

function EmployeeProfile() {
  const { employee } = useContext(EmployeeContext);

  if (!employee) {
    return <div>Please Login Employee</div>;
  } else {
    return <div> Welcome Employee {employee.employeeName}</div>;
  }
}

export default EmployeeProfile;
