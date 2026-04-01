"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Heart, Shield, Clock, ArrowRight } from "lucide-react";
import SectionBadge from "@/components/ui/SectionBadge";

const values = [
  {
    icon: Heart,
    color: "bg-accent/10 text-accent",
    title: "Menschliche Wärme",
    text: "Echte Herzlichkeit statt professioneller Distanz — unsere Pflegekräfte werden zu vertrauten, geschätzten Gesichtern im Alltag.",
  },
  {
    icon: Shield,
    color: "bg-primary/10 text-primary",
    title: "Vollständig geprüft",
    text: "Polizeiliche Überprüfung, CPR-Zertifizierung und persönliche Referenzen — für jede einzelne Pflegekraft, ohne Ausnahme.",
  },
  {
    icon: Clock,
    color: "bg-accent/10 text-accent",
    title: "Immer erreichbar",
    text: "24/7 Ansprechpartner für Familie und Pflegekraft, damit Sie zu jeder Zeit wissen, dass alles in Ordnung ist.",
  },
];

const stats = [
  { value: "25+",    label: "Jahre Erfahrung"   },
  { value: "3.200+", label: "Pflegekräfte"       },
  { value: "98 %",   label: "Familienzufriedenheit" },
];

const fadeLeft = {
  hidden:  { opacity: 0, x: -28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const fadeRight = {
  hidden:  { opacity: 0, x: 28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, delay: 0.15, ease: "easeOut" } },
};

export default function About() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 lg:py-32 bg-white overflow-hidden"
      aria-label="Über Name der Firma"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* ── Links: Bild-Komposition ── */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative order-2 lg:order-1"
          >
            {/* Haupt-Bild */}
            <div className="relative h-[480px] sm:h-[560px] rounded-[2.5rem] overflow-hidden shadow-card-lg">
              <img
                src="https://images.unsplash.com/photo-1607975218223-94c990b07649?w=750&auto=format&fit=crop&q=80"
                alt="Pflegekraft mit älterer Person"
                className="w-full h-full object-cover"
              />
              {/* Subtiler Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/25 via-transparent to-transparent" />
            </div>

            {/* Kleines Überlappungsbild — unten links */}
            <div className="absolute -bottom-8 -left-5 w-44 h-44 rounded-3xl overflow-hidden shadow-card-lg border-[3px] border-white">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=350&auto=format&fit=crop&q=80"
                alt="Pflegerin bei der Arbeit"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Stat — oben rechts */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.45, ease: "easeOut" }}
              className="absolute top-8 right-8 bg-white rounded-2xl px-5 py-4 shadow-card-lg"
            >
              <p className="text-2xl font-bold text-primary leading-none">3.200+</p>
              <p className="text-gray-400 text-xs mt-1">Verifizierte Pflegekräfte</p>
            </motion.div>

            {/* Floating Bewertungs-Badge — über dem kleinen Bild */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.4 }}
              className="absolute bottom-28 left-28 bg-white rounded-xl px-3.5 py-2.5 shadow-card-lg"
            >
              <div className="flex items-center gap-1.5">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-3 h-3 fill-yellow-400" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-700 text-xs font-bold">4,8</span>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Rechts: Inhalt ── */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="order-1 lg:order-2 flex flex-col"
          >
            <SectionBadge>Über Name der Firma</SectionBadge>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-gray-900 mt-5 mb-5 leading-[1.15] text-balance">
              Wo Fremde zu{" "}
              <span className="text-primary">Familie werden</span>
            </h2>

            <p className="text-gray-500 text-base leading-relaxed max-w-md mb-10">
              Außergewöhnliche Pflege entsteht durch Vertrauen, Wärme und echte menschliche Verbundenheit. Unsere Pflegekräfte helfen nicht nur — sie begleiten Ihre Liebsten mit Herz.
            </p>

            {/* Wert-Items */}
            <div className="space-y-7">
              {values.map(({ icon: Icon, color, title, text }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className="flex gap-4"
                >
                  <div className={`w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 ${color}`}>
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div className="pt-0.5">
                    <h3 className="font-bold text-gray-900 text-sm mb-1">{title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Trennlinie + Stats */}
            <div className="mt-10 pt-8 border-t border-gray-100">
              <div className="flex items-center gap-8">
                {stats.map(({ value, label }, i) => (
                  <div key={label} className="flex items-center gap-8">
                    <div>
                      <p className="text-2xl font-bold text-gray-900 leading-none">{value}</p>
                      <p className="text-gray-400 text-xs mt-1">{label}</p>
                    </div>
                    {i < stats.length - 1 && (
                      <div className="w-px h-10 bg-gray-200 flex-shrink-0" aria-hidden="true" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA-Link */}
            <motion.a
              href="#services"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
              className="inline-flex items-center gap-2 mt-8 text-primary font-semibold text-sm hover:gap-3 transition-all w-fit group"
            >
              Unsere Leistungen entdecken
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
