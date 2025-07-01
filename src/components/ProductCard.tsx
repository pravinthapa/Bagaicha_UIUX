import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import { useCartContext } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface Product {
  id: string;
  name: string;
  price: number;
  discount_price?: number;
  image: string;
  description: string;
  meta_description?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCartContext();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const getDiscountPercent = () => {
    if (!product.discount_price) return 0;
    return Math.round(
      ((product.price - product.discount_price) / product.price) * 100
    );
  };

  const discountPercent = getDiscountPercent();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLoading(true);

    setTimeout(() => {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.discount_price ?? product.price,
        image: product.image,
      });
      setIsLoading(false);
    }, 500);
  };

  const handleProductClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <Card
      className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl bg-white cursor-pointer relative"
      onClick={handleProductClick}
    >
      <CardHeader className="p-0 relative overflow-hidden">
        <div className="h-56 bg-gradient-to-br from-emerald-50 to-green-50 flex items-center justify-center p-4 relative overflow-hidden">
          <img
            src={product.image ? product.image : product?.products?.image}
            alt={product.name}
            className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <Button className="bg-white/90 backdrop-blur-sm text-emerald-600 hover:bg-white font-semibold rounded-full px-5 py-1.5 shadow-xl text-sm transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              Quick View
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-4 space-y-3">
        <CardTitle className="text-base font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors duration-300 leading-tight">
          {product.name}
        </CardTitle>

        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
          {product?.description
            ? product?.description
            : product?.meta_description}
        </p>

        <div className="flex items-center space-x-3">
          <span className="text-gray-900 font-bold">NPR {product.price}</span>
          {discountPercent > 0 && (
            <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-xs font-semibold">
              {discountPercent}% OFF
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          onClick={handleAddToCart}
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-bold py-3 text-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <div className="flex items-center">
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
              Adding...
            </div>
          ) : (
            <>
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
