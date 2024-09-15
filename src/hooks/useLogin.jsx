import { useState } from 'react';
import api from '../services/api';

const useLogin = () => {
  const [error, setError] = useState(null);

  const login = async (credentials) => {
    try {
      const data = await api.login(credentials);
      return data;
    } catch (error) {
      setError(error.message);
    }
  };

  return { login, error };
};

export default useLogin;
