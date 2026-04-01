"use client";

import { useState, useRef, FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, MapPin, Mail, Clock, ChevronRight, CheckCircle2 } from "lucide-react";
import SectionBadge from "@/components/ui/SectionBadge";

const contactInfo = [
  {
    icon: Phone,
    title: "Anrufen",
    value: "040 000 00 00",
    sub: "Mo – Fr, 8 – 20 Uhr",
    href: "tel:+4940000000",
  },
  {
    icon: MapPin,
    title: "Besuchen",
    value: "Musterstraße 12",
    sub: "20095 Hamburg",
    href: "#",
  },
  {
    icon: Mail,
    title: "E-Mail schreiben",
    value: "hallo@Name der Firma.de",
    sub: "Antwort innerhalb von 2 Stunden",
    href: "mailto:hallo@Name der Firma.de",
  },
  {
    icon: Clock,
    title: "Pflegezeiten",
    value: "24 / 7 / 365",
    sub: "Immer für Ihre Familie da",
    href: "#",
  },
];

type Status = "idle" | "sending" | "sent";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1500);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 lg:py-28 bg-white"
      aria-label="Kontakt"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Kopfzeile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <SectionBadge>Kontakt aufnehmen</SectionBadge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-5 mb-5 leading-tight">
            Finden wir gemeinsam die{" "}
            <span className="text-primary">richtige Pflege</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Füllen Sie das Formular aus und eine Pflegekoordinatorin meldet sich innerhalb von 2 Stunden — ganz unverbindlich.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* ── Links: Kontaktinfokarten ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map(({ icon: Icon, title, value, sub, href }) => (
              <a
                key={title}
                href={href}
                className="flex items-start gap-4 p-5 rounded-2xl bg-surface border border-surface-dark hover:border-primary/30 hover:shadow-card transition-all group"
              >
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-600 transition-colors">
                  <Icon className="w-5 h-5 text-accent" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wide font-medium mb-0.5">{title}</p>
                  <p className="font-bold text-gray-900 text-sm">{value}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{sub}</p>
                </div>
              </a>
            ))}

            {/* Vertrauenshinweis */}
            <div className="mt-6 p-5 rounded-2xl bg-primary text-white">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-bold text-sm mb-1">Ihre Daten sind sicher</p>
                  <p className="text-white/80 text-xs leading-relaxed">
                    Wir geben Ihre persönlichen Daten niemals weiter. Alle Pflegekräfte sind polizeilich überprüft und versichert.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Rechts: Formular ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {status === "sent" ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center bg-surface rounded-3xl p-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-6 shadow-xl shadow-primary/30"
                >
                  <CheckCircle2 className="w-10 h-10 text-accent" aria-hidden="true" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Nachricht gesendet!</h3>
                <p className="text-gray-500 leading-relaxed max-w-sm">
                  Vielen Dank für Ihre Anfrage. Eine Pflegekoordinatorin wird sich innerhalb von{" "}
                  <strong className="text-primary">2 Stunden</strong> bei Ihnen melden.
                </p>
                <button
                  onClick={() => { setStatus("idle"); setForm({ name: "", email: "", phone: "", service: "", message: "" }); }}
                  className="mt-8 text-primary font-semibold text-sm hover:underline"
                >
                  Weitere Nachricht senden
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-surface rounded-3xl p-7 sm:p-10 space-y-5"
                noValidate
                aria-label="Kontaktformular"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Ihr Name <span aria-hidden="true" className="text-red-400">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Maria Mustermann"
                      className="w-full px-4 py-3.5 bg-white rounded-xl border border-surface-dark text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      E-Mail-Adresse <span aria-hidden="true" className="text-red-400">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="maria@beispiel.de"
                      className="w-full px-4 py-3.5 bg-white rounded-xl border border-surface-dark text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Telefonnummer
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="040 000 00 00"
                      className="w-full px-4 py-3.5 bg-white rounded-xl border border-surface-dark text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                      Gewünschte Pflegeart
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-white rounded-xl border border-surface-dark text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Leistung wählen …</option>
                      <option>Persönliche Pflege</option>
                      <option>Seniorenbetreuung</option>
                      <option>Medikamentenverwaltung</option>
                      <option>Medizinische Unterstützung</option>
                      <option>Alzheimer &amp; Demenz</option>
                      <option>Genesungspflege</option>
                      <option>Nacht- &amp; Rund-um-die-Uhr-Pflege</option>
                      <option>Palliativ- &amp; Hospizbetreuung</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Ihre Nachricht <span aria-hidden="true" className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Beschreiben Sie die Pflegebedürfnisse Ihres Angehörigen, Terminwünsche und besondere medizinische Hinweise …"
                    className="w-full px-4 py-3.5 bg-white rounded-xl border border-surface-dark text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-2 bg-primary text-white font-bold py-4 rounded-2xl text-sm hover:bg-primary-600 transition-all shadow-lg shadow-primary/20 hover:shadow-xl disabled:opacity-70"
                >
                  {status === "sending" ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true" />
                      Wird gesendet …
                    </>
                  ) : (
                    <>
                      Nachricht senden
                      <ChevronRight className="w-4 h-4" aria-hidden="true" />
                    </>
                  )}
                </button>

                <p className="text-center text-gray-400 text-xs">
                  Mit dem Absenden stimmen Sie unserer{" "}
                  <a href="#" className="text-primary hover:underline">Datenschutzerklärung</a> zu.
                  Kein Spam, versprochen.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
