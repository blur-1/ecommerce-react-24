import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const Profile = () => {
  const { user, logout, loading } = useAuthContext();
  const navigate = useNavigate();

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="p-4  bg-white shadow-md rounded">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">Profile</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <div>{user.email}</div>
        </div>
        <button onClick={() => handleLogout()} className="w-full bg-red-600 text-white p-2 rounded">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
