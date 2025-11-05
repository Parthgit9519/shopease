import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((sum, item) => sum + (item.quantity || 0), 0);

  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-white">
      <h1 className="text-2xl font-bold text-blue-600">ShopEase</h1>
      <div className="flex gap-6">
        <Link to="/" className="text-gray-700 hover:text-blue-600 font-semibold">
          Home
        </Link>
        <Link to="/cart" className="text-gray-700 hover:text-blue-600 font-semibold relative">
          Cart
          <span className="absolute -top-2 -right-3 bg-blue-500 text-white rounded-full px-2 text-sm">
            {totalQuantity}
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
