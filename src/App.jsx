import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Stats from "./pages/Stats";
import Download from "./pages/Download";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import { useContext } from "react";
import AuthContext from "./context/AuthContext";
import { ToastContainer, toast } from "react-toastify"; // ✅ Importar toastify
import "react-toastify/dist/ReactToastify.css"; // ✅ Importar los estilos de toastify


// 🔒 Componente para proteger rutas privadas
const PrivateRoute = ({ element }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation(); // ✅ Guardar la ubicación actual

  // Si no hay usuario logueado, mostrar una notificación
  if (!user) {
    toast.error("⚠️ Necesitas iniciar sesión para acceder a esta página.");
  }

  return user ? (
    element
  ) : (
    <Navigate to="/login" state={{ from: location.pathname }} /> // ✅ Guardar la ruta desde donde intentó acceder el usuario
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/stats" element={<PrivateRoute element={<Stats />} />} />
          <Route path="/download" element={<Download />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        
        {/* ToastContainer para las notificaciones */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Router>
    </AuthProvider>
  );
}

export default App;
