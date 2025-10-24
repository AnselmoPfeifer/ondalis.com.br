import React from "react";
import BioLayout from "@/components/bio/BioLayout";
import BioCard from "@/components/bio/BioCard";

export const metadata = {
  title: "Bio | Ondalis - Links Diretos",
  description:
    "Acesso rápido aos nossos serviços de massagens e bem-estar. Relaxamento, terapia, pedras quentes e muito mais em Campo Grande - MS. Equilíbrio e bem-estar em cada toque.",
  keywords:
    "ondalis, massagem, relaxamento, bem-estar, instagram bio, contato direto, Campo Grande MS",
};

const bioLinks = [
  {
    id: "site",
    title: "WebSite",
    description: "",
    icon: "🌊",
    color: "",
    href: "/",
    external: false,
  },
  {
    id: "agendamento",
    title: "Agendamento",
    description: "",
    icon: "📅",
    color: "",
    href: "/#booking",
    external: false,
  },
  {
    id: "servicos",
    title: "Serviços",
    description: "",
    icon: "✨",
    color: "",
    href: "/#services",
    external: false,
  },
  {
    id: "whatsapp",
    title: "WhatsApp",
    description: "",
    icon: "💬",
    color: "",
    href: "https://wa.me/5567981079935?text=Ol%C3%A1%21%20Vim%20pela%20bio%20do%20Instagram%20da%20Ondalis.",
    external: true,
  },
  {
    id: "localizacao",
    title: "Como Chegar",
    description: "",
    icon: "📍",
    color: "",
    href: "https://maps.app.goo.gl/Tj1BU86hDKyUViPx6",
    external: true,
  },
];

export default function BioPage() {
  return (
    <BioLayout>
      <div className="space-y-3">
        {bioLinks.map((link) => (
          <BioCard
            key={link.id}
            title={link.title}
            description={link.description}
            icon={link.icon}
            color={link.color}
            href={link.href}
            external={link.external}
          />
        ))}
      </div>
    </BioLayout>
  );
}
