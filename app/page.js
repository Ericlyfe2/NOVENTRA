"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import ShaderBackground from "@/components/ShaderBackground";
import ThreeScene from "@/components/ThreeScene";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const CARDS = [
  { icon: "terminal", title: "Custom Software Development", desc: "Tailored applications built to align with your specific operational architecture.", delay: "0ms" },
  { icon: "language", title: "Web Development", desc: "High-performance, responsive web platforms that deliver seamless experiences.", delay: "100ms" },
  { icon: "smartphone", title: "Mobile App Development", desc: "Native and cross-platform mobile solutions for iOS and Android.", delay: "200ms" },
  { icon: "palette", title: "UI/UX Design", desc: "Data-driven design systems focused on user conversion and clarity.", delay: "300ms" },
  { icon: "cloud", title: "Cloud Solutions", desc: "Robust cloud infrastructure and migration services for scalable growth.", delay: "400ms" },
  { icon: "settings_suggest", title: "Business Automation", desc: "Streamlining workflows through intelligent algorithmic automation.", delay: "500ms" },
  { icon: "shopping_cart", title: "E-commerce", desc: "Enterprise-grade online retail solutions with secure payment integration.", delay: "600ms" },
  { icon: "psychology", title: "AI Applications", desc: "Integrating machine learning to provide predictive insights and automation.", delay: "700ms" },
];

function useScrollReveal() {
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function MagneticButton({ children, className, href }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    };
    const onLeave = () => { el.style.transform = ""; };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);
  return (
    <Link ref={ref} href={href} className={className}>
      {children}
    </Link>
  );
}

function RippleButton({ children, className, href }) {
  const ref = useRef(null);
  const handleClick = (e) => {
    const btn = ref.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const ripple = document.createElement("span");
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    ripple.style.cssText = `position:absolute;width:${size}px;height:${size}px;left:${x}px;top:${y}px;border-radius:50%;background:rgba(255,255,255,0.3);transform:scale(0);animation:rippleEffect 0.6s ease-out;pointer-events:none;`;
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };
  return (
    <Link ref={ref} href={href} className={`relative overflow-hidden ${className}`} onClick={handleClick}>
      {children}
    </Link>
  );
}

export default function HomePage() {
  useScrollReveal();

  return (
    <>
      <div className="fixed inset-0 z-[-1]">
        <div className="w-full h-full">
          <ShaderBackground />
        </div>
      </div>

      <SiteHeader />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[80vh] md:min-h-[921px] flex items-center overflow-hidden px-gutter">
          <div className="max-w-container-max mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-3xl items-center py-3xl">
            <div className="reveal active">
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-lg leading-tight">
                Building <span className="gradient-text">secure, scalable</span> software for modern businesses.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl max-w-[32rem]">
                We engineer high-performance digital ecosystems that empower global enterprises and fast-growing startups with precision and agility.
              </p>
              <div className="flex flex-wrap gap-md">
                <RippleButton
                  href="/contact"
                  className="bg-primary text-on-primary font-label-md text-label-md px-3xl py-md rounded glow-button transition-all active:scale-95"
                >
                  Get a Quote
                </RippleButton>
                <MagneticButton
                  href="/services"
                  className="border border-outline-variant text-on-surface font-label-md text-label-md px-3xl py-md rounded hover:bg-black/5 dark:hover:bg-white/5 transition-all active:scale-95"
                >
                  Explore Solutions
                </MagneticButton>
                <RippleButton
                  href="/payment"
                  className="flex items-center gap-sm bg-primary/10 border border-primary/30 text-primary font-label-md text-label-md px-3xl py-md rounded hover:bg-primary hover:text-on-primary transition-all active:scale-95"
                >
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    credit_card
                  </span>
                  Pay Now via Paystack
                </RippleButton>
              </div>
            </div>
            <div className="relative aspect-square w-full max-w-[32rem] lg:max-w-none mx-auto lg:h-[600px] reveal active" style={{ transitionDelay: "200ms" }}>
              <div className="absolute inset-0 glass-panel rounded-full blur-3xl opacity-20 animate-pulse-glow" />
              <div className="w-full h-full relative z-10">
                <ThreeScene />
              </div>
            </div>
          </div>
        </section>

        {/* Industry Strip */}
        <section className="border-y border-outline-variant bg-surface-container-low/50 backdrop-blur-sm py-xl">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="flex flex-wrap justify-center md:justify-between items-center gap-xl opacity-60">
              <span className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant">Trusted By:</span>
              <div className="flex flex-wrap justify-center gap-3xl md:gap-3xl items-center">
                <div className="flex items-center gap-xs font-title-lg text-title-lg">
                  <span className="material-symbols-outlined text-primary">school</span> Education
                </div>
                <div className="flex items-center gap-xs font-title-lg text-title-lg">
                  <span className="material-symbols-outlined text-primary">health_and_safety</span> Healthcare
                </div>
                <div className="flex items-center gap-xs font-title-lg text-title-lg">
                  <span className="material-symbols-outlined text-primary">account_balance</span> Finance
                </div>
                <div className="flex items-center gap-xs font-title-lg text-title-lg">
                  <span className="material-symbols-outlined text-primary">local_shipping</span> Logistics
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Bento Grid */}
        <section className="py-3xl px-gutter max-w-container-max mx-auto">
          <div className="text-center mb-3xl reveal">
            <h2 className="font-headline-lg text-headline-lg mb-sm gradient-text inline-block">Comprehensive Tech Solutions</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Leveraging the latest stack to solve complex technical challenges.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg">
            {CARDS.map((card, i) => (
              <div
                key={i}
                className="glass-panel p-xl rounded-lg hover:translate-y-[-8px] hover:shadow-xl hover:shadow-primary/5 dark:hover:shadow-primary/10 transition-all duration-300 reveal group interactive-element"
                style={{ transitionDelay: card.delay }}
              >
                <span className="material-symbols-outlined text-primary text-3xl mb-md group-hover:scale-110 transition-transform duration-300 block">{card.icon}</span>
                <h3 className="font-title-lg text-title-lg mb-sm">{card.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="py-3xl px-gutter relative overflow-hidden">
          <div className="max-w-container-max mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
              <div className="lg:col-span-8 glass-panel p-xl md:p-3xl rounded-lg reveal">
                <div className="flex items-center gap-md mb-xl">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">info</span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg gradient-text">About Noventra</h2>
                </div>
                <p className="font-body-lg text-body-lg text-on-surface mb-xl">
                  Based at PALACE MALL, East Legon, Greater Accra, Noventra Technologies is a powerhouse of digital innovation. We combine local expertise with global standards to deliver software that doesn't just work, but drives industry evolution. Our commitment to precision engineering ensures that every line of code adds tangible value to your bottom line.
                </p>
                <div className="flex flex-col md:flex-row gap-xl border-t border-outline-variant/30 pt-xl">
                  <div className="flex-1">
                    <span className="font-label-md text-label-md text-primary uppercase block mb-xs">Address</span>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      PALACE MALL, East Legon,<br />Greater Accra, GHANA.
                    </p>
                  </div>
                  <div className="flex-1">
                    <span className="font-label-md text-label-md text-primary uppercase block mb-xs">Operations</span>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Serving global clients across EMEA<br />and North American markets.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 flex flex-col gap-lg">
                <div className="glass-panel p-xl rounded-lg flex-1 flex flex-col justify-center reveal" style={{ transitionDelay: "200ms" }}>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-xs">99.9%</div>
                  <div className="font-label-md text-label-md text-on-surface-variant">System Uptime Guarantee</div>
                </div>
                <div className="glass-panel p-xl rounded-lg flex-1 flex flex-col justify-center reveal" style={{ transitionDelay: "300ms" }}>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-xs">500+</div>
                  <div className="font-label-md text-label-md text-on-surface-variant">Successful Deployments</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-3xl px-gutter text-center">
          <div className="max-w-[42rem] mx-auto glass-panel p-xl md:p-3xl rounded-lg reveal interactive-element">
            <h2 className="font-display-md text-display-md mb-md gradient-text inline-block">Ready to accelerate your growth?</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">
              Our technical consultants are ready to map out your digital transformation journey.
            </p>
            <RippleButton
              href="/contact"
              className="inline-block bg-primary text-on-primary font-label-md text-label-md px-3xl py-md rounded glow-button transition-all active:scale-95"
            >
              Get a Quote Today
            </RippleButton>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
