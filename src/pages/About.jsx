import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-black flex flex-col items-center justify-center p-6">
      {/* Título Principal */}
      <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg mb-8">
        Sobre Nosotros
      </h1>

      {/* Sección de Introducción */}
      <div className="max-w-3xl text-center text-gray-300 mb-10">
        <p className="text-lg md:text-xl">
          **SoulQuest: Academy of Knowledge** es un videojuego educativo innovador que combina 
          misterio, retos y aprendizaje. Diseñado para sumergir a los jugadores en una experiencia 
          interactiva donde el conocimiento es la clave para superar desafíos y descubrir los secretos ocultos de la academia.
        </p>
      </div>

      {/* Contenedor Principal */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Historia */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-3">Nuestra Historia</h2>
          <p className="text-gray-400">
            SoulQuest nació como un proyecto apasionante con el objetivo de revolucionar 
            la forma en que los estudiantes aprenden mientras juegan. Inspirados por la necesidad 
            de hacer el aprendizaje más dinámico y accesible, combinamos mecánicas de aventura con desafíos 
            educativos en diversas materias escolares.
          </p>
        </div>

        {/* Misión */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-3">Nuestra Misión</h2>
          <p className="text-gray-400">
            Queremos transformar el aprendizaje en una experiencia envolvente y emocionante. 
            A través de la gamificación, buscamos fomentar el desarrollo del pensamiento crítico, 
            la resolución de problemas y el trabajo en equipo en los jugadores, todo mientras se divierten.
          </p>
        </div>

        {/* Visión */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-3">Nuestra Visión</h2>
          <p className="text-gray-400">
            Nuestro objetivo es convertirnos en un referente en videojuegos educativos a nivel global. 
            Queremos que SoulQuest sea una herramienta esencial en escuelas y hogares, demostrando que 
            el aprendizaje y la diversión pueden ir de la mano.
          </p>
        </div>

        {/* Equipo */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-3">Nuestro Equipo</h2>
          <p className="text-gray-400">
            Somos un equipo de desarrolladores, diseñadores y educadores apasionados por 
            la innovación en la enseñanza. Trabajamos juntos para brindar una experiencia única 
            donde el conocimiento es el verdadero poder.
          </p>
        </div>

      </div>

      {/* Frase Inspiradora */}
      <div className="mt-12 text-center">
        <h3 className="text-3xl font-bold text-yellow-400">
          "El conocimiento es la llave que abre todas las puertas."
        </h3>
        <p className="text-gray-400 mt-2">Únete a la aventura y descubre el poder del aprendizaje con SoulQuest.</p>
      </div>
    </div>
  );
}

export default About;
