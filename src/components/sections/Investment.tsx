import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import uniforme from "@/assets/images/investiment/uniforme.png";
import certificado from "@/assets/images/investiment/certificado.png";
import kit from "@/assets/images/investiment/kit.png";
import limosine from "@/assets/images/investiment/limosine.png";
import coffe from "@/assets/images/investiment/coffe.png";

const carouselItems = [
  { title: "Traje Oficial da Imersão", image: uniforme },
  { title: "Certificados", image: certificado },
  { title: "Planner Personalizados", image: kit },
  { title: "Translado Cerimonial de Chegada", image: limosine },
  { title: "Coffe Break", image: coffe },
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

          {/* Valor Real de Mercado */}
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
              <p className="font-sans text-4xl md:text-5xl text-white/20 font-light tracking-tighter">
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

            {/* Ajuste Mobile: Uso de span + inline-block para garantir o risco (line-through) */}
            <p className="font-sans text-4xl md:text-5xl text-white/40 font-light tracking-tighter">
              <span className="line-through decoration-primary/60">
                R$ 107.800
              </span>
            </p>

            {/* Condição Especial */}
            <div className="mt-6 mb-4 px-4 py-1.5 border border-primary/30 rounded-full bg-primary/5">
              <p className="font-sans text-[9px] md:text-[10px] text-primary uppercase tracking-widest font-bold text-center">
                Condição Exclusiva Dr. Ritchie
              </p>
            </div>

            {/* Valor Final de 70k */}
            <p className="font-sans text-5xl md:text-6xl text-white font-bold tracking-tighter">
              R$ 70.000
            </p>
          </motion.div>
        </div>

        {/* Explicação de Parceria */}
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

        {/* Swiper - Carrossel de Itens */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12 swiper-luxury"
          >
            {carouselItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative overflow-hidden rounded-sm aspect-[4/5] group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                  <img
                    src={item.image.src || item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-6 left-6 z-20">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-primary mb-1">Destaque</p>
                    <h4 className="text-white font-garet text-lg uppercase tracking-wider">{item.title}</h4>
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