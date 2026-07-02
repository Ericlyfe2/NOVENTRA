import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ShaderBackground from "@/components/ShaderBackground";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Noventra Technologies — PALACE MALL, East Legon, Greater Accra, GHANA. Our engineering team typically responds within 4-6 business hours.",
};

export default function ContactPage() {
  return (
    <>
      <div className="fixed inset-0 z-[-1]">
        <div className="w-full h-full">
          <ShaderBackground />
        </div>
      </div>
      <SiteHeader />
      <main className="relative min-h-screen">
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] bg-primary/5 blur-[150px] rounded-full" />
          <div className="absolute top-[30%] -left-[5%] w-[30%] h-[30%] bg-primary/5 blur-[120px] rounded-full" />
        </div>

        <section className="max-w-container-max mx-auto px-gutter py-2xl md:py-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl items-start">
            <div className="lg:col-span-5 space-y-xl">
              <div className="inline-flex items-center gap-sm bg-primary/10 border border-primary/20 px-md py-xs rounded-full w-fit">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="font-label-md text-label-md text-primary uppercase tracking-widest">Connect with us</span>
              </div>
              <div className="space-y-md">
                <h1 className="font-display-lg text-display-lg text-on-surface leading-tight">Let&apos;s Engineer Your Digital Future.</h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
                  Have a complex technical challenge? Our engineering team is ready to help you scale your infrastructure and refine your software ecosystem.
                </p>
              </div>
              <div className="space-y-lg">
                <div className="flex items-start gap-lg p-md rounded-2xl bg-surface-container-low border border-white/5 animate-float">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 border border-primary/20 shrink-0">
                    <span className="material-symbols-outlined text-primary">location_on</span>
                  </div>
                  <div>
                    <h4 className="font-title-lg text-title-lg text-on-surface mb-xs">Regional Office</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">PALACE MALL, East Legon,<br/>Greater Accra, GHANA</p>
                  </div>
                </div>
                <div className="flex items-start gap-lg p-md rounded-2xl bg-surface-container-low border border-white/5 animate-float-delayed">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 border border-primary/20 shrink-0">
                    <span className="material-symbols-outlined text-primary">mail</span>
                  </div>
                  <div>
                    <h4 className="font-title-lg text-title-lg text-on-surface mb-xs">Business Email</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">info@noventra.tech</p>
                  </div>
                </div>
                <div className="glass-panel p-lg rounded-2xl border-l-4 border-l-primary/60">
                  <div className="flex items-center gap-md mb-sm">
                    <span className="material-symbols-outlined text-primary text-md">schedule</span>
                    <span className="font-label-md text-label-md text-primary">Response Expectation</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface italic">
                    &quot;Our technical architects typically respond to high-priority inquiries within 4-6 business hours.&quot;
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 reveal-form">
              <ContactForm />
            </div>
          </div>
        </section>

        <section className="max-w-container-max mx-auto px-gutter pb-3xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-lg">
            <div className="md:col-span-8 h-[300px] md:h-[450px] relative rounded-3xl overflow-hidden border border-white/5 group">
              <div className="absolute inset-0 bg-surface-container-low flex items-center justify-center">
                <div className="absolute inset-0 bg-cover bg-center w-full h-full grayscale opacity-40 group-hover:scale-105 transition-transform duration-1000" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD0Ed7pQoY6_VzjcqkQEbv954GEwkFY68e6e4LK-Q8m2yfzfS5ATa4wKp5f8fINfpxNhiDqL84bDbBSwqAZzNyp2Rs56ZLPe9mCS6DCbPCqmbrI56TyqFhzLHrjqJk6qkfME1uKPovQVu5ph3hXUj7nIe-5cCHqLVgWNM0v2o2eTpkRw63WYCk0cxipQ8FT_YtbX3fuVKREAGxbMB5v3csSWAt-wp1N52IV21y2Cwy5F60Z7Ug5SLuBNQ')" }} />
                <div className="absolute top-lg left-lg glass-panel p-md rounded-xl border border-primary/20 backdrop-blur-md">
                  <div className="flex flex-col gap-1">
                    <span className="font-label-md text-label-md text-primary font-bold">PALACE MALL</span>
                    <span className="font-code-sm text-code-sm text-on-surface opacity-80">East Legon, Accra</span>
                  </div>
                </div>
                <div className="absolute bottom-lg right-lg glass-panel p-md rounded-xl border border-white/10">
                  <div className="flex items-center gap-sm">
                    <span className="material-symbols-outlined text-primary">location_on</span>
                    <span className="font-code-sm text-code-sm text-on-surface">5.6366° N, 0.1533° W</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-lg">
              <div className="glass-panel p-xl rounded-3xl flex flex-col justify-center">
                <p className="font-label-md text-label-md text-primary mb-sm">Timezone</p>
                <h3 className="font-display-md text-display-md text-on-surface">GMT +0</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Operating 08:00 — 18:00</p>
              </div>
              <div className="glass-panel p-xl rounded-3xl flex flex-col justify-center relative overflow-hidden group">
                <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <span className="material-symbols-outlined text-[140px]">hub</span>
                </div>
                <p className="font-label-md text-label-md text-primary mb-sm">Presence</p>
                <h3 className="font-headline-lg text-headline-lg text-on-surface leading-tight">Greater Accra Hub</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Centralized engineering at East Legon.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
