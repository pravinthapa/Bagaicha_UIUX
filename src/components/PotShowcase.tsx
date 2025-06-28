
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Star } from "lucide-react";
import { useState } from "react";

const PotShowcase = () => {
  const [selectedPot, setSelectedPot] = useState(null);

  const attractivePots = [
    {
      id: "pot1",
      name: "Geometric Concrete Planter",
      price: 45.99,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500",
      description: "Modern geometric design with drainage system",
      material: "Concrete",
      sizes: ["Small", "Medium", "Large"],
      colors: ["Natural Gray", "Charcoal", "White"],
      rating: 4.8
    },
    {
      id: "pot2",
      name: "Glazed Ceramic Collection",
      price: 35.99,
      image: "https://images.unsplash.com/photo-1578850225180-4f21d96de7e6?w=500",
      description: "Hand-glazed ceramic with beautiful finish",
      material: "Ceramic",
      sizes: ["6 inch", "8 inch", "10 inch"],
      colors: ["Ocean Blue", "Forest Green", "Sunset Orange"],
      rating: 4.9
    },
    {
      id: "pot3",
      name: "Woven Basket Planters",
      price: 28.99,
      image: "https://images.unsplash.com/photo-1578850177654-fa3e84c8cc86?w=500",
      description: "Natural fiber woven with waterproof liner",
      material: "Natural Fiber",
      sizes: ["Small", "Medium", "Large"],
      colors: ["Natural", "Dark Brown", "Light Tan"],
      rating: 4.7
    },
    {
      id: "pot4",
      name: "Marble Effect Luxury Pots",
      price: 65.99,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500",
      description: "Premium marble-effect finish planters",
      material: "Resin with Marble Effect",
      sizes: ["Medium", "Large", "Extra Large"],
      colors: ["Carrara White", "Nero Black", "Calacatta Gold"],
      rating: 4.9
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) 
            ? "fill-yellow-400 text-yellow-400" 
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">Designer Pot Collection</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Premium planters to complement your plants perfectly</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {attractivePots.map((pot) => (
            <Card key={pot.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={pot.image}
                  alt={pot.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm hover:bg-white/90 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <Heart className="w-5 h-5 text-gray-600" />
                </Button>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                    {pot.name}
                  </h3>
                  <div className="flex items-center space-x-1">
                    <div className="flex">
                      {renderStars(pot.rating)}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{pot.description}</p>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Material:</span>
                    <span className="font-medium text-gray-700">{pot.material}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Sizes:</span>
                    <span className="font-medium text-gray-700">{pot.sizes.length} options</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Colors:</span>
                    <span className="font-medium text-gray-700">{pot.colors.length} colors</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-gray-900">${pot.price}</span>
                    <span className="text-sm text-green-600 font-medium">Free shipping</span>
                  </div>
                </div>
                
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Can't decide? Visit our nursery to see and feel the pots in person!</p>
          <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 rounded-full">
            Visit Our Nursery
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PotShowcase;
