import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ShopingCartPage = () => {
  const [cart, setCart] = useContext(CartContext);

  const removeItem = ({ id }) => {
    setCart((prevItems) => {
      return prevItems
        .map((item) => {
          if (item.id === id) {
            if (item.quantity === 1) {
              return null;
            } else {
              return { ...item, quantity: item.quantity - 1 };
            }
          } else {
            return item;
          }
        })
        .filter((item) => item !== null);
    });
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = 8.0;
  const tax = subtotal * 0.18;
  const total = subtotal + shipping + tax;

  const buildCartMessage = () => {
    return cart
      .map((item) => {
        return `${item.title} (Qty: ${item.quantity}) - $${(
          item.price * item.quantity
        ).toFixed(2)}`;
      })
      .join("\n");
  };

  const redirectToWhatsApp = () => {
    const message = encodeURIComponent(
      `Order Details:\n${buildCartMessage()}\n\nTotal: $${total.toFixed(2)}`
    );
    const phoneNumber = "51961490149"; // 
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.location.href = whatsappUrl;
  };

  return (
    <div className="flex-1 py-32 ">
      <div className="bg-white rounded-lg shadow-lg w-full md:mx-auto max-w-2xl">
        <div className="p-4 border-b">
          <h2 className="text-2xl font-semibold text-blue-800">Shopping Cart</h2>
        </div>
        <div className="p-4 space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center space-x-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                <p className="text-sm font-semibold text-gray-900">
                  ${item.price}
                </p>
              </div>
              <button
                className="text-sm text-blue-600"
                onClick={() => removeItem(item)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <div className="p-4 border-t space-y-2">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span>Order total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
        <div className="p-4 border-t">
          <button
            className="w-full bg-red-600 border border-red-600 text-white py-2 px-4 rounded-lg hover:bg-transparent
            hover:border-red-600
              hover:text-red-600"
            onClick={() => redirectToWhatsApp()}
          >
            Place your order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopingCartPage;
