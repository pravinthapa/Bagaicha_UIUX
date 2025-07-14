import { Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCartContext } from "@/contexts/CartContext";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react";

const Cart = () => {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    getTotalPrice,
    clearCart,
  } = useCartContext();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
        <Header />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-6">
            <Button
              onClick={() => navigate(-1)}
              variant="ghost"
              className="flex items-center text-green-600 hover:text-green-700 hover:bg-green-50"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-br from-white to-green-50 rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center shadow-xl border border-green-100">
              <ShoppingBag className="w-16 h-16 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
              Your cart is empty
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              Start shopping to add items to your cart
            </p>
            <Link to="/products">
              <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Browse Products
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      <Header />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Button
            onClick={() => navigate("/products")}
            variant="ghost"
            className="flex items-center text-green-600 hover:text-green-700 hover:bg-green-50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </div>

        <h1 className="text-[35px] font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-8  text-center">
          Shopping Cart
        </h1>

        <div className="grid lg:grid-cols-3 mt-10 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card
                key={item.id}
                className="border-0 shadow-lg bg-gradient-to-r from-white to-green-50/30 hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-xl shadow-md"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {item.name}
                      </h3>
                      <p className="text-green-600 font-medium text-lg">
                        Rs {item.price}
                      </p>
                    </div>

                    <div className="flex items-center space-x-2 bg-gradient-to-r from-gray-50 to-green-50 rounded-xl p-3 border border-green-100">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => {
                          if (item.quantity > 1) {
                            updateQuantity(item.id, item.quantity - 1);
                          }
                        }}
                        className="h-8 w-8 border-green-200 hover:bg-green-100 hover:border-green-300 rounded-lg"
                      >
                        <Minus className="w-4 h-4" />
                      </Button>

                      <span className="w-12 text-center font-semibold text-gray-700">
                        {item.quantity}
                      </span>

                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="h-8 w-8 border-green-200 hover:bg-green-100 hover:border-green-300 rounded-lg"
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="text-right">
                      <p className="text-xl font-bold text-gray-900 mb-2">
                        RS {(item.price * item.quantity).toFixed(2)}
                      </p>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-600 hover:bg-red-50 rounded-lg"
                      >
                        <Trash2 className="w-4 h-4 mr-1" />
                        Remove
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div>
            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-green-50">
              <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-t-xl">
                <CardTitle className="text-center text-xl">
                  Order Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-6">
                <div className="space-y-4">
                  <div className="flex justify-between text-gray-700 text-lg">
                    <span>Subtotal</span>
                    <span className="font-semibold">
                      Rs {getTotalPrice().toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-700 text-lg">
                    <span>Shipping</span>
                    <span className="text-green-600 font-semibold">Free</span>
                  </div>
                  <div className="flex justify-between text-gray-700 text-lg">
                    <span>Tax</span>
                    <span className="font-semibold">
                      Rs {(getTotalPrice() * 0.08).toFixed(2)}
                    </span>
                  </div>
                  <hr className="border-green-200" />
                  <div className="flex justify-between font-bold text-2xl">
                    <span className="text-gray-900">Total</span>
                    <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      Rs {(getTotalPrice() * 1.08).toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <Link to="/checkout">
                    <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 py-4 text-lg font-semibold rounded-xl transform hover:scale-105">
                      Proceed to Checkout
                    </Button>
                  </Link>

                  <Button
                    variant="outline"
                    onClick={clearCart}
                    className="w-full text-red-500 border-red-200 hover:bg-red-50 hover:border-red-300 transition-all duration-300 rounded-xl py-3"
                  >
                    Clear Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
