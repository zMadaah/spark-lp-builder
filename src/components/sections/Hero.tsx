import { motion } from "framer-motion";
import logo from "../../assets/images/logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#1a1a1a] overflow-hidden">
      {/* Background: Substitua pelo caminho da sua imagem de tecido/seda */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
        style={{ backgroundImage: `url('/path-to-your-silk-background.jpg')` }}
      />
      
      {/* Overlay escuro para garantir o contraste */}
      <div className="absolute inset-0 bg-black/40 z-1" />

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 px-6">
        
        {/* Lado Esquerdo: Logo e Riquíssimos */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
        >
          <img 
            src={logo} 
            alt="Logo Riquíssimos" 
            className="w-32 md:w-48 mb-4 object-contain"
          />
          <div className="text-center">
            <h2 className="text-white text-xl md:text-2xl tracking-[0.2em] font-light uppercase">
              Riquíssimos
            </h2>
            <p className="text-white/60 text-[10px] md:text-xs tracking-[0.3em] uppercase mt-1">
              - Maison Experience -
            </p>
          </div>
        </motion.div>

        {/* Linha Divisória Vertical (Apenas em Desktop) */}
        <motion.div 
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden md:block w-[1px] h-32 bg-white/80"
        />

        {/* Lado Direito: Título da Imersão */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl tracking-widest font-light uppercase text-center md:text-left">
            Imersão Dr. Ritchie
          </h1>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;