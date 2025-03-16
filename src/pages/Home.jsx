import React from "react";

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
        <div className="flex flex-col md:flex-row gap-4">
          {/* Botón: Sobre Nosotros */}
          <a
            href="/about"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1"
          >
            Sobre Nosotros
          </a>

          {/* Botón: Ver Estadísticas */}
          <a
            href="/stats"
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1"
          >
            Ver Estadísticas
          </a>

          {/* Botón: Descargar Videojuego */}
          <a
            href="/download"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1"
          >
            Descargar Videojuego
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} SoulQuest. Todos los derechos reservados.
      </footer>
    </div>
  );
}

export default Home;
