# 🧘‍♀️ SPA Ondalis - Website

Um site moderno e responsivo para o SPA Ondalis, desenvolvido com Next.js 15, Tailwind CSS e Framer Motion.

## 🚀 Tecnologias Utilizadas

- **Next.js 15** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Framer Motion** - Animações
- **ShadCN UI** - Componentes
- **Cal.com** - Sistema de agendamento
- **Lucide React** - Ícones

## 🎨 Design

O site utiliza uma paleta de cores marinhas e relaxantes:

- **Azul Profundo**: `#02253b`
- **Azul Noite**: `#003755`
- **Azul Oceano**: `#007088`
- **Azul Turquesa**: `#00c5cb`

## 📱 Funcionalidades

### 🧭 Header

- Logo e navegação responsiva
- Menu mobile com animações
- Efeito de scroll com mudança de cor

### 🏠 Hero Section

- Imagem de fundo com overlay
- Título e subtítulo animados
- Botão CTA com scroll suave

### 💆‍♀️ Seção Sobre

- Filosofia do SPA
- Cards informativos
- Imagens e textos animados

### 🌿 Seção Serviços

- 5 cards de serviços com animações
- Massagem Relaxante
- Drenagem Linfática
- Massagem Terapêutica
- Massagem com Pedras Quentes
- Reflexologia Podal

### 📅 Seção Agendamento

- Integração com Cal.com
- Widget de agendamento embutido
- Informações sobre horários

### 💌 Seção Contato

- Formulário com validação
- Integração com WhatsApp
- Informações de contato
- Horários de funcionamento

### 📍 Footer

- Links de navegação
- Informações de contato
- Redes sociais
- Links para políticas

## ⚙️ Configuração

### Variáveis de Ambiente

Crie um arquivo `.env.local` com as seguintes variáveis:

```bash
# WhatsApp Integration
NEXT_PUBLIC_WHATSAPP_URL="https://wa.me/55XXXXXXXXXXX"

# Cal.com Integration
NEXT_PUBLIC_CAL_URL="https://cal.com/ondalis"

# Google Analytics
NEXT_PUBLIC_GTAG="G-XXXXXXX"

# Facebook Pixel
NEXT_PUBLIC_FB_PIXEL="XXXXXXXXXXXXXXX"
```

### Instalação

```bash
# Instalar dependências
bun install

# Executar em desenvolvimento
bun run dev

# Build para produção
bun run build

# Executar em produção
bun run start
```

## 🎯 SEO e Performance

- Meta tags otimizadas
- Open Graph e Twitter Cards
- Imagens otimizadas
- Animações performáticas
- Design mobile-first

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:

- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)

## 🎨 Animações

- Scroll reveal nos elementos
- Hover effects sutis
- Transições suaves
- Animações de entrada
- Micro-interações

## 🔧 Desenvolvimento

### Estrutura de Componentes

```
src/
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Booking.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
└── lib/
    └── utils.ts
```

### Scripts Disponíveis

- `bun run dev` - Servidor de desenvolvimento
- `bun run build` - Build para produção
- `bun run start` - Servidor de produção
- `bun run lint` - Verificação de código

## 🚀 Deploy

O projeto está configurado para deploy em:

- Vercel (recomendado)
- Netlify
- AWS Amplify
- Qualquer plataforma que suporte Next.js

## 📞 Suporte

Para dúvidas ou suporte, entre em contato através do formulário no site ou via WhatsApp.

---

**SPA Ondalis** - Equilíbrio e bem-estar em cada toque. 🧘‍♀️✨
