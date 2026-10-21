"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const posters = [
  {
    src: "/Image/posters/homeloan.png",
    alt: "Home Loan",
  },
  {
    src: "/Image/posters/personalloan.png",
    alt: "Personal Loan",
  },
  {
    src: "/Image/posters/businessloan.png",
    alt: "Business Loan",
  },
  {
    src: "/Image/posters/vehicleloan.png",
    alt: "Vehicle Loan",
  },
  {
    src: "/Image/posters/propertyloan.png",
    alt: "Property Loan",
  },
];

export default function PosterCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev + 1) % posters.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-linear-to-b from-gray-50 to-white py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3">
            Our <span className="text-amber-600">Financial Products</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg">
            Explore our range of loan solutions tailored for you
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl bg-linear-to-br from-amber-50 to-orange-50 border border-amber-200">
          {/* Slides Wrapper */}
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-137.5">
            {posters.map((poster, index) => {
              let position = "translate-x-full opacity-0";
              let delay = 0;

              if (index === currentIndex) {
                position = "translate-x-0 opacity-100";
                delay = 0;
              } else if (
                index === (currentIndex - 1 + posters.length) % posters.length
              ) {
                position = "-translate-x-full opacity-0";
                delay = 0;
              }

              return (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${position} ${
                    isTransitioning ? "" : ""
                  }`}
                >
                  <div className="relative w-full h-full bg-linear-to-br from-yellow-50 via-amber-50 to-orange-50 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12">
                    <Image
                      src={poster.src}
                      alt={poster.alt}
                      fill
                      className="object-contain p-2 sm:p-3 md:p-4"
                      quality={95}
                      priority={index === currentIndex}
                    />
                  </div>
                </div>
              );
            })}
          </div>


        </div>


      </div>
    </section>
  );
}
