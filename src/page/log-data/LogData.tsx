import React, { useState } from 'react';
import Sidebar from "../../components/admin/Sidebar"
const LogData = () => {
  const [logs, setLogs] = useState([
    { id: 1, aktivitas: 'Login', user: 'Chandra Arga', timestamp: '2024-12-01 08:00:00' },
    { id: 2, aktivitas: 'Pinjam Buku', user: 'Rendi Pratama', timestamp: '2024-12-02 10:00:00' },
  ]);

  const addLog = () => {
    // Menambahkan data log baru
    setLogs([
      ...logs,
      { id: logs.length + 1, aktivitas: 'Kembalikan Buku', user: 'Dita', timestamp: '2024-12-05 15:30:00' },
    ]);
  };

  return (
    <div>
        <Sidebar />
      <h1>Log Data</h1>
      <ul>
        {logs.map((item) => (
          <li key={item.id}>
            {item.aktivitas} - {item.user} - {item.timestamp}
          </li>
        ))}
      </ul>
      <button onClick={addLog} className="bg-red-500 text-white px-4 py-2 rounded">
        Tambah Log
      </button>
    </div>
  );
};

export default LogData;
