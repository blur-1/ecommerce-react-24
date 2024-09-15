import React, { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { login } = useAuthContext();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("en login");
    await login(userData);
    navigate("/profile");
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="p-4 bg-white shadow-md rounded">
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Login</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-800 text-white p-2 rounded"
          >
            Login
          </button>
        </form>
        <button
          type="submit"
          className="w-full bg-red-600 text-white p-2 mt-2 rounded"
          onClick={() => navigate("/register")}
        >
          Crear cuenta
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
