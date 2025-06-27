import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Heart, Star } from "lucide-react";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useCartContext } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import indoor1 from "../../public/assets/indoor1-removebg-preview.png";
import indoor2 from "../../public/assets/indoor2-removebg-preview.png";
import outdoor3 from "../../public/assets/outdoor3-removebg-preview.png";
import outdoor2 from "../../public/assets/outdoor2-removebg-preview.png";
import flower4 from "../../public/assets/flowers7-removebg-preview (1).png";
import flower3 from "../../public/assets/flowers6-removebg-preview.png";
import indoor7 from "../../public/assets/indoor7-removebg-preview.png";
import outdoor1 from "../../public/assets/outdoor1-removebg-preview.png";
import outdoor4 from "../../public/assets/outdoor4-removebg-preview.png";
import outdoor6 from "../../public/assets/outdoor6-removebg-preview.png";
import flower2 from "../../public/assets/flowers3-removebg-preview.png";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCartContext();
  const { toast } = useToast();
  const [isLiked, setIsLiked] = useState(false);
  const [includePot, setIncludePot] = useState(false);

  // Mock product data - in a real app, this would come from an API
  const products = [
    {
      id: "1",
      name: "Monstera Deliciosa",
      price: 4500,
      image: indoor1,
      description: "Beautiful indoor plant with large, split leaves",
      category: "indoor",
      hasPot: true,
      potPrice: 15,
      potDescription:
        "Premium white ceramic planter with gold rim accent and matching saucer",
      potImage:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      fullDescription:
        "The Monstera Deliciosa, also known as the Swiss Cheese Plant, is a stunning tropical houseplant known for its large, glossy, heart-shaped leaves with dramatic splits and holes. This low-maintenance plant is perfect for beginners and adds a bold, architectural element to any indoor space.",
      care: [
        "Bright, indirect light",
        "Water when top inch of soil is dry",
        "Regular misting for humidity",
        "Monthly fertilizing during growing season",
      ],
      features: [
        "Air purifying properties",
        "Fast-growing vine",
        "Pet-friendly (when mature)",
        "Easy to propagate",
      ],
    },
    {
      id: "2",
      name: "Snake Plant",
      price: 2909,
      image: indoor2,
      description: "Low-maintenance indoor air purifier",
      category: "indoor",
      hasPot: true,
      potPrice: 12,
      potDescription:
        "Modern black concrete planter with geometric design and drainage system",
      potImage:
        "https://images.unsplash.com/photo-1578850225180-4f21d96de7e6?w=400&h=400&fit=crop",
      fullDescription:
        "The Snake Plant (Sansevieria) is one of the most resilient and low-maintenance houseplants available. With its striking upright leaves and air-purifying qualities, it's perfect for busy plant parents or those new to indoor gardening.",
      care: [
        "Low to bright indirect light",
        "Water every 2-3 weeks",
        "Drought tolerant",
        "Minimal fertilizing needed",
      ],
      features: [
        "Excellent air purifier",
        "Releases oxygen at night",
        "Extremely drought tolerant",
        "Pet-safe option available",
      ],
      rating: 4.9,
      reviews: 203,
    },
    {
      id: "3",
      name: "Lavender Bush",
      price: 1800,
      image: outdoor3,
      description: "Fragrant outdoor flowering plant",
      category: "outdoor",
      hasPot: true,
      potPrice: 18,
      potDescription:
        "Handcrafted terracotta pot with Mediterranean-style glazed finish",
      potImage:
        "https://images.unsplash.com/photo-1578850222422-d2b45a5fdbfc?w=400&h=400&fit=crop",
      fullDescription:
        "Lavender is a fragrant, drought-tolerant perennial that produces beautiful purple flower spikes. Known for its calming scent and culinary uses, lavender is perfect for gardens, borders, and containers.",
      care: [
        "Full sun exposure",
        "Well-draining soil",
        "Water sparingly",
        "Prune after flowering",
      ],
      features: [
        "Attracts beneficial insects",
        "Drought tolerant",
        "Culinary and medicinal uses",
        "Long blooming period",
      ],
      rating: 4.7,
      reviews: 89,
    },
    {
      id: "4",
      name: "Rose Bush",
      price: 3500,
      image: outdoor2,
      description: "Classic outdoor flowering shrub",
      category: "outdoor",
      hasPot: false,
      fullDescription:
        "Classic roses bring timeless beauty and fragrance to any garden. This hardy variety produces abundant blooms throughout the growing season and is perfect for creating stunning flower beds or hedges.",
      care: [
        "6+ hours of morning sun",
        "Regular deep watering",
        "Rich, well-draining soil",
        "Annual pruning in late winter",
      ],
      features: [
        "Repeat blooming",
        "Disease resistant variety",
        "Fragrant flowers",
        "Attracts pollinators",
      ],
      rating: 4.6,
      reviews: 156,
    },
    {
      id: "5",
      name: "Peace Lily",
      price: 2800,
      image: flower4,
      description: "Elegant indoor flowering plant",
      category: "indoor",
      hasPot: true,
      potPrice: 14,
      potDescription:
        "Elegant sage green ceramic pot with ribbed texture and matching water tray",
      potImage:
        "https://images.unsplash.com/photo-1578850177654-fa3e84c8cc86?w=400&h=400&fit=crop",
      fullDescription:
        "The Peace Lily is an elegant houseplant known for its glossy green leaves and beautiful white flower bracts. It's an excellent air purifier and relatively easy to care for, making it perfect for homes and offices.",
      care: [
        "Medium to low indirect light",
        "Keep soil consistently moist",
        "High humidity preferred",
        "Monthly liquid fertilizer",
      ],
      features: [
        "Beautiful white flowers",
        "Excellent air purifier",
        "Tells you when it needs water",
        "Long-lasting blooms",
      ],
      rating: 4.5,
      reviews: 94,
    },
    {
      id: "6",
      name: "Sunflower Seeds",
      price: 1500,
      image: flower3,
      description: "Bright outdoor annual flowers",
      category: "outdoor",
      hasPot: false,
      fullDescription:
        "Grow your own cheerful sunflowers with these high-quality seeds. Perfect for creating a stunning summer display, these sunflowers will attract birds and pollinators to your garden while providing endless joy.",
      care: [
        "Full sun location",
        "Plant after last frost",
        "Water regularly during growth",
        "Support tall varieties",
      ],
      features: [
        "Easy to grow from seed",
        "Attracts birds and bees",
        "Edible seeds and petals",
        "Various height options",
      ],
    },
    {
      id: "7",
      name: "Birds of Paradise",
      price: 1500,
      image: indoor7,
      description: "Bright outdoor annual flowers",
      category: "outdoor",
      hasPot: false,
      fullDescription:
        "Grow your own cheerful sunflowers with these high-quality seeds. Perfect for creating a stunning summer display, these sunflowers will attract birds and pollinators to your garden while providing endless joy.",
      care: [
        "Full sun location",
        "Plant after last frost",
        "Water regularly during growth",
        "Support tall varieties",
      ],
      features: [
        "Easy to grow from seed",
        "Attracts birds and bees",
        "Edible seeds and petals",
        "Various height options",
      ],
    },
    {
      id: "8",
      name: "Garden Rose Bush",
      price: 1500,
      image: outdoor1,
      description: "Bright outdoor annual flowers",
      category: "outdoor",
      hasPot: false,
      fullDescription:
        "Grow your own cheerful sunflowers with these high-quality seeds. Perfect for creating a stunning summer display, these sunflowers will attract birds and pollinators to your garden while providing endless joy.",
      care: [
        "Full sun location",
        "Plant after last frost",
        "Water regularly during growth",
        "Support tall varieties",
      ],
      features: [
        "Easy to grow from seed",
        "Attracts birds and bees",
        "Edible seeds and petals",
        "Various height options",
      ],
    },
    {
      id: "9",
      name: "Red Rose Bonquet",
      price: 1500,
      image: outdoor2,
      description: "Bright outdoor annual flowers",
      category: "outdoor",
      hasPot: false,
      fullDescription:
        "Grow your own cheerful sunflowers with these high-quality seeds. Perfect for creating a stunning summer display, these sunflowers will attract birds and pollinators to your garden while providing endless joy.",
      care: [
        "Full sun location",
        "Plant after last frost",
        "Water regularly during growth",
        "Support tall varieties",
      ],
      features: [
        "Easy to grow from seed",
        "Attracts birds and bees",
        "Edible seeds and petals",
        "Various height options",
      ],
    },
    {
      id: "10",
      name: "Tulip Mix",
      price: 2809,
      image: outdoor3,
      description: "Bright outdoor annual flowers",
      category: "outdoor",
      hasPot: false,
      fullDescription:
        "Grow your own cheerful sunflowers with these high-quality seeds. Perfect for creating a stunning summer display, these sunflowers will attract birds and pollinators to your garden while providing endless joy.",
      care: [
        "Full sun location",
        "Plant after last frost",
        "Water regularly during growth",
        "Support tall varieties",
      ],
      features: [
        "Easy to grow from seed",
        "Attracts birds and bees",
        "Edible seeds and petals",
        "Various height options",
      ],
    },
    {
      id: "11",
      name: "Sunflower Bundle",
      price: 1500,
      image: outdoor4,
      description: "Bright outdoor annual flowers",
      category: "outdoor",
      hasPot: false,
      fullDescription:
        "Grow your own cheerful sunflowers with these high-quality seeds. Perfect for creating a stunning summer display, these sunflowers will attract birds and pollinators to your garden while providing endless joy.",
      care: [
        "Full sun location",
        "Plant after last frost",
        "Water regularly during growth",
        "Support tall varieties",
      ],
      features: [
        "Easy to grow from seed",
        "Attracts birds and bees",
        "Edible seeds and petals",
        "Various height options",
      ],
    },
    {
      id: "12",
      name: "Modern Ceramic Planter",
      price: 4500,
      image: outdoor6,
      description: "Bright outdoor annual flowers",
      category: "outdoor",
      hasPot: false,
      fullDescription:
        "Grow your own cheerful sunflowers with these high-quality seeds. Perfect for creating a stunning summer display, these sunflowers will attract birds and pollinators to your garden while providing endless joy.",
      care: [
        "Full sun location",
        "Plant after last frost",
        "Water regularly during growth",
        "Support tall varieties",
      ],
      features: [
        "Easy to grow from seed",
        "Attracts birds and bees",
        "Edible seeds and petals",
        "Various height options",
      ],
    },

    {
      id: "14",
      name: "Lavender Plant",
      price: 1900,
      image: flower2,
      description: "Bright outdoor annual flowers",
      category: "outdoor",
      hasPot: false,
      fullDescription:
        "Grow your own cheerful sunflowers with these high-quality seeds. Perfect for creating a stunning summer display, these sunflowers will attract birds and pollinators to your garden while providing endless joy.",
      care: [
        "Full sun location",
        "Plant after last frost",
        "Water regularly during growth",
        "Support tall varieties",
      ],
      features: [
        "Easy to grow from seed",
        "Attracts birds and bees",
        "Edible seeds and petals",
        "Various height options",
      ],
    },
    {
      id: "15",
      name: "Lavender Plant",
      price: 1500,
      image: flower2,
      description: "Bright outdoor annual flowers",
      category: "outdoor",
      hasPot: false,
      fullDescription:
        "Grow your own cheerful sunflowers with these high-quality seeds. Perfect for creating a stunning summer display, these sunflowers will attract birds and pollinators to your garden while providing endless joy.",
      care: [
        "Full sun location",
        "Plant after last frost",
        "Water regularly during growth",
        "Support tall varieties",
      ],
      features: [
        "Easy to grow from seed",
        "Attracts birds and bees",
        "Edible seeds and petals",
        "Various height options",
      ],
    },
    {
      id: "16",
      name: "White Orchid",
      price: 1500,
      image: flower3,
      description: "Bright outdoor annual flowers",
      category: "outdoor",
      hasPot: false,
      fullDescription:
        "Grow your own cheerful sunflowers with these high-quality seeds. Perfect for creating a stunning summer display, these sunflowers will attract birds and pollinators to your garden while providing endless joy.",
      care: [
        "Full sun location",
        "Plant after last frost",
        "Water regularly during growth",
        "Support tall varieties",
      ],
      features: [
        "Easy to grow from seed",
        "Attracts birds and bees",
        "Edible seeds and petals",
        "Various height options",
      ],
    },
  ];

  const product = products.find((p) => p.id === id);

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

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const getTotalPrice = () => {
    let total = product.price;
    if (includePot && product.hasPot && product.potPrice) {
      total += product.potPrice;
    }
    return total;
  };

  const handleAddToCart = () => {
    const productName =
      includePot && product.hasPot ? `${product.name} + Pot` : product.name;
    addToCart({
      id: product.id,
      name: productName,
      price: getTotalPrice(),
      image: product.image,
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
            <div className="aspect-square overflow-hidden rounded-xl h-[400px] w-[500px] bg-white shadow-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="aspect-square overflow-hidden rounded-xl bg-white shadow-lg flex items-center justify-center w-full max-w-md h-[400px]">
                <img
                  src={product.image}
                  alt={product.name}
                  className=" object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>

            {/* Multiple Pot Design Previews */}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full animate-fade-in">
                  {product.category}
                </span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
                {product.name}
              </h1>

              <p className="text-gray-600 mb-6 text-lg leading-relaxed animate-fade-in">
                {product.fullDescription}
              </p>

              <p className="text-4xl font-bold text-green-600 mb-6 animate-fade-in">
                NPR {getTotalPrice()}
              </p>
            </div>

            {/* Enhanced Pot Option */}
            {/* {product.hasPot && (
              <Card className="shadow-lg border-green-100 animate-fade-in">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Checkbox
                      id="include-pot"
                      checked={includePot}
                      onCheckedChange={(checked) =>
                        setIncludePot(checked as boolean)
                      }
                    />
                    <div className="flex-1">
                      <label
                        htmlFor="include-pot"
                        className="text-lg font-semibold text-gray-900 cursor-pointer"
                      >
                        Add Designer Pot Collection (+${product.potPrice})
                      </label>
                      {product.potDescription && (
                        <p className="text-gray-600 text-sm mt-1">
                          {product.potDescription}
                        </p>
                      )}
                      {includePot && (
                        <div className="mt-3 p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
                          <p className="text-green-700 text-sm font-medium">
                            🎨 Premium pot collection preview shown above
                          </p>
                          <p className="text-green-600 text-xs mt-1">
                            Our styling team will select the perfect pot to
                            complement your plant
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )} */}

            {/* Action Buttons */}
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
            <Card className="shadow-lg border-green-100 animate-fade-in">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Care Instructions
                </h3>
                <ul className="space-y-3">
                  {product.care.map((instruction, index) => (
                    <li
                      key={index}
                      className="flex items-start space-x-3 hover:bg-green-50 p-2 rounded-md transition-colors duration-200"
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{instruction}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Features */}
            <Card className="shadow-lg border-green-100 animate-fade-in">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start space-x-3 hover:bg-green-50 p-2 rounded-md transition-colors duration-200"
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="animate-fade-in">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                Related Products
              </h2>
              <Button
                variant="outline"
                onClick={() => navigate("/products")}
                className="text-green-600 border-green-600 hover:bg-green-50"
              >
                View All Products
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <div key={relatedProduct.id} className="hover-scale">
                  <ProductCard product={relatedProduct} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
