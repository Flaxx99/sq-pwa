import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaBolt, FaStar, FaChartLine, FaHome } from "react-icons/fa";

const CharacterPage = () => {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Reemplaza esta URL por la de tu API real
  const API_URL = "https://backend-pwa-nub7.onrender.com/getCharacter/1";

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }
        const data = await response.json();
        setCharacter(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, []);

  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-xl p-6 shadow-lg text-white text-center">
        <h1 className="text-3xl font-bold mb-4 text-yellow-400">
          Estadísticas del Personaje
        </h1>

        {loading && <p>Cargando...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {character && (
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <FaHeart className="text-red-500" />
              <p className="text-lg">
                Vida: <strong>{character.vida}</strong>
              </p>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <FaBolt className="text-blue-500" />
              <p className="text-lg">
                Mana: <strong>{character.mana}</strong>
              </p>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <FaStar className="text-yellow-300" />
              <p className="text-lg">
                Experiencia: <strong>{character.experiencia}</strong>
              </p>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <FaChartLine className="text-green-500" />
              <p className="text-lg">
                Nivel: <strong>{character.nivel}</strong>
              </p>
            </div>
          </div>
        )}

        <Link
          to="/"
          className="mt-6 inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-full text-white transition-colors"
        >
          <FaHome className="mr-2" />
          Volver a Inicio
        </Link>
      </div>
    </div>
  );
};

export default CharacterPage;
