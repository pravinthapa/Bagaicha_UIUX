import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ShoppingCart, User, Menu, X, Package, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartContext } from "@/contexts/CartContext";
import { toast } from "sonner";
import logo from "../../public/assets/Screenshot 2025-06-26 135122 copy.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { getTotalItems } = useCartContext();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  const handleLogout = () => {
    toast.custom(
      (t) => (
        <div
          className="bg-green-600 text-white px-4 py-3 rounded-md shadow-lg w-full max-w-sm"
          style={{ marginBottom: "0.75rem" }}
        >
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">
              Logged out successfully!
            </span>
            <button
              onClick={() => toast.dismiss(t)}
              className="ml-4 text-xl leading-none hover:text-gray-200"
            >
              ✕
            </button>
          </div>
        </div>
      ),
      { duration: 5000, position: "top-right" }
    );

    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-green-600 font-semibold text-lg"
      : "text-gray-700 hover:text-green-600 font-medium text-lg";

  return (
    <header className="bg-white shadow-sm border-b border-green-100 sticky top-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center min-h-[80px]">
          <Link to="/home" className="flex items-center">
            <img
              src={logo}
              alt="Bagaicha Nepal"
              className="h-16 w-auto object-contain"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-10">
            <NavLink to="/home" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About Us
            </NavLink>
            <NavLink to="/products" className={navLinkClass}>
              Products
            </NavLink>
            <NavLink to="/packages" className={navLinkClass}>
              Packages
            </NavLink>
            <NavLink to="/blog" className={navLinkClass}>
              Blog
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact Us
            </NavLink>
          </nav>

          <div className="flex items-center space-x-5 relative">
            <Link to="/orders">
              <Button variant="ghost" size="icon" className="relative">
                <Package className="w-6 h-6" />
              </Button>
            </Link>

            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="w-6 h-6" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </Button>
            </Link>

            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
              >
                <User className="w-6 h-6" />
              </Button>

              {isProfileOpen && (
                <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-md z-50">
                  <button
                    onClick={()=> navigate('/profile')}
                    className="w-full text-left flex items-center gap-1 px-4 py-2 text-sm hover:text-green-600 hover:bg-gray-100"
                  >
                    <User className=" w-4 h-4 mr-1" />
                    Profile
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-1 text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    <LogOut className=" w-4 h-4 mr-1" />
                    Logout
                  </button>
                </div>
              )}
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-3 pb-5 space-y-2 flex-col flex items-center  border-t border-green-100 text-base font-medium">
              <NavLink
                to="/home"
                onClick={() => setIsMenuOpen(false)}
                className={navLinkClass}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className={navLinkClass}
              >
                About Us
              </NavLink>
              <NavLink
                to="/products"
                onClick={() => setIsMenuOpen(false)}
                className={navLinkClass}
              >
                Products
              </NavLink>
              <NavLink
                to="/packages"
                onClick={() => setIsMenuOpen(false)}
                className={navLinkClass}
              >
                Packages
              </NavLink>
              <NavLink
                to="/blog"
                onClick={() => setIsMenuOpen(false)}
                className={navLinkClass}
              >
                Blog
              </NavLink>
              <NavLink
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={navLinkClass}
              >
                Contact Us
              </NavLink>
              <NavLink
                to="/orders"
                onClick={() => setIsMenuOpen(false)}
                className={navLinkClass}
              >
                My Orders
              </NavLink>

              {user ? (
                <>
                  <NavLink
                    to="/profile"
                    onClick={() => setIsMenuOpen(false)}
                    className={navLinkClass}
                  >
                    Profile
                  </NavLink>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="text-left text-red-600 hover:text-red-800 block w-full px-4"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <NavLink
                  to="/register"
                  onClick={() => setIsMenuOpen(false)}
                  className={navLinkClass}
                >
                  {/* Register / Login */}
                </NavLink>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
