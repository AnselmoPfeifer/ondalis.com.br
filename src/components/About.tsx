"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-ondalis-deep mb-6">
              Sobre Nós (Ondalis)
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-ondalis-turquoise to-ondalis-ocean mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg text-ondalis-navy leading-relaxed">
                Ondalis nasce da fusão entre duas ideias universais: 'Onda'
                símbolo do movimento natural da vida, das águas, da energia que
                flui em constante transformação.
              </p>
              <p className="text-lg text-ondalis-navy leading-relaxed">
                E 'Lis', termo de origem latina e francesa que remete à pureza e
                harmonia (como no “Lírio”, flor associada à renovação e
                serenidade).
              </p>
              <p className="text-lg text-ondalis-navy leading-relaxed">
                Juntas, essas forças representam o propósito da marca: trazer
                equilíbrio, fluidez e leveza, conduzindo cada pessoa de volta ao
                seu estado natural de bem-estar.
              </p>
              <p className="text-lg text-ondalis-navy leading-relaxed">
                Assim, Ondalis não é apenas um nome é um convite. Um convite
                para se deixar levar pelo movimento das ondas internas,
                redescobrir o silêncio do corpo e o fluxo tranquilo da mente.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="text-center p-6 bg-ondalis-deep/5 rounded-xl">
                  <div className="w-16 h-16 bg-gradient-to-br from-ondalis-turquoise to-ondalis-ocean rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🌿</span>
                  </div>
                  <h4 className="text-xl font-semibold text-ondalis-deep mb-2">
                    Ambiente Natural
                  </h4>
                  <p className="text-ondalis-navy">
                    Espaço harmonioso inspirado na natureza para seu relaxamento
                    completo.
                  </p>
                </div>

                <div className="text-center p-6 bg-ondalis-deep/5 rounded-xl">
                  <div className="w-16 h-16 bg-gradient-to-br from-ondalis-turquoise to-ondalis-ocean rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">👥</span>
                  </div>
                  <h4 className="text-xl font-semibold text-ondalis-deep mb-2">
                    Profissionais Qualificados
                  </h4>
                  <p className="text-ondalis-navy">
                    Equipe especializada em técnicas de massoterapia e
                    bem-estar.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Ambiente relaxante do Ondalis"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ondalis-deep/30 to-transparent" />
              </div>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-ondalis-deep">5+</div>
                  <div className="text-sm text-ondalis-navy">
                    Anos de experiência
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-6"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-ondalis-deep">
                    1000+
                  </div>
                  <div className="text-sm text-ondalis-navy">
                    Clientes satisfeitos
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-20 text-center"
          >
            <div className="bg-gradient-to-r from-ondalis-deep to-ondalis-ocean rounded-2xl p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Nossa Missão
              </h3>
              <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
                "Proporcionar momentos únicos de relaxamento e bem-estar,
                renovando corpo e mente através do toque terapêutico e do
                cuidado personalizado, em um ambiente de paz e tranquilidade."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
