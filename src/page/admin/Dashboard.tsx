import React from "react";
import Sidebar from "../../components/admin/Sidebar";

const DashboardAdmin: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 flex-1 bg-gray-100 p-6">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Dashboard Administrator</h1>
        <div className="grid grid-cols-4 gap-6">
          <div className="bg-blue-600 text-white p-4 rounded shadow-md">
            <h2 className="text-lg font-bold">5</h2>
            <p>Buku</p>
            <a href="/data-buku" className="text-sm underline">More info</a>
          </div>
          <div className="bg-orange-500 text-white p-4 rounded shadow-md">
            <h2 className="text-lg font-bold">5</h2>
            <p>Anggota</p>
            <a href="/data-anggota" className="text-sm underline">More info</a>
          </div>
          <div className="bg-green-600 text-white p-4 rounded shadow-md">
            <h2 className="text-lg font-bold">0</h2>
            <p>Sirkulasi yang sedang berjalan</p>
            <a href="/sirkulasi" className="text-sm underline">More info</a>
          </div>
          <div className="bg-red-600 text-white p-4 rounded shadow-md">
            <h2 className="text-lg font-bold">5</h2>
            <p>Laporan Sirkulasi</p>
            <a href="/laporan" className="text-sm underline">More info</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
