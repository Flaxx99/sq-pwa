import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link to="/">SoulQuest</Link>
        </div>
        <div className="space-x-4">
          <Link to="/" className="hover:text-indigo-400 transition-colors">
            Inicio
          </Link>
          <Link to="/about" className="hover:text-indigo-400 transition-colors">
            Sobre Nosotros
          </Link>
          <Link to="/stats" className="hover:text-indigo-400 transition-colors">
            Estadísticas
          </Link>
          <Link to="/download" className="hover:text-indigo-400 transition-colors">
            Descargar
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
