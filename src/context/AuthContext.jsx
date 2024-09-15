// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect } from "react";
import { useContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";

export const AuthContext = createContext();

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  return context;
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const register = async (userData) => {
    try {
      const userForm = await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );
      return userForm;
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  };

  const login = async (userData) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );
      // Save user in local storage
      localStorage.setItem("user", JSON.stringify(userCredential));
      return userCredential;
    } catch (error) {
      console.error("Error login user:", error);
      throw error;
    }
  };

  const logout = () => {
    signOut(auth);
    localStorage.removeItem("user");
  };
  // Retrieve user  when the app loads
  useEffect(() => {
    onAuthStateChanged(auth, currentUser =>{
    setUser(currentUser);
    setLoading(false);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading , login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
