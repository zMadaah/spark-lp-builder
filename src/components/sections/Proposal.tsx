import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Proposal = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="proposta" className="section-padding bg-secondary/30">
      <div className="container-narrow" ref={ref}>
        {/* Section label
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-primary text-sm tracking-[0.2em] uppercase mb-6"
        >
          Proposta
        </motion.p> */}

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }} // Usando whileInView para garantir que anime ao scrollar
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} // Ease mais suave (luxo)
          className="font-sans text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 max-w-3xl leading-[1.1] tracking-tightest"
        >
          <span className="font-garet block mb-2 opacity-90">Existem eventos que</span>
          <span className="font-garet block text-white">apenas informam.</span>
          <span className="font-sans italic text-primary text-3xl md:text-4xl lg:text-5xl mt-4 block tracking-normal">
            Outros transformam.
          </span>
        </motion.h2>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-3xl space-y-8"
        >
          <p className="font-sans text-xl md:text-2xl leading-relaxed text-white/80 font-light italic border-l border-primary/30 pl-8">
            "Essa proposta foi concebida para ir além de um evento tradicional.
            A Imersão Dr. Ritchie nasce como propósito de ser uma experiência integral,
            na qual cada conteúdo científico, prática clínica, conforto, estética e operação
            se entrelaçam de forma fluida, organizada e sofisticada."
          </p>

          <p className="font-sans text-sm md:text-base leading-relaxed text-muted-foreground uppercase tracking-widest max-w-2xl opacity-70">
            A Riquíssimos assume a execução completa do projeto, permitindo que o cliente
            não se preocupe com logística, fornecedores, equipes ou detalhes operacionais.
            Cada etapa é planejada e entregue para que a experiência aconteça com excelência,
            leveza e precisão.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Proposal;