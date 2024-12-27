import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-slate-600 text-black fixed h-full">
        <div className="p-4 text-center font-bold text-xl border-b border-gray-700">
          <a href="/dashboard" className="block text-green-500">E-Library</a>
        </div>
        <nav className="mt-4">
          <ul>
            <li className="hover:bg-green-700 px-4 py-3">
              <a href="/dashboard" className="block">Dashboard</a>
            </li>
            <li className="hover:bg-green-700 px-4 py-3">
              <a href="/data-buku" className="block">Data Buku</a>
            </li>
            <li className="hover:bg-green-700 px-4 py-3">
              <a href="/data-anggota" className="block">Data Anggota</a>
            </li>
            <li className="hover:bg-green-700 px-4 py-3">
              <a href="/sirkulasi" className="block">Sirkulasi</a>
            </li>
            <li className="hover:bg-green-700 px-4 py-3">
              <a href="/log-data" className="block">Log Data</a>
            </li>
            <li className="hover:bg-green-700 px-4 py-3">
              <a href="/laporan" className="block">Laporan</a>
            </li>
            <li className="hover:bg-green-700 px-4 py-3">
              <a href="/logout" className="block">Logout</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
