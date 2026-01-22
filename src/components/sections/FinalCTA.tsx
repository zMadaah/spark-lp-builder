import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FinalCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const whatsappMessage = encodeURIComponent(
    "Olá! Analisei a proposta da Maison Experience e decidi avançar com a imersão do Dr. Ritchie. Vamos alinhar os próximos passos?"
  );

  return (
    <section className="section-padding bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Decorativo Sutil */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="container-narrow relative z-10 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto"
        >
          {/* Título Garet Bold - Agressivo e Direto */}
          <h2 className="font-sans text-4xl md:text-6xl text-white font-bold uppercase tracking-tighter leading-[0.9] mb-8">
            DA VISÃO À <br/>
            <span className="text-white/60">EXECUÇÃO IMPECÁVEL.</span>
          </h2>
          
          {/* Corpo do Texto - Garet Light com gatilhos de venda */}
          <div className="space-y-6 mb-12">
            <p className="font-sans text-white/70 text-base md:text-xl leading-relaxed font-light">
              Não apresentamos apenas um cronograma, entregamos o controle total da sua marca. 
              <span className="text-white font-normal block mt-2">
                O Dr. Ritchie foca no palco; a Riquíssimos domina os bastidores.
              </span>
            </p>
            <p className="font-serif italic text-white/40 text-sm md:text-base">
              A excelência não espera — vamos formalizar o início desta parceria hoje.
            </p>
          </div>

          {/* Botão de Ação Massiva */}
          <motion.a
            href={`https://wa.me/5561991209112?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, backgroundColor: "#fff", color: "#000" }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary inline-block min-w-[300px] py-5 text-xs font-bold"
          >
            VALIDAR PROPOSTA E INICIAR OPERAÇÃO
          </motion.a>

          {/* Scarcity Note */}
          <p className="mt-10 font-sans text-[10px] tracking-[0.3em] text-white/20 uppercase">
            Disponibilidade de agenda sujeita a confirmação imediata
          </p>

        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;