import React, { useState } from 'react';
import Sidebar from '../../components/admin/Sidebar';

const DataAnggota = () => {
  const [anggota, setAnggota] = useState([
    { id: 1, nama: 'Chandra Arga', email: 'chandra@example.com', telepon: '08123456789', alamat: 'Bandung' },
    { id: 2, nama: 'Rendi Pratama', email: 'rendi@example.com', telepon: '08123456788', alamat: 'Jakarta' },
  ]);

  const addAnggota = () => {
    // Menambahkan data anggota baru
    setAnggota([
      ...anggota,
      { id: anggota.length + 1, nama: 'Dita', email: 'dita@example.com', telepon: '08123456787', alamat: 'Surabaya' },
    ]);
  };

  return (
    <div>
      <Sidebar  />
      <h1>Data Anggota</h1>
      <ul>
        {anggota.map((item) => (
          <li key={item.id}>
            {item.nama} - {item.email} - {item.telepon} - {item.alamat}
          </li>
        ))}
      </ul>
      <button onClick={addAnggota} className="bg-blue-500 text-white px-4 py-2 rounded">
        Tambah Anggota
      </button>
    </div>
  );
};

export default DataAnggota;
