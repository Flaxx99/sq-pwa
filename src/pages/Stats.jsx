import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHeart, FaBolt, FaStar, FaChartLine, FaHome } from "react-icons/fa";
import AuthContext from "../context/AuthContext"; // ✅ Importar el contexto de autenticación

const CharacterPage = () => {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useContext(AuthContext); // ✅ Obtener el usuario autenticado
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      // ✅ Si no hay usuario, redirigir a login
      navigate("/login");
      return;
    }

    const fetchCharacter = async () => {
      try {
        console.log("Obteniendo datos para el usuario:", user.id); // 🔹 Depuración
        const response = await fetch(`https://backend-pwa-nub7.onrender.com/api/character/1`);

        if (!response.ok) {
          throw new Error("Error al obtener los datos del personaje");
        }

        const data = await response.json();
        setCharacter(data);
      } catch (err) {
        console.error("Error en fetchCharacter:", err); // 🔹 Depuración
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4 text-white">
      {/* Sección de Estadísticas del Personaje */}
      <div className="max-w-md w-full bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-xl p-6 shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4 text-[#6affed]">
          Estadísticas del Personaje
        </h1>

        {loading && <p className="text-[#6affed]">Cargando...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {character && (
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <FaHeart className="text-red-500 hover:text-[#6affed] transition-colors duration-300" />
              <p className="text-lg">
                Vida: <strong>{character.vida}</strong>
              </p>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <FaBolt className="text-blue-500 hover:text-[#6affed] transition-colors duration-300" />
              <p className="text-lg">
                Mana: <strong>{character.mana}</strong>
              </p>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <FaStar className="text-yellow-300 hover:text-[#6affed] transition-colors duration-300" />
              <p className="text-lg">
                Experiencia: <strong>{character.experiencia}</strong>
              </p>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <FaChartLine className="text-green-500 hover:text-[#6affed] transition-colors duration-300" />
              <p className="text-lg">
                Nivel: <strong>{character.nivel}</strong>
              </p>
            </div>
          </div>
        )}

        <Link
          to="/"
          className="mt-6 inline-flex items-center px-6 py-3 bg-[#6affed] hover:bg-[#00c8f8] text-gray-900 font-semibold rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1"
        >
          <FaHome className="mr-2" />
          Volver a Inicio
        </Link>
      </div>
    </div>
  );
};

export default CharacterPage;
