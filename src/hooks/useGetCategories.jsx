import { useState, useEffect } from 'react';
import api from '../services/api';

const useGetCategories = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await api.getCategories();
        setCategories(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchCategories();
  }, []);

  return { categories, error };
};

export default useGetCategories;
