import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

import {
  Leaf,
  Users,
  Award,
  Heart,
  ArrowLeft,
  Star,
  Target,
  Truck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import image from "../../public/assets/botanical image.webp";

const About = () => {
  const navigate = useNavigate();

  const values = [
    {
      icon: Leaf,
      title: "Sustainability",
      description:
        "We're committed to eco-friendly practices and sustainable growing methods",
    },
    {
      icon: Heart,
      title: "Passion",
      description:
        "Our love for plants drives everything we do, from selection to customer care",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "Building a community of plant lovers who support and learn from each other",
    },
    {
      icon: Award,
      title: "Quality",
      description:
        "We source only the highest quality plants and provide expert care guidance",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r mx-4 md:mx-40 shadow-emerald-500 mt-10 from-green-600 via-emerald-600 to-teal-600 overflow-hidden">
        {/* Decorative Leaves */}
        <div className="absolute inset-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.2, scale: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="absolute top-10 left-10"
          >
            <Leaf className="w-32 h-32 text-white rotate-12" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="absolute bottom-20 right-20"
          >
            <Leaf className="w-24 h-24 text-white -rotate-45" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="absolute top-1/2 left-1/3"
          >
            <Leaf className="w-20 h-20 text-white rotate-90" />
          </motion.div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Button
              onClick={() => navigate(-1)}
              variant="ghost"
              className="text-white hover:text-white hover:bg-white/20 backdrop-blur-sm rounded-full"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </motion.div>

          {/* Heading & Text */}
          <div className="text-center text-white">
            <motion.h1
              className="text-5xl md:text-6xl font-light mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              About Bagaicha Nepal
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Your trusted partner in creating beautiful green spaces
              <span className="block mt-2">
                Founded on passion, driven by quality
              </span>
            </motion.p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Stats Section */}
        {/* <div className="mb-20">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="border-0 shadow-xl bg-gradient-to-br from-white to-green-50/30 text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-8">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">
                    {stat.number}
                  </div>
                  <p className="text-gray-600 font-medium text-lg">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}

        {/* Our Story */}
        <div className="mb-20">
          <motion.div
            className="border-0 shadow-2xl bg-gradient-to-br from-white to-green-50/30 overflow-hidden rounded-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="grid lg:grid-cols-2">
              {/* Left Text Side */}
              <motion.div
                className="p-12"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-4xl font-light text-gray-900 mb-6">
                  Our Story
                </h2>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Founded in 2025, Bagaicha Nepal started as a small family
                    business with a simple mission: to bring the beauty and
                    benefits of plants into every home and office.
                  </p>
                  <p>
                    What began as a passion project in our founder's greenhouse
                    has grown into a thriving community of plant enthusiasts,
                    serving customers across the country with premium plants and
                    expert guidance.
                  </p>
                  <p>
                    Today, we're proud to be your trusted partner in creating
                    beautiful, healthy green spaces that improve both your
                    environment and well-being.
                  </p>
                </div>
              </motion.div>

              {/* Right Image Side */}
              <motion.div
                className="relative h-96 lg:h-auto"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <img
                  src={image}
                  alt="Our greenhouse"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          {/* Heading */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          {/* Value Cards Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
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
            viewport={{ once: true, amount: 0.2 }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.5 }}
              >
                <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-green-50/30 text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <value.icon className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <Card className="border-0 shadow-2xl bg-gradient-to-r from-green-600 to-emerald-600 text-white overflow-hidden rounded-xl">
            <CardContent className="p-12 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Target className="w-16 h-16 mx-auto mb-6 opacity-80" />
              </motion.div>

              <motion.h2
                className="text-4xl font-light mb-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Our Mission
              </motion.h2>

              <motion.p
                className="text-xl leading-relaxed max-w-4xl mx-auto opacity-90"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                To inspire and enable people to create beautiful, thriving green
                spaces that enhance their lives, improve their well-being, and
                contribute to a more sustainable world. We believe that everyone
                deserves to experience the joy and benefits of plants,
                regardless of their experience level.
              </motion.p>

              <motion.div
                className="mt-8 flex justify-center space-x-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.15,
                    },
                  },
                }}
              >
                {[
                  ["Premium Quality", Star],
                  ["Expert Care", Heart],
                  ["Fast Delivery", Truck],
                ].map(([label, Icon], index) => (
                  <motion.div
                    key={index}
                    className="flex items-center"
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-6 h-6 mr-2" />
                    <span className="text-lg">{label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
