"use client";
import { useEffect } from "react";
import Link from "next/link";
import ShaderBackground from "@/components/ShaderBackground";

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

export default function IndustriesContent() {
  useScrollReveal();

  return (
    <>
      <div className="fixed inset-0 z-[-1]">
        <div className="w-full h-full">
          <ShaderBackground />
        </div>
      </div>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-3xl pb-2xl px-gutter">
          <div className="max-w-container-max mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-md py-1 rounded-full border border-primary/20 bg-primary/5 mb-lg reveal active">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              <span className="font-label-md text-label-md text-primary tracking-wider uppercase">Strategic Digital Transformation</span>
            </div>
            <h1 className="font-display-lg text-display-lg mb-md gradient-text max-w-[48rem] mx-auto reveal active">
              Engineering Digital Excellence for Global Industries
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[42rem] mx-auto mb-xl reveal active">
              We deliver precise, scalable software solutions designed to solve the complex technical challenges of the modern corporate landscape.
            </p>
          </div>
        </section>

        {/* Industries Bento Grid */}
        <section className="max-w-container-max mx-auto px-gutter pb-3xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-lg">
            {/* Healthcare - Large Feature */}
            <div className="md:col-span-8 group relative overflow-hidden glass-panel rounded-lg p-xl flex flex-col justify-end min-h-[440px] reveal">
              <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity">
                <div className="w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-tertiary/5" />
              </div>
              <div className="relative z-10">
                <span className="material-symbols-outlined text-primary text-4xl mb-md">health_and_safety</span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface mb-sm">Healthcare</h2>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-[28rem]">
                  Digital ecosystems for patient care, telemedicine, and diagnostic precision. We build HIPAA-compliant infrastructures that prioritize security and clinical efficiency.
                </p>
              </div>
            </div>

            {/* Finance */}
            <div className="md:col-span-4 glass-panel rounded-lg p-xl flex flex-col justify-between group reveal" style={{ transitionDelay: "100ms" }}>
              <div className="flex justify-between items-start">
                <div className="p-md rounded bg-primary/10 border border-primary/20">
                  <span className="material-symbols-outlined text-primary text-3xl">account_balance</span>
                </div>
                <span className="font-code-sm text-code-sm text-primary/60">01 / FINANCE</span>
              </div>
              <div>
                <h2 className="font-title-lg text-title-lg text-on-surface mb-sm">Finance &amp; Fintech</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  High-frequency trading architectures and secure blockchain protocols for the next generation of banking.
                </p>
                <div className="mt-lg pt-lg border-t border-white/5 flex items-center gap-2 text-primary font-label-md">
                  <Link href="/services">Explore Case Studies</Link>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="md:col-span-4 glass-panel rounded-lg p-xl flex flex-col justify-between group reveal" style={{ transitionDelay: "200ms" }}>
              <div className="flex justify-between items-start">
                <div className="p-md rounded bg-tertiary/10 border border-tertiary/20">
                  <span className="material-symbols-outlined text-tertiary text-3xl">school</span>
                </div>
                <span className="font-code-sm text-code-sm text-tertiary/60">02 / EDUCATION</span>
              </div>
              <div>
                <h2 className="font-title-lg text-title-lg text-on-surface mb-sm">Education</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Interactive LMS platforms and collaborative environments that redefine the boundaries of academic engagement.
                </p>
              </div>
            </div>

            {/* Logistics - High Impact */}
            <div className="md:col-span-8 glass-panel rounded-lg overflow-hidden group flex flex-col md:flex-row reveal" style={{ transitionDelay: "300ms" }}>
              <div className="w-full md:w-1/2 h-64 md:h-full relative overflow-hidden bg-gradient-to-br from-primary/5 via-tertiary/5 to-primary/10">
                <div className="absolute inset-0 opacity-20">
                  <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
                </div>
              </div>
              <div className="w-full md:w-1/2 p-xl flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-md">
                  <span className="material-symbols-outlined text-primary">local_shipping</span>
                  <span className="font-code-sm text-code-sm text-primary">03 / LOGISTICS</span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface mb-md">Logistics</h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-lg">
                  Supply chain optimization engines and real-time fleet management systems powered by predictive analytics and AI integration.
                </p>
                <ul className="space-y-2 font-label-md text-label-md text-on-surface-variant">
                  <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_6px_#adc6ff]" />
                    Real-time Route Optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_6px_#adc6ff]" />
                    Inventory Automation
                  </li>
                </ul>
              </div>
            </div>

            {/* Retail & E-commerce */}
            <div className="md:col-span-6 glass-panel rounded-lg p-xl flex flex-col gap-lg group reveal" style={{ transitionDelay: "400ms" }}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center border border-secondary/20">
                  <span className="material-symbols-outlined text-secondary">shopping_bag</span>
                </div>
                <h2 className="font-title-lg text-title-lg text-on-surface">Retail &amp; E-commerce</h2>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Omnichannel retail experiences that merge physical and digital touchpoints through headless commerce architectures. We scale businesses with modular, high-performance web storefronts.
              </p>
              <div className="grid grid-cols-2 gap-md mt-auto">
                <div className="p-md rounded bg-surface-container-high border border-white/5">
                  <div className="font-label-md text-secondary">99.9%</div>
                  <div className="text-[10px] uppercase tracking-tighter opacity-60">Uptime Metric</div>
                </div>
                <div className="p-md rounded bg-surface-container-high border border-white/5">
                  <div className="font-label-md text-secondary">40%</div>
                  <div className="text-[10px] uppercase tracking-tighter opacity-60">Efficiency Gain</div>
                </div>
              </div>
            </div>

            {/* Professional Services */}
            <div className="md:col-span-6 glass-panel rounded-lg p-xl relative overflow-hidden group reveal" style={{ transitionDelay: "500ms" }}>
              <div className="absolute -right-12 -top-12 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-[160px]">business_center</span>
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-lg">
                  <span className="font-code-sm text-code-sm text-on-secondary-container bg-secondary-container px-sm py-1 rounded">05 / SERVICES</span>
                </div>
                <h2 className="font-title-lg text-title-lg text-on-surface mb-md">Professional Services</h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-xl">
                  Empowering legal, consulting, and advisory firms with secure document management, automated workflows, and high-fidelity collaboration tools that safeguard intellectual property.
                </p>
                <div className="mt-auto flex items-center -space-x-2">
                  <div className="w-8 h-8 rounded-full border border-background bg-slate-600 flex items-center justify-center text-[10px] font-bold text-white">JD</div>
                  <div className="w-8 h-8 rounded-full border border-background bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white">AS</div>
                  <div className="w-8 h-8 rounded-full border border-background bg-indigo-600 flex items-center justify-center text-[10px] font-bold text-white">MK</div>
                  <div className="ml-4 flex items-center font-label-md text-xs text-primary">Trusted by 500+ Firms</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-surface-container-low py-3xl px-gutter">
          <div className="max-w-container-max mx-auto text-center">
            <h3 className="font-headline-lg text-headline-lg mb-2xl text-on-surface reveal">Global Impact by the Numbers</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-xl">
              {[
                { num: "250+", label: "Projects Delivered" },
                { num: "15+", label: "Global Regions" },
                { num: "98%", label: "Client Retention" },
                { num: "10M+", label: "End Users Reached" },
              ].map((stat) => (
                <div key={stat.label} className="reveal">
                  <div className="text-display-md font-display-md text-primary mb-xs">{stat.num}</div>
                  <div className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-3xl px-gutter text-center relative overflow-hidden">
          <div className="relative z-10 max-w-[42rem] mx-auto reveal">
            <h2 className="font-display-md text-display-md mb-md gradient-text inline-block">Ready to transform your sector?</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">
              Partner with Noventra Technologies to build the technical foundation your industry demands.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-md">
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-primary text-on-primary px-3xl py-md rounded font-label-md text-label-md glow-button transition-all active:scale-95"
              >
                Consult Our Experts
              </Link>
              <Link
                href="/portfolio"
                className="w-full sm:w-auto border border-outline text-on-surface px-3xl py-md rounded font-label-md text-label-md hover:bg-black/5 dark:hover:bg-white/5 transition-all active:scale-95"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
