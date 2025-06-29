import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
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
  const [includePot] = useState(false);

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
    let total =  product.price;
    return total;
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: getTotalPrice(),
      image: product.image ?? "/assets/placeholder-plant.png",
    });

    toast({
      title: "Added to Cart",
      description: `${product.name} added to your cart.`,
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/products")}
          className="mb-6 text-green-600 hover:text-green-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </Button>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-xl h-[400px] w-[500px] bg-white shadow-lg flex items-center justify-center">
              <img
                src={product.image ?? "/assets/placeholder-plant.png"}
                alt={product.name}
                className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                {/* <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full animate-fade-in">
                  {product.category?.name} 
                </span> */}
              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
                {product.name}
              </h1>

              <p className="text-gray-600 mb-6 text-lg leading-relaxed animate-fade-in">
                {product.description}
              </p>

              <p className="text-4xl font-bold text-green-600 mb-6 animate-fade-in">
                NPR { product.price}
              </p>

              {/* Tags */}
              {/* {product.tag && product.tag.length > 0 && (
                <div className="flex gap-2 flex-wrap">
                  {product.tag.map((tag) => (
                    <span
                      key={tag.id}
                      className="bg-gray-200 text-gray-800 px-2 py-1 text-xs rounded-full"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              )} */}
            </div>

            <div className="flex space-x-4 animate-fade-in">
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
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Care Instructions
                  </h3>
                  <p>{product.care_instructions}</p>
                </CardContent>
              </Card>
            )}

            {/* Meta Description */}
            {product.meta_description && (
              <Card className="shadow-lg border-green-100 animate-fade-in">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Meta Description
                  </h3>
                  <p>{product.meta_description}</p>
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
