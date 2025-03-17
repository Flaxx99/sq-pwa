import { createContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();
const API_URL = "http://localhost:10000/api"; // Cambia si usas otro backend

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    if (token) {
      axios
        .get(`${API_URL}/protegido`, { headers: { Authorization: `Bearer ${token}` } })
        .then((res) => setUser(res.data.user))
        .catch(() => {
          setToken(null);
          localStorage.removeItem("token");
        });
    }
  }, [token]);

  const login = async (email, password) => {
    const res = await axios.post(`${API_URL}/auth/login`, { email, password });
    setToken(res.data.token);
    localStorage.setItem("token", res.data.token);
    setUser(res.data.user);
  };

  const register = async (name, email, password) => {
    await axios.post(`${API_URL}/auth/register`, { name, email, password });
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
