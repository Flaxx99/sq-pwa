import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AuthContext from "../context/AuthContext";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await register(name, email, password);
      toast.success("Registro exitoso!  Ahora inicia sesión.");
      navigate("/login");
    } catch (error) {
      toast.error("Error al registrarse. Intenta de nuevo.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white select-none">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96 select-none">
        <h2 className="text-3xl font-extrabold text-center text-[#6affed] mb-6 select-none">
          Crear Cuenta
        </h2>
        <form onSubmit={handleRegister} className="flex flex-col space-y-4 select-none">
          <input
            type="text"
            placeholder="Nombre Completo"
            autoComplete="off"
            className="p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6affed] select-none"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Correo Electrónico"
            autoComplete="off"
            className="p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6affed] select-none"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            autoComplete="new-password"
            className="p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6affed] select-none"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="bg-[#6affed] hover:bg-[#00c8f8] px-4 py-3 rounded-md font-semibold transition select-none">
            Registrarse
          </button>
        </form>
        <p className="text-center text-gray-400 mt-4 select-none">
          ¿Ya tienes cuenta? <a href="/login" className="text-[#6affed] hover:underline select-none">Inicia sesión aquí</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
