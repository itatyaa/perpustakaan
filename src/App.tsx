import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./page/auth/LandingPage";
import LoginForm from "./page/auth/LoginForm";
import RegistrationForm from "./page/auth/Registrasi";
import DashboardAdmin from "./page/admin/Dashboard";
import DataBuku from "./page/admin/dataBuku";
import DataAnggota from "./page/admin/dataAnggota";
import ProtectedRoute from "./components/admin/ProtectedRoute";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<RegistrationForm />} />

        {/* 🔹 Gunakan ProtectedRoute untuk dashboard */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashboardAdmin />} />
          <Route path="/data-buku" element={<DataBuku />} />
          <Route path="/data-anggota" element={<DataAnggota />} />
        </Route>

        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
