"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import SuccessModal from "./SuccessModal";

const Booking = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "agenda" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });

      // Listener para detectar quando o agendamento é concluído
      cal("on", {
        action: "bookingSuccessful",
        callback: (e: any) => {
          console.log("Booking successful!", e);
          // Adicionar ?success=true na URL
          if (typeof window !== "undefined") {
            const url = new URL(window.location.href);
            url.searchParams.set("success", "true");
            window.history.pushState({}, "", url.toString());
          }
          setShowSuccessModal(true);
        },
      });
    })();
  }, []);

  // Verificar se a URL tem o parâmetro ?success ao carregar
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("success") === "true") {
        setShowSuccessModal(true);
      }
    }
  }, []);

  // Função para fechar o modal e limpar a URL
  const handleCloseModal = () => {
    setShowSuccessModal(false);
    // Remover o parâmetro ?success da URL
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.delete("success");
      window.history.replaceState({}, "", url.toString());
    }
  };

  return (
    <section
      id="booking"
      ref={ref}
      className="py-20 bg-gradient-to-b from-ondalis-deep/5 to-white"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-ondalis-deep mb-6">
            Reserve seu momento para Relaxar, corpo e mente. 
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-ondalis-turquoise to-ondalis-ocean mx-auto rounded-full mb-8" />
          <p className="text-lg text-ondalis-night max-w-2xl mx-auto">
            Escolha o melhor horário para sua sessão de relaxamento e bem-estar.
            Nossa agenda está sempre atualizada para atender você.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-8">
              <Cal
                id="calendly"
                namespace="agenda"
                calLink={
                  process.env.NEXT_PUBLIC_CAL_URL?.replace(
                    "https://cal.com/",
                    ""
                  ) || "ondalis"
                }
                style={{ width: "100%", height: "100%", overflow: "scroll" }}
                config={{ layout: "month_view" }}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-br from-ondalis-turquoise to-ondalis-ocean rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">📅</span>
            </div>
            <h4 className="text-xl font-semibold text-ondalis-deep mb-2">
              Agendamento Fácil
            </h4>
            <p className="text-ondalis-night">
              Escolha o melhor horário para você com apenas alguns cliques.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-br from-ondalis-turquoise to-ondalis-ocean rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">⏰</span>
            </div>
            <h4 className="text-xl font-semibold text-ondalis-deep mb-2">
              Horários Flexíveis
            </h4>
            <p className="text-ondalis-night">
              Oferecemos horários durante a semana e fins de semana.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-br from-ondalis-turquoise to-ondalis-ocean rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">✅</span>
            </div>
            <h4 className="text-xl font-semibold text-ondalis-deep mb-2">
              Confirmação Imediata
            </h4>
            <p className="text-ondalis-night">
              Receba confirmação instantânea do seu agendamento.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Success Modal */}
      <SuccessModal isOpen={showSuccessModal} onClose={handleCloseModal} />
    </section>
  );
};

export default Booking;
