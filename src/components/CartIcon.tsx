
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCartContext } from "@/contexts/CartContext";

const CartIcon = () => {
  const { getTotalItems } = useCartContext();
  const totalItems = getTotalItems();

  return (
    <Link to="/cart" className="relative p-2 text-gray-700 hover:text-green-600 transition-colors">
      <ShoppingCart className="w-6 h-6" />
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {totalItems > 99 ? '99+' : totalItems}
        </span>
      )}
    </Link>
  );
};

export default CartIcon;
