import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import coquetel from "@/assets/images/investiment/coquetel.png";
import estrutura from "@/assets/images/investiment/estrutura.png";
import kit from "@/assets/images/investiment/kit.png";
import limosine from "@/assets/images/investiment/limosine.jpeg";
import coffe from "../../../public/gastronomia/coffe.png";


const carouselItems = [
  { title: "Coquetel de Boas-Vindas", image: coquetel },
  { title: "Estrutura Completa", image: estrutura },
  { title: "Kits Personalizados", image: kit },
  { title: "Locomoção", image: limosine },
  { title: "Café Premium", image: coffe },
];

const includedItems = [
  "Direção Criativa",
  "Produção & Decoração",
  "Gastronomia Completa",
  "Kits Personalizados",
  "Equipe Operacional",
  "Logística Integral",
  "Estrutura Técnica",
  "Construção Digital",
];

const Investment = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="investimento" className="section-padding bg-[#0a0a0a]">
      <div className="container-narrow" ref={ref}>
        
        {/* Header da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="font-garet text-3xl md:text-4xl text-white font-bold uppercase tracking-widest">
            Investimento
          </h2>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
          
          {/* Valor Real de Mercado - Estética mais sóbria */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="card-luxury flex flex-col justify-center items-center py-12 border-white/5 opacity-80"
          >
            <p className="font-sans text-white/40 text-[10px] uppercase tracking-[0.3em] mb-6">
              Valor Real de Mercado
            </p>
            <div className="relative">
               <p className="font-sans text-4xl md:text-5xl text-white/20 font-light tracking-tighter  decoration-primary/30">
                R$ 207.800
              </p>
            </div>
            <p className="font-serif italic text-white/30 text-xs mt-6">
              Execução integral do projeto
            </p>
          </motion.div>

          {/* Investimento Proposto - Destaque Principal */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="card-luxury flex flex-col justify-center items-center py-12 border-primary/40 bg-gradient-to-b from-primary/5 to-transparent relative overflow-hidden group"
          >
            {/* Brilho interno decorativo */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-[80px] group-hover:bg-primary/20 transition-colors duration-700" />
            
            <p className="font-sans text-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-6">
              Investimento Proposto
            </p>
            <p className="font-sans text-5xl md:text-6xl text-white font-bold tracking-tighter">
              R$ 107.800
            </p>
            
            <div className="mt-8 px-4 py-1 border border-primary/20 rounded-full">
               <p className="font-sans text-[9px] text-primary uppercase tracking-widest font-medium">
                Condição Exclusiva Dr. Ritchie
              </p>
            </div>
          </motion.div>
        </div>

        {/* Explicação de Parceria - Texto Editorial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 max-w-3xl border-l border-primary/20 pl-8 md:pl-12"
        >
          <h3 className="font-garet text-2xl md:text-3xl text-white italic mb-6">
            Aliança Estratégica
          </h3>
          <p className="font-sans text-white/60 text-base md:text-lg leading-relaxed font-light">
            Orientada por uma visão de <span className="text-white">parceria estratégica</span> e pela construção de um legado de marca, a Riquíssimos direciona investimentos próprios para este projeto, assegurando uma execução refinada, consistente e com potencial de continuidade ao longo do tempo.
          </p>
        </motion.div>

        {/* Swiper (Opcional: Reativado com estilo refinado) */}
        {/* Descomente se desejar manter o carrossel de fotos dos itens entregues */}
      </div>
    </section>
  );
};

export default Investment;