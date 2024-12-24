import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from './page/LandingPage'
import LoginForm from "./page/LoginForm";
import RegistrationForm from "./page/Registrasi"

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>

          <Route path="/" element={<LandingPage/>} />

          {/* Route untuk halaman Login */}
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<RegistrationForm />} />
          <Route path="*" element={<div>Halaman tidak ditemukan</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
