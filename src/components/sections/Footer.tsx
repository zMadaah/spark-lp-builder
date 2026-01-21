import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Brand */}
          <div className="mb-6">
            <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium">
              Riquíssimos
            </p>
            <p className="text-muted-foreground text-xs tracking-[0.2em] uppercase mt-1">
              — Maison Experience —
            </p>
          </div>

          {/* Divider */}
          <div className="w-12 h-px bg-border mx-auto mb-6" />

          {/* Copyright */}
          <p className="text-small">
            © {new Date().getFullYear()} Riquíssimos. Todos os direitos reservados.
          </p>
          
          <p className="text-small mt-2 text-muted-foreground/60">
            Proposta exclusiva para Dr. Ritchie
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;