import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHeart, FaBolt, FaStar, FaChartLine, FaHome } from "react-icons/fa";
import AuthContext from "../context/AuthContext";
import { supabase } from "../supabaseClient"; // 👈 asegúrate de que este archivo exista

const CharacterPage = () => {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    const fetchCharacter = async () => {
      try {
        const { data, error } = await supabase
          .from("characters")
          .select("*")
          .limit(1)
          .single(); // Obtiene la primera fila

        if (error) throw error;
        setCharacter(data);
      } catch (err) {
        console.error("❌ Error al obtener personaje:", err.message);
        setError("No se pudo obtener el personaje.");
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4 text-white">
      <div className="max-w-md w-full bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-xl p-6 shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4 text-[#6affed]">
          Estadísticas del Personaje
        </h1>

        {loading && <p className="text-[#6affed]">Cargando...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {character && (
          <div className="space-y-4">
            <Stat
              label="Vida"
              value={character.vida}
              icon={<FaHeart />}
              color="text-red-500"
            />
            <Stat
              label="Mana"
              value={character.mana}
              icon={<FaBolt />}
              color="text-blue-400"
            />
            <Stat
              label="Experiencia"
              value={character.experiencia}
              icon={<FaStar />}
              color="text-yellow-300"
            />
            <Stat
              label="Nivel"
              value={character.nivel}
              icon={<FaChartLine />}
              color="text-green-400"
            />
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

const Stat = ({ label, value, icon, color }) => (
  <div className="flex items-center justify-center space-x-2">
    <div
      className={`${color} hover:text-[#6affed] transition-colors duration-300`}
    >
      {icon}
    </div>
    <p className="text-lg">
      {label}: <strong>{value}</strong>
    </p>
  </div>
);

export default CharacterPage;
