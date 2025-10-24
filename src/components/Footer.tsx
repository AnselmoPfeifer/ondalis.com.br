"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Phone, Mail, MapPin, Clock } from "lucide-react";
import Image from "next/image";

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
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/images/Ícone-2.png"
                alt="SPA Ondalis Logo Icon"
                width={60}
                height={60}
                className="w-16 h-16 object-contain"
              />
              <Image
                src="/images/Nome-2.png"
                alt="SPA Ondalis Name"
                width={150}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="text-white/80 leading-relaxed mb-6">
              Equilíbrio e bem-estar em cada toque. Descubra o poder do
              relaxamento no Ondalis, onde renovamos corpo e mente através do
              toque e da calma.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://facebook.com/ondalis.br"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-ondalis-turquoise transition-colors duration-300"
              >
                <Facebook size={18} />
              </motion.a>
              <motion.a
                href="https://instagram.com/ondalis.br"
                target="_blank"
                rel="noopener noreferrer"
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
                <a
                  href="https://wa.me/5567981079935?text=Ol%C3%A1%21%20Vim%20pela%20p%C3%A1gina%20de%20Contato%20do%20Site%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20Massagens%21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-ondalis-turquoise transition-colors"
                >
                  (67) 9 8107-9935
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-ondalis-turquoise" />
                <span className="text-white/80">ondalis.br@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-ondalis-turquoise mt-1" />
                <div className="text-white/80">
                  <p>Rua Rui Barbosa 900 Loja 9</p>
                  <p>Campo Grande - MS</p>
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
                  <p>Seg - Sex: 8h às 19:30h</p>
                  <p>Sáb: 8h às 16h</p>
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
              © 2025 Ondalis. Todos os direitos reservados.
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
