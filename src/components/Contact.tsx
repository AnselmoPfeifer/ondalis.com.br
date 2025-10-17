"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
} from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    complaint: "",
    goal: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    phone: "",
  });

  // Função para validar email
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Função para formatar telefone brasileiro
  const formatPhone = (value: string) => {
    // Remove todos os caracteres não numéricos
    const numbers = value.replace(/\D/g, "");

    // Se não tem números, retorna vazio
    if (numbers.length === 0) {
      return "";
    }

    // Se tem apenas DDD (2 dígitos)
    if (numbers.length <= 2) {
      return `(${numbers}`;
    }

    // Se tem DDD completo mas ainda não tem número
    if (numbers.length <= 6) {
      const ddd = numbers.slice(0, 2);
      const phoneStart = numbers.slice(2);
      return `(${ddd}) ${phoneStart}`;
    }

    // Formatação completa: (67) 9999-9999 ou (67) 99999-9999
    const ddd = numbers.slice(0, 2);

    if (numbers.length <= 10) {
      // Formato antigo: (67) 9999-9999
      const phonePart1 = numbers.slice(2, 6);
      const phonePart2 = numbers.slice(6, 10);
      return `(${ddd}) ${phonePart1}${phonePart2 ? `-${phonePart2}` : ""}`;
    }

    // Formato com 9 dígitos: (67) 99999-9999
    const phonePart1 = numbers.slice(2, 7);
    const phonePart2 = numbers.slice(7, 11);
    return `(${ddd}) ${phonePart1}-${phonePart2}`;
  };

  // Função para validar telefone brasileiro
  const validatePhone = (phone: string) => {
    // Remove todos os caracteres não numéricos
    const cleanPhone = phone.replace(/\D/g, "");
    // Valida se tem 10 ou 11 dígitos (DDD + número)
    return cleanPhone.length === 10 || cleanPhone.length === 11;
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    // Aplicar formatação automática para telefone
    if (name === "phone") {
      const formattedValue = formatPhone(value);
      setFormData((prev) => ({ ...prev, [name]: formattedValue }));

      // Validação em tempo real
      if (value) {
        setErrors((prev) => ({
          ...prev,
          phone: validatePhone(formattedValue)
            ? ""
            : "Telefone inválido (formato: (DDD) 9999-9999 ou (DDD) 99999-9999)",
        }));
      } else {
        setErrors((prev) => ({ ...prev, phone: "" }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));

      // Validação em tempo real para email
      if (name === "email" && value) {
        setErrors((prev) => ({
          ...prev,
          email: validateEmail(value) ? "" : "Email inválido",
        }));
      } else if (name === "email") {
        setErrors((prev) => ({ ...prev, email: "" }));
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validação final antes de enviar
    const emailValid = validateEmail(formData.email);
    const phoneValid = validatePhone(formData.phone);

    if (!emailValid || !phoneValid) {
      setErrors({
        email: !emailValid ? "Email inválido" : "",
        phone: !phoneValid
          ? "Telefone inválido (formato: (DDD) 9999-9999 ou (DDD) 99999-9999)"
          : "",
      });
      return;
    }

    const message = `Olá! Gostaria de agendar uma sessão no SPA Ondalis.

*Dados do Cliente:*
Nome: ${formData.name}
E-mail: ${formData.email}
Telefone: ${formData.phone}

*Informações Adicionais:*
Principal queixa: ${formData.complaint}
Serviço de interesse: ${formData.goal}

Aguardo retorno para agendamento. Obrigado!`;

    const whatsappUrl = `${
      process.env.NEXT_PUBLIC_WHATSAPP_URL
    }?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    // Limpar formulário e erros após envio
    setFormData({
      name: "",
      email: "",
      phone: "",
      complaint: "",
      goal: "",
    });
    setErrors({
      email: "",
      phone: "",
    });
  };

  return (
    <section id="contact" ref={ref} className="py-20 bg-ondalis-navy">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Entre em Contato
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-ondalis-turquoise to-ondalis-ocean mx-auto rounded-full mb-8" />
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Tem alguma dúvida ou gostaria de mais informações? Estamos aqui para
            ajudar você a encontrar o relaxamento que precisa.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-ondalis-deep mb-6">
              Envie sua Mensagem
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-ondalis-deep mb-2"
                >
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ondalis-turquoise focus:border-transparent transition-all duration-300"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-ondalis-deep mb-2"
                >
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ondalis-turquoise focus:border-transparent transition-all duration-300 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="seu@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-ondalis-deep mb-2"
                >
                  Telefone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ondalis-turquoise focus:border-transparent transition-all duration-300 ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="(67) 99999-9999"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="complaint"
                  className="block text-sm font-medium text-ondalis-deep mb-2"
                >
                  Qual sua principal queixa? *
                </label>
                <textarea
                  id="complaint"
                  name="complaint"
                  value={formData.complaint}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ondalis-turquoise focus:border-transparent transition-all duration-300"
                  placeholder="Descreva brevemente sua principal queixa ou necessidade..."
                />
              </div>

              <div>
                <label
                  htmlFor="goal"
                  className="block text-sm font-medium text-ondalis-deep mb-2"
                >
                  Qual serviço você tem interesse? *
                </label>
                <select
                  id="goal"
                  name="goal"
                  value={formData.goal}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ondalis-turquoise focus:border-transparent transition-all duration-300"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="Massagem Relaxante Corporal">
                    Massagem Relaxante Corporal
                  </option>
                  <option value="Massagem Terapêutica">
                    Massagem Terapêutica
                  </option>
                  <option value="Liberação Miofascial">
                    Liberação Miofascial
                  </option>
                  <option value="Massagem Relaxante + Pedras Quentes">
                    Massagem Relaxante + Pedras Quentes
                  </option>
                  <option value="Massagem Relaxante + Pindas Chinesas">
                    Massagem Relaxante + Pindas Chinesas
                  </option>
                  <option value="Head Massage - Em Breve" disabled>
                    Head Massage - Em Breve
                  </option>
                  <option
                    value="Ondalis Experience (Exclusiva) - Em Breve"
                    disabled
                  >
                    Ondalis Experience (Exclusiva) - Em Breve
                  </option>
                  <option value="Ainda não sei">Ainda não sei</option>
                </select>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-ondalis-turquoise to-ondalis-ocean text-white py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <MessageCircle size={20} />
                <span>Enviar via WhatsApp</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Informações de Contato
              </h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-ondalis-turquoise to-ondalis-ocean rounded-full flex items-center justify-center">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white/80">Telefone</p>
                    <p className="text-white font-semibold">(67) 99999-9999</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-ondalis-turquoise to-ondalis-ocean rounded-full flex items-center justify-center">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white/80">E-mail</p>
                    <p className="text-white font-semibold">
                      contato@ondalis.com.br
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-ondalis-turquoise to-ondalis-ocean rounded-full flex items-center justify-center">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white/80">Endereço</p>
                    <p className="text-white font-semibold">
                      Rua Rui Barbosa, 900
                      <br />
                      Campo Grande - MS
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
              <h4 className="text-xl font-bold text-white mb-4">
                Horários de Funcionamento
              </h4>
              <div className="space-y-2 text-white/80">
                <p>Segunda a Sexta: 8h às 19:30h</p>
                <p>Sábado: 8h às 16h</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
              <h4 className="text-xl font-bold text-white mb-4">
                Redes Sociais
              </h4>
              <div className="flex space-x-4">
                <motion.a
                  href="https://facebook.com/ondalis.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-ondalis-turquoise transition-colors duration-300"
                >
                  <Facebook size={20} className="text-white" />
                </motion.a>
                <motion.a
                  href="https://instagram.com/ondalis.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-ondalis-turquoise transition-colors duration-300"
                >
                  <Instagram size={20} className="text-white" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
