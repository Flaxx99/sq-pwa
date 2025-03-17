import React, { useContext } from "react";
import { FaDownload, FaWindows } from "react-icons/fa";
import { toast } from "react-toastify"; // ✅ Importar react-toastify
import AuthContext from "../context/AuthContext";

const Download = () => {
  const { user } = useContext(AuthContext);

  const handleDownload = () => {
    if (!user) {
      toast.error("Debes iniciar sesión para descargar el juego."); // ✅ Solo muestra la alerta
    } else {
      window.location.href = "https://example.com/soulquest-windows.zip"; // 🔹 Reemplaza con el link real
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-black flex flex-col items-center justify-center p-4 text-white">
      {/* Título */}
      <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-lg mb-6">
        Descargar SoulQuest
      </h1>
      <p className="max-w-2xl text-lg md:text-xl text-gray-300 mb-10 text-center">
        Descarga <span className="text-indigo-400 font-bold">SoulQuest: Academy of Knowledge</span> y 
        sumérgete en una aventura educativa llena de misterio y retos. Disponible para Windows.
      </p>

      {/* Botón de Descarga */}
      <button
        onClick={handleDownload}
        className="px-6 py-3 rounded-full shadow-lg flex items-center gap-2 transition-all duration-300 ease-in-out transform bg-indigo-600 hover:bg-indigo-700"
      >
        <FaWindows className="text-white text-xl" />
        Descargar para Windows
      </button>
    </div>
  );
};

export default Download;
