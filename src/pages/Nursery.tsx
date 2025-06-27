
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Clock, Phone, Users, Leaf, Flower, Sun, Home, Camera, Heart, Star } from "lucide-react";

const Nursery = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const nurseryPlants = [
    {
      id: "n1",
      name: "Rose Garden Collection",
      category: "flowers",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500",
      description: "Beautiful roses in various colors",
      location: "Section A"
    },
    {
      id: "n2",
      name: "Tulip Display",
      category: "flowers",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=500",
      description: "Seasonal tulip varieties",
      location: "Section A"
    },
    {
      id: "n3",
      name: "Sunflower Field",
      category: "flowers",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=500",
      description: "Bright sunflowers for any occasion",
      location: "Outdoor Area"
    },
    {
      id: "n4",
      name: "Monstera Collection",
      category: "indoor",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500",
      description: "Various sizes of Monstera plants",
      location: "Greenhouse B"
    },
    {
      id: "n5",
      name: "Snake Plant Varieties",
      category: "indoor",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=500",
      description: "Different types of snake plants",
      location: "Greenhouse B"
    },
    {
      id: "n6",
      name: "Fiddle Leaf Figs",
      category: "indoor",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=500",
      description: "Large statement plants",
      location: "Greenhouse B"
    },
    {
      id: "n7",
      name: "Fruit Trees",
      category: "outdoor",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500",
      description: "Apple, orange, and citrus trees",
      location: "Outdoor Section C"
    },
    {
      id: "n8",
      name: "Garden Shrubs",
      category: "outdoor",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=500",
      description: "Decorative shrubs for landscaping",
      location: "Outdoor Section C"
    }
  ];

  const categories = [
    { value: "all", label: "All Plants", icon: Leaf },
    { value: "flowers", label: "Fresh Flowers", icon: Flower },
    { value: "indoor", label: "Indoor Plants", icon: Home },
    { value: "outdoor", label: "Outdoor Plants", icon: Sun }
  ];

  const filteredPlants = selectedCategory === "all" 
    ? nurseryPlants 
    : nurseryPlants.filter(plant => plant.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 opacity-20">
            <Leaf className="w-32 h-32 text-white transform rotate-12" />
          </div>
          <div className="absolute bottom-20 right-20 opacity-15">
            <Flower className="w-24 h-24 text-white transform -rotate-45" />
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
            <h1 className="text-5xl md:text-6xl font-light mb-6">Visit Our Nursery</h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
              Experience plants in person before you buy
              <span className="block mt-2">Touch, smell, and feel the quality of our plants</span>
            </p>
          </div>
        </div>
      </section>

      {/* Nursery Info Cards */}
      <section className="py-16 -mt-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-2xl border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Location</h3>
                <p className="text-gray-600 mb-2">123 Garden Street</p>
                <p className="text-gray-600 mb-2">Green City, GC 12345</p>
                <p className="text-green-600 font-medium">Free parking available</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-2xl border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Hours</h3>
                <p className="text-gray-600 mb-2">Monday - Saturday: 8AM - 7PM</p>
                <p className="text-gray-600 mb-2">Sunday: 10AM - 6PM</p>
                <p className="text-green-600 font-medium">Extended summer hours</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-2xl border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Expert Help</h3>
                <p className="text-gray-600 mb-2">Free plant consultation</p>
                <p className="text-gray-600 mb-2">Care tips & guidance</p>
                <p className="text-green-600 font-medium">Professional advice</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Plant Categories Filter */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-gray-900 mb-6">Explore Our Collection</h2>
            <p className="text-xl text-gray-600">Walk through different sections of our nursery</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                variant={selectedCategory === category.value ? "default" : "outline"}
                className="rounded-full px-6 py-3 text-lg"
              >
                <category.icon className="w-5 h-5 mr-2" />
                {category.label}
              </Button>
            ))}
          </div>

          {/* Plants Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredPlants.map((plant) => (
              <Card key={plant.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={plant.image} 
                    alt={plant.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <Camera className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold mb-1">{plant.name}</h3>
                    <p className="text-white/80 text-sm mb-1">{plant.description}</p>
                    <div className="flex items-center text-white/70 text-xs">
                      <MapPin className="w-3 h-3 mr-1" />
                      {plant.location}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">Ready to Visit?</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Come see our beautiful collection in person. Our experts are here to help you find the perfect plants.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-white text-green-600 hover:bg-gray-100 px-12 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              <MapPin className="w-5 h-5 mr-2" />
              Get Directions
            </Button>
            <Button 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-12 py-4 text-lg font-medium rounded-full transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nursery;
