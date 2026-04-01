"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "#",         label: "Startseite"   },
  { href: "#about",    label: "Pflegekräfte" },
  { href: "#services", label: "Leistungen"   },
  { href: "#contact",  label: "Kontakt"      },
];

export default function Navbar() {
  const [isOpen,   setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header role="banner">
      <nav
        aria-label="Hauptnavigation"
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-[0_1px_16px_rgba(27,92,144,0.09)]" : "shadow-none"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between" style={{ height: "4.5rem" }}>

            {/* ── Logo ── */}
            <Link
              href="/"
              className="flex items-center gap-3 group flex-shrink-0"
              aria-label="CareHaven – zur Startseite"
            >
              <Image
                src="/logo.png"
                alt="CareHaven Logo"
                width={38}
                height={38}
                className="object-contain group-hover:scale-105 transition-transform"
                priority
              />
              <span className="font-bold text-lg tracking-tight text-primary">
                Name der Firma
              </span>
            </Link>

            {/* ── Desktop Links ── */}
            <ul className="hidden md:flex items-center gap-9" role="list">
              {navLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm font-medium text-gray-500 hover:text-primary transition-colors duration-200 relative
                      after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-[1.5px]
                      after:bg-accent after:transition-all after:duration-200 hover:after:w-full"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* ── CTA ── */}
            <div className="hidden md:flex items-center">
              <a
                href="tel:+4940000000"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-all duration-200 shadow-sm"
                aria-label="Jetzt anrufen"
              >
                <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                040 000 00 00
              </a>
            </div>

            {/* ── Mobile Toggle ── */}
            <button
              className="md:hidden p-2 rounded-lg text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors"
              onClick={() => setIsOpen((v) => !v)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
            >
              {isOpen
                ? <X    className="w-5 h-5" aria-hidden="true" />
                : <Menu className="w-5 h-5" aria-hidden="true" />
              }
            </button>
          </div>
        </div>

        {/* ── Mobile Drawer ── */}
        <div
          id="mobile-menu"
          role="dialog"
          aria-label="Mobile Navigation"
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-gray-100 px-6 pt-4 pb-6 space-y-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="flex items-center py-3 text-gray-600 hover:text-primary text-sm font-medium border-b border-gray-100 last:border-0 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
            <div className="pt-4">
              <a
                href="tel:+4940000000"
                className="flex items-center justify-center gap-2 bg-accent text-white font-semibold px-6 py-3 rounded-full text-sm w-full"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                040 000 00 00
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
