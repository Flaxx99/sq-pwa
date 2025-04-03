import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import AuthContext from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="bg-gray-900 text-white shadow-lg select-none">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap justify-between items-center gap-y-4">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide text-[#6affed] select-none">
          <Link to="/" onClick={closeMenu}>SoulQuest</Link>
        </div>

        {/* Botón Hamburguesa (móvil) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none text-white">
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Menú de Navegación en desktop */}
        <div className="hidden md:flex flex-grow justify-center space-x-6 select-none">
          <Link to="/" className="hover:text-[#6affed] transition select-none">Inicio</Link>
          <Link to="/about" className="hover:text-[#6affed] transition select-none">Sobre Nosotros</Link>
          <Link to="/stats" className="hover:text-[#6affed] transition select-none">Estadísticas</Link>
          <Link to="/download" className="hover:text-[#6affed] transition select-none">Descargar</Link>
        </div>

        {/* Botones de usuario en desktop */}
        <div className="hidden md:flex items-center space-x-4 select-none">
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
            <button
              onClick={logout}
              className="bg-red-600 px-6 py-2 rounded-full hover:bg-red-700 font-semibold transition-all duration-300"
            >
              Cerrar Sesión
            </button>
          )}
        </div>
      </div>

      {/* Menú en móvil */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 px-6 pb-4 space-y-4">
          <Link to="/" onClick={closeMenu} className="block hover:text-[#6affed]">Inicio</Link>
          <Link to="/about" onClick={closeMenu} className="block hover:text-[#6affed]">Sobre Nosotros</Link>
          <Link to="/stats" onClick={closeMenu} className="block hover:text-[#6affed]">Estadísticas</Link>
          <Link to="/download" onClick={closeMenu} className="block hover:text-[#6affed]">Descargar</Link>

          {!user ? (
            <>
              <Link to="/login" onClick={closeMenu} className="block text-[#6affed] font-semibold">Iniciar Sesión</Link>
              <Link to="/register" onClick={closeMenu} className="block text-[#6affed] font-semibold">Registrarse</Link>
            </>
          ) : (
            <button
              onClick={() => {
                logout();
                closeMenu();
              }}
              className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 font-semibold transition"
            >
              Cerrar Sesión
            </button>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
