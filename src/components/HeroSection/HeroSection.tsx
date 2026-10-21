"use client";

import { CheckCircle2 } from "lucide-react";

export default function HeroSection() {
  const loanTypes = [
    "Home Loan",
    "Personal Loan",
    "Business Loan",
    "Vehicle Loan",
    "Loan Against Property",
  ];

  const features = [
    "Quick Approval Process",
    "Competitive Interest Rates",
    "Expert Consultants",
    "Flexible Repayment Terms",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'scroll',
      }}
    >
      {/* Gradient overlay for better contrast */}
      <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <span className="inline-block w-fit bg-linear-to-r from-amber-400 to-orange-500 text-white text-sm font-bold px-4 py-2 rounded-full mb-6 tracking-wide uppercase shadow-lg">
              ✨ Trusted Finance Partner
            </span>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 drop-shadow-lg">
              Your Dream <br />
              <span className="bg-linear-to-r from-yellow-300 via-amber-300 to-orange-300 bg-clip-text text-transparent">
                Starts Here
              </span>
            </h1>
            
            <p className="text-gray-100 text-lg sm:text-xl max-w-2xl mb-8 leading-relaxed font-light">
              Fast approvals, competitive rates, and expert guidance for all your financing needs. Let Meenakshi Associate turn your aspirations into reality.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                  <span className="text-white font-medium text-sm sm:text-base">{feature}</span>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="text-sm text-gray-200">
              <p className="mb-2 font-semibold">Why Choose Meenakshi Associate?</p>
              <p>✓ 10+ years of experience | ✓ 5000+ satisfied customers | ✓ 98% approval rate</p>
            </div>
          </div>

          {/* Right Content - Stats & Loan Types */}
          <div className="flex flex-col gap-8">
            
            {/* Stats Box */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl hover:bg-white/15 transition-all">
              <h3 className="text-white font-bold text-lg mb-6">Our Track Record</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "5000+", label: "Loans Processed" },
                  { value: "98%", label: "Approval Rate" },
                  { value: "10+", label: "Years Experience" },
                  { value: "24/7", label: "Customer Support" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-4xl sm:text-5xl font-black bg-linear-to-r from-yellow-300 via-amber-300 to-orange-300 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </p>
                    <p className="text-gray-200 text-sm font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Loan Products */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl hover:bg-white/15 transition-all">
              <h3 className="text-white font-bold text-lg mb-6">Our Loan Products</h3>
              <div className="grid grid-cols-2 gap-3">
                {loanTypes.map((loan) => (
                  <div
                    key={loan}
                    className="bg-linear-to-br from-amber-500/20 to-orange-500/20 hover:from-amber-500/40 hover:to-orange-500/40 text-white px-4 py-3 rounded-lg font-medium text-sm transition-all duration-300 cursor-pointer border border-amber-400/30 hover:border-amber-400/60"
                  >
                    {loan}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
