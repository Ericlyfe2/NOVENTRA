import Link from "next/link";
import PageLayout from "@/components/PageLayout";

export const metadata = {
  title: "Services",
  description:
    "Custom software development, web and mobile app development, UI/UX design, cloud solutions, business automation, e-commerce, and AI-powered applications.",
};

const SERVICES = [
  {
    id: "custom-software",
    icon: "terminal",
    title: "Custom Software Development",
    desc: "Tailored applications built around your exact business processes when off-the-shelf tools fall short.",
    deliverables: "Requirements analysis, system architecture, development, testing, deployment, and documentation.",
    useCase: "A logistics firm replacing spreadsheets with a purpose-built fleet and dispatch management system.",
  },
  {
    id: "web-development",
    icon: "language",
    title: "Website Design & Development",
    desc: "High-performance, responsive websites and web platforms that load fast and rank well.",
    deliverables: "Responsive design, CMS or custom build, SEO fundamentals, analytics, and hosting setup.",
    useCase: "A professional services firm launching a corporate site with lead-capture forms and a client portal.",
  },
  {
    id: "mobile-development",
    icon: "smartphone",
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile applications for iOS and Android, from concept to app store.",
    deliverables: "UX flows, cross-platform builds, push notifications, offline support, and store submission.",
    useCase: "A retail brand releasing a loyalty and ordering app for its customers.",
  },
  {
    id: "ui-ux-design",
    icon: "palette",
    title: "UI/UX Design",
    desc: "Data-driven design systems and interfaces focused on clarity, accessibility, and conversion.",
    deliverables: "Wireframes, interactive prototypes, design systems, and usability testing.",
    useCase: "A fintech startup redesigning onboarding to reduce drop-off during sign-up.",
  },
  {
    id: "cloud-solutions",
    icon: "cloud",
    title: "Cloud Solutions & API Integration",
    desc: "Cloud infrastructure, migrations, and integrations that connect your systems and scale on demand.",
    deliverables: "Cloud architecture, migration plans, third-party API integrations, and DevOps pipelines.",
    useCase: "A healthcare provider migrating patient scheduling to a secure cloud platform integrated with SMS reminders.",
  },
  {
    id: "business-automation",
    icon: "settings_suggest",
    title: "Business Automation",
    desc: "Workflow automation that removes repetitive manual work and reduces operational errors.",
    deliverables: "Process mapping, automation tooling, reporting dashboards, and staff training.",
    useCase: "An education provider automating student enrollment, invoicing, and reporting.",
  },
  {
    id: "e-commerce",
    icon: "shopping_cart",
    title: "E-commerce Platforms",
    desc: "Enterprise-grade online retail solutions with secure payment integration and inventory management.",
    deliverables: "Storefront build, payment gateway integration (e.g., Paystack), order management, and analytics.",
    useCase: "A retailer launching an online store with local payment methods and delivery tracking.",
  },
  {
    id: "ai-applications",
    icon: "psychology",
    title: "AI-Powered Applications",
    desc: "Machine learning and AI features that provide predictive insights and intelligent automation.",
    deliverables: "Use-case discovery, model integration, chat and document intelligence features, and evaluation.",
    useCase: "A finance team adding automated document classification and insight summaries to their workflow.",
  },
  {
    id: "maintenance-support",
    icon: "build",
    title: "Software Maintenance & Technical Support",
    desc: "Ongoing maintenance, monitoring, and support that keep your systems secure and up to date.",
    deliverables: "SLA-backed support, security patching, performance monitoring, and feature updates.",
    useCase: "A business retaining Noventra to maintain and evolve a mission-critical internal platform.",
  },
  {
    id: "technology-consulting",
    icon: "lightbulb",
    title: "Technology Consulting",
    desc: "Practical guidance on technology strategy, tooling choices, and digital transformation roadmaps.",
    deliverables: "Technical audits, architecture reviews, vendor evaluation, and transformation roadmaps.",
    useCase: "A growing company deciding how to modernize legacy systems without disrupting operations.",
  },
];

export default function ServicesPage() {
  return (
    <PageLayout
      title="Our Services"
      intro="Clear, well-scoped engagements across the full software lifecycle — from first prototype to long-term maintenance."
    >
      <section className="px-gutter pb-3xl">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-lg">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="glass-panel p-xl rounded-xl scroll-mt-24"
            >
              <span className="material-symbols-outlined text-primary text-3xl mb-md">
                {service.icon}
              </span>
              <h2 className="font-title-lg text-title-lg mb-sm">{service.title}</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-md">
                {service.desc}
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant mb-xs">
                <span className="text-primary font-semibold">Deliverables: </span>
                {service.deliverables}
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant">
                <span className="text-primary font-semibold">Typical use case: </span>
                {service.useCase}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-gutter pb-3xl text-center">
        <div className="max-w-[42rem] mx-auto glass-panel p-3xl rounded-3xl">
          <h2 className="font-headline-lg text-headline-lg mb-md">
            Not sure which service fits?
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-xl">
            Tell us about your project and we&apos;ll recommend the right
            approach — no obligation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-on-primary font-label-md text-label-md px-3xl py-md rounded-lg glow-button transition-all"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
