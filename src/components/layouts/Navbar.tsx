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
    <nav className="fixed top-0 w-full bg-white z-50 py-3 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <img src="images/logoDiskominfo.png" 
        alt="Logo Diskominfo"
        className="h-6 w-auto object-contain"
        style={{ maxHeight: "40px"}} />
        <div className="hidden md:flex space-x-4">
          <button
            onClick={handleSignUpClick}
            className="text-green-700 px-4 py-2 rounded-lg hover:bg-green-700 hover:text-white"
          >
            Sign up
          </button>
          <a
            href="/login"
            className="text-green-700 px-4 py-2 rounded-lg hover:bg-green-700 hover:text-white"
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
