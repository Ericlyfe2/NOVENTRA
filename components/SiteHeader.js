"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="bg-surface/80 backdrop-blur-xl border-b border-white/10 shadow-sm top-0 sticky z-50">
      <nav className="flex justify-between items-center w-full px-gutter max-w-container-max mx-auto h-20">
        <Link
          href="/"
          className="font-title-lg text-title-lg font-bold text-on-surface tracking-tight"
        >
          Noventra Technologies
        </Link>
        <div className="hidden md:flex items-center gap-xl">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                isActive(link.href)
                  ? "font-body-md text-body-md text-primary border-b-2 border-primary pb-1 transition-colors duration-300"
                  : "font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-300"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-md">
          <Link
            href="/contact"
            className="hidden sm:inline-block bg-primary text-on-primary font-label-md text-label-md px-lg py-sm rounded-lg hover:opacity-80 active:scale-95 transition-all glow-button"
          >
            Get Started
          </Link>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-lg border border-outline-variant text-on-surface hover:bg-white/5 transition-colors"
          >
            <span className="material-symbols-outlined">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-surface/95 backdrop-blur-xl px-gutter py-lg">
          <div className="flex flex-col gap-lg">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={
                  isActive(link.href)
                    ? "font-body-md text-body-md text-primary"
                    : "font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
                }
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="bg-primary text-on-primary font-label-md text-label-md px-lg py-sm rounded-lg text-center glow-button transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
