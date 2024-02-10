import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import StudentContextProvider from "./context/StudentContextProvider";
import StudentLogin from "./components/StudentLogin";
import StudentProfile from "./components/StudentProfile";
import UserContextProvider from "./context/UserContextProvider";
import EmployeeContextProvider from "./context/EmployeeContextProvider";
import EmployeeLogin from "./components/EmployeeLogin";
import EmployeeProfile from "./components/EmployeeProfile";

function App() {
  return (
    <UserContextProvider>
      <StudentContextProvider>
        <EmployeeContextProvider>
          <div className="App-header">
            <h1>Context API</h1>
            <Login />
            <Profile />
            <StudentLogin />
            <StudentProfile />
            <EmployeeLogin />
            <EmployeeProfile />
          </div>
        </EmployeeContextProvider>
      </StudentContextProvider>
    </UserContextProvider>
  );
}

export default App;
