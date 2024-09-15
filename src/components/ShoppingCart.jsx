import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import ShopingCartPage from './ShopingCartPage';

const ShoppingCart = () => {
  const [cart]= useContext(CartContext)
  return (
    <div className="flex items-center justify-center min-h-[600px]">
      {cart.length ? <ShopingCartPage/> : 'No tienes productos en tu carrito'}
    </div>
  );
};

export default ShoppingCart;
