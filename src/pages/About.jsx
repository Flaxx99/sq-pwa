import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-black flex flex-col items-center justify-center p-4">
      <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg mb-6">
        Sobre Nosotros
      </h1>
      <p className="max-w-2xl text-lg md:text-xl text-gray-300 mb-10 text-center">
        SoulQuest: Academy of Knowledge es un videojuego educativo lleno de misterio y retos, en el que el conocimiento es la llave para descubrir secretos ocultos en cada rincón de la escuela. Nuestro equipo se dedica a crear experiencias únicas que combinan aprendizaje y aventura.
      </p>
    </div>
  );
}

export default About;
