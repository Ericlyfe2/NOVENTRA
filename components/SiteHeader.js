"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      className={`bg-surface/80 backdrop-blur-xl border-b border-outline-variant/20 shadow-sm top-0 sticky z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <nav className="flex justify-between items-center w-full px-gutter max-w-container-max mx-auto h-16 md:h-20">
        <Link
          href="/"
          className="font-title-lg text-title-lg font-bold text-on-surface tracking-tight shrink-0"
        >
          <span className="hidden sm:inline">Noventra Technologies</span>
          <span className="sm:hidden">Noventra</span>
        </Link>

        <div className="hidden md:flex items-center gap-xl">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                isActive(link.href)
                  ? "font-body-md text-body-md text-primary border-b-2 border-primary pb-1 transition-colors duration-300"
                  : "font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-xs md:gap-md">
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden lg:inline-block border border-outline-variant text-on-surface font-label-md text-label-md px-lg py-sm rounded hover:bg-black/5 dark:hover:bg-white/5 active:scale-95 transition-all"
          >
            Get Started
          </Link>
          <Link
            href="/payment"
            className={`hidden sm:flex items-center gap-xs font-label-md text-label-md px-lg py-sm rounded active:scale-95 transition-all glow-button ${
              isActive("/payment")
                ? "bg-primary/80 text-on-primary"
                : "bg-primary text-on-primary hover:opacity-80"
            }`}
          >
            <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              credit_card
            </span>
            Pay Now
          </Link>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="md:hidden flex items-center justify-center w-11 h-11 rounded border border-outline-variant text-on-surface hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          >
            <span className="material-symbols-outlined transition-transform duration-300" style={{ transform: menuOpen ? "rotate(90deg)" : "" }}>
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 h-[calc(100vh-4rem)] overflow-y-auto bg-surface animate-fade-in-up">
          <div className="flex flex-col gap-md px-gutter py-xl">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={
                  isActive(link.href)
                    ? "font-title-lg text-title-lg text-primary py-md border-b border-outline-variant/20"
                    : "font-title-lg text-title-lg text-on-surface-variant hover:text-primary py-md border-b border-outline-variant/20 transition-colors"
                }
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/payment"
              onClick={() => setMenuOpen(false)}
              className={
                isActive("/payment")
                  ? "font-title-lg text-title-lg text-primary py-md border-b border-outline-variant/20"
                  : "font-title-lg text-title-lg text-on-surface-variant hover:text-primary py-md border-b border-outline-variant/20 transition-colors"
              }
            >
              Pay
            </Link>
            <Link
              href="/payment"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-sm bg-primary text-on-primary font-label-md text-label-md px-3xl py-md rounded text-center glow-button transition-all mt-md"
            >
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                credit_card
              </span>
              Pay Now
            </Link>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="border border-outline-variant text-on-surface font-label-md text-label-md px-3xl py-md rounded text-center transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
