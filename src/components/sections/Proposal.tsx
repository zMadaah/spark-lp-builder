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
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="heading-section text-foreground mb-8 max-w-3xl"
        >
          Existem eventos que apenas informa. <br/>Outros transformam.
        </motion.h2>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl space-y-6"
        >
          <p className="text-body">
            Essa proposta foi concebida para ir além de um evento tradicional. 
            A Imersão Dr. Ritchie nasce como proposito de ser uma experiência integral,
            na qual cada conteudo cientifico, prática clínica, conforto, estética e operação
            se entrelaçam de forma fluida, organizada e sofisticada
          </p>
          <p className="text-body">
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