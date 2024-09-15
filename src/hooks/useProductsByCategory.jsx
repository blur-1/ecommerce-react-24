import { useState, useEffect } from 'react';
import api from '../services/api';

const useProductsByCategory = (categoryId) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => { 
      try {
        const decodedCategoryId = decodeURIComponent(categoryId);
        const data = await api.getProductsByCategory(decodedCategoryId);
        setProducts(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchProducts();
  }, [categoryId]);

  return { products, error };
};

export default useProductsByCategory;
