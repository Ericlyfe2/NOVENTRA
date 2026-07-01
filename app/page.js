"use client";
import { useEffect } from "react";
import Link from "next/link";
import ShaderBackground from "@/components/ShaderBackground";
import ThreeScene from "@/components/ThreeScene";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function HomePage() {
  useEffect(() => {
    function reveal() {
      const reveals = document.querySelectorAll(".reveal");
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        }
      }
    }
    window.addEventListener("scroll", reveal);
    reveal();
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <>
      {/* Global Background Shader */}
      <div className="fixed inset-0 z-[-1]">
        <div className="w-full h-full">
          <ShaderBackground />
        </div>
      </div>

      {/* Navigation */}
      <SiteHeader />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[921px] flex items-center overflow-hidden px-gutter">
          <div className="max-w-container-max mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-3xl items-center py-3xl">
            <div className="reveal active">
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-lg leading-tight">
                Building <span className="text-primary">secure, scalable</span> software for modern businesses.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl max-w-[32rem]">
                We engineer high-performance digital ecosystems that empower global enterprises and fast-growing startups with precision and agility.
              </p>
              <div className="flex flex-wrap gap-md">
                <Link href="/contact" className="bg-primary text-on-primary font-label-md text-label-md px-3xl py-md rounded-lg glow-button transition-all">
                  Get a Quote
                </Link>
                <Link href="/services" className="border border-outline-variant text-on-surface font-label-md text-label-md px-3xl py-md rounded-lg hover:bg-white/5 transition-all">
                  Explore Solutions
                </Link>
              </div>
            </div>
            <div className="relative aspect-square lg:h-[600px] w-full reveal active" style={{ transitionDelay: "200ms" }}>
              <div className="absolute inset-0 glass-panel rounded-full blur-3xl opacity-20" />
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
              <div className="flex flex-wrap justify-center gap-3xl items-center">
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
            <h2 className="font-headline-lg text-headline-lg mb-sm">Comprehensive Tech Solutions</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Leveraging the latest stack to solve complex technical challenges.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
            {[
              { icon: "terminal", title: "Custom Software Development", desc: "Tailored applications built to align with your specific operational architecture.", delay: "100ms" },
              { icon: "language", title: "Web Development", desc: "High-performance, responsive web platforms that deliver seamless experiences.", delay: "150ms" },
              { icon: "smartphone", title: "Mobile App Development", desc: "Native and cross-platform mobile solutions for iOS and Android.", delay: "200ms" },
              { icon: "palette", title: "UI/UX Design", desc: "Data-driven design systems focused on user conversion and clarity.", delay: "250ms" },
              { icon: "cloud", title: "Cloud Solutions", desc: "Robust cloud infrastructure and migration services for scalable growth.", delay: "300ms" },
              { icon: "settings_suggest", title: "Business Automation", desc: "Streamlining workflows through intelligent algorithmic automation.", delay: "350ms" },
              { icon: "shopping_cart", title: "E-commerce", desc: "Enterprise-grade online retail solutions with secure payment integration.", delay: "400ms" },
              { icon: "psychology", title: "AI Applications", desc: "Integrating machine learning to provide predictive insights and automation.", delay: "450ms" },
            ].map((card, i) => (
              <div key={i} className="glass-panel p-xl rounded-xl hover:translate-y-[-4px] transition-all reveal" style={{ transitionDelay: card.delay }}>
                <span className="material-symbols-outlined text-primary text-3xl mb-md">{card.icon}</span>
                <h3 className="font-title-lg text-title-lg mb-sm">{card.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Glassmorphic Info Section */}
        <section className="py-3xl px-gutter relative overflow-hidden">
          <div className="max-w-container-max mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
              <div className="lg:col-span-8 glass-panel p-3xl rounded-3xl reveal">
                <div className="flex items-center gap-md mb-xl">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">info</span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg">About Noventra</h2>
                </div>
                <p className="font-body-lg text-body-lg text-on-surface mb-xl">
                  Based in the heart of Ashanti Region, Ghana, Noventra Technologies is a powerhouse of digital innovation. We combine local expertise with global standards to deliver software that doesn't just work, but drives industry evolution. Our commitment to precision engineering ensures that every line of code adds tangible value to your bottom line.
                </p>
                <div className="flex flex-col md:flex-row gap-xl border-t border-outline-variant/30 pt-xl">
                  <div className="flex-1">
                    <span className="font-label-md text-label-md text-primary uppercase block mb-xs">Address</span>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Near Obofour Church, Plot Fawoade,<br />Mamponteng, Ashanti Region, Ghana.
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
                <div className="glass-panel p-xl rounded-3xl flex-1 flex flex-col justify-center reveal" style={{ transitionDelay: "200ms" }}>
                  <div className="text-4xl font-bold text-primary mb-xs">99.9%</div>
                  <div className="font-label-md text-label-md text-on-surface-variant">System Uptime Guarantee</div>
                </div>
                <div className="glass-panel p-xl rounded-3xl flex-1 flex flex-col justify-center reveal" style={{ transitionDelay: "300ms" }}>
                  <div className="text-4xl font-bold text-primary mb-xs">500+</div>
                  <div className="font-label-md text-label-md text-on-surface-variant">Successful Deployments</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-3xl px-gutter text-center">
          <div className="max-w-[42rem] mx-auto glass-panel p-3xl rounded-3xl reveal">
            <h2 className="font-display-md text-display-md mb-md">Ready to accelerate your growth?</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">
              Our technical consultants are ready to map out your digital transformation journey.
            </p>
            <Link href="/contact" className="inline-block bg-primary text-on-primary font-label-md text-label-md px-3xl py-md rounded-lg glow-button transition-all">
              Get a Quote Today
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <SiteFooter />
    </>
  );
}
