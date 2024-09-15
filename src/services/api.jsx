const BASE_URL = 'https://fakestoreapi.com';

const api = {
  
  getCategories: async () => {
    const response = await fetch(`${BASE_URL}/products/categories`);
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    return response.json();
  },

  getProductsByCategory: async (category) => {
    const response = await fetch(`${BASE_URL}/products/category/${category}`);
    if (!response.ok) {
      throw new Error('Failed to fetch products by category');
    }
    return response.json();
  },

  getAllProducts: async () => {
    const response = await fetch(`${BASE_URL}/products/`);
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    return response.json();
  },
};

export default api;
