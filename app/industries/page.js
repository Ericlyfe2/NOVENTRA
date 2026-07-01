import Link from "next/link";
import PageLayout from "@/components/PageLayout";

export const metadata = {
  title: "Industries We Serve",
  description:
    "Noventra Technologies builds software for Education, Healthcare, Finance, Logistics, Retail, and Professional Services organizations.",
};

const INDUSTRIES = [
  {
    icon: "school",
    title: "Education",
    desc: "Student management systems, e-learning platforms, and enrollment automation for schools and training providers.",
  },
  {
    icon: "health_and_safety",
    title: "Healthcare",
    desc: "Appointment scheduling, patient record systems, and secure communication tools for clinics and health providers.",
  },
  {
    icon: "account_balance",
    title: "Finance",
    desc: "Secure dashboards, reporting tools, and payment-integrated platforms for financial services and fintech teams.",
  },
  {
    icon: "local_shipping",
    title: "Logistics",
    desc: "Fleet tracking, dispatch management, and delivery coordination systems that keep operations moving.",
  },
  {
    icon: "storefront",
    title: "Retail",
    desc: "E-commerce storefronts, inventory management, and loyalty applications with local payment integration.",
  },
  {
    icon: "work",
    title: "Professional Services",
    desc: "Client portals, booking systems, and workflow automation for firms that sell expertise and time.",
  },
];

export default function IndustriesPage() {
  return (
    <PageLayout
      title="Industries We Serve"
      intro="Deep domain understanding across six sectors — each solution shaped by how the industry actually operates."
    >
      <section className="px-gutter pb-3xl">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
          {INDUSTRIES.map((industry) => (
            <div key={industry.title} className="glass-panel p-xl rounded-xl">
              <span className="material-symbols-outlined text-primary text-3xl mb-md">
                {industry.icon}
              </span>
              <h2 className="font-title-lg text-title-lg mb-sm">{industry.title}</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {industry.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-gutter pb-3xl text-center">
        <div className="max-w-[42rem] mx-auto glass-panel p-3xl rounded-3xl">
          <h2 className="font-headline-lg text-headline-lg mb-md">
            Don&apos;t see your industry?
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-xl">
            Our engineering process adapts to any domain. Tell us what you need
            and we&apos;ll map out a solution.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-on-primary font-label-md text-label-md px-3xl py-md rounded-lg glow-button transition-all"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
