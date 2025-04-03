import { createContext, useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { createContext, useState } from "react";
import { supabase } from "../supabaseClient";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Recuperar usuario autenticado al cargar la app
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
    });

    // Escuchar cambios de sesión
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const register = async (name, email, password) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name: name, // Guarda el nombre como metadato
        },
      },
    });

    if (error) throw error;
    setUser(data.user);
  };

  const login = async (email, password) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw new Error(error.message);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;
    setUser(data.user);
  };

  const register = async (name, email, password) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name }, // Guarda el nombre en los metadatos del usuario
      },
    });
    if (error) throw new Error(error.message);
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.error("Error al cerrar sesión:", error.message);
  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
