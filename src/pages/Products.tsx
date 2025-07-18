import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Sparkles } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useProductData } from "@/hooks/useQueryData";

const Products = () => {
  const location = useLocation();
  const categoryFromState = location.state?.category;

  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState("grid");

  useEffect(() => {
    if (categoryFromState) {
      setSelectedCategory(categoryFromState);
    }
  }, [categoryFromState]);

  const { data } = useProductData();

  const categories = [
    { value: "all", label: "All Products" },
    { value: "Indoor", label: "Indoor Plants" },
    { value: "outdoor", label: "Outdoor Plants" },
    { value: "flower", label: "Flower" },
  ];

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
        <Card className="border-0 bg-white/95 border-green-300 mb-16 rounded-3xl">
          <CardContent className="p-10">
            <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-8 mb-10">
              <div className="w-full lg:w-2/3 relative">
                <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-emerald-600 w-5 h-5" />

                <input
                  type="text"
                  placeholder="Search for your perfect plant, flower, or pot..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full pr-28 pl-14 h-14 rounded-xl border border-emerald-200 text-base bg-white text-gray-700 placeholder:text-gray-500
                    focus:border-emerald-500 focus:ring-emerald-500 focus:outline-none
                    sm:pr-36"
                  aria-label="Search products"
                />

                <div className="absolute top-1/2 right-2 transform -translate-y-1/2 sm:right-3">
                  <button
                    onClick={() => {
                      // Optional: trigger search action here
                    }}
                    className="h-10 sm:h-12 px-3 sm:px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm sm:text-base font-semibold transition"
                    aria-label="Search button"
                  >
                    Search
                  </button>
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
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
              className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white rounded-3xl px-16 py-6 text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 hover:-translate-y-2 flex items-center justify-center mx-auto"
            >
              <Sparkles className="w-6 h-6 mr-3" />
              Clear All Filters
            </button>
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
