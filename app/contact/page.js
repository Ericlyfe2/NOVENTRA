import PageLayout from "@/components/PageLayout";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Noventra Technologies — Near Obofour Church, Plot Fawoade, Mamponteng, Ashanti Region, Ghana. We typically respond within 1–2 business days.",
};

export default function ContactPage() {
  return (
    <PageLayout
      title="Contact Us"
      intro="Tell us about your project or enquiry. We typically respond within 1–2 business days."
    >
      <section className="px-gutter pb-3xl">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-xl">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          <div className="lg:col-span-5 flex flex-col gap-lg">
            <div className="glass-panel p-xl rounded-3xl">
              <div className="flex items-center gap-md mb-md">
                <span className="material-symbols-outlined text-primary">location_on</span>
                <h2 className="font-title-lg text-title-lg">Business Address</h2>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Noventra Technologies
                <br />
                Near Obofour Church, Plot Fawoade,
                <br />
                Mamponteng, Ashanti Region, Ghana.
              </p>
            </div>
            <div className="glass-panel p-xl rounded-3xl">
              <div className="flex items-center gap-md mb-md">
                <span className="material-symbols-outlined text-primary">mail</span>
                <h2 className="font-title-lg text-title-lg">Email</h2>
              </div>
              <a
                href="mailto:info@noventra.tech"
                className="text-primary font-bold hover:underline underline-offset-4"
              >
                info@noventra.tech
              </a>
            </div>
            <div className="glass-panel p-xl rounded-3xl">
              <div className="flex items-center gap-md mb-md">
                <span className="material-symbols-outlined text-primary">schedule</span>
                <h2 className="font-title-lg text-title-lg">Response Time</h2>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">
                We typically respond within 1–2 business days. For urgent
                matters, please mention it in your subject line.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
