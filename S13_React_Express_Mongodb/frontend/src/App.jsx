import React from "react";
import SignupForm from "./pages/signup/Signup";
import SignIn from "./pages/signin/Signin.jsx";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/signup/Signup";
import Home from "./pages/home/Home.jsx";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
