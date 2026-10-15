"use client";

import { useState } from "react";
import {
  Shield,
  Clock,
  Award,
  Headphones,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Secure & Confidential",
    description:
      "Your financial data is protected with bank-grade encryption. We never share your information without consent.",
    highlight: "100% Safe",
    bgClass: "from-emerald-500 to-cyan-500",
    badgeClass: "bg-emerald-500",
  },
  {
    icon: Clock,
    title: "Quick Processing",
    description:
      "From application to approval in 48 hours. Get instant eligibility checks and same-day document verification.",
    highlight: "48 Hour Approval",
    bgClass: "from-blue-500 to-purple-500",
    badgeClass: "bg-blue-500",
  },
  {
    icon: Award,
    title: "Competitive Rates",
    description:
      "Access to 25+ banks and NBFCs. We compare rates across lenders to find you the lowest interest options.",
    highlight: "Starting 8.5% p.a.",
    bgClass: "from-orange-500 to-yellow-500",
    badgeClass: "bg-orange-500",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description:
      "Dedicated loan advisors available throughout your journey. Get answers in minutes, not days.",
    highlight: "24/7 Assistance",
    bgClass: "from-pink-500 to-red-500",
    badgeClass: "bg-pink-500",
  },
  {
    icon: TrendingUp,
    title: "High Approval Rate",
    description:
      "95% application success rate. Our pre-screening process ensures you apply to the right lenders first time.",
    highlight: "95% Success",
    bgClass: "from-violet-500 to-fuchsia-500",
    badgeClass: "bg-violet-500",
  },
  {
    icon: CheckCircle2,
    title: "Zero Hidden Charges",
    description:
      "What you see is what you pay. Complete transparency in processing fees, interest rates, and documentation.",
    highlight: "No Surprises",
    bgClass: "from-lime-500 to-emerald-500",
    badgeClass: "bg-lime-500",
  },
];

export default function WhyChooseUs() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section className="relative py-20 bg-linear-to-b from-slate-50 to-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Award size={16} />
            <span>Why Customers Trust Us</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Experience The Difference With{" "}
            <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              MM Finance
            </span>
          </h2>
          
          <p className="text-lg text-gray-600">
            Trusted by over 10,000 customers across Tamil Nadu. We make loan applications simple, fast, and hassle-free.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Card */}
              <div className={`relative h-full bg-white rounded-2xl border-2 transition-all duration-500 overflow-hidden ${
                activeCard === index 
                  ? 'border-transparent shadow-2xl shadow-blue-500/20 -translate-y-2' 
                  : 'border-gray-200 shadow-lg hover:border-gray-300'
              }`}>
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-linear-to-br ${feature.bgClass} opacity-0 transition-opacity duration-500 ${
                  activeCard === index ? 'opacity-100' : ''
                }`} />
                
                {/* Content Container */}
                <div className="relative bg-white m-0.5 rounded-2xl p-8 h-full">
                  {/* Icon Circle */}
                  <div className={`relative mb-6 w-16 h-16 rounded-2xl bg-linear-to-br ${feature.bgClass} p-1 transform transition-all duration-500 ${
                    activeCard === index ? 'scale-110 rotate-6' : 'scale-100 rotate-0'
                  }`}>
                    <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-gray-700" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Highlight Badge */}
                  <div className={`inline-block mb-4 px-3 py-1 rounded-full text-xs font-bold ${feature.badgeClass} text-white`}>
                    {feature.highlight}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Animated Check Mark */}
                  <div className={`absolute bottom-8 right-8 w-10 h-10 rounded-full bg-linear-to-br ${feature.bgClass} flex items-center justify-center transform transition-all duration-500 ${
                    activeCard === index ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                  }`}>
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 bg-linear-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-white">10,000+</div>
              <div className="text-blue-100">Satisfied Customers</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-white">₹500Cr+</div>
              <div className="text-blue-100">Loans Disbursed</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-white">25+</div>
              <div className="text-blue-100">Banking Partners</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-white">4.8/5</div>
              <div className="text-blue-100">Customer Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
