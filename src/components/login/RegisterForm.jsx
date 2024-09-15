import React, { useState } from 'react';
import { useAuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const { register } = useAuthContext();
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(userData);
      navigate('/login');
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      
      <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded">
        <h2 className="text-blue-800 text-2xl font-bold mb-4">Register</h2>
        {error? <p>{error}</p> : ''}
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
        <button type="submit" className="w-full bg-blue-800 text-white p-2 rounded">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
