import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";

const Modal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const navigate = useNavigate();

  const handleRoleSelection = (role: string) => {
    navigate(`/signup?role=${role}`);
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-all duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      style={{ zIndex: 1050 }}
    >
      <div
        className={`bg-white rounded-lg p-6 w-[90%] max-w-md shadow-lg relative transition-transform duration-300 ${
          isOpen ? "scale-100 translate-y-0" : "scale-95 -translate-y-10"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-xl font-semibold text-center mb-6 text-black">
          Login akun sebagai
        </h2>

        {/* Buttons */}
        <div className="flex flex-col gap-4">
          <button
            onClick={() => handleRoleSelection("userUmum")}
            className="flex items-center justify-center gap-2 py-2 px-4 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200"
          >
            <FaUser className="text-black" />
            <span className="text-black font-medium">User Umum</span>
          </button>
          <button
            onClick={() => handleRoleSelection("pegawai")}
            className="flex items-center justify-center gap-2 py-2 px-4 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200"
          >
            <GrUserWorker className="text-black" />
            <span className="text-black font-medium">Pegawai</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
