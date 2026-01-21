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
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="investimento" className="section-padding">
      <div className="container-narrow" ref={ref}>
        {/* Section header */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-primary text-sm tracking-[0.2em] uppercase mb-6"
        >
          Investimento
        </motion.p>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
          {/* Market value card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="card-luxury text-center"
          >
            <p className="text-muted-foreground text-sm uppercase tracking-wider mb-4">
              Valor Real de Mercado
            </p>
            <p className="text-4xl md:text-5xl font-serif text-foreground/60 line-through decoration-primary/50">
              R$ 207.800
            </p>
            <p className="text-small mt-4">
              Execução completa do projeto
            </p>
          </motion.div>

          {/* Proposed investment card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="card-luxury text-center border-primary/50 relative overflow-hidden"
          >
            {/* Highlight badge */}
            <div className="absolute top-4 right-4">
              <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-medium">
                Condição Especial
              </span>
            </div>

            <p className="text-muted-foreground text-sm uppercase tracking-wider mb-4">
              Investimento Proposto
            </p>
            <p className="text-4xl md:text-5xl font-serif text-primary">
              R$ 107.000
            </p>
            {/* <p className="text-small mt-4 text-primary/80">
              50% absorvidos pela Riquíssimos
            </p> */}
          </motion.div>
        </div>

        {/* Partnership explanation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 max-w-3xl"
        >
          <h3 className="heading-card text-foreground mb-4">
            Condição Especial de Parceria
          </h3>
          <p className="text-body">
            Orientada por uma visão de parceria estratégica e pela construção de um legado de marca, a Riquíssimos direciona investimentos próprios para este projeto, assegurando uma execução refinada, consistente e com potencial de continuidade ao longo do tempo.
          </p>
        </motion.div>

        {/* What's included grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16"
        >
          <p className="text-muted-foreground text-sm uppercase tracking-wider mb-8">
            Experiência entregue
          </p>

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1.2}
            centeredSlides
            loop
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2.5 },
              1024: { slidesPerView: 3.5 },
            }}
            className="pb-12"
          >
            {carouselItems.map((item) => (
              <SwiperSlide key={item.title}>
                <div className="group relative overflow-hidden rounded-2xl border border-border/40 bg-background">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="font-serif text-lg text-foreground">
                      {item.title}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Investment;