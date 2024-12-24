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
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4 text-center">
        Registrasi {role === "pegawai" ? "Pegawai" : "User Umum"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {role === "userUmum" && (
          <>
            <div>
              <label className="block font-medium mb-1">NIK</label>
              <input
                type="text"
                name="nik"
                value={formData.nik}
                onChange={handleInputChange}
                className="w-full border rounded-md p-2"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Alamat</label>
              <input
                type="text"
                name="alamat"
                value={formData.alamat}
                onChange={handleInputChange}
                className="w-full border rounded-md p-2"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border rounded-md p-2"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-1">No. Telp</label>
              <input
                type="text"
                name="noTelp"
                value={formData.noTelp}
                onChange={handleInputChange}
                className="w-full border rounded-md p-2"
                required
              />
            </div>
          </>
        )}
        {role === "pegawai" && (
          <>
            <div>
              <label className="block font-medium mb-1">ID Card</label>
              <input
                type="text"
                name="idCard"
                value={formData.idCard}
                onChange={handleInputChange}
                className="w-full border rounded-md p-2"
                required
              />
            </div>
          </>
        )}
        <div>
          <label className="block font-medium mb-1">Nama</label>
          <input
            type="text"
            name="nama"
            value={formData.nama}
            onChange={handleInputChange}
            className="w-full border rounded-md p-2"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full border rounded-md p-2"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Konfirmasi Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className="w-full border rounded-md p-2"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Daftar
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
