import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Leaf,
  Calendar,
  User,
  ArrowLeft,
  Clock,
  Eye,
  MessageCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import indoor7 from "../../public/assets/indoor7-removebg-preview.png";
import outdoor1 from "../../public/assets/outdoor1-removebg-preview.png";
import flower2 from "../../public/assets/flowers3-removebg-preview.png";

const Blog = () => {
  const navigate = useNavigate();

  const blogPosts = [
    {
      id: 1,
      title: "10 Best Indoor Plants for Beginners",
      excerpt:
        "Starting your plant journey? These low-maintenance beauties are perfect for new plant parents.",
      image: indoor7,
      author: "Sarah Johnson",
      date: "2024-01-15",
      readTime: "5 min read",
      views: 1250,
      comments: 23,
      category: "Beginner Tips",
    },
    {
      id: 2,
      title: "How to Care for Your Monstera Deliciosa",
      excerpt:
        "Everything you need to know about growing and maintaining this popular houseplant.",
      image: outdoor1,
      author: "Michael Chen",
      date: "2024-01-12",
      readTime: "8 min read",
      views: 980,
      comments: 31,
      category: "Plant Care",
    },
    {
      id: 3,
      title: "Creating a Plant Paradise in Small Spaces",
      excerpt:
        "Maximize your greenery even in the tiniest apartments with these clever tips and tricks.",
      image: flower2,
      author: "Emma Davis",
      date: "2024-01-10",
      readTime: "6 min read",
      views: 756,
      comments: 18,
      category: "Space Design",
    },
    {
      id: 4,
      title: "The Science Behind Air-Purifying Plants",
      excerpt:
        "Discover which plants are most effective at cleaning your indoor air and improving your health.",
      image: indoor7,
      author: "Dr. Lisa Park",
      date: "2024-01-08",
      readTime: "10 min read",
      views: 1420,
      comments: 45,
      category: "Science",
    },
    {
      id: 5,
      title: "Seasonal Plant Care: Winter Edition",
      excerpt:
        "Keep your plants healthy and thriving during the colder months with these expert tips.",
      image: flower2,
      author: "Michael Chen",
      date: "2024-01-05",
      readTime: "7 min read",
      views: 892,
      comments: 27,
      category: "Seasonal Care",
    },
    {
      id: 6,
      title: "DIY Plant Propagation: Grow Your Collection",
      excerpt:
        "Learn simple techniques to propagate your favorite plants and expand your green family.",
      image:
        "https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=600&h=400&fit=crop",
      author: "Sarah Johnson",
      date: "2024-01-03",
      readTime: "9 min read",
      views: 1100,
      comments: 38,
      category: "DIY",
    },
  ];

  const categories = [
    "All",
    "Beginner Tips",
    "Plant Care",
    "Space Design",
    "Science",
    "Seasonal Care",
    "DIY",
  ];

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
              Plant Care Blog
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
              Expert tips, guides, and inspiration for plant lovers
              <span className="block mt-2">
                From beginner basics to advanced techniques
              </span>
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-green-50/30">
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={category === "All" ? "default" : "outline"}
                    className="rounded-full px-6 py-2"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-green-50/30 overflow-hidden hover:shadow-3xl transition-all duration-500">
            <div className="grid lg:grid-cols-2">
              <div className="relative w-full h-[400px]">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center text-sm text-green-600 mb-4">
                  <span className="bg-green-100 px-3 py-1 rounded-full">
                    {blogPosts[0].category}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 hover:text-green-600 transition-colors cursor-pointer">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {blogPosts[0].author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(blogPosts[0].date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {blogPosts[0].readTime}
                    </div>
                  </div>
                </div>
                <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-xl">
                  Read Full Article
                </Button>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Card
              key={post.id}
              className="border-0 shadow-xl bg-gradient-to-br from-white to-green-50/30 overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer group"
            >
              <div className="relative w-full h-[250px]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {post.views}
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      {post.comments}
                    </div>
                  </div>
                  <span className="text-green-600 font-medium">
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20">
          <Card className="border-0 shadow-2xl bg-gradient-to-r from-green-600 to-emerald-600 text-white overflow-hidden">
            <CardContent className="p-12 text-center">
              <Leaf className="w-16 h-16 mx-auto mb-6 opacity-80" />
              <h2 className="text-4xl font-light mb-6">Stay Updated</h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Get the latest plant care tips, guides, and exclusive content
                delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
                <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-medium transition-all duration-300">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Blog;
