import React from "react";

const KeunggulanList: React.FC = () => {
  const keunggulan = [
    "Akses mudah untuk meminjam buku.",
    "Pencarian buku cepat dan akurat dengan fitur filter.",
    "Histori peminjaman yang terorganisir.",
    "Sistem notifikasi untuk pengembalian tepat waktu.",
    "Desain responsif yang nyaman digunakan dan memudahkan.",
  ];

  return (
    <ul className="list-disc text-gray-800 space-y-3 text-lg text-md font-bold">
      {keunggulan.map((item, index) => (
        <li
          key={index}
          className="hover:text-green-600 transition duration-300"
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default KeunggulanList;
