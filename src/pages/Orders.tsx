import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useOrderContext } from "@/contexts/OrderContext";
import {
  Package,
  Eye,
  Calendar,
  DollarSign,
  Truck,
  Download,
} from "lucide-react";

const Orders = () => {
  const { orders } = useOrderContext();

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "processing":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "shipped":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "delivered":
        return "bg-green-100 text-green-800 border-green-200";
      case "cancelled":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Calendar className="w-4 h-4" />;
      case "processing":
        return <Package className="w-4 h-4" />;
      case "shipped":
        return <Truck className="w-4 h-4" />;
      case "delivered":
        return <Package className="w-4 h-4" />;
      default:
        return <Package className="w-4 h-4" />;
    }
  };

  const downloadInvoice = (order: any) => {
    const invoiceText = `
      Invoice for Order #${order.id}
      ----------------------------
      Order Date: ${new Date(order.orderDate).toLocaleDateString()}
      Status: ${order.status}
      Payment Method: ${order.paymentMethod}
      Estimated Delivery: ${new Date(
        order.estimatedDelivery
      ).toLocaleDateString()}
      
      Items:
      ${order.items
        .map(
          (item: any) =>
            `- ${item.name} x${item.quantity} = Rs${(
              item.price * item.quantity
            ).toFixed(2)}`
        )
        .join("\n")}
      
      Total Amount: Rs${order.total.toFixed(2)}
    `;

    const blob = new Blob([invoiceText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `invoice_order_${order.id}.txt`;
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      <Header />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">
            My Orders
          </h1>
          <p className="text-gray-600 text-lg">
            Track and manage all your plant orders
          </p>
        </div>

        {orders.length === 0 ? (
          <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-green-50/30 max-w-2xl mx-auto">
            <CardContent className="p-12 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Package className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                No Orders Yet
              </h3>
              <p className="text-gray-600 mb-8">
                You haven't placed any orders yet. Start shopping for beautiful
                plants!
              </p>
              <Link to="/products">
                <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Shop Now
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <Card
                key={order.id}
                className="border-0 shadow-xl bg-gradient-to-br from-white to-green-50/30 overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <CardHeader className="bg-gradient-to-r from-green-100 to-emerald-100 pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-gray-900 mb-2">
                        Order #{order.id}
                      </CardTitle>
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>
                          Placed on{" "}
                          {new Date(order.orderDate).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge
                        className={`${getStatusColor(
                          order.status
                        )} px-3 py-1 font-medium capitalize flex items-center gap-2`}
                      >
                        {getStatusIcon(order.status)}
                        {order.status}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Order Items */}
                    <div className="lg:col-span-2">
                      <h4 className="font-semibold text-gray-900 mb-4">
                        Order Items
                      </h4>
                      <div className="space-y-3">
                        {order.items.slice(0, 3).map((item) => (
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
                              <h5 className="font-medium text-gray-900">
                                {item.name}
                              </h5>
                              <p className="text-sm text-gray-600">
                                Qty: {item.quantity}
                              </p>
                            </div>
                            <p className="font-semibold text-green-700">
                              Rs{(item.price * item.quantity).toFixed(2)}
                            </p>
                          </div>
                        ))}
                        {order.items.length > 3 && (
                          <p className="text-sm text-gray-600 text-center py-2">
                            +{order.items.length - 3} more items
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Order Summary */}
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border border-green-200">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-700">Total Amount</span>
                          <span className="font-bold text-xl text-green-700">
                            Rs{order.total.toFixed(2)}
                          </span>
                        </div>
                        <div className="text-sm text-gray-600">
                          <p>Payment: {order.paymentMethod}</p>
                          <p>
                            Est. Delivery:{" "}
                            {new Date(
                              order.estimatedDelivery
                            ).toLocaleDateString()}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col gap-3">
                        <Link to={`/order/${order.id}`}>
                          <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                            <Eye className="w-4 h-4 mr-2" />
                            View Details
                          </Button>
                        </Link>

                        <Button
                          onClick={() => downloadInvoice(order)}
                          className="w-full bg-white border border-green-300 text-green-700 hover:bg-green-50 font-semibold rounded-xl shadow hover:shadow-md transition-all duration-300"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download Invoice
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
