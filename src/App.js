import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Registration from '../src/components/auth/Registration';
import ImageGallery from '../src/page/gallery/ImageGallery';
import Home from '../src/components/header/Home';
import Login from '../src/components/auth/Login';
import ResetPasswordPage from '../src/components/resetpassword/ResetPassword';


function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Innovative Farming 
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/image-gallery" className="nav-link">
                  Image Gallery
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-3">
        <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/image-gallery" element={<ImageGallery />} />
          <Route path="/reset-password" element={<ResetPasswordPage />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
