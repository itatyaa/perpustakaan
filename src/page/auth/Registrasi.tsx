  import React, { useState } from "react"; 
  import { useNavigate, useSearchParams } from "react-router-dom";

  const RegistrationForm: React.FC = () => {
    const [searchParams] = useSearchParams();
    const role = searchParams.get("role") || "userUmum"; // Default ke user umum
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
      nik: "",
      nama: "",
      alamat: "",
      email: "",
      noTelp: "",
      password: "",
      confirmPassword: "",
      idCard: "",
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      setError("");

      if (formData.password !== formData.confirmPassword) {
        setError("Password dan Konfirmasi Password tidak cocok");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch("http://localhost:5000/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, role }),
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.message);

        alert("Registrasi berhasil! Silakan login.");
        navigate("/login"); // 🔹 Redirect ke login setelah sukses
      } catch (error) {
        if (error instanceof Error) setError(error.message);
        else setError("Registrasi gagal, coba lagi.");
      } finally {
        setLoading(false);
      }
    };

    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-200">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
          <div className="flex justify-center mb-6">
            <img src="/images/logo.png" alt="Logo Perpustakaan" style={{ width: "160px", height: "auto" }} />
          </div>
          <h1 className="text-center text-xl font-bold text-green-700 mb-4">
            Sistem Informasi Perpustakaan
          </h1>
          <h2 className="text-center text-md text-gray-700 mb-8">
            Registrasi {role === "pegawai" ? "Pegawai" : "User Umum"}
          </h2>

          {error && <p className="text-red-500 text-center">{error}</p>}

          <form onSubmit={handleSubmit}>
            {role === "userUmum" && (
              <>
                <input type="text" name="nik" placeholder="NIK" value={formData.nik} onChange={handleInputChange} className="w-full px-4 py-2 mb-4 border rounded-lg shadow-sm focus:ring focus:ring-green-300" required />
                <input type="text" name="alamat" placeholder="Alamat" value={formData.alamat} onChange={handleInputChange} className="w-full px-4 py-2 mb-4 border rounded-lg shadow-sm focus:ring focus:ring-green-300" required />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-2 mb-4 border rounded-lg shadow-sm focus:ring focus:ring-green-300" required />
                <input type="text" name="noTelp" placeholder="No. Telp" value={formData.noTelp} onChange={handleInputChange} className="w-full px-4 py-2 mb-4 border rounded-lg shadow-sm focus:ring focus:ring-green-300" required />
              </>
            )}

            {role === "pegawai" && (
              <input type="text" name="idCard" placeholder="ID Card" value={formData.idCard} onChange={handleInputChange} className="w-full px-4 py-2 mb-4 border rounded-lg shadow-sm focus:ring focus:ring-green-300" required />
            )}

            <input type="text" name="nama" placeholder="Nama" value={formData.nama} onChange={handleInputChange} className="w-full px-4 py-2 mb-4 border rounded-lg shadow-sm focus:ring focus:ring-green-300" required />
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} className="w-full px-4 py-2 mb-4 border rounded-lg shadow-sm focus:ring focus:ring-green-300" required />
            <input type="password" name="confirmPassword" placeholder="Konfirmasi Password" value={formData.confirmPassword} onChange={handleInputChange} className="w-full px-4 py-2 mb-6 border rounded-lg shadow-sm focus:ring focus:ring-green-300" required />

            <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg shadow-md hover:bg-green-700 transition-all" disabled={loading}>
              {loading ? "Mendaftar..." : "Daftar"}
            </button>
          </form>
        </div>
      </div>
    );
  };

  export default RegistrationForm;
