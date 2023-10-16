import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Registration() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleRegistration = () => {
    if (!email || !password) {
      setMessage("Please fill in all required fields.");
      return;
    }

    const user = {
      email,
      phone,
      password,
    };

    let existingUserData = JSON.parse(localStorage.getItem("user-data")) || [];

    if (!Array.isArray(existingUserData)) {
      existingUserData = [];
    }

    existingUserData.push(user);

    localStorage.setItem("user-data", JSON.stringify(existingUserData));

    setMessage("Registration successful!");
    setEmail("");
    setPhone("");
    setPassword("");

    navigate("/login");
  };

  return (
    <div className="container vh-100" style={{ backgroundColor: '#ffebcd', padding: '5px' }}>
    <div className="row justify-content-center">
      <div className="col-md-6 shadow-lg p-3 mb-5 rounded mt-5">
        <div className="my-form">
          <h2 className="my-4">Registration</h2>
          {message && <div className="alert alert-success">{message}</div>}
          <form>
            <div className="mb-3">
              <label className="form-label">Email:</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone:</label>
              <input
                type="tel"
                className="form-control"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password:</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="button" className="btn btn-warning px-5 py-2 rounded-pill" onClick={handleRegistration}>
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Registration;





