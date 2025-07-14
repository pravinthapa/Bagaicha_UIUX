import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Check, Star, ArrowLeft, Gift, Truck, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import indoor7 from "../../public/assets/indoor7-removebg-preview.png";
import outdoor1 from "../../public/assets/outdoor1-removebg-preview.png";
import flower3 from "../../public/assets/flowers6-removebg-preview.png";

import { useCartContext } from "@/contexts/CartContext"; // <-- Import your cart context

const Packages = () => {
  const navigate = useNavigate();
  const { addToCart } = useCartContext(); // <-- get addToCart from context

  const packages = [
    {
      id: 1,
      name: "Starter Collection",
      price: 7500,
      originalPrice: 9000,
      image: indoor7,
      description: "Perfect for beginners starting their plant journey",
      plants: ["Snake Plant", "Pothos", "ZZ Plant"],
      features: [
        "3 low-maintenance plants",
        "Care guide included",
        "Decorative pots",
        "30-day plant guarantee",
        "Free shipping",
      ],
      popular: false,
    },
    {
      id: 2,
      name: "Green Paradise",
      price: 5000,
      originalPrice: 10000,
      image: flower3,
      description: "Transform your space with this curated collection",
      plants: [
        "Monstera",
        "Fiddle Leaf Fig",
        "Peace Lily",
        "Rubber Plant",
        "Snake Plant",
      ],
      features: [
        "5 premium plants",
        "Designer ceramic pots",
        "Plant care workshop access",
        "60-day plant guarantee",
        "Premium plant food included",
        "Free delivery & setup",
      ],
      popular: true,
    },
    {
      id: 3,
      name: "Office Oasis",
      price: 11999,
      originalPrice: 14999,
      image: outdoor1,
      description: "Create a productive workspace with air-purifying plants",
      plants: ["Snake Plant", "Spider Plant", "Peace Lily", "Pothos"],
      features: [
        "4 air-purifying plants",
        "Modern minimalist pots",
        "Low-light friendly",
        "Desk-friendly sizes",
        "Care reminder app access",
      ],
      popular: false,
    },
  ];

  const handleAddToCart = (pkg) => {
    // Prepare the package object as needed for your cart
    // For example, add quantity property if your cart expects it
    const cartItem = {
      id: pkg.id,
      name: pkg.name,
      price: pkg.price,
      image: pkg.image,
      quantity: 1,
    };
    addToCart(cartItem);
    navigate("/cart");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      <Header />

      <section className="relative py-20 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 opacity-20">
            <Leaf className="w-32 h-32 text-white transform rotate-12" />
          </div>
          <div className="absolute bottom-20 right-20 opacity-15">
            <Leaf className="w-24 h-24 text-white transform -rotate-45" />
          </div>
          <div className="absolute top-1/2 left-1/3 opacity-10">
            <Leaf className="w-20 h-20 text-white transform rotate-90" />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Button
              onClick={() => navigate(-1)}
              variant="ghost"
              className="text-white hover:text-white hover:bg-white/20 backdrop-blur-sm rounded-full"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </div>

          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-light mb-6">
              Plant Packages
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
              Curated collections for every space and style
              <span className="block mt-2">
                Save money while creating your perfect green oasis
              </span>
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16">
          <Card className="border-0 shadow-xl bg-gradient-to-r from-green-100 to-emerald-100">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mb-4">
                    <Gift className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Save Up to 25%
                  </h3>
                  <p className="text-gray-600">
                    Get more plants for less with our curated packages
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mb-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Expert Curation
                  </h3>
                  <p className="text-gray-600">
                    Carefully selected plants that thrive together
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mb-4">
                    <Truck className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Free Shipping
                  </h3>
                  <p className="text-gray-600">
                    All packages include complimentary delivery
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card
              key={pkg.id}
              className={`border-0 shadow-xl bg-gradient-to-br from-white to-green-50/30 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 relative ${
                pkg.popular ? "ring-2 ring-green-500" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="h-[250px] bg-white flex items-center justify-center overflow-hidden relative">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {pkg.name}
                  </CardTitle>
                </div>
                <p className="text-gray-600">{pkg.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    Rs{pkg.price}
                  </span>
                  <span className="text-lg text-gray-500 line-through">
                    RS{pkg.originalPrice}
                  </span>
                  <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-sm font-medium">
                    Save Rs {(pkg.originalPrice - pkg.price).toFixed(2)}
                  </span>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Included Plants:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {pkg.plants.map((plant, index) => (
                      <span
                        key={index}
                        className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
                      >
                        {plant}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Package Features:
                  </h4>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  onClick={() => handleAddToCart(pkg)}
                  className={`w-full py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                    pkg.popular
                      ? "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white"
                      : "bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white"
                  }`}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20">
          <Card className="border-0 shadow-2xl bg-gradient-to-r from-green-600 to-emerald-600 text-white overflow-hidden">
            <CardContent className="p-12 text-center">
              <Leaf className="w-16 h-16 mx-auto mb-6 opacity-80" />
              <h2 className="text-4xl font-light mb-6">
                Need Something Custom?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Our plant experts can create a personalized package tailored to
                your specific space, lighting conditions, and style preferences.
              </p>
              <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300">
                Request Custom Package
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Packages;
