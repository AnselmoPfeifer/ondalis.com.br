"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-ondalis-deep text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-ondalis-turquoise to-ondalis-ocean rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">O</span>
              </div>
              <span className="text-xl font-bold">SPA Ondalis</span>
            </div>
            <p className="text-white/80 leading-relaxed mb-6">
              Equilíbrio e bem-estar em cada toque. Descubra o poder do
              relaxamento no SPA Ondalis, onde renovamos corpo e mente através
              do toque e da calma.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-ondalis-turquoise transition-colors duration-300"
              >
                <Facebook size={18} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-ondalis-turquoise transition-colors duration-300"
              >
                <Instagram size={18} />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-white/80 hover:text-ondalis-turquoise transition-colors duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-white/80 hover:text-ondalis-turquoise transition-colors duration-300"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-white/80 hover:text-ondalis-turquoise transition-colors duration-300"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("booking")}
                  className="text-white/80 hover:text-ondalis-turquoise transition-colors duration-300"
                >
                  Agendamento
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-white/80 hover:text-ondalis-turquoise transition-colors duration-300"
                >
                  Contato
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-ondalis-turquoise" />
                <span className="text-white/80">(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-ondalis-turquoise" />
                <span className="text-white/80">contato@spaondalis.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-ondalis-turquoise mt-1" />
                <div className="text-white/80">
                  <p>Rua das Flores, 123</p>
                  <p>Jardim das Palmeiras</p>
                  <p>São Paulo - SP, 01234-567</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-6">Horários</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock size={18} className="text-ondalis-turquoise" />
                <div className="text-white/80">
                  <p>Seg - Sex: 8h às 20h</p>
                  <p>Sáb: 8h às 18h</p>
                  <p>Dom: 9h às 16h</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-white/20 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © 2024 SPA Ondalis. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-white/60 hover:text-ondalis-turquoise transition-colors duration-300"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-ondalis-turquoise transition-colors duration-300"
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
