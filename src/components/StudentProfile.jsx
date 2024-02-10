import React, { useContext } from "react";
import StudentContext from "../context/StudentContext";

function StudentProfile() {
  const { student } = useContext(StudentContext);
  if (!student) {
    return <div>Please Login Student</div>;
  } else if (student !== "") {
    return <div>Welcome Student {student.studentName}</div>;
  }
}

export default StudentProfile;
