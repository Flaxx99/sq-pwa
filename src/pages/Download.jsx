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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center p-4 text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-1 px-4 py-8 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg mb-6">
          Descargar SoulQuest
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-gray-300 mb-10">
          Descarga <span className="text-[#6affed] font-bold">SoulQuest: Academy of Knowledge</span> y
          sumérgete en una aventura educativa llena de misterio y retos. Disponible para Windows.
        </p>

        {/* Imagen de portada */}
        <img
          src="/images/soulquest2.jpg" // Asegúrate de que la imagen esté en la carpeta 'public/images'
          alt="Portada de SoulQuest"
          className="w-64 h-64 object-cover rounded-full mb-8"
        />

        {/* Botón de Descarga */}
        <button
          onClick={handleDownload}
          className="px-6 py-3 rounded-full shadow-lg flex items-center gap-2 transition-all duration-300 ease-in-out transform bg-[#6affed] hover:bg-[#00c8f8] hover:scale-105 hover:shadow-xl text-gray-900 font-semibold"
        >
          <FaWindows className="text-gray text-xl" />
          Descargar para Windows
        </button>
      </section>
    </div>
  );
};

export default Download;
