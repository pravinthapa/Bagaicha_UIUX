
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Leaf, ArrowLeft, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
            <h1 className="text-5xl md:text-6xl font-light mb-6">Get in Touch</h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
              Have questions about plants or need gardening advice? 
              <span className="block mt-2">We're here to help you grow!</span>
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-green-50/30 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8">
                <CardTitle className="text-3xl font-light flex items-center">
                  <Send className="w-8 h-8 mr-3" />
                  Send us a Message
                </CardTitle>
                <p className="text-green-100 mt-2">We'd love to hear from you</p>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="border-green-200 focus:border-green-400 focus:ring-green-400 h-12 text-lg rounded-xl"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="border-green-200 focus:border-green-400 focus:ring-green-400 h-12 text-lg rounded-xl"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-3">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What can we help you with?"
                      className="border-green-200 focus:border-green-400 focus:ring-green-400 h-12 text-lg rounded-xl"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your question or how we can help..."
                      className="flex w-full rounded-xl border border-green-200 bg-background px-4 py-3 text-lg ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white h-14 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-green-50/30 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-8">
                <CardTitle className="text-3xl font-light">Contact Information</CardTitle>
                <p className="text-emerald-100 mt-2">We're always here to help</p>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center shadow-lg">
                    <MapPin className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 mb-2">Visit Our Store</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Thapa marga<br />
                    New Baneshwor  <br />
                      kathmandu
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center shadow-lg">
                    <Phone className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 mb-2">Call Us</h3>
                    <p className="text-gray-600 text-lg">9744337622</p>
                    <p className="text-sm text-green-600 font-medium">Free plant consultation</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center shadow-lg">
                    <Mail className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 mb-2">Email Us</h3>
                    <p className="text-gray-600 text-lg">Bagaichanepal123@gmail.com</p>
                    <p className="text-sm text-green-600 font-medium">24/7 support available</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center shadow-lg">
                    <Clock className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 mb-2">Store Hours</h3>
                    <div className="text-gray-600 text-lg space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 5:00 PM</p>
                      <p>Sunday: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-green-600 to-emerald-600 text-white overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Leaf className="w-8 h-8 mr-3" />
                  <h3 className="text-2xl font-bold">Need Immediate Help?</h3>
                </div>
                <p className="text-green-100 mb-6 text-lg leading-relaxed">
                  For urgent plant care questions, check out our comprehensive FAQ section or call us during business hours for expert advice.
                </p>
                <Button 
                  variant="outline" 
                  className="text-white border-white/30 hover:bg-white/20 backdrop-blur-sm bg-[#3DB07B] rounded-xl h-12 text-lg font-semibold transition-all duration-300"
                >
                  View Plant Care FAQ
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Features Section */}
        <div className="mt-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">Why Choose Us?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">We're passionate about plants and committed to your success</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-green-50/30 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Leaf className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Advice</h3>
                <p className="text-gray-600">Get personalized plant care tips from our certified horticulturists</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-green-50/30 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Phone className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Support</h3>
                <p className="text-gray-600">Round-the-clock assistance for all your plant emergencies</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-green-50/30 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Mail className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Response</h3>
                <p className="text-gray-600">We respond to all inquiries within 24 hours guaranteed</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
