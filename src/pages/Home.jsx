import React from "react";
import { Link } from "react-router-dom";
import { FaInfoCircle, FaChartBar, FaDownload } from "react-icons/fa";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col cursor-default select-none">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-1 px-4 py-8 text-center cursor-default select-none">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg mb-6 select-none">
          SoulQuest: Academy of Knowledge
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-gray-300 mb-10 select-none">
          Adéntrate en una escuela llena de secretos, retos y aventuras donde el
          conocimiento es tu mejor arma. Explora pasillos misteriosos, resuelve
          enigmas y descubre lo oculto en cada rincón.
        </p>

        {/* Imagen de portada */}
        <img
          src="/images/portadaOficial512.jpg"
          alt="Portada de SoulQuest"
          className="w-64 h-64 object-cover rounded-full mb-8"
        />

        {/* Tarjetas de Navegación */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
          {/* Tarjeta 1 */}
          <Link
            to="/about"
            className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition hover:scale-105 border-2 border-transparent hover:border-[#6affed]"
          >
            <FaInfoCircle className="text-4xl text-[#6affed] mb-2" />
            <h3 className="text-xl text-white font-semibold select-none">Sobre Nosotros</h3>
            <p className="text-gray-400 text-sm select-none">
              Conoce más sobre nuestra misión y visión.
            </p>
          </Link>

          {/* Tarjeta 2 */}
          <Link
            to="/stats"
            className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition hover:scale-105 border-2 border-transparent hover:border-[#6affed]"
          >
            <FaChartBar className="text-4xl text-[#6affed] mb-2" />
            <h3 className="text-xl text-white font-semibold select-none">
              Ver Estadísticas
            </h3>
            <p className="text-gray-400 text-sm select-none">
              Consulta tus logros y progreso.
            </p>
          </Link>

          {/* Tarjeta 3 */}
          <Link
            to="/download"
            className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition hover:scale-105 border-2 border-transparent hover:border-[#6affed]"
          >
            <FaDownload className="text-4xl text-[#6affed] mb-2" />
            <h3 className="text-xl text-white font-semibold select-none">
              Descargar Juego
            </h3>
            <p className="text-gray-400 text-sm select-none">
              Obtén SoulQuest en tu dispositivo.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
