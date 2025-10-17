"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateToSection = (sectionId: string) => {
    setIsMenuOpen(false);

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Sobre", id: "about" },
    { name: "Contato", id: "contact" },
    { name: "Serviços", id: "services" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-ondalis-deep/95 backdrop-blur-md shadow-lg"
          : "bg-ondalis-deep/95 backdrop-blur-md shadow-lg"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => navigateToSection("home")}
            className="flex items-center space-x-3 transition-opacity hover:opacity-80"
          >
            <Image
              src="/images/Ícone-2.png"
              alt="SPA Ondalis Logo"
              width={60}
              height={60}
              className="w-16 h-16 object-contain"
              priority
            />
            <span className="text-xl font-bold text-white">SPA Ondalis</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigateToSection(item.id)}
                className="text-white hover:text-ondalis-turquoise transition-colors font-medium"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => navigateToSection("booking")}
              className="bg-gradient-to-r from-ondalis-turquoise to-ondalis-ocean text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              🎯 Agendamento
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            className="md:hidden bg-ondalis-navy/95 backdrop-blur-md rounded-2xl mt-2 p-4 mb-4"
            role="navigation"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigateToSection(item.id)}
                  className="text-white hover:text-ondalis-turquoise transition-colors font-medium text-left"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => navigateToSection("booking")}
                className="bg-gradient-to-r from-ondalis-turquoise to-ondalis-ocean text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 mt-2 w-full text-center"
              >
                🎯 Agendamento
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
