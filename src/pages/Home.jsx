import React from "react";
import { Link } from "react-router-dom";
import { FaInfoCircle, FaChartBar, FaDownload, FaSignInAlt, FaUserPlus } from "react-icons/fa";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-black flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-1 px-4 py-8 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg mb-6">
          SoulQuest: Academy of Knowledge
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-gray-300 mb-10">
          Adéntrate en una escuela llena de secretos, retos y aventuras donde el conocimiento es tu mejor arma.
          Explora pasillos misteriosos, resuelve enigmas y descubre lo oculto en cada rincón.
        </p>

        {/* Tarjetas de Navegación */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
          <Link to="/about" className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition">
            <FaInfoCircle className="text-4xl text-blue-400 mb-2" />
            <h3 className="text-xl text-white font-semibold">Sobre Nosotros</h3>
            <p className="text-gray-400 text-sm">Conoce más sobre nuestra misión y visión.</p>
          </Link>

          <Link to="/stats" className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition">
            <FaChartBar className="text-4xl text-green-400 mb-2" />
            <h3 className="text-xl text-white font-semibold">Ver Estadísticas</h3>
            <p className="text-gray-400 text-sm">Consulta tus logros y progreso.</p>
          </Link>

          <Link to="/download" className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition">
            <FaDownload className="text-4xl text-purple-400 mb-2" />
            <h3 className="text-xl text-white font-semibold">Descargar Juego</h3>
            <p className="text-gray-400 text-sm">Obtén SoulQuest en tu dispositivo.</p>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
