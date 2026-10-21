"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function TermsOfService() {
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
                materials (information or software) on Meenakshi Associate's
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
                The materials on Meenakshi Associate's website are provided on
                an 'as is' basis. Meenakshi Associate makes no warranties,
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
                In no event shall Meenakshi Associate or its suppliers be
                liable for any damages (including, without limitation, damages for
                loss of data or profit, or due to business interruption) arising
                out of the use or inability to use the materials on the website,
                even if Meenakshi Associate or an authorized representative
                has been notified orally or in writing of the possibility of such
                damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Accuracy of Materials
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The materials appearing on Meenakshi Associate's website could
                include technical, typographical, or photographic errors. Meenakshi
                Associate does not warrant that any of the materials on its
                website are accurate, complete, or current. Meenakshi Associate
                may make changes to the materials contained on its website
                at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Materials and Content
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The materials on Meenakshi Associate's website are protected by
                copyright law. You may not reproduce, distribute, or transmit any
                content without prior written permission from Meenakshi Associate.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Links
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Meenakshi Associate has not reviewed all of the sites linked
                to its website and is not responsible for the contents of any such
                linked site. The inclusion of any link does not imply endorsement by
                Meenakshi Associate of the site. Use of any such linked
                website is at the user's own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. Modifications
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Meenakshi Associate may revise these Terms and Conditions for
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
                the exclusive jurisdiction of the courts located in Chennai, Tamil
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
