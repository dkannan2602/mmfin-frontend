"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

interface ContactInfo {
  officeAddress: string;
  phone: string;
  email: string;
  businessHours: string;
}

export default function ContactSection() {
  const [contactInfo] = useState<ContactInfo>({
    officeAddress: '123, Anna Salai, Chennai – 600 002, Tamil Nadu',
    phone: '+91 98765 43210',
    email: 'info@meenakshi-associate.in',
    businessHours: 'Mon – Sat: 9:00 AM – 7:00 PM'
  });

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-amber-600 font-semibold text-sm uppercase tracking-widest mb-4">
            Get in Touch
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Let's Connect
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Reach out to our team for expert financial solutions. We're available across multiple channels to serve you better.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Contact Item 1 */}
            <div className="flex gap-6 group cursor-pointer">
              <div className="shrink-0">
                <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-linear-to-br from-amber-100 to-orange-100 group-hover:from-amber-200 group-hover:to-orange-200 transition-all">
                  <Phone className="h-8 w-8 text-amber-700" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="text-gray-600 font-medium hover:text-amber-700 transition-colors"
                >
                  {contactInfo.phone}
                </a>
                <p className="text-sm text-gray-500 mt-1">Available 9 AM - 7 PM</p>
              </div>
            </div>

            {/* Contact Item 2 */}
            <div className="flex gap-6 group cursor-pointer">
              <div className="shrink-0">
                <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-linear-to-br from-yellow-100 to-amber-100 group-hover:from-yellow-200 group-hover:to-amber-200 transition-all">
                  <Mail className="h-8 w-8 text-amber-700" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-600 font-medium hover:text-amber-700 transition-colors"
                >
                  {contactInfo.email}
                </a>
                <p className="text-sm text-gray-500 mt-1">We reply within 24 hours</p>
              </div>
            </div>

            {/* Contact Item 3 */}
            <div className="flex gap-6 group cursor-pointer">
              <div className="shrink-0">
                <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-linear-to-br from-orange-100 to-amber-100 group-hover:from-orange-200 group-hover:to-amber-200 transition-all">
                  <MapPin className="h-8 w-8 text-amber-700" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600 font-medium">
                  {contactInfo.officeAddress}
                </p>
                <p className="text-sm text-gray-500 mt-1">Open Monday to Saturday</p>
              </div>
            </div>

            {/* Contact Item 4 */}
            <div className="flex gap-6 group cursor-pointer">
              <div className="shrink-0">
                <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-linear-to-br from-amber-100 to-yellow-100 group-hover:from-amber-200 group-hover:to-yellow-200 transition-all">
                  <Clock className="h-8 w-8 text-amber-700" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Business Hours</h3>
                <p className="text-gray-600 font-medium">
                  {contactInfo.businessHours}
                </p>
                <p className="text-sm text-gray-500 mt-1">Lunch break: 1 PM - 2 PM</p>
              </div>
            </div>
          </div>

          {/* Right Content - Professional Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-br from-amber-100 to-orange-100 rounded-3xl blur-2xl opacity-50"></div>
            <div className="relative bg-white rounded-3xl p-10 shadow-2xl border border-amber-100">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Quick Inquiry</h3>
                <p className="text-gray-600">Ready to explore your financing options?</p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">Office Hours</p>
                  <p className="text-gray-600">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">Response Time</p>
                  <p className="text-gray-600">Email inquiries: Within 24 hours</p>
                  <p className="text-gray-600">Phone calls: Immediate assistance</p>
                </div>

                <div className="text-center pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    Contact us at{' '}
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-amber-700 font-semibold hover:text-amber-800"
                    >
                      {contactInfo.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
