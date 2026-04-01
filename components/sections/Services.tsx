"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronRight, Heart, UserCheck, Pill, Clock, Brain, Activity, Stethoscope, Hand } from "lucide-react";
import SectionBadge from "@/components/ui/SectionBadge";

interface Service {
  id: string;
  label: string;
  icon: React.ElementType;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    id: "personal",
    label: "Persönliche Pflege",
    icon: Heart,
    description: "Würdevolle, respektvolle Unterstützung bei alltäglichen Tätigkeiten wie Baden, Anziehen und Körperpflege — von geschulten Pflegekräften, denen Ihr Wohlbefinden wirklich am Herzen liegt.",
    image: "https://images.unsplash.com/photo-1559839914-17aae19cec71?w=700&auto=format&fit=crop&q=80",
  },
  {
    id: "elderly",
    label: "Seniorenbetreuung",
    icon: UserCheck,
    description: "Einfühlsame Begleitung und Mobilitätshilfe, die Senioren ermöglicht, sicher, selbstständig und mit Würde in den eigenen vier Wänden zu leben.",
    image: "https://images.unsplash.com/photo-1516307365547-e4e5c7bf3a4f?w=700&auto=format&fit=crop&q=80",
  },
  {
    id: "medication",
    label: "Medikamentenverwaltung",
    icon: Pill,
    description: "Pünktliche Erinnerungen und sorgfältige Medikamentenüberwachung sorgen täglich für die zuverlässige Einhaltung des Gesundheitsplans Ihres Angehörigen.",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=700&auto=format&fit=crop&q=80",
  },
  {
    id: "medical",
    label: "Medizinische Unterstützung",
    icon: Stethoscope,
    description: "Koordination mit Gesundheitsfachleuten, Unterstützung nach Operationen und häusliche Vitalzeichenüberwachung für mehr Sicherheit zu Hause.",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=700&auto=format&fit=crop&q=80",
  },
  {
    id: "alzheimers",
    label: "Alzheimer & Demenz",
    icon: Brain,
    description: "Spezialisierte Gedächtnisbetreuung mit strukturierten Tagesabläufen, kognitiven Aktivitäten und einem sicheren, fürsorglichen Umfeld für Menschen mit Gedächtniserkrankungen.",
    image: "https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=700&auto=format&fit=crop&q=80",
  },
  {
    id: "rehab",
    label: "Genesungspflege",
    icon: Activity,
    description: "Geführte Rehabilitationsübungen, Wundpflege und aufmerksame Begleitung für eine reibungslose und komfortable Genesung nach Operationen zu Hause.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&auto=format&fit=crop&q=80",
  },
  {
    id: "overnight",
    label: "Nacht- & Rund-um-die-Uhr-Pflege",
    icon: Clock,
    description: "Rund-um-die-Uhr-Betreuung für vollständige Sicherheit der Familie — Ihr Angehöriger ist niemals allein, weder tagsüber noch nachts.",
    image: "https://images.unsplash.com/photo-1553991562-9f24b119ff51?w=700&auto=format&fit=crop&q=80",
  },
  {
    id: "palliative",
    label: "Palliativ- & Hospizbetreuung",
    icon: Hand,
    description: "Sanfte, mitfühlende Komfortpflege, die Lebensqualität, Würde und emotionales Wohlbefinden der gesamten Familie in den Vordergrund stellt.",
    image: "https://images.unsplash.com/photo-1576765574883-b3dd5b9ea5ca?w=700&auto=format&fit=crop&q=80",
  },
];

export default function Services() {
  const [active, setActive] = useState<string>("elderly");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const activeService = services.find((s) => s.id === active) ?? services[0];

  return (
    <section
      id="services"
      ref={ref}
      className="py-20 lg:py-28 bg-surface"
      aria-label="Unsere Leistungen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Kopfzeile */}
        <div className="grid lg:grid-cols-2 gap-8 items-end mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <SectionBadge>Leistungen</SectionBadge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 leading-tight text-balance">
              Ihre Pflege, Ihr Weg —{" "}
              <span className="text-primary">Mit Herz geleistet</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start lg:items-end gap-4"
          >
            <p className="text-gray-500 text-base leading-relaxed flex-1">
              Von täglicher persönlicher Pflege bis hin zu spezialisierter medizinischer Betreuung — wir bieten ein vollständiges Spektrum häuslicher Leistungen, individuell auf jeden Menschen abgestimmt.
            </p>
            <a
              href="#contact"
              className="flex-shrink-0 inline-flex items-center gap-1.5 bg-primary text-white font-semibold px-6 py-3 rounded-full text-sm hover:bg-primary-600 transition-colors"
            >
              Alle Leistungen entdecken
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </motion.div>
        </div>

        {/* Leistungsgitter: Liste + Detail */}
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Leistungsliste */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-2"
            role="list"
            aria-label="Leistungskategorien"
          >
            {services.map((service) => {
              const Icon = service.icon;
              const isActive = active === service.id;
              return (
                <button
                  key={service.id}
                  role="listitem"
                  onClick={() => setActive(service.id)}
                  aria-pressed={isActive}
                  aria-label={`Details zu ${service.label} anzeigen`}
                  className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl text-left transition-all duration-200 group ${
                    isActive
                      ? "bg-accent text-white shadow-md shadow-accent/20"
                      : "bg-white text-gray-700 hover:bg-white hover:shadow-card"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      className={`w-4 h-4 flex-shrink-0 ${isActive ? "text-white" : "text-primary/60"}`}
                      aria-hidden="true"
                    />
                    <span className={`font-medium text-sm ${isActive ? "text-white" : "text-gray-800"}`}>
                      {service.label}
                    </span>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${isActive ? "text-white translate-x-0.5" : "text-gray-300 group-hover:text-gray-400"}`}
                    aria-hidden="true"
                  />
                </button>
              );
            })}
          </motion.div>

          {/* Leistungsdetail */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="bg-white rounded-3xl overflow-hidden shadow-card-lg h-full"
            >
              {/* Bild */}
              <div className="relative h-56 sm:h-72 overflow-hidden">
                <img
                  src={activeService.image}
                  alt={`Illustration der Leistung: ${activeService.label}`}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                <div className="absolute top-4 left-4 bg-accent text-white font-bold text-xs px-3 py-1.5 rounded-full">
                  {activeService.label}
                </div>
              </div>

              {/* Detailinhalt */}
              <div className="p-7">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(27,92,144,0.08)" }}>
                    {<activeService.icon className="w-5 h-5 text-primary" aria-hidden="true" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {activeService.label}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {activeService.description}
                    </p>
                  </div>
                </div>
                <div className="mt-6 pt-5 border-t border-gray-100">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:gap-2.5 transition-all"
                  >
                    Leistung anfragen
                    <ChevronRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
