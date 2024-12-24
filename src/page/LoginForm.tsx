import React from 'react';

const LoginForm: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      {/* Card Container */}
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="/images/logo.png" // Ganti dengan path logo Anda
            alt="Logo Perpustakaan"
            style={{ width: '160px', height: 'auto' }} // Ukuran logo
          />
        </div>
        {/* Heading */}
        <h1 className="text-center text-xl font-bold text-green-700 mb-4">
          Sistem Informasi Perpustakaan
        </h1>
        <h2 className="text-center text-md text-gray-700 mb-8">Login System</h2>
        {/* Form */}
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <div className="relative">
              <input
                type="text"
                id="username"
                placeholder="Username"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-green-300"
              />
              <span className="absolute right-3 top-2.5 text-gray-400">
                <i className="fas fa-user"></i>
              </span>
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-green-300"
              />
              <span className="absolute right-3 top-2.5 text-gray-400">
                <i className="fas fa-lock"></i>
              </span>
            </div>
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
