import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ShaderBackground from "@/components/ShaderBackground";
import ContactForm from "@/components/ContactForm";
import GhanaTime from "@/components/GhanaTime";

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
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[28rem]">
                  Have a complex technical challenge? Our engineering team is ready to help you scale your infrastructure and refine your software ecosystem.
                </p>
              </div>
              <div className="space-y-lg">
                <div className="flex items-start gap-lg p-md rounded-lg bg-surface-container-low border border-white/5 animate-float">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 border border-primary/20 shrink-0">
                    <span className="material-symbols-outlined text-primary">location_on</span>
                  </div>
                  <div>
                    <h4 className="font-title-lg text-title-lg text-on-surface mb-xs">Regional Office</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">PALACE MALL, East Legon,<br/>Greater Accra, GHANA</p>
                  </div>
                </div>
                <div className="flex items-start gap-lg p-md rounded-lg bg-surface-container-low border border-white/5 animate-float-delayed">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 border border-primary/20 shrink-0">
                    <span className="material-symbols-outlined text-primary">mail</span>
                  </div>
                  <div>
                    <h4 className="font-title-lg text-title-lg text-on-surface mb-xs">Business Email</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">info@noventra.tech</p>
                  </div>
                </div>
                <div className="glass-panel p-lg rounded-lg border-l-4 border-l-primary">
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
            <div className="md:col-span-8 h-[300px] md:h-[450px] relative rounded-lg overflow-hidden border border-white/5">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=-0.1733%2C5.6166%2C-0.1333%2C5.6566&layer=mapnik&marker=5.6366%2C-0.1533"
                title="Map of Palace Mall, East Legon, Greater Accra, Ghana"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-lg left-lg glass-panel p-md rounded border border-primary/20 backdrop-blur-md pointer-events-none">
                <div className="flex flex-col gap-1">
                  <span className="font-label-md text-label-md text-primary font-bold">PALACE MALL</span>
                  <span className="font-code-sm text-code-sm text-on-surface opacity-80">East Legon, Accra</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-lg">
              <GhanaTime />
              <div className="glass-panel p-xl rounded-lg flex flex-col justify-center relative overflow-hidden group">
                <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-10 transition-opacity">
                  <span className="material-symbols-outlined text-[160px]">hub</span>
                </div>
                <p className="font-label-md text-label-md text-primary mb-sm">Global Network</p>
                <h3 className="font-headline-lg text-headline-lg text-on-surface leading-tight">Pan-African Hub</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Connecting West Africa to global tech standards.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
