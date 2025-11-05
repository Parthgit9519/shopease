import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-6">🛒 Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {cartItems.map((item) => (
            <div key={item.id} className="border rounded-xl p-4 text-center shadow-sm">
              <img src={item.image} alt={item.title} className="h-32 mx-auto mb-3 object-contain" />
              <h3 className="font-semibold mb-1">{item.title}</h3>
              <div className="text-sm text-gray-600 mb-2">Qty: <span className="font-semibold">{item.quantity}</span></div>
              <span className="font-bold text-green-600">${item.price}</span>
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
