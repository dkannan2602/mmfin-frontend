"use client";

import { useState } from "react";
import { Mail, Phone, Twitter } from "lucide-react";
import Image from "next/image";
import {
  BrandFacebook,
  BrandInstagram,
  BrandWhatsapp,
} from "tabler-icons-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const PHONE_NUMBER = "+91 98765 43210";
const EMAIL = "info@meenakshi-associate.in";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      {/* Top Info Bar */}
      <div className="bg-linear-to-r from-yellow-400 via-amber-400 to-orange-400 text-gray-900 py-2 sm:py-1.5 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
          {/* Phone on Mobile */}
          <a
            href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
            className="flex items-center gap-1.5 hover:text-gray-700 transition-colors text-xs sm:text-sm font-semibold"
          >
            <Phone size={14} />
            <span>{PHONE_NUMBER}</span>
          </a>

          {/* Email - Hidden on Mobile */}
          <a
            href={`mailto:${EMAIL}`}
            className="hidden sm:flex items-center gap-1.5 hover:text-gray-700 transition-colors text-xs sm:text-sm font-semibold"
          >
            <Mail size={14} />
            <span>{EMAIL}</span>
          </a>

          {/* Social Icons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-gray-700 hidden sm:inline text-xs font-semibold">Follow:</span>
            {[
              { icon: BrandFacebook, href: "#", label: "Facebook" },
              { icon: BrandInstagram, href: "#", label: "Instagram" },
              { icon: BrandWhatsapp, href: "#", label: "WhatsApp" },
              { icon: Twitter, href: "#", label: "Twitter" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="hover:text-gray-700 transition-colors text-gray-900 font-semibold"
              >
                <social.icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <Image
              src="/Image/logo/logo.png"
              alt="Meenakshi Associate"
              width={120}
              height={90}
              priority
              className="h-16 w-auto"
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-700 font-medium hover:text-amber-700 transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          <div className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 font-medium hover:text-amber-700 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
