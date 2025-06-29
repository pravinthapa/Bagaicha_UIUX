import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

import {
  Leaf,
  ShoppingCart,
  Book,
  Star,
  Truck,
  Shield,
  RefreshCw,
  Heart,
  Search,
  MapPin,
  Clock,
  Users,
  Flower,
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "./Header";
import ProductCard from "./ProductCard";
import PotShowcase from "./PotShowcase";
import image1 from "../../public/assets/guarantee.png";
import image2 from "../../public/assets/box-.png";
import image3 from "../../public/assets/best-price.png";
import image4 from "../../public/assets/customer-service.png";
import image5 from "../../public/assets/plant-2.png";
import image6 from "../../public/assets/email-.png";
import image7 from "../../public/assets/leaf-removebg-preview.png";
import indoor1 from "../../public/assets/indoor1-removebg-preview.png";
import indoor2 from "../../public/assets/indoor2-removebg-preview.png";
import outdoor3 from "../../public/assets/outdoor3-removebg-preview.png";
import outdoor2 from "../../public/assets/outdoor2-removebg-preview.png";
import flower4 from "../../public/assets/flowers7-removebg-preview (1).png";
import flower3 from "../../public/assets/flowers6-removebg-preview.png";

const HomePage = () => {
  const featuredProducts = [
    {
      id: "1",
      name: "Monstera Deliciosa",
      price: 4500,
      image: indoor1,
      description:
        "Beautiful split-leaf philodendron perfect for indoor",

      hasPot: true,
      potPrice: 15,
    },
    {
      id: "2",
      name: "Snake Plant",
      price: 2909,
      image: indoor2,
      description: "Low maintenance plant ideal for beginners",

      hasPot: true,
      potPrice: 12,
    },
    {
      id: "3",
      name: "Lavender Bush",
      price: 2500,
      image: outdoor3,
      description: "Fresh colorful tulips perfect for any occasion",

      hasPot: false,
    },
    {
      id: "4",
      name: "Rose Bush",
      price: 3500,
      image: outdoor2,
      description: "Beautiful roses for your outdoor garden",

      hasPot: true,
      potPrice: 18,
    },
    {
      id: "5",
      name: "Peace Lily",
      price: 2000,
      image: flower4,
      description: "Premium ceramic planters in various sizes",

      hasPot: false,
    },
    {
      id: "6",
      name: "sunflower seeds",
      price: 1800,
      image: flower3,
      description: "Fragrant lavender flowers for relaxation",

      hasPot: true,
      potPrice: 13,
    },
  ];

  const categories = [
    {
      name: "Indoor Plants",
      image: indoor2,
      count: "10+ Plants",
      icon: Leaf,
    },
    {
      name: "Outdoor Plants",
      image: outdoor2,
      count: "10+ Plants",
      icon: Leaf,
    },
    {
      name: "Fresh Flowers",
      image: flower3,
      count: "5+ Varieties",
      icon: Flower,
    },
    {
      name: "Designer Pots",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300",
      count: "4+ Designs",
      icon: ShoppingCart,
    },
  ];

  const features = [
    {
      title: "7-DAY GUARANTEE",
      image: image1,
      description:
        "If your plant dies within 7 days, we’ll replace it for free.",
    },
    {
      title: "DELIVERY",
      image: image2,
      description:
        "We deliver your order right at your doorstep. All you have to do is make few clicks.",
    },
    {
      title: "BEST PRICE AND QUALITY",
      image: image3,
      description:
        "Stay assured. You will get the best quality of products for what you pay.",
    },
    {
      title: "CUSTOMER SERVICE",
      image: image4,
      description:
        "Not just selling, we are always open to your queries regarding plants. At the end, your satisfaction is what matters.",
    },
    {
      title: "AFTER SALES SERVICE",
      image: image5,
      description:
        "We don't want your plants to die. We provide you all the tips and tricks you need to help your plants thrive.",
    },
    {
      title: "OFFERS",
      image: image6,
      description:
        "We frequently provide offers, giveaways which you can't miss.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-[#D9EBF7] py-16 mt-7 rounded-lg shadow-md mx-4 md:mx-16 lg:mx-32 px-4 md:px-16 lg:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-black mb-4">
              GET YOUR PERFECT <span className="text-green-500">GREEN</span>
              <br />
              FRIENDS
            </h1>
            <p className="text-base sm:text-lg text-gray-700 mb-8">
              Customized healthy Plants in our <br />
              Best-selling Planters.
            </p>
            <Link to="/products">
              <button className="bg-green-500 hover:bg-green-600 text-white text-lg font-semibold px-8 py-3 rounded-full shadow-md transition">
                Shop Now
              </button>
            </Link>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              src={image7}
              alt="Green Plants"
              className="w-full max-w-md rounded-xl object-cover"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-16 lg:px-32">
        <motion.div
          className="bg-[#F4F4F4] rounded-2xl shadow-lg p-6 md:p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured <span className="text-green-500">Products</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hand-picked selections from our most popular and beautiful plants
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {featuredProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                <ProductCard
                  product={{ ...product, currency: "NPR" }}
                  className="h-[200px]"
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link to="/products">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-semibold rounded-lg inline-flex items-center gap-2">
                <Leaf className="w-5 h-5" />
                View All Products
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-16 px-4 md:px-16 lg:px-32">
        <motion.div
          className="bg-[#F4F4F4] rounded-2xl shadow-lg p-6 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-green-500">Categories</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our wide range of plants and garden products
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {categories.map((category, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.95, y: 20 },
                  visible: { opacity: 1, scale: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0 shadow-md rounded-xl overflow-hidden bg-white">
                  <div className="relative overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-green-600 text-white p-2 rounded-full">
                      <category.icon className="w-5 h-5" />
                    </div>
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {category.name}
                    </h3>
                    <p className="text-green-600 font-medium">
                      {category.count}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <div className="px-4 py-8 md:px-16 lg:px-32">
        <motion.div
          className="bg-[#F4F4F4] rounded-2xl shadow-lg p-6 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-center text-3xl md:text-4xl font-semibold text-gray-800 mb-10"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            WHY <span className="text-green-500">BAGAICHA NEPAL?</span>
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow hover:shadow-md transition"
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-16 h-16 mb-4 transform transition-transform duration-300 hover:scale-110"
                />
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="px-4 py-8 pb-14 md:px-16 lg:px-32">
        <div className="flex items-center justify-center mb-8">
          <h1 className="text-black font-bold text-3xl md:text-4xl">
            Our <span className="text-green-500">Location</span>
          </h1>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14130.927050714601!2d85.32951861306434!3d27.694684219034322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199a06c2eaf9%3A0xc5670a9173e161de!2sNew%20Baneshwor%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1750919041824!5m2!1sen!2snp"
            width="600"
            height="450"
            className="w-full h-64 sm:h-80 md:h-[450px] lg:h-[500px]"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <footer className="bg-[#F2F2F2] text-black py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xl font-bold"> Bagaicha Nepal</span>
              </div>
              <p className="text-back mb-4">
                Your trusted partner in creating beautiful, thriving green
                spaces.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-black">
                <li>
                  <Link
                    to="/"
                    className="hover:text-green-400 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="hover:text-green-400 transition-colors"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-green-400 transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-green-400 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-black">
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Indoor Plants
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Outdoor Plants
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Fresh Flowers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-black">
                <p className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  New Baneshwor, Kathmandu
                </p>
                <p className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  +977 9744337622
                </p>
                <p className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  bagaichanepal123@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-green-400 mt-8 pt-8 text-center black">
            <p>&copy; 2025 Bagaicha Nepal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
