import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import './page/Login.css';

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const storedUserData = JSON.parse(localStorage.getItem("user-data")) || [];
  const newPassword = localStorage.getItem("newPassword");

  const handleLogin = () => {
    if (!email || !password) {
      setMessage("Please fill in all required fields.");
      return;
    }

    const matchingUser = storedUserData.find(
      (user) => user.email === email && user.password === password
    );

    if (matchingUser) {
      if (newPassword && newPassword === password) {
        setMessage("Login successful with the new password!");
      } else {
        setMessage("Login successful!");
      }
   navigate("/image-gallery");
    } else {
      setMessage("Invalid email or password.");
    }
  };

  const handleForgotPassword = () => {
    // Redirect to the password reset page.
    navigate("/reset-password");
  };

  return (
  <div className=" text-center py-5 vh-100" style={{backgroundColor:"blanchedalmond"}}>
  <div className="row justify-content-center">
    <div className="col-md-4 shadow-lg p-3 mb-5 rounded mt-5">
      <div className="my-form">
        <form>
          {message && <div className="alert alert-danger">{message}</div>}

          <h2 className="my-4">Login</h2>
          <div className="mb-3">
            <label>Email:</label>
            <input
              type="email"
              className="form-control form-control-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Password:</label>
            <input
              type="password"
              className="form-control form-control-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="button" onClick={handleLogin} className="btn btn-success px-5 py-2 rounded-pill">
            Login
          </button>
          <button
            type="button"
            onClick={handleForgotPassword}
            className="btn btn-link"
          >
            Forgot Password?
          </button>
        </form>
      </div>
    </div>
  </div>
</div>
  
  );
}

export default LoginPage;


