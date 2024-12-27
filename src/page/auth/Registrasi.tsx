import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const RegistrationForm: React.FC = () => {
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role"); // Mendapatkan role dari query string
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Data Submitted:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <div className="flex justify-center mb-6">
          <img
            src="/images/logo.png" // Sesuaikan dengan logo Anda
            alt="Logo Perpustakaan"
            style={{ width: "160px", height: "auto" }}
          />
        </div>
        <h1 className="text-center text-xl font-bold text-green-700 mb-4">
          Sistem Informasi Perpustakaan
        </h1>
        <h2 className="text-center text-md text-gray-700 mb-8">
          Registrasi {role === "pegawai" ? "Pegawai" : "User Umum"}
        </h2>
        <form onSubmit={handleSubmit}>
          {role === "userUmum" && (
            <>
              <div className="mb-4">
                <label htmlFor="" className="block text-gray-700 text-sm font-bold mb-2">
                </label>
                <input
                  type="text"
                  name="nik"
                  placeholder="NIK"
                  value={formData.nik}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-green-300"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                </label>
                <input
                  type="text"
                  name="alamat"
                  placeholder="Alamat"
                  value={formData.alamat}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-green-300"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-green-300"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                </label>
                <input
                  type="text"
                  name="noTelp"
                  placeholder="No. Telp"
                  value={formData.noTelp}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-green-300"
                  required
                />
              </div>
            </>
          )}
          {role === "pegawai" && (
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
              </label>
              <input
                type="text"
                name="idCard"
                placeholder="Id Card"
                value={formData.idCard}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-green-300"
                required
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
            </label>
            <input
              type="text"
              name="nama"
              placeholder="nama"
              value={formData.nama}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-green-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-green-300"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Konfirmasi Password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-green-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg shadow-md hover:bg-green-700 transition-all"
          >
            Daftar
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
