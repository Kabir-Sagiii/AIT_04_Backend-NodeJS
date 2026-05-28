import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    city: "",
  });

  const createAccount = () => {
    axios
      .post("http://localhost:3000/api/auth/sign-up", state)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center bg-light">
      <div
        className="card shadow border-0 p-4"
        style={{ width: "100%", maxWidth: "420px", borderRadius: "16px" }}
      >
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="fw-bold">Create Account</h2>
          <p className="text-muted mb-0">Fill in your details to sign up</p>
        </div>

        {/* Form */}
        <form>
          {/* Name */}
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              valu={state.name}
              onChange={() => {
                setState({ ...state, name: event.target.value });
              }}
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              valu={state.email}
              onChange={() => {
                setState({ ...state, email: event.target.value });
              }}
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Create Link password"
              valu={state.password}
              onChange={() => {
                setState({ ...state, password: event.target.value });
              }}
            />
          </div>

          {/* City Selection */}
          <div className="mb-4">
            <label className="form-label">City</label>
            <select
              className="form-select"
              value={state.city}
              onChange={() => {
                setState({ ...state, city: event.target.value });
              }}
            >
              <option>Select your city</option>
              <option>Hyderabad</option>
              <option>Vijayawada</option>
              <option>Visakhapatnam</option>
              <option>Bengaluru</option>
              <option>Chennai</option>
            </select>
          </div>

          {/* Signup Button */}
          <button
            type="button"
            className="btn btn-primary w-100"
            onClick={() => {
              createAccount();
            }}
          >
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-muted mt-4 mb-0">
          Already have an account?{" "}
          <Link to="/" className="text-decoration-none fw-semibold">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
