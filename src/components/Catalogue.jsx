import React, { useContext } from "react";
import { useParams, useLocation} from "react-router-dom";
import useProductsByCategory from "../hooks/useProductsByCategory";
import useGetAllProducts from "../hooks/useGetAllProducts";
import { CartContext } from "../context/CartContext";

const Catalogue = () => {
  const { id } = useParams();
  const { pathname } = useLocation(); 
  const { products, error } = id
    ? useProductsByCategory(id)
    : useGetAllProducts();
  const [cart, setCart] = useContext(CartContext);

  if (error) {
    return <div>{error}</div>;
  }
  const addToCart = (product) => {
    setCart((currentCart) => {
      const itemInCart = currentCart.find((item) => item.id === product.id);
      if (itemInCart) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...currentCart, { ...product, quantity: 1 }];
      }
    });
  };

  const title = pathname.includes('/products') ? id ? `Category: ${decodeURIComponent(id)}` : 'All Products' : 'Catalogue';
  return (
    <div className="container py-32">
      <h1 className="text-3xl font-bold text-blue-800">{title}</h1>
      <div className="my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded-lg shadow-lg flex flex-col h-full"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-40 w-full object-contain mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-500 mb-2">${product.price}</p>
            <p className="text-gray-700 mb-4 overflow-hidden overflow-ellipsis" style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 3 }}>
        {product.description.split(" ").slice(0, 20).join(" ")}
      </p>
            <button
              className="w-full bg-red-600 text-white p-2 mt-auto border border-x-rose-600 rounded hover:bg-transparent hover:border-red-600
              hover:text-red-600"
              onClick={() => addToCart(product)}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogue;
