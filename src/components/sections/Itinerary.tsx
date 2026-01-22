import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { useInView } from "framer-motion";

const days = [
  {
    number: "01",
    day: "Sexta-feira",
    date: "Dia ",
    location: "Auditório Alphaville",
    description: "Abertura oficial e imersão teórica profunda.",
    schedule: [
      {
        time: "08h00 às 09h00",
        activity: "Café da Manhã + Conteúdo Visual",
        details: ["Café espresso, cappuccino e especial", "Chás premium selecionados", "Leite integral e vegetal", "Sucos naturais: laranja e frutas vermelhas", "Croissants e pães artesanais", "Queijos, manteiga francesa e geleias", "Frutas frescas, iogurte e granola premium"]
      },
      {
        time: "09h00 às 12h00",
        activity: "Imersão Teórica – Abertura oficial",
        details: ["Conteúdo teórico exclusivo", "Registro fotográfico e audiovisual", "Serviço contínuo de água e café"]
      },
      {
        time: "12h00 às 14h00",
        activity: "Almoço Elegante | Mediterrâneo Leve",
        details: ["Peixe grelhado com ervas finas", "Arroz de amêndoas", "Legumes assados", "Mix de folhas com molho cítrico", "Águas e sucos naturais aromatizados"]
      },
      {
        time: "14h00 às 17h00",
        activity: "Aula - Conteúdo Teórico",
        details: ["Serviço contínuo de água, café e snacks "]
      },
      {
        time: "17h00 às 18h00",
        activity: "Coffee Break - Café da Tarde",
        details: ["Café e chás premium", "Mini sanduíches frios e pães de queijo", "Bolo integral ou caseiros", "Frutas frescas"]
      },
      {
        time: "21h00 às 23h00",
        activity: "Coquetel na Residência do Dr. Ritchie",
        details: ["Tartelete de brie com mel trufado", "Canapé de salmão curado e dill", "Crostini de ricota e limão siciliano", "Roast beef com mostarda suave", "Risoto de parmesão (Empratado)", "Escondidinho de mandioquinha", "Serviço completo de concierge e garçons"]
      }
    ],
  },
  {
    number: "02",
    day: "Sábado",
    date: "Dia ",
    location: "Clínica do Dr. Ritchie",
    description: "Foco total em prática clínica e networking avançado.",
    schedule: [
      {
        time: "08h00 às 09h00",
        activity: "Café da Manhã Premium",
        details: ["Café espresso, cappuccino e especial", "Chás premium selecionados", "Leite integral e vegetal", "Sucos naturais: laranja e frutas vermelhas", "Croissants e pães artesanais", "Queijos, manteiga francesa e geleias", "Frutas frescas, iogurte e granola premium"]
      },
      {
        time: "09h00 às 12h00",
        activity: "Aula Prática Intensiva",
        details: ["Demonstração real com Dr. Ritchie", "Registro audiovisual do procedimento", "Snacks leves e café contínuos", "Equipe de suporte completa"]
      },
      {
        time: "12h00 às 14h00",
        activity: "Almoço Funcional e Elegante",
        details: ["Frango ou peixe grelhado", "Purê de mandioquinha ou arroz integral", "Legumes no vapor", "Salada verde premium"]
      },
      {
        time: "17h00 às 18h00",
        activity: "Coffee Break da Tarde",
        details: ["Mini pães de queijo assados na hora", "Cookies integrais e mini bolos", "Barrinhas funcionais e nuts", "Frutas frescas laminadas"]
      },
      {
        time: "20h01 às 04h00",
        activity: "Jantar - Coquetel Premium Contínuo",
        details: ["Mini pratos quentes", "Pães artesanais e queijos selecionados", "Energéticos e café para suporte noturno", "Serviço contínuo para alunos e pacientes"]
      }
    ],
  },
  {
    number: "03",
    day: "Domingo",
    date: "Dia ",
    location: "Clínica do Dr. Ritchie",
    description: "Encerramento, prática final e entrega de certificados.",
    schedule: [
      {
        time: "08h00 às 09h00",
        activity: "Café da Manhã Premium",
        details: ["Café espresso, cappuccino e especial", "Chás premium selecionados", "Leite integral e vegetal", "Sucos naturais: laranja e frutas vermelhas", "Croissants e pães artesanais", "Queijos, manteiga francesa e geleias", "Frutas frescas, iogurte e granola premium"]
      },
      {
        time: "09h00 às 12h00",
        activity: "Aula Prática Final",
        details: ["Conclusão dos casos clínicos", "Suporte audiovisual completo"]
      },
      {
        time: "12h00 às 14h00",
        activity: "Almoço de Encerramento",
        details: ["Frango ou peixe grelhado", "Purê de mandioquinha ou arroz integral", "Legumes no vapor", "Salada verde premium"]
      },
      {
        time: "17h00 às 18h00",
        activity: "Encerramento da Imersão",
        details: ["Cerimônia de entrega de certificados", "Último Coffee Break gourmet", "Momento de fotos oficiais", "Encerramento oficial"]
      }
    ],
  },
];

const Itinerary = () => {
  const [selectedDay, setSelectedDay] = useState(0);
  const [openSlot, setOpenSlot] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const toggleSlot = (i: number) => {
    setOpenSlot(openSlot === i ? null : i);
  };

  return (
    /* 1. Alterado bg-[#0a0a0a] para bg-white (ou um cinza bem claro) */
    <section id="itinerario" className="py-24 bg-[#F5F3EF]">
      <div className="max-w-5xl mx-auto px-6" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          {/* 2. Alterado text-white para text-black/80 */}
          <h2 className="font-sans text-4xl md:text-5xl text-[#1C1C1C] font-bold uppercase tracking-[0.25em] leading-none mb-4">
            Itinerário
          </h2>
          {/* Ajustado o divisor para ser visível no claro */}
          <div className="w-12 h-[2px] bg-[#d9ad77] mx-auto" />
        </motion.div>

        {/* Calendar Navigation */}
        <div className=" font-sans flex justify-center gap-4 md:gap-8 mb-16">
          {days.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedDay(index);
                setOpenSlot(null);
              }}
              className="group relative flex flex-col items-center min-w-[80px] md:min-w-[120px]"
            >
              {/* 3. Inversão das cores dos labels de data */}
              <span className={`font-sans text-[10px] tracking-widest uppercase mb-2 transition-colors duration-300 ${selectedDay === index ? 'text-black' : 'text-black/30'}`}>
                {item.date}
              </span>
              {/* 4. Inversão do box de seleção: fundo preto quando selecionado, bordas escuras */}
              <div className={`w-12 h-16 md:w-16 md:h-20 flex items-center justify-center border transition-all duration-500 rounded-sm ${selectedDay === index ? 'bg-[#1C1C1C] border-[#1C1C1C]' : 'bg-transparent border-[#1C1C1C]/10 group-hover:border-[#1C1C1C]/40'}`}>
                <span className={`font-serif text-2xl md:text-3xl ${selectedDay === index ? 'text-[#F5F3EF]' : 'text-[#1C1C1C]'}`}>
                  {item.number}
                </span>
              </div>
              {/* 5. Underline de seleção alterado para preto */}
              {selectedDay === index && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-4 w-1 h-1 bg-black rounded-full"
                />
              )}
            </button>
          ))}
        </div>

        {/* Content Area */}
        {/* 6. Fundo do card agora é um cinza muito sutil com bordas cinzas */}
        <div className="bg-transparent border-2 border-black p-6 md:p-12 rounded-sm relative overflow-hidden">
  <AnimatePresence mode="wait">
    <motion.div
      key={selectedDay}
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -10 }}
      transition={{ duration: 0.4 }}
    >
      {/* Header interno do Card - Borda inferior mais escura para combinar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 border-b-2 border-black pb-8">
        <div>
          <h3 className="font-serif text-3xl text-black mb-2">{days[selectedDay].day}</h3>
          <p className="font-sans text-[10px] tracking-widest uppercase text-black/60 italic">
            {days[selectedDay].location}
          </p>
        </div>
        <p className="font-sans text-sm text-black/80 max-w-xs md:text-right font-light leading-relaxed">
          {days[selectedDay].description}
        </p>
      </div>

      {/* Schedule List with Accordion */}
      <div className="space-y-4">
        {days[selectedDay].schedule.map((slot, i) => (
          /* Borda dos itens da lista também levemente mais escura para consistência */
          <div key={i} className="border-b border-black/20 last:border-0">
            <button 
              onClick={() => toggleSlot(i)}
              className="w-full flex items-start md:items-center gap-6 group py-4 text-left"
            >
              <span className="font-sans text-[11px] tracking-widest text-black/60 min-w-[100px] pt-1 md:pt-0 group-hover:text-black transition-colors">
                {slot.time}
              </span>
              <div className="h-[1px] flex-grow bg-black/20 hidden md:block" />
              <span className="font-sans text-sm text-black font-medium group-hover:opacity-70 transition-colors uppercase tracking-wide">
                {slot.activity}
              </span>
              <span className="text-black text-xs ml-auto">
                {openSlot === i ? '—' : '+'}
              </span>
            </button>

            <AnimatePresence>
              {openSlot === i && slot.details && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="pb-6 pl-[124px] grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                    {slot.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1 h-[1px] bg-black/40" />
                        <p className="text-[12px] text-black/70 font-light">{detail}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.div>
  </AnimatePresence>
</div>
      </div>
    </section>
  );
};

export default Itinerary;