"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

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

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ondalis-turquoise focus:border-transparent transition-all duration-300"
                  placeholder="seu@email.com"
                />
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ondalis-turquoise focus:border-transparent transition-all duration-300"
                  placeholder="(11) 99999-9999"
                />
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
                  <option value="Massagem Relaxante com Pindas Chinesas">
                    Massagem Relaxante com Pindas Chinesas
                  </option>
                  <option value="Massagem Terapêutica">
                    Massagem Terapêutica
                  </option>
                  <option value="Massagem + Liberação Miofascial">
                    Massagem + Liberação Miofascial
                  </option>
                  <option value="Massagem Relaxante + Pedras Quentes">
                    Massagem Relaxante + Pedras Quentes
                  </option>
                  <option value="Head Massage (Cabeça e Cervical) - Em Breve">
                    Head Massage (Cabeça e Cervical) - Em Breve
                  </option>
                  <option value="Ondalis Experience (Exclusiva) - Em Breve">
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
                <p>Segunda a Sexta: 8h às 20h</p>
                <p>Sábado: 8h às 18h</p>
                <p>Domingo: 9h às 16h</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
