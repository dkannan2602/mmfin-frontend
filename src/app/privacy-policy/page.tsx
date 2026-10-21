"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function PrivacyPolicy() {
  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    setLastUpdated(
      new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    );
  }, []);

  const contactInfo = {
    email: "info@meenakshi-associate.in",
    phone: "+91 98765 43210",
    address: "123, Anna Salai, Chennai – 600 002, Tamil Nadu",
    businessHours: "Mon – Sat: 9:00 AM – 7:00 PM"
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Content Section */}
      <main className="bg-gray-50 pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-600">
              Last updated: {lastUpdated || "Loading..."}
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Meenakshi Associate ("we", "our", or "us") is committed to
                protecting your privacy. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                visit our website and use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Information We Collect
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may collect information about you in a variety of ways. The
                information we may collect on the Site includes:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>
                  <strong>Personal Data:</strong> Name, email address, phone
                  number, and other information you provide voluntarily
                </li>
                <li>
                  <strong>Financial Information:</strong> Loan amounts, income
                  details, and credit information
                </li>
                <li>
                  <strong>Usage Data:</strong> Pages visited, time spent on the
                  site, and device information
                </li>
                <li>
                  <strong>Cookie Data:</strong> Information collected through
                  cookies and similar technologies
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the information we collect in the following ways:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>To process and fulfill your loan applications</li>
                <li>To communicate with you about your account and services</li>
                <li>To improve our website and services</li>
                <li>To comply with legal and regulatory requirements</li>
                <li>To protect against fraud and unauthorized access</li>
                <li>To send promotional materials (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Data Security
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We use administrative, technical, and physical security measures
                to protect your personal information. However, no method of
                transmission over the Internet or method of electronic storage is
                100% secure. While we strive to use commercially acceptable means
                to protect your personal information, we cannot guarantee its
                absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Third-Party Disclosure
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We do not sell, trade, or rent your personal information to third
                parties. We may share your information with lending partners and
                service providers who need access to your information to assist
                in processing your loan application, subject to confidentiality
                agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Your Rights
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>The right to access your personal information</li>
                <li>The right to correct inaccurate data</li>
                <li>The right to request deletion of your data</li>
                <li>The right to opt-out of marketing communications</li>
                <li>The right to data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about this Privacy Policy or our
                privacy practices, please contact us at:
              </p>
              <div className="mt-4 text-gray-700 space-y-2">
                <p>
                  <strong>Email:</strong> {contactInfo.email}
                </p>
                <p>
                  <strong>Phone:</strong> {contactInfo.phone}
                </p>
                <p>
                  <strong>Address:</strong> {contactInfo.address}
                </p>
                <p>
                  <strong>Business Hours:</strong> {contactInfo.businessHours}
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
