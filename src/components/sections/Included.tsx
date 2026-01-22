import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: "Direção Criativa",
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
      "Iluminação cenográfica",
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
     "Iluminação estratégica",
     "Ambiente preparado para networking e registros",
     "Painel de LED para apresentação de materiais",
   ],
 },
  {
    title: "Kits dos Alunos",
    items: [
      "Caixa personalizada para vestimenta técnica",
      "Acabamento interno e externo premium",
      "Kits do auditório com apresentação refinada",
      "Canudos personalizados para diplomas",
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
          className="mb-16 text-center md:text-left"
        >
          
          <h2 className="text-white text-4xl font-light tracking-tight uppercase">
            Produção Completa
          </h2>
        </motion.div>

        {/* Services Grid com Boxes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              /* Estilização do Box (Igualando ao conceito luxury anterior) */
              className="bg-white/[0.03] border border-white/10 p-8 rounded-sm 
                         hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500
                         group flex flex-col h-full"
            >
              {/* Título do Box */}
              <h3 className="text-white text-sm tracking-[0.2em] font-semibold uppercase mb-6 
                             border-b border-white/5 pb-4 group-hover:text-white transition-colors">
                {service.title}
              </h3>

              {/* Lista de Itens dentro do Box */}
              <ul className="space-y-4 flex-grow">
                {service.items.map((item, i) => (
                  <li 
                    key={i} 
                    className="text-white/50 text-[13px] font-light leading-relaxed flex items-start gap-3"
                  >
                    <span className="w-1.5 h-[1px] bg-white/40 mt-[9px] shrink-0" />
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