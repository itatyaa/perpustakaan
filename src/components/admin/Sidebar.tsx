import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-green-700 text-white fixed h-full">
        <div className="p-4 text-center font-bold text-xl border-b border-gray-200">
        <a href="/dashboard" className="block">Dashboard</a>
        </div>
        <nav className="mt-4">
          <ul>
            <li className="hover:bg-green-800 px-4 py-2">
              <a href="#" className="block">Peminjaman</a>
            </li>
            <li className="hover:bg-green-800 px-4 py-2">
              <a href="#" className="block">Pengembalian</a>
            </li>
            <li className="hover:bg-green-800 px-4 py-2">
              <a href="#" className="block">Profil</a>
            </li>
            <li className="hover:bg-green-800 px-4 py-2">
              <a href="#" className="block">Logout</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
