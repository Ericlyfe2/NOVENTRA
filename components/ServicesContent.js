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
            const delay = entry.target.dataset.delay || 0;
            setTimeout(() => entry.target.classList.add("active"), delay);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    const elements = document.querySelectorAll(".reveal, .reveal-icon");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function ServicesContent() {
  useScrollReveal();

  return (
    <>
      <div className="fixed inset-0 z-[-1]">
        <div className="w-full h-full">
          <ShaderBackground />
        </div>
      </div>

      <main className="relative overflow-hidden">
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center justify-center pt-3xl pb-2xl px-gutter">
          <div className="grid-lines absolute inset-0 opacity-30" />
          <div className="relative z-10 max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-md py-1 rounded-full mb-lg reveal active">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              <span className="font-label-md text-label-md text-primary tracking-wider uppercase">Our Capabilities</span>
            </div>
            <h1 className="font-display-lg text-display-lg mb-lg tracking-tight reveal active">
              Engineering the <span className="text-primary dark:text-primary-container">Next Era</span> of Enterprise Intelligence.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[42rem] mx-auto reveal active">
              We provide institutional-grade software solutions that combine high-density technical performance with effortless operational clarity.
            </p>
          </div>
        </section>

        {/* Services Bento Grid */}
        <section className="px-gutter py-3xl max-w-container-max mx-auto relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-lg">
            {/* Custom Software - Large */}
            <div className="lg:col-span-8 service-card p-xl flex flex-col justify-between rounded-lg group reveal" data-delay="0">
              <div className="absolute top-0 right-0 p-lg opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                <span className="material-symbols-outlined text-[120px]">terminal</span>
              </div>
              <div>
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-lg mb-lg border border-primary/20 reveal-icon" data-delay="100">
                  <span className="material-symbols-outlined text-primary">developer_mode</span>
                </div>
                <h3 className="font-headline-lg text-headline-lg mb-md">Custom Software Engineering</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-xl max-w-[32rem]">
                  Institutional-grade backends and resilient architectures designed for massive scale and zero-downtime reliability.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-md font-label-md text-label-md text-primary">
                  <div className="flex items-center gap-2"><span className="material-symbols-outlined text-[18px]">check_circle</span> Microservices</div>
                  <div className="flex items-center gap-2"><span className="material-symbols-outlined text-[18px]">check_circle</span> Legacy Migration</div>
                  <div className="flex items-center gap-2"><span className="material-symbols-outlined text-[18px]">check_circle</span> API Strategy</div>
                  <div className="flex items-center gap-2"><span className="material-symbols-outlined text-[18px]">check_circle</span> Real-time Data</div>
                </div>
              </div>
            </div>

            {/* Business Automation */}
            <div className="lg:col-span-4 service-card p-xl rounded-lg reveal" data-delay="100">
              <div className="w-12 h-12 bg-tertiary/10 flex items-center justify-center rounded-lg mb-lg border border-tertiary/20 reveal-icon" data-delay="200">
                <span className="material-symbols-outlined text-tertiary">settings_input_component</span>
              </div>
              <h3 className="font-title-lg text-title-lg mb-md">Business Automation</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-lg">
                Streamline complex workflows with intelligent RPA and autonomous operational pipelines.
              </p>
              <Link href="/contact" className="font-label-md text-label-md text-primary hover:underline flex items-center gap-1">
                View workflows <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>

            {/* Web & Mobile */}
            <div className="lg:col-span-4 service-card p-xl flex flex-col justify-between rounded-lg reveal" data-delay="200">
              <div>
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-lg mb-lg border border-primary/20 reveal-icon" data-delay="300">
                  <span className="material-symbols-outlined text-primary">devices</span>
                </div>
                <h3 className="font-title-lg text-title-lg mb-md">Web &amp; Mobile Ecosystems</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Native-grade performance for platforms using React, Flutter, and Next.js.
                </p>
              </div>
              <div className="mt-xl flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center">
                  <span className="material-symbols-outlined text-[14px]">smartphone</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center">
                  <span className="material-symbols-outlined text-[14px]">laptop</span>
                </div>
              </div>
            </div>

            {/* UI/UX */}
            <div className="lg:col-span-4 service-card p-xl group rounded-lg reveal" data-delay="300">
              <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center rounded-lg mb-lg border border-secondary/20 reveal-icon" data-delay="400">
                <span className="material-symbols-outlined text-secondary">palette</span>
              </div>
              <h3 className="font-title-lg text-title-lg mb-md">UI/UX Design Systems</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-lg">
                Scientific interface design focused on reducing cognitive load.
              </p>
              <div className="h-20 w-full bg-surface-container-low rounded border border-outline-variant/30 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                <div className="flex gap-2">
                  <div className="w-12 h-6 bg-primary/20 rounded" />
                  <div className="w-12 h-6 bg-surface-container-high rounded" />
                </div>
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div className="lg:col-span-4 service-card p-xl rounded-lg reveal" data-delay="400">
              <div className="w-12 h-12 bg-error/10 flex items-center justify-center rounded-lg mb-lg border border-error/20 reveal-icon" data-delay="500">
                <span className="material-symbols-outlined text-error">cloud_done</span>
              </div>
              <h3 className="font-title-lg text-title-lg mb-md">Cloud &amp; DevOps</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Secure, sovereign cloud deployments across AWS, Azure, and private infra.
              </p>
            </div>

            {/* AI - Full Width */}
            <div className="lg:col-span-12 service-card p-xl flex flex-col lg:flex-row items-center gap-xl rounded-lg reveal" data-delay="500">
              <div className="lg:w-1/2 relative z-10">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-lg mb-lg border border-primary/20 reveal-icon" data-delay="600">
                  <span className="material-symbols-outlined text-primary">psychology</span>
                </div>
                <h3 className="font-headline-lg text-headline-lg mb-md">Predictive AI &amp; ML</h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg">
                  We integrate deep learning models that optimize supply chains, detect fraud, and predict market shifts in real-time.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-primary text-on-primary px-lg py-md rounded font-label-md text-label-md glow-button transition-all active:scale-95"
                >
                  Explore AI Use Cases
                </Link>
              </div>
              <div className="lg:w-1/2 w-full">
                <div className="bg-surface-container-lowest p-lg rounded-lg border border-outline-variant font-code-sm text-code-sm text-on-surface-variant">
                  <div className="flex items-center gap-2 mb-md border-b border-outline-variant pb-2">
                    <span className="w-3 h-3 rounded-full bg-error" />
                    <span className="w-3 h-3 rounded-full bg-tertiary" />
                    <span className="w-3 h-3 rounded-full bg-primary" />
                    <span className="ml-auto opacity-50">Model.train()</span>
                  </div>
                  <div className="space-y-1">
                    <p><span className="text-primary dark:text-primary-container">import</span> torch_intelligence</p>
                    <p><span className="text-primary dark:text-primary-container">def</span> process_stream(data):</p>
                    <p className="pl-4">results = model.analyze(data)</p>
                    <p className="pl-4"><span className="text-primary dark:text-primary-container">return</span> optimize(results)</p>
                    <p className="mt-md text-primary animate-pulse-glow">// Model optimization active...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-surface-container-low py-3xl border-y border-outline-variant">
          <div className="px-gutter max-w-container-max mx-auto">
            <h2 className="font-display-md text-display-md text-center mb-3xl reveal">Our Engineering Ethos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-xl">
              {[
                { step: "01", title: "Discovery", desc: "Deep audit of your technical debt and business bottlenecks." },
                { step: "02", title: "Architecture", desc: "Mapping scalable, sovereign systems before a line of code is written." },
                { step: "03", title: "Development", desc: "Agile execution with continuous delivery and high-density testing." },
                { step: "04", title: "Governance", desc: "Long-term maintenance, security monitoring, and scaling support." },
              ].map((item) => (
                <div key={item.step} className="text-center reveal" data-delay={`${parseInt(item.step) * 80}ms`}>
                  <div className="w-16 h-16 rounded-full border border-primary/30 flex items-center justify-center mx-auto mb-lg text-primary font-bold text-xl">
                    {item.step}
                  </div>
                  <h4 className="font-title-lg text-title-lg mb-md">{item.title}</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="px-gutter py-3xl max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-3xl">
          <div className="rounded-lg border border-outline-variant overflow-hidden reveal">
            <div className="w-full h-64 md:h-80 bg-gradient-to-br from-primary/5 via-tertiary/5 to-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-6xl text-primary/30">map</span>
            </div>
          </div>
          <div className="reveal" data-delay="200ms">
            <span className="font-label-md text-label-md text-primary dark:text-primary-container tracking-widest uppercase mb-md block">Industry Spotlight</span>
            <h2 className="font-display-md text-display-md mb-lg">Modernizing Logistics with AI.</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">
              We helped a pan-African logistics giant reduce operational latency by 40% through a custom AI-driven route optimization engine.
            </p>
            <div className="flex gap-lg">
              <div>
                <div className="font-headline-lg text-headline-lg text-primary">40%</div>
                <div className="font-label-md text-label-md text-on-surface-variant">Latency Reduction</div>
              </div>
              <div>
                <div className="font-headline-lg text-headline-lg text-primary">2.4M</div>
                <div className="font-label-md text-label-md text-on-surface-variant">Daily Data Points</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-gutter py-3xl mb-2xl">
          <div className="max-w-4xl mx-auto service-card p-2xl text-center rounded-lg relative overflow-hidden reveal">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent pointer-events-none" />
            <h2 className="font-display-md text-display-md mb-lg relative z-10">Ready to Upgrade Your <span className="text-primary">Tech Infrastructure?</span></h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl relative z-10">
              Schedule a consultation with our senior engineers to discuss your roadmap.
            </p>
            <div className="flex flex-col sm:flex-row gap-md justify-center relative z-10">
              <Link
                href="/contact"
                className="bg-primary text-on-primary px-3xl py-md rounded font-label-md text-label-md glow-button transition-all active:scale-95"
              >
                Start Your Project
              </Link>
              <Link
                href="/contact"
                className="border border-outline-variant text-on-surface px-3xl py-md rounded font-label-md text-label-md hover:bg-black/5 dark:hover:bg-white/5 transition-all active:scale-95"
              >
                Download Capabilities Deck
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
