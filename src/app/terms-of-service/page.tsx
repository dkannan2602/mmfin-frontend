"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Footer from "@/components/Footer/Footer";
import { settingsAPI } from "@/lib/api";

interface Settings {
  officeAddress: string;
  phone: string;
  email: string;
  businessHours: string;
}

export default function TermsOfService() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastUpdated, setLastUpdated] = useState("");
  const [settings, setSettings] = useState<Settings | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLastUpdated(
      new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    );
  }, []);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await settingsAPI.get();
        if (response.data.success) {
          setSettings(response.data.settings);
        }
      } catch (error) {
        console.error("Failed to fetch settings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">MM</span>
              </div>
              <span className="text-gray-900 font-bold text-lg hidden sm:inline">
                Madurai Meenakshi Finance
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/#services"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Services
              </Link>
              <Link
                href="/#about"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                About
              </Link>
              <Link
                href="/#contact"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X size={24} className="text-gray-900" />
              ) : (
                <Menu size={24} className="text-gray-900" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 flex flex-col gap-3">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 transition-colors block py-2"
              >
                Home
              </Link>
              <Link
                href="/#services"
                className="text-gray-700 hover:text-blue-600 transition-colors block py-2"
              >
                Services
              </Link>
              <Link
                href="/#about"
                className="text-gray-700 hover:text-blue-600 transition-colors block py-2"
              >
                About
              </Link>
              <Link
                href="/#contact"
                className="text-gray-700 hover:text-blue-600 transition-colors block py-2"
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Content Section */}
      <main className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-gray-600">
              Last updated: {lastUpdated || "Loading..."}
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Agreement to Terms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using this website and our services, you accept
                and agree to be bound by and abide by these Terms and Conditions.
                If you do not agree to abide by the above, please do not use this
                service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Use License
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the
                materials (information or software) on Madurai Meenakshi Finance's
                website for personal, non-commercial transitory viewing only. This
                is the grant of a license, not a transfer of title, and under this
                license you may not:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Modify or copy the materials</li>
                <li>
                  Use the materials for any commercial purpose or for any public
                  display
                </li>
                <li>
                  Attempt to decompile or reverse engineer any software contained
                  on the website
                </li>
                <li>Remove any copyright or other proprietary notations</li>
                <li>
                  Transfer the materials to another person or "mirror" the
                  materials on any other server
                </li>
                <li>
                  Engage in any fraudulent or deceptive activity related to loan
                  applications
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Disclaimer
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The materials on Madurai Meenakshi Finance's website are provided on
                an 'as is' basis. Madurai Meenakshi Finance makes no warranties,
                expressed or implied, and hereby disclaims and negates all other
                warranties including, without limitation, implied warranties or
                conditions of merchantability, fitness for a particular purpose, or
                non-infringement of intellectual property or other violation of
                rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Limitations
              </h2>
              <p className="text-gray-700 leading-relaxed">
                In no event shall Madurai Meenakshi Finance or its suppliers be
                liable for any damages (including, without limitation, damages for
                loss of data or profit, or due to business interruption) arising
                out of the use or inability to use the materials on the website,
                even if Madurai Meenakshi Finance or an authorized representative
                has been notified orally or in writing of the possibility of such
                damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Accuracy of Materials
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The materials appearing on Madurai Meenakshi Finance's website could
                include technical, typographical, or photographic errors. Madurai
                Meenakshi Finance does not warrant that any of the materials on its
                website are accurate, complete, or current. Madurai Meenakshi
                Finance may make changes to the materials contained on its website
                at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Materials and Content
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The materials on Madurai Meenakshi Finance's website are protected by
                copyright law. You may not reproduce, distribute, or transmit any
                content without prior written permission from Madurai Meenakshi
                Finance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Links
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Madurai Meenakshi Finance has not reviewed all of the sites linked
                to its website and is not responsible for the contents of any such
                linked site. The inclusion of any link does not imply endorsement by
                Madurai Meenakshi Finance of the site. Use of any such linked
                website is at the user's own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. Modifications
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Madurai Meenakshi Finance may revise these Terms and Conditions for
                its website at any time without notice. By using this website, you
                are agreeing to be bound by the then current version of these Terms
                and Conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. Governing Law
              </h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms and Conditions are governed by and construed in
                accordance with the laws of India, and you irrevocably submit to
                the exclusive jurisdiction of the courts located in Madurai, Tamil
                Nadu.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                10. Loan Application
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By submitting a loan application through our website:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>
                  You confirm that all information provided is accurate and true
                </li>
                <li>
                  You authorize us to verify your information with relevant parties
                </li>
                <li>You understand that fraud can result in legal action</li>
                <li>
                  You agree to the terms and conditions of the lending partners
                </li>
                <li>
                  Approval is not guaranteed and depends on credit assessment
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                11. Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about these Terms of Service, please
                contact us at:
              </p>
              <div className="mt-4 text-gray-700 space-y-2">
                {!loading && settings ? (
                  <>
                    <p>
                      <strong>Email:</strong> {settings.email}
                    </p>
                    <p>
                      <strong>Phone:</strong> {settings.phone}
                    </p>
                    <p>
                      <strong>Address:</strong> {settings.officeAddress}
                    </p>
                    <p>
                      <strong>Business Hours:</strong> {settings.businessHours}
                    </p>
                  </>
                ) : (
                  <p className="text-gray-500">Loading contact information...</p>
                )}
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
