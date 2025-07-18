import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCartContext } from "@/contexts/CartContext";
import { useOrderContext } from "@/contexts/OrderContext";
import { useToast } from "@/hooks/use-toast";
import { useProductDetails } from "@/hooks/useQueryData";
import {
  ArrowLeft,
  Truck,
  Banknote,
  Smartphone,
  HandCoins,
} from "lucide-react";
import FakeEsewaModal from "./FakeEsewaModal";

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const formerPath = location?.state?.path;
  const { id } = useParams();
  const { cartItems, getTotalPrice, clearCart } = useCartContext();
  const { addOrder } = useOrderContext();
  const { toast } = useToast();
  const { data: product } = useProductDetails(id);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    paymentMethod: "credit-card",
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [showEsewaModal, setShowEsewaModal] = useState(false);
  const [fakeEsewaRefId, setFakeEsewaRefId] = useState("");

  const singleItemCheckout =
    cartItems?.length === 0 && product
      ? [
          {
            id: product.id,
            name: product.name,
            price: product.discount_price ?? product.price,
            quantity: 1,
            image: product.image ?? "/assets/placeholder-plant.png",
          },
        ]
      : cartItems;

  if (!singleItemCheckout || singleItemCheckout.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 font-semibold text-lg">
        Product not found or cart is empty.
      </div>
    );
  }

  const subtotal = singleItemCheckout.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.paymentMethod === "esewa") {
      setShowEsewaModal(true);
      return;
    }

    placeOrder();
  };

  const placeOrder = async () => {
    setIsProcessing(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const orderData = {
      items: singleItemCheckout.map((item) => ({
        id: parseInt(item.id, 10),
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        image: item.image,
      })),
      total: total,
      status: "pending" as const,
      orderDate: new Date().toISOString(),
      estimatedDelivery: new Date(
        Date.now() + 7 * 24 * 60 * 60 * 1000
      ).toISOString(),
      customerInfo: { ...formData, esewaRefId: fakeEsewaRefId },
      paymentMethod: formData.paymentMethod,
      trackingNumber: `TRK${Date.now()}`,
    };

    addOrder(orderData);
    clearCart();

    toast({
      title: "Order Placed!",
      description:
        formData.paymentMethod === "esewa"
          ? `eSewa Ref ID: ${fakeEsewaRefId}`
          : "You will receive an order confirmation shortly.",
    });

    setIsProcessing(false);
    navigate("/orders");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      <Header />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Button
            onClick={() => navigate(formerPath ?? "/cart")}
            variant="ghost"
            className="flex items-center text-green-600 hover:text-green-700 hover:bg-green-50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back{" "}
          </Button>
        </div>

        <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-8 text-center">
          Checkout
        </h1>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Shipping Form */}
          <div>
            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-green-50">
              <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-t-xl">
                <CardTitle className="text-xl">Shipping Information</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />

                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />

                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State</Label>
                      <Input
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Payment Options */}
                  <div className="pt-6 border-t border-green-200">
                    <Label className="text-lg font-semibold mb-4 block">
                      Payment Method
                    </Label>
                    <RadioGroup
                      value={formData.paymentMethod}
                      onValueChange={(value) =>
                        setFormData({ ...formData, paymentMethod: value })
                      }
                      className="space-y-3"
                    >
                      <div className="flex flex-col space-y-2 p-4 border border-green-200 rounded-xl hover:bg-green-50">
                        <div className="flex items-center space-x-3">
                          <RadioGroupItem value="bank" id="bank" />
                          <Label
                            htmlFor="bank"
                            className="flex items-center cursor-pointer"
                          >
                            <Banknote className="w-5 h-5 mr-2 text-green-600" />
                            Bank Account
                          </Label>
                        </div>
                      </div>

                      <div className="flex flex-col space-y-2 p-4 border border-green-200 rounded-xl hover:bg-green-50">
                        <div className="flex items-center space-x-3">
                          <RadioGroupItem value="esewa" id="esewa" />
                          <Label
                            htmlFor="esewa"
                            className="flex items-center cursor-pointer"
                          >
                            <Smartphone className="w-5 h-5 mr-2 text-green-600" />
                            eSewa
                          </Label>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3 p-4 border border-green-200 rounded-xl hover:bg-green-50">
                        <RadioGroupItem value="cod" id="cod" />
                        <Label
                          htmlFor="cod"
                          className="flex items-center cursor-pointer"
                        >
                          <HandCoins className="w-5 h-5 mr-2 text-green-600" />
                          Cash on Delivery
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    {isProcessing ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Processing...
                      </>
                    ) : (
                      "Place Order"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-green-50 sticky top-8">
              <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-t-xl">
                <CardTitle className="text-xl">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4 mb-6">
                  {singleItemCheckout.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center space-x-4 p-3 bg-gradient-to-r from-white to-green-50 rounded-xl border border-green-100"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-xl"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">
                          {item.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          Qty: {item.quantity}
                        </p>
                        <p className="text-xs text-gray-400">
                          Product ID: {item.id}
                        </p>
                      </div>
                      <p className="font-semibold text-green-700">
                        Rs {(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 pt-4 border-t border-green-200">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal</span>
                    <span className="font-semibold">
                      Rs {subtotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Shipping</span>
                    <span className="text-green-600 font-semibold">Free</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Tax</span>
                    <span className="font-semibold">Rs {tax.toFixed(2)}</span>
                  </div>
                  <hr className="border-green-200" />
                  <div className="flex justify-between font-bold text-xl">
                    <span className="text-gray-900">Total</span>
                    <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      Rs {total.toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                  <div className="flex items-center text-green-700 mb-2">
                    <Truck className="w-5 h-5 mr-2" />
                    <span className="font-semibold">Free Shipping</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Your order will be delivered within 5–7 business days.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* eSewa Simulation Modal */}
      <FakeEsewaModal
        open={showEsewaModal}
        onClose={() => setShowEsewaModal(false)}
        amount={total}
        productId={`PID${Date.now()}`}
        merchantNumber="9744337622" // 👈 Your eSewa number for demo
        onConfirm={(refId) => {
          setFakeEsewaRefId(refId);
          setShowEsewaModal(false);
          placeOrder();
        }}
      />
    </div>
  );
};

export default Checkout;
