import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const days = [
  {
    number: 1,
    day: "Sexta-feira",
    location: "Auditório Alphaville",
    schedule: [
      { time: "08h - 09h", activity: "Café da Manhã Premium + Conteúdo Visual" },
      { time: "09h - 12h", activity: "Imersão Teórica - Abertura Oficial" },
      { time: "12h - 14h", activity: "Almoço Elegante | Mediterrâneo Leve" },
      { time: "14h - 17h", activity: "Aula Teórica - Continuação" },
      { time: "17h - 18h", activity: "Coffee Break Gourmet" },
      { time: "21h - 23h", activity: "Coquetel na Residência do Dr. Ritchie" },
    ],
  },
  {
    number: 2,
    day: "Sábado",
    location: "Clínica do Dr. Ritchie",
    schedule: [
      { time: "08h - 09h", activity: "Café da Manhã Premium" },
      { time: "09h - 12h", activity: "Aula Prática Intensiva" },
      { time: "12h - 14h", activity: "Almoço Funcional e Elegante" },
      { time: "14h - 17h", activity: "Aula Prática + Coffee Break" },
      { time: "17h - 18h", activity: "Coffee Break da Tarde" },
      { time: "20h - 04h", activity: "Coquetel Premium Contínuo" },
    ],
  },
  {
    number: 3,
    day: "Domingo",
    location: "Clínica do Dr. Ritchie",
    schedule: [
      { time: "08h - 09h", activity: "Café da Manhã Premium" },
      { time: "09h - 12h", activity: "Aula Prática Final" },
      { time: "12h - 14h", activity: "Almoço de Encerramento" },
      { time: "14h - 17h", activity: "Aula Prática + Coffee Break" },
      { time: "17h - 18h", activity: "Encerramento da Imersão" },
    ],
  },
];

const Itinerary = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="itinerario" className="section-padding bg-secondary/30">
      <div className="container-narrow" ref={ref}>
        {/* Section header */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-primary text-sm tracking-[0.2em] uppercase mb-6"
        >
          Itinerário
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="heading-section text-foreground mb-6"
        >
          3 Dias de Imersão Completa
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-body mb-16 max-w-2xl"
        >
          Uma experiência gastronômica integral ao longo de todo o evento, 
          com operação estendida até as primeiras horas da manhã.
        </motion.p>

        {/* Days */}
        <div className="space-y-12">
          {days.map((day, dayIndex) => (
            <motion.div
              key={day.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + dayIndex * 0.15 }}
              className="card-luxury"
            >
              <div className="flex items-start gap-6 mb-6">
                {/* Day number */}
                <div className="w-12 h-12 rounded-full border border-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-serif text-xl">{day.number}</span>
                </div>
                
                {/* Day info */}
                <div>
                  <h3 className="heading-card text-foreground">{day.day}</h3>
                  <p className="text-primary text-sm">{day.location}</p>
                </div>
              </div>

              {/* Schedule */}
              <div className="space-y-3 pl-0 md:pl-18">
                {day.schedule.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 py-2 border-b border-border/50 last:border-0"
                  >
                    <span className="text-primary text-sm font-medium min-w-[100px]">
                      {item.time}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {item.activity}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Itinerary;