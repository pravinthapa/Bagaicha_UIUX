
import { useParams, useNavigate, Link } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useOrderContext } from "@/contexts/OrderContext";
import { ArrowLeft, Package, Calendar, DollarSign, MapPin, Phone, Mail, User, Truck, CheckCircle, Clock, AlertCircle } from "lucide-react";

const OrderDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getOrderById } = useOrderContext();

  const order = id ? getOrderById(id) : undefined;

  if (!order) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
        <Header />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-green-50/30">
            <CardContent className="p-12 text-center">
              <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Order Not Found</h2>
              <p className="text-gray-600 mb-8">The order you're looking for doesn't exist or may have been removed.</p>
              <Link to="/orders">
                <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Orders
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'processing': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'shipped': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'delivered': return 'bg-green-100 text-green-800 border-green-200';
      case 'cancelled': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getProgressSteps = (status: string) => {
    const steps = [
      { key: 'pending', label: 'Order Placed', icon: Clock },
      { key: 'processing', label: 'Processing', icon: Package },
      { key: 'shipped', label: 'Shipped', icon: Truck },
      { key: 'delivered', label: 'Delivered', icon: CheckCircle },
    ];

    const statusOrder = ['pending', 'processing', 'shipped', 'delivered'];
    const currentIndex = statusOrder.indexOf(status);

    return steps.map((step, index) => ({
      ...step,
      completed: index <= currentIndex,
      active: index === currentIndex,
    }));
  };

  const progressSteps = getProgressSteps(order.status);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      <Header />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Button
            onClick={() => navigate("/orders")}
            variant="ghost"
            className="flex items-center text-green-600 hover:text-green-700 hover:bg-green-50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Orders
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Order Header */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-green-50/30">
              <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl mb-2">Order #{order.id}</CardTitle>
                    <div className="flex items-center text-green-100">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Placed on {new Date(order.orderDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <Badge className={`${getStatusColor(order.status)} px-4 py-2 font-medium capitalize text-lg`}>
                    {order.status}
                  </Badge>
                </div>
              </CardHeader>
            </Card>

            {/* Order Progress */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-green-50/30">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Order Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  {progressSteps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <div key={step.key} className="flex flex-col items-center flex-1">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${
                          step.completed 
                            ? 'bg-green-600 text-white' 
                            : step.active 
                              ? 'bg-green-100 text-green-600 border-2 border-green-600' 
                              : 'bg-gray-100 text-gray-400'
                        }`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className={`text-sm font-medium text-center ${
                          step.completed || step.active ? 'text-green-600' : 'text-gray-400'
                        }`}>
                          {step.label}
                        </span>
                        {index < progressSteps.length - 1 && (
                          <div className={`h-1 w-full mt-4 ${
                            step.completed ? 'bg-green-600' : 'bg-gray-200'
                          }`} />
                        )}
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Order Items */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-green-50/30">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Order Items</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 p-4 bg-gradient-to-r from-white to-green-50 rounded-xl border border-green-100">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-xl"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 text-lg">{item.name}</h4>
                        <p className="text-gray-600">Quantity: {item.quantity}</p>
                        <p className="text-gray-600">Price: Rs{item.price.toFixed(2)} each</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-xl text-green-700">Rs{(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-green-200">
                  <div className="flex justify-between items-center text-2xl font-bold">
                    <span className="text-gray-900">Total Amount</span>
                    <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      Rs{order.total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {/* Customer Information */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-green-50/30">
              <CardHeader className="bg-gradient-to-r from-green-100 to-emerald-100">
                <CardTitle className="flex items-center text-gray-800">
                  <User className="w-5 h-5 mr-2 text-green-600" />
                  Customer Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-6">
                <div>
                  <p className="font-semibold text-gray-900">
                    {order.customerInfo.firstName} {order.customerInfo.lastName}
                  </p>
                </div>
                <div className="flex items-center text-gray-700">
                  <Mail className="w-4 h-4 mr-2 text-green-600" />
                  <span>{order.customerInfo.email}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Phone className="w-4 h-4 mr-2 text-green-600" />
                  <span>{order.customerInfo.phone}</span>
                </div>
              </CardContent>
            </Card>

            {/* Shipping Address */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-green-50/30">
              <CardHeader className="bg-gradient-to-r from-green-100 to-emerald-100">
                <CardTitle className="flex items-center text-gray-800">
                  <MapPin className="w-5 h-5 mr-2 text-green-600" />
                  Shipping Address
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-gray-700 space-y-1">
                  <p>{order.customerInfo.address}</p>
                  <p>{order.customerInfo.city}, {order.customerInfo.state}</p>
                </div>
              </CardContent>
            </Card>

            {/* Payment & Delivery */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-green-50/30">
              <CardHeader className="bg-gradient-to-r from-green-100 to-emerald-100">
                <CardTitle className="flex items-center text-gray-800">
                  <DollarSign className="w-5 h-5 mr-2 text-green-600" />
                  Payment & Delivery
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-600">Payment Method</p>
                  <p className="text-gray-900 capitalize">{order.paymentMethod}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Estimated Delivery</p>
                  <p className="text-gray-900">{new Date(order.estimatedDelivery).toLocaleDateString()}</p>
                </div>
                {order.trackingNumber && (
                  <div>
                    <p className="text-sm font-medium text-gray-600">Tracking Number</p>
                    <p className="text-green-600 font-mono">{order.trackingNumber}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="space-y-3">
              <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Download Invoice
              </Button>
              {order.status !== 'delivered' && order.status !== 'cancelled' && (
                <Button variant="outline" className="w-full border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 rounded-xl">
                  Cancel Order
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
