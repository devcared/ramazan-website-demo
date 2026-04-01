"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionBadge from "@/components/ui/SectionBadge";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  rating: number;
  careType: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Esther Hoffmann",
    role: "Tochter eines Pflegeempfängers",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "Die Pflegekräfte sind freundlich, professionell und kümmern sich wirklich um das Wohlbefinden meines Vaters. Ich bin vollkommen beruhigt, weil ich weiß, dass er in guten Händen ist. Sie behandeln ihn wie ihre eigene Familie — genau das, was wir uns erhofft hatten.",
    rating: 5,
    careType: "Seniorenbetreuung",
  },
  {
    id: 2,
    name: "Robert Chen",
    role: "Sohn eines Pflegeempfängers",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "Nach der Operation meiner Mutter waren wir überwältigt. Name der Firma fand innerhalb eines Tages eine passende Pflegekraft. Der individuelle Genesungsplan war hervorragend — Mama ist jetzt wieder auf den Beinen. Ich kann Name der Firma nur wärmstens empfehlen.",
    rating: 5,
    careType: "Genesungspflege",
  },
  {
    id: 3,
    name: "Patricia Weiß",
    role: "Ehefrau eines Pflegeempfängers",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    quote:
      "Mein Mann hat Alzheimer und es schien unmöglich, die richtige Pflegekraft zu finden. Das Spezialistenteam von Name der Firma verstand seine Bedürfnisse sofort. Sein Tagesablauf ist jetzt strukturiert, ruhig und er wirkt so viel glücklicher.",
    rating: 5,
    careType: "Alzheimer-Pflege",
  },
  {
    id: 4,
    name: "Jakob Schreiber",
    role: "Pflegeempfänger (Rundum-Betreuung)",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    quote:
      "Mit 82 Jahren allein zu wohnen war beängstigend. Jetzt hat David jeden Morgen bei mir und das hat mein Leben verändert. Ich fühle mich sicher, bin aktiv und werde aufrichtig umsorgt. Es ist wie ein Freund zu haben, der zufällig ein Profi ist.",
    rating: 5,
    careType: "Rund-um-die-Uhr-Pflege",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-20 lg:py-28 bg-surface"
      aria-label="Erfahrungsberichte"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Kopfzeile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-14"
        >
          <div>
            <SectionBadge>Erfahrungsberichte</SectionBadge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-5 leading-tight">
              Was unsere{" "}
              <span className="text-primary">Familien sagen</span>
            </h2>
          </div>

          {/* Navigationspfeile */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={prev}
              aria-label="Vorheriger Erfahrungsbericht"
              className="w-11 h-11 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary transition-all"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>
            <span className="text-gray-400 text-sm font-medium">
              {current + 1} / {testimonials.length}
            </span>
            <button
              onClick={next}
              aria-label="Nächster Erfahrungsbericht"
              className="w-11 h-11 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary transition-all"
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </motion.div>

        {/* Erfahrungsberichtskarte */}
        <AnimatePresence mode="wait">
          <motion.div
            key={t.id}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
              {/* Links: Großes Foto */}
              <div className="lg:col-span-2">
                <div className="relative h-72 lg:h-full min-h-64 rounded-3xl overflow-hidden shadow-card-lg">
                  <img
                    src={t.avatar}
                    alt={`${t.name} — ${t.role}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-5 left-5 bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                    {t.careType}
                  </div>
                </div>
              </div>

              {/* Rechts: Zitat */}
              <div className="lg:col-span-3 flex flex-col justify-between bg-white rounded-3xl p-8 sm:p-10 shadow-card-lg">
                <div>
                  {/* Sterne */}
                  <div className="flex gap-1 mb-6" aria-label={`${t.rating} von 5 Sternen`}>
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                    ))}
                  </div>

                  <Quote className="w-10 h-10 text-primary/15 mb-4" aria-hidden="true" />

                  <blockquote className="text-gray-700 text-xl sm:text-2xl leading-relaxed font-medium italic">
                    &bdquo;{t.quote}&ldquo;
                  </blockquote>
                </div>

                {/* Autorenzeile */}
                <div className="flex items-center gap-4 mt-10 pt-8 border-t border-gray-100">
                  <img
                    src={t.avatar}
                    alt=""
                    aria-hidden="true"
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-accent/30"
                  />
                  <div>
                    <p className="font-bold text-gray-900">{t.name}</p>
                    <p className="text-gray-400 text-sm">{t.role}</p>
                  </div>
                  <div className="ml-auto">
                    <div className="bg-surface px-3 py-1.5 rounded-full">
                      <p className="text-primary font-bold text-sm">Verifizierte Bewertung</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Punkt-Indikatoren */}
        <div className="flex justify-center gap-2 mt-8" role="tablist" aria-label="Erfahrungsberichtsnavigation">
          {testimonials.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              aria-label={`Zu Erfahrungsbericht ${i + 1} wechseln`}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current ? "w-6 h-2 bg-primary" : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
