"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ClipboardList, Search, UserCheck, CalendarCheck } from "lucide-react";
import SectionBadge from "@/components/ui/SectionBadge";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Bedürfnisse mitteilen",
    description:
      "Füllen Sie ein kurzes, einfaches Formular über die Pflegeanforderungen, Terminwünsche und besondere Bedürfnisse Ihres Angehörigen aus.",
  },
  {
    number: "02",
    icon: Search,
    title: "Wir finden Ihre Pflegekraft",
    description:
      "Unser Team wählt die am besten geeigneten Pflegekräfte aus unserem verifizierten Pool aus — abgestimmt nach Fähigkeiten, Persönlichkeit und Verfügbarkeit.",
  },
  {
    number: "03",
    icon: UserCheck,
    title: "Kennenlernen & Bestätigen",
    description:
      "Lernen Sie Ihre vorgeschlagene Pflegekraft vor jeder Verpflichtung kennen. Wir möchten, dass Sie sich zu 100 % wohl und sicher in Ihrer Wahl fühlen.",
  },
  {
    number: "04",
    icon: CalendarCheck,
    title: "Pflege beginnt",
    description:
      "Ihre persönliche Pflegekraft erscheint am ersten Tag mit einem individuellen Pflegeplan — und hält die Familie auf dem Laufenden.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="py-20 lg:py-28 bg-white"
      aria-label="So funktioniert Name der Firma"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Kopfzeile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <SectionBadge>So funktioniert es</SectionBadge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-5 mb-5 leading-tight">
            Einfache Schritte zur{" "}
            <span className="text-primary">außergewöhnlichen Pflege</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Der Einstieg ist einfach. Wir übernehmen die gesamte Komplexität, damit Ihre Familie die richtige Pflege ohne Stress erhält.
          </p>
        </motion.div>

        {/* Schritte */}
        <div className="relative">
          {/* Verbindungslinie (Desktop) */}
          <div
            className="hidden lg:block absolute top-16 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-px bg-gradient-to-r from-surface via-primary/20 to-surface"
            aria-hidden="true"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="relative flex flex-col items-center text-center group"
                >
                  {/* Icon-Container */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-surface border-2 border-surface-dark flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300">
                      <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                    </div>
                    {/* Schritt-Nummer */}
                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-accent text-white text-xs font-bold rounded-full flex items-center justify-center shadow-sm">
                      {i + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="text-center mt-14"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-8 py-4 rounded-full text-sm hover:bg-primary-600 transition-all shadow-lg shadow-primary/20 hover:shadow-xl"
          >
            Kostenlos starten — Noch heute
          </a>
          <p className="text-gray-400 text-xs mt-4">
            Keine Verpflichtung · Antwort innerhalb von 2 Stunden
          </p>
        </motion.div>
      </div>
    </section>
  );
}
