import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCartContext } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { useProductDetails } from "@/hooks/useQueryData";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCartContext();
  const { toast } = useToast();

  const [isLiked, setIsLiked] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const { data: product } = useProductDetails(id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Product not found
          </h1>
          <Button
            onClick={() => navigate("/products")}
            className="bg-green-600 hover:bg-green-700"
          >
            Back to Products
          </Button>
        </div>
      </div>
    );
  }

  const getTotalPrice = () => {
    return product.discount_price ?? product.price;
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: getTotalPrice(),
        image: product.image ?? "/assets/placeholder-plant.png",
      });
    }

    toast({
      title: "Added to Cart",
      description: `${product.name} (x${quantity}) added to your cart.`,
    });
  };

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    toast({
      title: isLiked ? "Removed from Wishlist" : "Added to Wishlist",
      description: isLiked
        ? `${product.name} removed from your wishlist`
        : `${product.name} added to your wishlist`,
    });
  };

  const getDiscountPercent = () => {
    if (!product.discount_price) return;
    return Math.round(
      ((product.price - product.discount_price) / product.price) * 100
    );
  };

  const convertToPoints = (text: string) => {
    return text
      .split(/\n+/)
      .filter((line) => line.trim().length > 0)
      .map((point, index) => (
        <li
          key={index}
          className="relative pl-6 mb-2 text-gray-700 hover:text-green-600 transition-colors duration-200 group list-none"
        >
          <span className="absolute left-0 top-2 w-2 h-2 bg-green-500 rounded-full group-hover:bg-green-600"></span>
          {point.trim()}
        </li>
      ));
  };

  const discount = getDiscountPercent();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/products")}
          className="mb-6 text-green-600 hover:text-green-700 transition-colors flex items-center w-max"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4">
            <div
              className="
                aspect-square overflow-hidden rounded-xl bg-white shadow-lg flex items-center justify-center
                w-full max-w-full h-auto
                lg:h-[400px] lg:w-[500px]
              "
            >
              <img
                src={product.image ?? "/assets/placeholder-plant.png"}
                alt={product.name}
                className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="bg-green-100 text-green-800 text-xl font-medium px-4 py-2 rounded-full animate-fade-in">
                  {product.category?.name}
                </span>
              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
                {product.name}
              </h1>

              <p className="text-gray-600 mb-6 text-lg leading-relaxed animate-fade-in">
                {product.description}
              </p>

              <p className="text-2xl font-bold mb-6 animate-fade-in flex items-center space-x-3">
                {product.discount_price &&
                product.discount_price < product.price ? (
                  <>
                    <span className="text-red-600 line-through">
                      Rs {product.price}
                    </span>
                    <span className="text-green-600 text-4xl font-extrabold">
                      Rs {product.discount_price}
                    </span>
                    {discount > 0 && (
                      <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-sm font-semibold">
                        {`${discount}% OFF`}
                      </span>
                    )}
                  </>
                ) : (
                  <span className="text-green-600 text-4xl font-extrabold">
                    Rs {product.price}
                  </span>
                )}
              </p>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-4 sm:space-y-0 animate-fade-in">
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden w-max">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-xl"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="px-6 py-2 text-lg font-semibold bg-white text-gray-800">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-xl"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              <Button
                onClick={handleAddToCart}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white text-lg py-3 transition-all duration-200 hover:scale-105 shadow-lg"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
            </div>

            {/* Care Instructions */}
            {product.care_instructions && (
              <Card className="shadow-lg border-green-100 animate-fade-in">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                    Care Instructions
                  </h3>
                  <ul className="list-disc pl-5 text-gray-700">
                    {convertToPoints(product.care_instructions)}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Meta Description */}
            {product.meta_description && (
              <Card className="shadow-lg border-green-100 animate-fade-in">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                    Meta Description
                  </h3>
                  {product.meta_description.includes("\n") ? (
                    <ul className="list-disc pl-5 text-gray-700">
                      {convertToPoints(product.meta_description)}
                    </ul>
                  ) : (
                    <p className="text-gray-700">{product.meta_description}</p>
                  )}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
