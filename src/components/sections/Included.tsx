import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: "Branding",
    items: [
      "Consolidação da identidade do evento",
      "Definição de linguagem estética",
      "Padronização visual em todos os pontos",
      "Coerência estética do início ao encerramento",
    ],
  },
  {
    title: "Design & Materiais",
    items: [
      "Estampas exclusivas da Imersão",
      "Menus personalizados",
      "Etiquetas, sinalizações e materiais gráficos",
      "Convite digital",
    ],
  },
  {
    title: "Construção Digital",
    items: [
      "Desenvolvimento de site e landing page",
      "Organização do itinerário e conteúdos",
      "Narrativa publicitária do evento",
      "Material estratégico para divulgação",
    ],
  },
  {
    title: "Auditório - Alphaville",
    items: [
      "Hall com produção floral elegante",
      
      "Espaço instagramável",
      "Lounge com mobiliário selecionado",
    ],
  },
  {
    title: "Clínica do Dr. Ritchie",
    items: [
      "Recpção com arranjo florais",
      "Ambiente leve e funcional",
      "Lounges de apoio",
      "Mesas de café decorados",
      "Sinalização de alto padrão",
    ],
  },
  {
    title: "Residência do Dr. Ritchie",
    items: [
      "Produção floral de impacto no hall da entrada",
      "Mesa de Buffet com produção floral",
      "Louças refinadas e taças elegantes",
      "Ambiente preparado para networking e registros",
     "Apresentação de material"
    ],
  },
  {
    title: "Kits dos Alunos",
    items: [
      "Caixa personalizada para vestimenta técnica",
      "Acabamento interno e externo premium",
      "Kits do auditório com apresentação refinada",
      "Diplomas",
    ],
  },
  {
    title: "Registros Visuais",
    items: [
      "Cobertura fotográfica profissional",
      "Filmagem em vídeo",
      "Captação com drone",
      "Registros de aulas, práticas e experiências",
    ],
  },
];

const Included = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="incluso" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>

        {/* Header da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-garet text-4xl md:text-5xl text-[#F5F3EF] font-bold uppercase tracking-[0.25em] leading-none mb-4">
            Produção Completa
          </h2>
          <div className="w-12 h-[2px] bg-[#d9ad77] mx-auto" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              /* 1. Card com fundo claro (#F5F3EF) e borda sutil */
              className="bg-[#F5F3EF] border border-white/10 p-8 rounded-sm 
                         hover:shadow-2xl hover:shadow-white/5 transition-all duration-500
                         group flex flex-col h-full"
            >
              {/* 2. Título do Card em preto (#1C1C1C) */}
              <h3 className="text-[#1C1C1C] text-sm tracking-[0.2em] font-bold uppercase mb-6 
                             border-b border-[#1C1C1C]/10 pb-4 transition-colors">
                {service.title}
              </h3>

              {/* Lista de Itens */}
              <ul className="space-y-4 flex-grow">
                {service.items.map((item, i) => (
                  <li
                    key={i}
                    /* 3. Texto dos itens em preto (#1C1C1C) com opacidade suave */
                    className="text-[#1C1C1C]/80 text-[13px] font-medium leading-relaxed flex items-start gap-3"
                  >
                    {/* 4. Marcador ajustado para preto */}
                    <span className="w-1.5 h-[1px] bg-[#1C1C1C]/30 mt-[9px] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Included;