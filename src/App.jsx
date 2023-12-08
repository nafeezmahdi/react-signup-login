import "./index.css";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";
// import Successful from "./components/pages/Successful";
import { useState } from "react";

function App() {
  const [text, setText] = useState("Sign Up");

  const handleChange = () => setText("Login");

  // setText("Login");
  return (
    <>
      {text === "Sign Up" ? <SignUp text={text} change={handleChange} /> : null}
      {text === "Login" ? <Login text={text} change={handleChange} /> : null}

      {/* <Successful /> */}
    </>
  );
}

export default App;
