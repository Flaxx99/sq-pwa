import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import AuthContext from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide text-[#6affed]">
          <Link to="/">SoulQuest</Link>
        </div>

        {/* Menú de Navegación */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-[#6affed] transition">Inicio</Link>
          <Link to="/about" className="hover:text-[#6affed] transition">Sobre Nosotros</Link>
          <Link to="/stats" className="hover:text-[#6affed] transition">Estadísticas</Link>
          <Link to="/download" className="hover:text-[#6affed] transition">Descargar</Link>
        </div>

        {/* Sección de Usuario / Login */}
        <div className="hidden md:flex items-center space-x-4">
          {!user ? (
            <>
              <Link to="/login" className="px-6 py-2 bg-[#6affed] text-black font-semibold rounded-full hover:bg-[#00c8f8] transition-all duration-300">
                Iniciar Sesión
              </Link>
              <Link to="/register" className="px-6 py-2 bg-[#6affed] text-black font-semibold rounded-full hover:bg-[#00c8f8] transition-all duration-300">
                Registrarse
              </Link>
            </>
          ) : (
            <div className="flex items-center space-x-3">
              <FaUserCircle className="text-2xl" />
              <span className="text-yellow-400 font-semibold">
                {user.name.split(" ")[0]} {/* ✅ Solo el primer nombre */}
              </span>
              <button onClick={logout} className="bg-red-600 px-4 py-2 rounded-full hover:bg-red-700 transition-all duration-300">
                Cerrar Sesión
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
