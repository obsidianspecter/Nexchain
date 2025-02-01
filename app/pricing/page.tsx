"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroGeometric from "@/components/hero-geometric";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const pricingPlans = [
  {
    name: "Basic",
    priceMonthly: 49,
    priceYearly: 49 * 12 * 0.8, // 20% discount
    description: "Perfect for beginners",
    features: ["Access to 1 course", "3 months of access", "Email support"],
    color: "from-gray-700 to-gray-900",
  },
  {
    name: "Pro",
    priceMonthly: 99,
    priceYearly: 99 * 12 * 0.8,
    description: "Best value for enthusiasts",
    features: [
      "Access to 3 courses",
      "6 months of access",
      "Priority email support",
      "1-on-1 mentoring session",
    ],
    color: "from-blue-600 to-blue-900",
  },
  {
    name: "Enterprise",
    priceMonthly: 199,
    priceYearly: 199 * 12 * 0.8,
    description: "Ideal for professionals",
    features: [
      "Access to all courses",
      "12 months of access",
      "24/7 priority support",
      "3 1-on-1 mentoring sessions",
      "Custom course roadmap",
    ],
    color: "from-purple-600 to-purple-900",
  },
];

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    // Set bg-transparent so that no solid color covers the geometric background
    <div className="relative flex flex-col min-h-screen bg-transparent text-foreground">
      {/* Geometric Background */}
      <div className="absolute inset-0 z-[-1]">
        <HeroGeometric className="w-full h-full" />
      </div>

      {/* Reflection of Geometric Background */}
      <div
        className="absolute inset-x-0 bottom-0 z-[-2] pointer-events-none"
        style={{
          height: "150px",
          transform: "scaleY(-1)",
          opacity: 0.3,
        }}
      >
        <HeroGeometric className="w-full h-full" />
      </div>

      <Header />
      <main className="flex-grow container mx-auto py-24 px-6 md:px-12 lg:px-16">
        {/* Page Title */}
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Choose Your Plan
        </motion.h1>

        {/* Pricing Toggle */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center space-x-4 bg-card px-6 py-3 rounded-lg border border-border shadow-md">
            <span
              className={`text-lg font-medium ${
                !isYearly ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Monthly
            </span>
            <button
              className="relative w-14 h-7 bg-gray-600 dark:bg-gray-800 rounded-full p-1 flex items-center"
              onClick={() => setIsYearly(!isYearly)}
            >
              <motion.div
                className="w-6 h-6 bg-white rounded-full shadow-md"
                layout
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                animate={{ x: isYearly ? 28 : 0 }}
              />
            </button>
            <span
              className={`text-lg font-medium ${
                isYearly ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Yearly (-20%)
            </span>
          </div>
        </div>

        {/* Additional Content: Introductory Description */}
        <section className="mb-16 text-center">
          <motion.p
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Choose the plan that fits your needs and unlock unlimited access to
            our courses, exclusive mentoring sessions, and priority support.
            Whether you're just starting out or looking to advance your career,
            we have a plan for you.
          </motion.p>
        </section>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card
                className={`bg-gradient-to-b ${plan.color} border border-border shadow-lg transition-all p-6 rounded-xl h-full flex flex-col`}
              >
                <CardHeader>
                  <CardTitle className="text-2xl sm:text-3xl">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-lg">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <motion.p
                    className="text-4xl sm:text-5xl font-bold mb-6"
                    key={isYearly ? plan.priceYearly : plan.priceMonthly}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    ${isYearly ? plan.priceYearly.toFixed(0) : plan.priceMonthly}
                  </motion.p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-lg"
                      >
                        <svg
                          className="w-5 h-5 mr-3 text-green-400"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 py-3 rounded-md">
                    Choose Plan
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Content: FAQ Section */}
        <section className="py-16">
          <motion.h2
            className="text-3xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-card p-6 rounded-lg border border-border shadow">
              <h3 className="text-xl font-semibold mb-2">
                What payment methods are accepted?
              </h3>
              <p className="text-lg">
                We accept all major credit cards, PayPal, and bank transfers.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border shadow">
              <h3 className="text-xl font-semibold mb-2">
                Can I upgrade my plan later?
              </h3>
              <p className="text-lg">
                Yes, you can upgrade your plan at any time and only pay the
                difference.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border shadow">
              <h3 className="text-xl font-semibold mb-2">
                Is there a money-back guarantee?
              </h3>
              <p className="text-lg">
                Absolutely, we offer a 30-day money-back guarantee on all our
                plans.
              </p>
            </div>
          </div>
        </section>

        {/* Additional Content: Testimonials Section */}
        <section className="py-16">
          <motion.h2
            className="text-3xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            What Our Customers Say
          </motion.h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-card p-6 rounded-lg border border-border shadow">
              <p className="text-lg italic mb-4">
                "This service has completely transformed the way I learn. The
                courses are top-notch and the support is excellent!"
              </p>
              <p className="text-lg font-semibold text-right">
                - Alex Johnson
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border shadow">
              <p className="text-lg italic mb-4">
                "I've upgraded from the Basic plan to the Pro plan and the value
                is incredible. Highly recommended!"
              </p>
              <p className="text-lg font-semibold text-right">
                - Maria Rodriguez
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
