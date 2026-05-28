import React, { useRef } from "react";
import "./Signup.css";
import axios from "axios";

const SignupForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const signup = () => {
    var user = {
      username: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    axios
      .post("http://localhost:3000/api/auth/sign-up", user)
      .then((res) => {
        console.log(res.data);
        alert(res.data);
      })
      .catch((error) => {
        console.log(error);
        alert("something went wrong");
      });
  };

  return (
    <div className="page-container">
      <div className="signup-container">
        {/* Left Side Image */}
        <div className="left-section"></div>

        {/* Right Side Form */}
        <div className="right-section">
          <form className="signup-form">
            <h2>Create Account</h2>
            <p className="subtitle">Sign up to continue</p>

            <div className="input-group">
              <label>Username</label>
              <input
                ref={nameRef}
                type="text"
                name="username"
                placeholder="Enter username"
                required
              />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input
                ref={emailRef}
                type="email"
                name="email"
                placeholder="Enter email"
                required
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                ref={passwordRef}
                type="password"
                name="password"
                placeholder="Enter password"
                required
              />
            </div>

            <button type="button" onClick={signup} className="signup-btn">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
