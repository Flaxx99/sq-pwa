import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import AuthContext from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-gray-900 text-white shadow-lg select-none">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide text-[#6affed] select-none">
          <Link to="/" className="select-none">SoulQuest</Link>
        </div>

        {/* Menú de Navegación */}
        <div className="hidden md:flex space-x-6 select-none">
          <Link to="/" className="hover:text-[#6affed] transition select-none">Inicio</Link>
          <Link to="/about" className="hover:text-[#6affed] transition select-none">Sobre Nosotros</Link>
          <Link to="/stats" className="hover:text-[#6affed] transition select-none">Estadísticas</Link>
          <Link to="/download" className="hover:text-[#6affed] transition select-none">Descargar</Link>
        </div>

        {/* Sección de Usuario / Login */}
        <div className="hidden md:flex items-center space-x-4 select-none">
          {!user ? (
            <>
              <Link
                to="/login"
                className="px-6 py-2 bg-[#6affed] text-black font-semibold rounded-full hover:bg-[#00c8f8] transition-all duration-300 select-none"
              >
                Iniciar Sesión
              </Link>
              <Link
                to="/register"
                className="px-6 py-2 bg-[#6affed] text-black font-semibold rounded-full hover:bg-[#00c8f8] transition-all duration-300 select-none"
              >
                Registrarse
              </Link>
            </>
          ) : (
            <div className="flex items-center space-x-3 select-none">
              <FaUserCircle className="text-2xl select-none" />
              <span className="text-yellow-400 font-semibold select-none">
                {user.name.split(" ")[0]}
              </span>
              <button
                onClick={logout}
                className="bg-red-600 px-4 py-2 rounded-full hover:bg-red-700 transition-all duration-300 select-none"
              >
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
