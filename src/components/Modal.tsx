import React from "react";
import { useNavigate } from "react-router-dom";

const Modal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const navigate = useNavigate();

  const handleRoleSelection = (role: string) => {
    navigate(`/signup?role=${role}`);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-container">
        {/* Close Button */}
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        {/* Content */}
        <h2 className="text-lg font-bold mb-4 text-center text-black">Registrasi akun sebagai</h2>
        <div className="space-y-4">
          <button
            onClick={() => handleRoleSelection("userUmum")}
            className="w-full flex items-center justify-center gap-2 bg-white-600 text-black py-2 px-4 rounded-md hover:bg-green-700"
          >
            Umum
          </button>
          <button
            onClick={() => handleRoleSelection("pegawai")}
            className="w-full flex items-center justify-center gap-2 bg-white-600 text-black py-2 px-4 rounded-md hover:bg-green-700"
          >
            Pegawai
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
