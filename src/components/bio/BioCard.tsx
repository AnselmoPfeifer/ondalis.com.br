"use client";

import React from "react";
import Link from "next/link";

interface BioCardProps {
  title: string;
  description: string;
  icon: string;
  color: string;
  href: string;
  external?: boolean;
}

export default function BioCard({
  title,
  description,
  icon,
  color,
  href,
  external = false,
}: BioCardProps) {
  const cardContent = (
    <div className="bg-white border border-gray-200 rounded-xl p-5 hover:border-ondalis-turquoise hover:shadow-md transition-all duration-300 cursor-pointer group">
      <div className="flex items-center space-x-3">
        <span className="text-2xl">{icon}</span>
        <div className="flex-1">
          <h3 className="text-base font-semibold text-ondalis-deep group-hover:text-ondalis-turquoise transition-colors">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {cardContent}
      </a>
    );
  }

  return (
    <Link href={href} className="block">
      {cardContent}
    </Link>
  );
}
