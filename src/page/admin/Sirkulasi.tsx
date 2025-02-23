import React, { useState } from 'react';

const Sirkulasi = () => {
  const [sirkulasi, setSirkulasi] = useState([
    { id: 1, buku: 'Algoritma Pemrograman', peminjam: 'Chandra Arga', tanggalPinjam: '2024-12-01', status: 'Dipinjam' },
    { id: 2, buku: 'Belajar React.js', peminjam: 'Rendi Pratama', tanggalPinjam: '2024-12-02', status: 'Dikembalikan' },
  ]);

  const addSirkulasi = () => {
    // Menambahkan data sirkulasi baru
    setSirkulasi([
      ...sirkulasi,
      { id: sirkulasi.length + 1, buku: 'JavaScript Dasar', peminjam: 'Dita', tanggalPinjam: '2024-12-05', status: 'Dipinjam' },
    ]);
  };

  return (
    <div>
      <h1>Sirkulasi</h1>
      <ul>
        {sirkulasi.map((item) => (
          <li key={item.id}>
            {item.buku} - {item.peminjam} - {item.tanggalPinjam} - {item.status}
          </li>
        ))}
      </ul>
      <button onClick={addSirkulasi} className="bg-green-500 text-white px-4 py-2 rounded">
        Tambah Sirkulasi
      </button>
    </div>
  );
};

export default Sirkulasi;
