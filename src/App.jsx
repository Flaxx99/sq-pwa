import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify"; // ✅ Importar ToastContainer
import Home from "./pages/Home";
import About from "./pages/About";
import Stats from "./pages/Stats";
import Download from "./pages/Download";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import { useContext } from "react";
import AuthContext from "./context/AuthContext";

// 🔒 Función para proteger rutas privadas
const PrivateRoute = ({ element }) => {
  const { user } = useContext(AuthContext);
  return user ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} /> {/* ✅ Configuración de alertas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/stats" element={<PrivateRoute element={<Stats />} />} />
          <Route path="/download" element={<Download />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
