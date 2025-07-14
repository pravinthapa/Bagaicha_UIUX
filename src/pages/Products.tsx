import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import indoor1 from "../../public/assets/indoor1-removebg-preview.png";
import indoor2 from "../../public/assets/indoor2-removebg-preview.png";
import indoor3 from "../../public/assets/indoor3-removebg-preview (1).png";
import indoor4 from "../../public/assets/indoor4-removebg-preview (1).png";
import indoor5 from "../../public/assets/indoor5-removebg-preview.png";
import indoor6 from "../../public/assets/indoor6-removebg-preview.png";
import indoor7 from "../../public/assets/indoor7-removebg-preview.png";
import outdoor1 from "../../public/assets/outdoor1-removebg-preview.png";
import outdoor2 from "../../public/assets/outdoor2-removebg-preview.png";
import outdoor3 from "../../public/assets/outdoor3-removebg-preview.png";
import outdoor4 from "../../public/assets/outdoor4-removebg-preview.png";
import outdoor5 from "../../public/assets/outdoor5-removebg-preview.png";
import outdoor6 from "../../public/assets/outdoor6-removebg-preview.png";
import flower1 from "../../public/assets/flowers4-removebg-preview.png";
import flower2 from "../../public/assets/flowers3-removebg-preview.png";
import flower3 from "../../public/assets/flowers6-removebg-preview.png";
import flower4 from "../../public/assets/flowers7-removebg-preview (1).png";

import {
  Search,
  ArrowLeft,
  Leaf,
  Grid,
  List,
  MapPin,
  Sparkles,
  Filter,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useProductData } from "@/hooks/useQueryData";

import { useLocation } from "react-router-dom";
const Products = () => {
  const location = useLocation();
  const categoryFromState = location.state?.category;
  console.log(categoryFromState, "dqsdasd");

  useEffect(() => {
    if (categoryFromState) {
      setSelectedCategory(categoryFromState);
    }
  }, [categoryFromState]);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState("grid");

  const products = [
    {
      id: "1",
      name: "Monstera Deliciosa",
      price: 4500,
      image: indoor1,
      description:
        "Beautiful split-leaf philodendron perfect for indoor spaces",
      category: "indoor",
      rating: 4.8,
      reviews: 127,
    },
    {
      id: "2",
      name: "Snake Plant",
      price: 2909,
      image: indoor2,
      description: "Low maintenance plant ideal for beginners",
      category: "indoor",
      rating: 4.9,
      reviews: 89,
    },
    {
      id: "3",
      name: "Lavender Bush",
      price: 1800,
      image: outdoor3,
      description: "Statement plant with large, glossy leaves",
      category: "outdoor",
      rating: 4.7,
      reviews: 156,
    },
    {
      id: "4",
      name: "Rose Bush",
      price: 3500,
      image: outdoor2,
      description: "Elegant flowering plant that purifies air purify",
      category: "outdoor",
      rating: 4.6,
      reviews: 92,
    },
    {
      id: "5",
      name: "Peace Lily",
      price: 2800,
      image: flower4,
      description: "Glossy leaves with air-purifying qualities",
      category: "flowers",
      rating: 4.8,
      reviews: 73,
    },
    {
      id: "6",
      name: "Sunflower Seeds",
      price: 1500,
      image: flower3,
      description: "Drought-tolerant plant perfect for low light",
      category: "indoor",
      rating: 4.9,
      reviews: 145,
    },
    {
      id: "7",
      name: "Bird of Paradise",
      price: 2700,
      image: indoor7,
      description: "Tropical outdoor plant with stunning large leaves",
      category: "indoor",
      rating: 4.5,
      reviews: 68,
    },
    {
      id: "8",
      name: "Garden Rose Bush",
      price: 2500,
      image: outdoor1,
      description: "Beautiful outdoor rose bush for gardens",
      category: "outdoor",
      rating: 4.7,
      reviews: 203,
    },
    {
      id: "9",
      name: "Red Rose Bouquet",
      price: 3500,
      image: outdoor2,
      description: "Fresh red roses  special occasions",
      category: "outdoor",
      rating: 4.9,
      reviews: 234,
    },
    {
      id: "10",
      name: "Tulip Mix",
      price: 2809,
      image: outdoor3,
      description: "Colorful tulip arrangement in seasonal",
      category: "outdoor",
      rating: 4.8,
      reviews: 167,
    },
    {
      id: "11",
      name: "Sunflower Bundle",
      price: 1500,
      image: outdoor4,
      description: "Bright sunflowers to brighten any day",
      category: "outdoor",
      rating: 4.7,
      reviews: 145,
    },
    {
      id: "12",
      name: "Modern Ceramic Planter",
      price: 4500,
      image: outdoor6,
      description: "Sleek white ceramic planter drainage",
      category: "outdoor",
      rating: 4.6,
      reviews: 89,
    },

    {
      id: "15",
      name: "Lavender Plant",
      price: 1900,
      image: flower1,

      description: "Fragrant outdoor lavender plant",
      category: "flowers",
      rating: 4.6,
      reviews: 156,
    },
    {
      id: "16",
      name: "White Orchid",
      price: 1500,
      image: flower3,
      description: "Elegant white orchid  indoor decoration",
      category: "flowers",
      rating: 4.8,
      reviews: 198,
    },
  ];

  const categories = [
    { value: "all", label: "All Products" },
    { value: "Indoor", label: "Indoor Plants" },
    { value: "outdoor", label: "Outdoor Plants" },
    { value: "flower", label: "Flower" },
  ];

  const { data } = useProductData();
  console.log(data, "dataa");

  console.log(selectedCategory);
  const filteredProducts = data?.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.category.name === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 overflow-hidden">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card className="border-0 bg-white/95  border-green-300 mb-16 rounded-3xl">
          <CardContent className="p-10">
            <div className="flex flex-col lg:flex-row justify-between gap-8 mb-10">
              <div className="w-full lg:w-2/3">
                <div className="relative">
                  <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-emerald-600 w-5 h-5" />
                  <Input
                    placeholder="Search for your perfect plant, flower, or pot..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-14 h-14 rounded-xl border border-emerald-200 text-base bg-white text-gray-700 placeholder:text-gray-500 
                       focus:border-emerald-500 focus:ring-emerald-500 focus:outline-none"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <Button
                      variant="default"
                      size="sm"
                      className="rounded-xl px-4 py-2 bg-emerald-600 text-white hover:bg-emerald-700"
                    >
                      Search
                    </Button>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/3 space-y-2">
                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger className="h-14 border border-emerald-200 rounded-xl text-base bg-white focus:border-emerald-500 focus:ring-emerald-500 focus:outline-none">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem
                        key={category.value}
                        value={category.value}
                        className="text-base py-3"
                      >
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {filteredProducts?.length === 0 ? (
          <div className="text-center py-32 animate-fade-in">
            <div className="bg-gradient-to-br from-white to-emerald-50 rounded-full w-48 h-48 mx-auto mb-12 flex items-center justify-center shadow-2xl border border-emerald-100">
              <Search className="w-24 h-24 text-emerald-600 animate-pulse" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-8">
              No products found
            </h3>
            <p className="text-gray-600 mb-12 text-2xl">
              Try adjusting your search or browse different categories
            </p>
            <Button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white rounded-3xl px-16 py-6 text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 hover:-translate-y-2"
            >
              <Sparkles className="w-6 h-6 mr-3" />
              Clear All Filters
            </Button>
          </div>
        ) : (
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
                : "space-y-8"
            }
          >
            {filteredProducts?.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
