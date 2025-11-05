import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartReducer.jsx";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="border rounded-2xl shadow-md p-4 flex flex-col items-center">
      <img src={product.image} alt={product.title} className="h-40 object-contain mb-3" />
      <h3 className="font-semibold text-center mb-2">{product.title}</h3>
      <p className="text-gray-600 text-sm line-clamp-2 mb-2">{product.description}</p>
      <span className="font-bold text-green-600 mb-3">${product.price}</span>
      <button
        onClick={() => dispatch(addToCart(product))}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;


