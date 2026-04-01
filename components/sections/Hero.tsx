"use client";

import { motion } from "framer-motion";
import { Star, ChevronRight, Shield } from "lucide-react";

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section
      className="relative bg-white overflow-hidden"
      style={{ minHeight: "100svh" }}
      aria-label="Hero-Bereich"
    >
      {/* Subtiler Hintergrund-Shape rechts */}
      <div
        className="absolute right-0 top-0 bottom-0 w-[52%] bg-gradient-to-b from-primary/10 to-transparent hidden lg:block"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[100svh] py-32 lg:py-0">

          {/* ── Linker Inhalt ── */}
          <motion.div
            className="flex flex-col justify-center"
            initial="hidden"
            animate="visible"
          >

            {/* Überschrift */}
            <motion.h1
              custom={1} variants={fadeUp}
              className="text-4xl sm:text-5xl xl:text-[3.4rem] font-bold text-gray-900 leading-[1.12] mb-6 text-balance"
            >
              Das Lächeln Ihrer Eltern.{" "}
              <span className="text-primary">Liegt uns am Herzen.</span>
            </motion.h1>

            {/* Untertext */}
            <motion.p
              custom={2} variants={fadeUp}
              className="text-gray-500 text-lg leading-relaxed mb-10 max-w-[25rem]"
            >
              Mitfühlende, geprüfte Pflegekräfte, die Ihre Liebsten wie Familie behandeln — täglich sicher, glücklich und gut versorgt.
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={3} variants={fadeUp}
              className="flex flex-wrap gap-3"
            >
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-600 text-white font-semibold px-7 py-3.5 rounded-full text-sm shadow-lg shadow-primary/20 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Jetzt Pflegekraft finden
                <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </motion.a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 text-gray-600 border border-gray-200 hover:border-primary/30 hover:text-primary px-7 py-3.5 rounded-full text-sm transition-all"
              >
                Mehr erfahren
              </a>
            </motion.div>
          </motion.div>

          {/* ── Rechtes Bild ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative h-[440px] lg:h-[600px] xl:h-[660px]"
          >
            <div className="relative h-full rounded-[2.5rem] overflow-hidden shadow-card-lg">
              <img
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=900&auto=format&fit=crop&q=80"
                alt="Fürsorgliche Pflegekraft verbringt Zeit mit einer älteren Person"
                className="w-full h-full object-cover object-center"
              />
              {/* Sehr subtiler Gradient unten */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent" />
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.45 }}
              className="absolute bottom-6 right-6 bg-white rounded-2xl px-4 py-3.5 shadow-card-lg"
              aria-label="Polizeilich überprüfte Pflegekräfte"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-4 h-4 text-accent" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-primary font-bold text-xs">Polizeilich überprüft</p>
                  <p className="text-gray-400 text-[11px] mt-0.5">Jede Pflegekraft wird geprüft</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
