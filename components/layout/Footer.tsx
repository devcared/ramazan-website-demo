import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

const footerLinks: Record<string, string[]> = {
  Leistungen:  ["Persönliche Pflege", "Seniorenbetreuung", "Medizinische Hilfe", "24/7 Betreuung", "Alzheimer-Pflege"],
  Unternehmen: ["Über uns", "Unser Team", "Karriere", "Blog", "Presse"],
  Ressourcen:  ["Ablauf", "Preise", "FAQs", "Erfahrungsberichte", "Kontakt"],
};

// SVG paths for social icons (brand icons removed from lucide-react)
const socials = [
  {
    label: "Facebook",
    href: "#",
    path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
  },
  {
    label: "X (Twitter)",
    href: "#",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    label: "Instagram",
    href: "#",
    path: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 7a5 5 0 1 1 0 10A5 5 0 0 1 12 7m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6",
  },
  {
    label: "LinkedIn",
    href: "#",
    path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
  },
];

const contacts = [
  { icon: Phone,  text: "040 000 00 00",       href: "tel:+4940000000"           },
  { icon: Mail,   text: "hallo@Name der Firma.de",  href: "mailto:hallo@Name der Firma.de" },
  { icon: MapPin, text: "Hamburg, Deutschland", href: "#"                         },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white" aria-label="Seitenfußzeile">

      {/* ── Hauptbereich ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-10">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Markenspalte */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 w-fit group">
              <Image
                src="/logo.png"
                alt="Name der Firma Logo"
                width={40}
                height={40}
                className="object-contain group-hover:scale-105 transition-transform"
              />
              <span className="text-white font-bold text-xl">Name der Firma</span>
            </Link>

            <p className="text-white/80 text-sm leading-relaxed max-w-[17rem]">
              Professionelle Pflegekräfte, die sich dafür einsetzen, Ihre
              Liebsten sicher, glücklich und selbstständig zu Hause zu halten.
            </p>

            {/* Kontaktzeilen */}
            <ul className="space-y-2.5" aria-label="Kontaktangaben">
              {contacts.map(({ icon: Icon, text, href }) => (
                <li key={text}>
                  <a
                    href={href}
                    className="inline-flex items-center gap-2.5 text-white/80 hover:text-white text-sm transition-colors"
                  >
                    <Icon className="w-3.5 h-3.5 text-accent flex-shrink-0" aria-hidden="true" />
                    {text}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5">
              {socials.map(({ label, href, path }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-full bg-white/8 hover:bg-accent flex items-center justify-center transition-all duration-200 group"
                >
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white/50 group-hover:fill-white transition-colors" aria-hidden="true">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Navigationsspalten */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <nav key={category} aria-label={`${category} Links`}>
              <h3 className="text-white font-semibold text-sm mb-6 tracking-wide">{category}</h3>
              <ul className="space-y-3.5" role="list">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-white/70 hover:text-white text-sm transition-colors duration-200"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      {/* ── Untere Leiste ── */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/30 text-xs">
            © 2025 Name der Firma. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-5">
            {["Datenschutz", "Nutzungsbedingungen", "Cookie-Richtlinie"].map((item) => (
              <Link key={item} href="#" className="text-white/30 hover:text-white/55 text-xs transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}
