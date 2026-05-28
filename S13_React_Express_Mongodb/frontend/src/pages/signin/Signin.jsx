import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });

  const loginUser = () => {
    console.log(typeof user.password);
    axios
      .post("http://localhost:3000/api/auth/sign-in", user)
      .then((res) => {
        console.log(res.data);
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center bg-light">
      <div
        className="card shadow border-0 p-4"
        style={{ width: "100%", maxWidth: "400px", borderRadius: "16px" }}
      >
        <div className="text-center mb-4">
          <h2 className="fw-bold">Sign In</h2>
          <p className="text-muted mb-0">Access your account</p>
        </div>

        <form>
          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              value={user.email}
              onChange={() => {
                setUser({ ...user, email: event.target.value });
              }}
              type="email"
              className="form-control"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              value={user.password}
              onChange={() => {
                setUser({ ...user, password: event.target.value });
              }}
              type="password"
              className="form-control"
              placeholder="Enter your password"
            />
          </div>

          {/* Remember Me */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="remember"
              />
              <label className="form-check-label" htmlFor="remember">
                Remember me
              </label>
            </div>

            <Link href="/" className="text-decoration-none">
              Forgot Password?
            </Link>
          </div>

          {/* Button */}
          <button
            type="button"
            onClick={loginUser}
            className="btn btn-primary w-100"
          >
            Sign In
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-muted mt-4 mb-0">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="text-decoration-none fw-semibold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
