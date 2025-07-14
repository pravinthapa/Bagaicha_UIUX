
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Search, Leaf } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Decorative Elements */}
        <div className="relative mb-12">
          <div className="absolute -top-8 -left-8 opacity-20">
            <Leaf className="w-24 h-24 text-green-600 transform rotate-12" />
          </div>
          <div className="absolute -bottom-8 -right-8 opacity-15">
            <Leaf className="w-16 h-16 text-green-600 transform -rotate-45" />
          </div>
          
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-green-50/30 overflow-hidden">
            <CardContent className="p-12">
              {/* 404 Display */}
              <div className="mb-8">
                <h1 className="text-8xl md:text-9xl font-light bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
                  404
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto rounded-full"></div>
              </div>
              
              {/* Error Message */}
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                  Oops! Page Not Found
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg mx-auto">
                  It looks like this page has grown away! The page you're looking for 
                  doesn't exist or has been moved to a new location.
                </p>
              </div>
              
              {/* Illustration */}
              <div className="mb-12">
                <div className="w-32 h-32 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto shadow-xl">
                  <Search className="w-16 h-16 text-green-600" />
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                <Link to="/home">
                  <Button className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <Home className="w-5 h-5 mr-2" />
                    Go Home
                  </Button>
                </Link>
                
                <Link to="/products">
                  <Button 
                    variant="outline" 
                    className="w-full sm:w-auto border-green-200 text-green-600 hover:bg-green-50 hover:border-green-300 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
                  >
                    Browse Plants
                  </Button>
                </Link>
              </div>
              
              {/* Help Text */}
              <div className="mt-12 pt-8 border-t border-green-200">
                <p className="text-gray-500">
                  Need help finding something specific? 
                  <Link to="/contact" className="text-green-600 hover:text-green-700 font-medium ml-1 transition-colors">
                    Contact our support team
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <Link to="/products">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Leaf className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Plants</h3>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/packages">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Leaf className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Packages</h3>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/blog">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Leaf className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Blog</h3>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/about">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Leaf className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900">About</h3>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
