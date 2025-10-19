"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      title: "Massagem Relaxante Corporal",
      description:
        "Toques suaves e ritmados que aliviam o estresse, reduzem a tensão muscular e promovem equilíbrio entre corpo e mente. Uma experiência perfeita para quem busca tranquilidade e descanso profundo.",
      image: "/images/01.jpg",
      icon: "💆‍♀️",
      comingSoon: false,
    },
    {
      title: "Massagem Terapêutica",
      description:
        "Técnica focada no alívio de dores musculares e tensões localizadas. Utiliza movimentos firmes e precisos para restaurar o equilíbrio corporal, proporcionando bem-estar e leveza imediata.",
      image: "/images/02.jpg",
      icon: "🪶",
      comingSoon: false,
    },
    {
      title: "Liberação Miofascial",
      description:
        "Terapia manual que utiliza pressão e alongamento para aliviar dores musculares e tensões na fáscia. Melhora a flexibilidade, mobilidade e reduz o desconforto muscular. Ideal para dores crônicas, recuperação pós-exercício e prevenção de lesões.",
      image: "/images/08.jpg",
      icon: "⚡",
      comingSoon: false,
    },
    {
      title: "Massagem Relaxante + Pedras Quentes",
      description:
        "O calor das pedras vulcânicas aliado a toques relaxantes promove uma sensação única de conforto e renovação. Essa técnica estimula a circulação, alivia tensões e equilibra as energias do corpo.",
      image: "/images/04.jpg",
      icon: "🔥",
      comingSoon: false,
    },
    {
      title: "Massagem Relaxante + Pindas Chinesas",
      description:
        "Técnica milenar oriental que utiliza saquinhos de ervas medicinais aquecidos. O calor terapêutico combinado com movimentos suaves promove relaxamento profundo, alivia tensões e melhora a circulação, proporcionando bem-estar e equilíbrio.",
      image: "/images/07.jpg",
      icon: "🍃",
      comingSoon: false,
    },
    {
      title: "Massagem Relaxante + Head Massage",
      description:
        "Terapia focada na cabeça, couro cabeludo e região cervical. Melhora a circulação, reduz o cansaço mental e promove clareza e leveza — perfeita para quem busca aliviar o estresse do dia a dia.",
      image: "/images/05.png",
      icon: "🧘",
      comingSoon: true,
    },
    {
      title: "Massagem Relaxante + Ondalis Experience (Exclusiva)",
      description:
        "A experiência assinatura do SPA Ondalis. Uma combinação harmoniosa de técnicas relaxantes, aromaterapia e cuidado personalizado. Um ritual completo de renovação e equilíbrio para corpo, mente e alma.",
      image: "/images/06.png",
      icon: "🌊",
      comingSoon: true,
    },
  ];

  return (
    <section id="services" ref={ref} className="py-20 bg-ondalis-navy">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nossos Serviços
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-ondalis-turquoise to-ondalis-ocean mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ondalis-deep/80 to-transparent" />
                  <div className="absolute top-4 right-4 text-3xl">
                    {service.icon}
                  </div>
                  {service.comingSoon && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-ondalis-turquoise to-ondalis-ocean text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
                      Em Breve 🔜
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-ondalis-deep mb-3">
                    {service.title}
                  </h3>
                  <p className="text-ondalis-night leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-white/80 text-lg mb-6">
            Todos os nossos serviços são personalizados para atender às suas
            necessidades específicas.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById("booking");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-gradient-to-r from-ondalis-turquoise to-ondalis-ocean text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Agendar Sessão
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
