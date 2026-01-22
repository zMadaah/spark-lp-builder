import { motion } from "framer-motion";
import logo from "../../assets/images/logo.png";
import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-white/5 bg-[#0a0a0a]">
      <div className="container-narrow px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          {/* Brand Container */}
          <div className="mb-8 flex flex-col items-center">
            <img
              src={logo}
              alt="Logo Riquíssimos"
              className="w-14 md:w-16 mb-6 object-contain brightness-110"
            />

            {/* Nome Principal - Usando tracking configurado */}
            <h3 className="font-sans text-white text-sm tracking-ultra-widest uppercase font-light">
              Riquíssimos
            </h3>

            {/* Subtitle - Maison Experience */}
            <p className="font-serif text-white/30 text-[10px] italic">
              — Maison Experience —
            </p>
            <motion.a
              href="https://www.instagram.com/riquissimos"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              
              className="mt-10 text-white/20 hover:text-primary transition-all duration-500 flex flex-col items-center gap-2 group"
            >
              <Instagram size={16} strokeWidth={1} />

              {/* Label sutil que aparece no hover ou fica fixo em opacidade baixa */}
              <span className="font-sans text-[7px] tracking-[0.4em] uppercase opacity-40 group-hover:opacity-100 transition-opacity">
                Siga-nos
              </span>
            </motion.a>
          </div>

          {/* Divider Minimalista */}
          <div className="w-8 h-px bg-white/10 mb-8" />

          {/* Copyright e Info */}
          <div className="space-y-2">
            <p className="font-sans text-[10px] tracking-wider text-white/40 uppercase">
              © {new Date().getFullYear()} Riquíssimos. Todos os direitos reservados.
            </p>

            <p className="font-serif text-xs text-white/20 italic tracking-wide">
              Proposta exclusiva preparada para Dr. Ritchie
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;