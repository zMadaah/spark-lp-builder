import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Camera, Globe, Palette, Package, Sparkles, Users } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Registros Visuais",
    items: [
      "Cobertura fotográfica profissional",
      "Filmagem em vídeo",
      "Captação com drone",
      "Registros de aulas, práticas e experiências",
    ],
  },
  {
    icon: Globe,
    title: "Construção Digital",
    items: [
      "Desenvolvimento de site e landing page",
      "Organização do itinerário e conteúdos",
      "Narrativa publicitária do evento",
      "Material estratégico para divulgação",
    ],
  },
  {
    icon: Palette,
    title: "Direção Criativa",
    items: [
      "Consolidação da identidade do evento",
      "Definição de linguagem estética",
      "Padronização visual em todos os pontos",
      "Coerência estética do início ao encerramento",
    ],
  },
  {
    icon: Package,
    title: "Design & Materiais",
    items: [
      "Estampas exclusivas da Imersão",
      "Menus personalizados",
      "Etiquetas, sinalizações e materiais gráficos",
      "Convite digital",
    ],
  },
  {
    icon: Sparkles,
    title: "Kits dos Alunos",
    items: [
      "Caixa personalizada para vestimenta técnica",
      "Acabamento interno e externo premium",
      "Kits do auditório com apresentação refinada",
      "Canudos personalizados para diplomas",
    ],
  },
  {
    icon: Users,
    title: "Produção & Decoração",
    items: [
      "Hall com produção floral elegante",
      "Iluminação cenográfica",
      "Espaço instagramável",
      "Lounge com mobiliário selecionado",
    ],
  },
];

const Included = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="incluso" className="section-padding">
      <div className="container-narrow" ref={ref}>
        {/* Section header */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-primary text-sm tracking-[0.2em] uppercase mb-6"
        >
          O que está incluso
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="heading-section text-foreground mb-16"
        >
          Execução Completa
        </motion.h2>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="card-luxury group hover:border-primary/30 transition-colors duration-300"
            >
              <service.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="heading-card text-foreground mb-4">{service.title}</h3>
              <ul className="space-y-2">
                {service.items.map((item, i) => (
                  <li key={i} className="text-small flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
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