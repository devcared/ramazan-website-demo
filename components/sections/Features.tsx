"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Droplets, Pill, Clock, ChevronDown, ChevronRight } from "lucide-react";
import SectionBadge from "@/components/ui/SectionBadge";

interface Feature {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  image: string;
}

const features: Feature[] = [
  {
    id: "routine",
    icon: Droplets,
    title: "Vertraute Tagesabläufe",
    description:
      "Sanfte, würdevolle Morgenroutinen durch dieselbe vertraute Pflegekraft — jeden Tag. Vom warmen Bad bis zum Frühstück: Der Tag Ihrer Liebsten beginnt mit Fürsorge, Komfort und einem freundlichen Gesicht, das sie kennen.",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "medication",
    icon: Pill,
    title: "Medikamente, immer pünktlich",
    description:
      "Dieselbe Pflegekraft, dieselbe Zeit, jede Dosis. Präzise Medikamentenverfolgung und rechtzeitige Erinnerungen bedeuten keine ausgelassenen Pillen, keine Verwirrung — nur zuverlässige Gesundheitsunterstützung.",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "247",
    icon: Clock,
    title: "24/7 Persönliche Betreuung",
    description:
      "Dieselbe Pflegekraft, immer erreichbar. Rund-um-die-Uhr-Check-ins, eine vertraute Präsenz und sofortige Familienupdates alle 3 Stunden — damit Sie immer wissen, dass Ihr Angehöriger sicher und glücklich ist.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&auto=format&fit=crop&q=80",
  },
];

export default function Features() {
  const [open, setOpen] = useState<string>("routine");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const activeFeature = features.find((f) => f.id === open) ?? features[0];

  return (
    <section
      id="features"
      ref={ref}
      className="py-20 lg:py-28 bg-deep overflow-hidden"
      aria-label="Schlüsseleigenschaften"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* ── Links: Überschrift + Akkordeon ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <SectionBadge dark>Unser Versprechen</SectionBadge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-5 mb-4 leading-tight text-balance">
                Ihre Familie,{" "}
                <span className="text-accent-muted">täglich an Ihrer Seite</span>
              </h2>
              <p className="text-white/55 text-base leading-relaxed mb-10">
                Polizeilich überprüft, vertrauenswürdig, zuverlässig. Dieselbe freundliche Pflegekraft, dieselbe Wärme — jeden Morgen, jede Woche, niemals allein.
              </p>
            </motion.div>

            {/* Akkordeon */}
            <div className="space-y-3" role="list" aria-label="Leistungs-Akkordeon">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                const isOpen = open === feature.id;
                return (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    role="listitem"
                  >
                    <button
                      onClick={() => setOpen(isOpen ? "" : feature.id)}
                      aria-expanded={isOpen}
                      aria-controls={`feature-body-${feature.id}`}
                      className={`w-full flex items-center justify-between p-5 rounded-2xl text-left transition-all duration-300 ${
                        isOpen
                          ? "bg-white/10 border border-white/30"
                          : "bg-white/5 border border-white/10 hover:bg-white/8"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${
                            isOpen ? "bg-accent" : "bg-white/10"
                          }`}
                        >
                          <Icon
                            className={`w-5 h-5 ${isOpen ? "text-white" : "text-white/60"}`}
                            aria-hidden="true"
                          />
                        </div>
                        <span className={`font-semibold text-sm ${isOpen ? "text-white" : "text-white/70"}`}>
                          {feature.title}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-white/40 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`feature-body-${feature.id}`}
                          role="region"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 py-4">
                            <p className="text-white/55 text-sm leading-relaxed">
                              {feature.description}
                            </p>
                            <a
                              href="#contact"
                              className="inline-flex items-center gap-1.5 text-accent-muted font-semibold text-xs mt-4 hover:gap-2.5 transition-all"
                            >
                              Mehr erfahren
                              <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ── Rechts: Bildbereich ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={open}
                initial={{ opacity: 0, scale: 0.97, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, y: -12 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {/* Hauptbild */}
                <div className="relative h-80 sm:h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={activeFeature.image}
                    alt={`Illustration: ${activeFeature.title}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep/60 to-transparent" />

                  {/* Titeloverlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4">
                      <p className="text-white font-semibold text-sm">{activeFeature.title}</p>
                      <p className="text-white/55 text-xs mt-1 line-clamp-2">{activeFeature.description.slice(0, 90)}…</p>
                    </div>
                  </div>
                </div>

                {/* Vorschaubilder */}
                <div className="grid grid-cols-3 gap-3 mt-3">
                  {features.map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setOpen(f.id)}
                      aria-label={`${f.title} anzeigen`}
                      className={`relative h-20 rounded-xl overflow-hidden transition-all ${
                        open === f.id
                          ? "ring-2 ring-accent ring-offset-2 ring-offset-deep"
                          : "opacity-50 hover:opacity-80"
                      }`}
                    >
                      <img src={f.image} alt="" aria-hidden="true" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute -top-8 -right-8 w-24 h-24 bg-accent/10 rounded-full blur-2xl" aria-hidden="true" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
