import {
  Home,
  User,
  Briefcase,
  Car,
  Building2,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Home Loan",
    description:
      "Buy your dream home with attractive interest rates, flexible tenure up to 30 years, and minimal documentation.",
    features: ["Up to ₹5 Crore", "8.5% Interest p.a.", "30 Year Tenure"],
    image: "/Image/services/home.jpg",
  },
   {
    icon: Building2,
    title: "Loan Against Property",
    description:
      "Unlock the value of your property. Get loans against residential or commercial properties at low interest rates.",
    features: ["Up to 70% LTV", "Low Interest", "Long Tenure"],
    image: "/Image/services/property.jpg",
   
  },
    {
    icon: Car,
    title: "Vehicle Loan",
    description:
      "Finance your new car or two-wheeler with competitive rates and easy EMI options across all major brands.",
    features: ["Car & Bike Loans", "90% Financing", "Quick Approval"],
    image: "/Image/services/vehicle.jpg",
    
  },
  {
    icon: User,
    title: "Personal Loan",
    description:
      "Instant personal loans for medical emergencies, travel, education, or any personal need — no collateral required.",
    features: ["Up to ₹50 Lakhs", "Quick Disbursal", "No Collateral"],
    image: "/Image/services/personal.jpg",
   
  },
  {
    icon: Briefcase,
    title: "Business Loan",
    description:
      "Grow your business with our tailored business loan solutions. Working capital, equipment finance, and more.",
    features: ["Up to ₹2 Crore", "Flexible EMI", "Minimal Docs"],
    image: "/Image/services/business.jpg",
    
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-linear-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-amber-100 to-orange-100 rounded-full blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-linear-to-tr from-yellow-100 to-amber-100 rounded-full blur-3xl opacity-20 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-amber-600 font-bold text-sm uppercase tracking-widest mb-4 px-4 py-2 bg-amber-50 rounded-full">
            ✨ Our Services
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mt-4 mb-6 leading-tight">
            Loan Solutions for <span className="bg-linear-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Every Need</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            From home loans to business finance, we offer a complete range of
            loan products tailored to your requirements.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const ServiceIcon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Animated gradient border */}
                <div className="absolute -inset-0.5 bg-linear-to-r from-amber-500 via-orange-500 to-yellow-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur -z-10 group-hover:blur-lg"></div>
                
                {/* Card */}
                <div className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full flex flex-col border border-gray-200 group-hover:border-transparent">
                  {/* Card Image with Overlay */}
                  <div className="relative h-56 overflow-hidden bg-gray-200">
                    <div
                      className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700 ease-out"
                      style={{
                        backgroundImage: `url("${service.image}")`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/40 group-hover:via-black/10 transition-all duration-500" />
                    </div>

                    {/* Icon Circle */}
                    <div className="absolute top-4 left-4 w-16 h-16 bg-linear-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <ServiceIcon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-7 flex flex-col grow">
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Animated line under title */}
                    <div className="h-1 w-12 bg-linear-to-r from-amber-500 to-orange-500 rounded-full mb-4 group-hover:w-full transition-all duration-500"></div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 grow">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.map((feature) => (
                        <span 
                          key={feature} 
                          className="text-amber-700 text-xs font-semibold px-3 py-1.5 bg-linear-to-r from-amber-50 to-orange-50 rounded-full border border-amber-200 group-hover:border-amber-400 group-hover:bg-amber-100 transition-all duration-300"
                        >
                          ✓ {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
