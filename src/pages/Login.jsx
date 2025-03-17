import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AuthContext from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      toast.success("Inicio de sesión exitoso! 🎉");
      navigate("/");
    } catch (error) {
      toast.error("Credenciales incorrectas. Intenta de nuevo.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-indigo-900 to-black text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-extrabold text-center text-indigo-400 mb-6">Iniciar Sesión</h2>
        <form onSubmit={handleLogin} className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Correo Electrónico"
            autoComplete="off"
            className="p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            autoComplete="new-password"
            className="p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-indigo-600 hover:bg-indigo-700 px-4 py-3 rounded-md font-semibold transition">
            Iniciar Sesión
          </button>
        </form>
        <p className="text-center text-gray-400 mt-4">
          ¿No tienes cuenta? <a href="/register" className="text-indigo-400 hover:underline">Regístrate aquí</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
