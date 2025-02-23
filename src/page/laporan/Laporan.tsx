import React from 'react';
import Sidebar from '../../components/admin/Sidebar';

const Laporan: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <div className="flex-1 ml-64 p-6">
        <h1 className="text-2xl font-bold mb-4">Laporan</h1>
        <p>Halaman ini akan digunakan untuk menampilkan laporan seperti statistik peminjaman, buku, dan lainnya.</p>
      </div>
    </div>
  );
};

export default Laporan;
