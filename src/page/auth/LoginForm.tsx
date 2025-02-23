import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 🔹 Import useNavigate

const LoginForm: React.FC = () => {
  const navigate = useNavigate(); // 🔹 Inisialisasi navigate
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message);

      localStorage.setItem("token", data.token); // 🔹 Simpan token
      navigate("/dashboard"); // 🔹 Redirect ke Dashboard setelah login sukses
    } catch (error) {
      if (error instanceof Error) setError(error.message);
      else setError("Login gagal");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h1 className="text-center text-xl font-bold text-green-700 mb-4">
          Sistem Informasi Perpustakaan
        </h1>
        <h2 className="text-center text-md text-gray-700 mb-8">Login System</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring"
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg shadow-md hover:bg-green-700 transition-all"
          >
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
