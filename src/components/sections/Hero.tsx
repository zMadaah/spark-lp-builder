import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import logo from "../../assets/images/logo.png";

const Hero = () => {
  const scrollToProposal = () => {
    document.getElementById("proposta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 vertical-lines opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-14 flex flex-col items-center"
        >
          <motion.img
            src={logo}
            alt="Logo Riquíssimos"
            className="w-20 mb-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          />

          <p className="text-primary text-sm tracking-[0.35em] uppercase font-medium mb-2">
            Riquíssimos
          </p>

          <p className="text-muted-foreground text-xs tracking-[0.25em] uppercase">
            — Maison Experience —
          </p>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl md:text-6xl tracking-[-0.02em] text-foreground mb-12"
        >
          Imersão Dr. Ritchie
        </motion.h1>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16 space-y-3"
        >
          <p className="text-lg md:text-2xl text-foreground/70 font-serif italic">
            Existem eventos que apenas informam.
          </p>
          <p className="text-lg md:text-2xl text-primary font-serif italic">
            Outros transformam.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button onClick={scrollToProposal} className="btn-outline">
            Ver Proposta
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-primary/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
