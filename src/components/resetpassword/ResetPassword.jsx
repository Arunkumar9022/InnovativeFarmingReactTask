
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ResetPasswordPage() {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleResetPassword = () => {
    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match.");
    } else {
    
      setMessage("Password reset successful!");

    localStorage.setItem("newPassword", newPassword);

      navigate("/login");
    }
  };

  return (
    <div className="container">
      <div className="my-form">
        <form>
          {message && <div className="alert alert-info">{message}</div>}

          <h2>Reset Password</h2>
          <div className="mb-3">
            <label>New Password:</label>
            <input
              type="password"
              className="form-control"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Confirm Password:</label>
            <input
              type="password"
              className="form-control"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button
            type="button"
            onClick={handleResetPassword}
            className="btn btn-success"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPasswordPage;
