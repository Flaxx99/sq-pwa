import React from "react";
import { FaDownload, FaWindows } from "react-icons/fa";

const Download = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-black flex flex-col items-center justify-center p-4">
      <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg mb-6">
        Descargar SoulQuest
      </h1>
      <p className="max-w-2xl text-lg md:text-xl text-gray-300 mb-10 text-center">
        Descarga SoulQuest: Academy of Knowledge y sumérgete en una aventura
        educativa llena de misterio y retos. Disponible para Windows.
      </p>

      {/* Botón de Descarga para Windows */}
      <a
        href="https://example.com/soulquest-windows.zip" // 🔹 Reemplaza con el enlace real
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg flex items-center gap-2 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
        download
      >
        <FaWindows className="text-white text-xl" />
        Descargar para Windows
      </a>
    </div>
  );
};

export default Download;
