import { useState, useEffect } from 'react';
import api from '../services/api';

const useGetAllProducts = () => {
  const [products, setAllProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const data = await api.getAllProducts();
        setAllProducts(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchAllProducts();
  }, []);

  return { products, error };
};

export default useGetAllProducts;
