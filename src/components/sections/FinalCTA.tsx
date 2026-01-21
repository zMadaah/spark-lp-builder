import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const FinalCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-narrow text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-6">
            Próximos Passos
          </p>
          
          <h2 className="heading-section text-foreground mb-6">
            Vamos Transformar Este Projeto em Realidade
          </h2>
          
          <p className="text-body mb-10">
            Entre em contato para alinharmos os detalhes finais e dar início 
            a uma experiência que vai além do esperado.
          </p>

          <motion.a
            href="https://wa.me/5561991209112?text=Ol%C3%A1%21%20Gostaria%20de%20conversar%20sobre%20a%20proposta%20da%20Imers%C3%A3o%20Dr.%20Ritchie."
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="btn-primary"
          >
            Entrar em Contato
          </motion.a>

        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;