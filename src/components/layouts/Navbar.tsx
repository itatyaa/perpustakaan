import React, { useState } from "react";
import Modal from "./Modal";

const Navbar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSignUpClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className="bg-green-600 text-black py-3 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl font-bold">Perpustakaan Diskominfo</h1>
        <div className="hidden md:flex space-x-4">
          <button
            onClick={handleSignUpClick}
            className="text-black px-4 py-2 rounded-lg hover:bg-gray-200 hover:bg-white hover:text-green-400"
          >
            Sign up
          </button>
          <a
            href="/login"
            className="text-black px-4 py-2 rounded-lg hover:bg-white hover:text-green-400"
          >
            Log in
          </a>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </nav>
  );
};

export default Navbar;
