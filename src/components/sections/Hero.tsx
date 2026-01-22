import { motion } from "framer-motion";
import logo from "../../assets/images/logo.png";
import Silk from "../Silk";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0a0a0a] overflow-hidden">
      
      {/* 1. FUNDO DINÂMICO (SILK EFFECT) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div style={{ width: '100%', height: '100%', minWidth: '1080px', minHeight: '1080px' }}>
          <Silk
            speed={5}
            scale={1}
            color="#7B7481"
            noiseIntensity={1.5}
            rotation={0}
          />
        </div>
      </div>

      {/* 2. OVERLAY DE GRADIENTE (Para leitura perfeita do texto) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-[1]" />

      {/* 3. CONTEÚDO PRINCIPAL */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-16 px-6">
        
        {/* Lado Esquerdo: Marca */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "circOut" }}
          className="flex flex-col items-center"
        >
          <img 
            src={logo} 
            alt="Logo Riquíssimos" 
            className="w-24 md:w-32 mb-6 object-contain brightness-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
          />
          <div className="text-center">
            {/* Usando Garet (configurado como font-garet) */}
            <h2 className="font-garet text-white text-lg md:text-xl tracking-ultra-widest font-light uppercase">
              Riquíssimos
            </h2>
            {/* Usando Playfair Display (configurado como font-serif) */}
            <p className="font-serif text-white/30 text-[10px] md:text-xs tracking-widest-luxury uppercase mt-2 italic">
              — Maison Experience —
            </p>
          </div>
        </motion.div>

        {/* Divisor Vertical */}
        <motion.div 
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="hidden md:block w-[1px] h-32 bg-gradient-to-b from-transparent via-white/30 to-transparent"
        />

        {/* Lado Direito: Título da Imersão */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "circOut" }}
          className="text-center md:text-left"
        >
          
          <h1 className="font-garet text-[#F5F3EF] text-4xl md:text-6xl lg:text-7xl tracking-tighter font-bold uppercase leading-[0.9]">
            Imersão <br />
            <span className="text-[#F5F3EF]">Dr. Ritchie</span>
          </h1>
          
          <div className="mt-8 flex justify-center md:justify-start">
            <div className="w-16 h-px bg-[#d9ad77]" />
          </div>
        </motion.div>

      </div>

      {/* Indicador de Scroll Inferior */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
      >
        <span className="font-sans text-[8px] tracking-[0.4em] text-white/20 uppercase">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/20 to-transparent" />
      </motion.div>
      
    </section>
  );
};

export default Hero;