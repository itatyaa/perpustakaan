import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from './page/auth/LandingPage'
import LoginForm from "./page/auth/LoginForm";
import RegistrationForm from "./page/auth/Registrasi"
import DashboardAdmin from "./page/admin/Dashboard"

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>

          <Route path="/" element={<LandingPage/>} />

          {/* Route untuk halaman Login */}
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<RegistrationForm />} />
          <Route path="/dashboard" element={<DashboardAdmin />} />
          <Route path="*" element={<div><h1>Page Not Found</h1></div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
