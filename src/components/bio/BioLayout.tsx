"use client";

import React from "react";
import Image from "next/image";

interface BioLayoutProps {
  children: React.ReactNode;
}

export default function BioLayout({ children }: BioLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-md mx-auto px-6 py-12">
        {/* Header with Logo and Title */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-6">
            <div className="w-28 h-28 rounded-full border-4 border-ondalis-ocean bg-white flex items-center justify-center shadow-lg">
              <Image
                src="/images/Ícone-2.png"
                alt="SPA Ondalis Logo"
                width={100}
                height={100}
                className="w-20 h-20 object-contain"
                priority
              />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-ondalis-deep mb-2 font-playfair">
            Ondalis
          </h1>
          <p className="text-sm text-gray-600">
            O fluxo natural do seu bem-estar
          </p>
        </div>

        {/* Bio Links */}
        <div className="space-y-3">{children}</div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} SPA Ondalis
          </p>
        </div>
      </div>
    </div>
  );
}
