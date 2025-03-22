import { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // ✅ Importar useLocation
import { toast } from "react-toastify";
import AuthContext from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation(); // ✅ Obtener la ruta desde donde se intentó iniciar sesión

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Intento de login con email y contraseña
      await login(email, password); 
      toast.success("Inicio de sesión exitoso!");

      // ✅ Si el usuario intentó acceder a una página protegida (como /stats), redirigirlo ahí después del login
      const redirectTo = location.state?.from || "/";
      navigate(redirectTo);  // Redirigir a la página anterior o al inicio
    } catch (error) {
      // Si las credenciales son incorrectas
      toast.error("Credenciales incorrectas. Intenta de nuevo.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-extrabold text-center text-[#6affed] mb-6">Iniciar Sesión</h2>
        <form onSubmit={handleLogin} className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Correo Electrónico"
            autoComplete="off"
            className="p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6affed]"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            autoComplete="current-password"
            className="p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6affed]"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="bg-[#6affed] hover:bg-[#00c8f8] px-4 py-3 rounded-md font-semibold transition">
            Iniciar Sesión
          </button>
        </form>
        <p className="text-center text-gray-400 mt-4">
          ¿No tienes cuenta? <a href="/register" className="text-[#6affed] hover:underline">Regístrate aquí</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
