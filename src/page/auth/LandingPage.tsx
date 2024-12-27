import React from "react";
import "../../App.css";
import Navbar from "../../components/layouts/Navbar";
import KeunggulanList from "../../components/layouts/Keunggulan";

const LandingPage: React.FC = () => (
  <div>
    <Navbar />
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-6">
      {/* Gambar */}
      <div className="w-1/2">
        <img
          src="/images/landing2.svg"
          alt="Landing"
          className="h-auto max-w-full"
        />
      </div>
      {/* Teks dan Keunggulan */}
      <div className="w-1/2 pl-10">
        <h1 className="text-4xl font-extrabold text-green-700 mb-6 shadow-md">
          Keunggulan Web Perpustakaan
        </h1>
        <KeunggulanList />
      </div>
    </div>
  </div>
);

export default LandingPage;
