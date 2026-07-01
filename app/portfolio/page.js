import Link from "next/link";
import PageLayout from "@/components/PageLayout";

export const metadata = {
  title: "Portfolio & Case Studies",
  description:
    "Sample projects and case studies from Noventra Technologies: web platforms, mobile apps, automation systems, and e-commerce solutions.",
};

const PROJECTS = [
  {
    icon: "school",
    tag: "Education",
    title: "School Management Platform",
    problem:
      "A private school group was managing enrollment, fees, and academic records across disconnected spreadsheets.",
    solution:
      "A web-based management platform covering student records, fee invoicing, parent communication, and term reporting.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Paystack"],
    outcome:
      "Enrollment processing time cut from days to minutes, with fee collection reconciled automatically.",
  },
  {
    icon: "local_shipping",
    tag: "Logistics",
    title: "Dispatch & Delivery Tracker",
    problem:
      "A regional delivery company coordinated riders over phone calls, losing visibility on order status.",
    solution:
      "A dispatch dashboard with live delivery status, rider assignment, and customer SMS notifications.",
    stack: ["React", "Express", "MongoDB", "SMS API"],
    outcome:
      "Same-day delivery completion rate improved and customer status calls dropped sharply.",
  },
  {
    icon: "storefront",
    tag: "Retail / E-commerce",
    title: "Online Storefront with Local Payments",
    problem:
      "A retailer needed to sell online with mobile money and card payments, plus inventory sync with its shop.",
    solution:
      "A responsive e-commerce storefront with Paystack payment integration, order management, and stock tracking.",
    stack: ["Next.js", "Tailwind CSS", "Paystack", "Vercel"],
    outcome:
      "The business opened a new online revenue channel with secure, PCI-compliant checkout.",
  },
];

export default function PortfolioPage() {
  return (
    <PageLayout
      title="Portfolio & Case Studies"
      intro="A selection of representative engagements. Some client names are withheld under non-disclosure agreements; project types and outcomes are shown as delivered."
    >
      <section className="px-gutter pb-3xl">
        <div className="max-w-container-max mx-auto flex flex-col gap-xl">
          {PROJECTS.map((project) => (
            <article key={project.title} className="glass-panel p-3xl rounded-3xl">
              <div className="flex items-center gap-md mb-lg">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">
                    {project.icon}
                  </span>
                </div>
                <div>
                  <span className="font-label-md text-label-md text-primary uppercase tracking-wider block">
                    {project.tag}
                  </span>
                  <h2 className="font-headline-lg text-headline-lg">{project.title}</h2>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-xl mb-lg">
                <div>
                  <h3 className="font-label-md text-label-md text-primary uppercase mb-xs">Challenge</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <h3 className="font-label-md text-label-md text-primary uppercase mb-xs">Solution</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {project.solution}
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-md border-t border-outline-variant/30 pt-lg">
                <p className="font-body-md text-body-md text-on-surface">
                  <span className="text-primary font-semibold">Outcome: </span>
                  {project.outcome}
                </p>
                <div className="flex flex-wrap gap-sm shrink-0">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-code-sm text-code-sm border border-outline-variant rounded-lg px-sm py-xs text-on-surface-variant"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-gutter pb-3xl text-center">
        <div className="max-w-[42rem] mx-auto glass-panel p-3xl rounded-3xl">
          <h2 className="font-headline-lg text-headline-lg mb-md">
            Have a project in mind?
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-xl">
            We&apos;d love to hear about it. Share the details and we&apos;ll
            respond within 1–2 business days.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-on-primary font-label-md text-label-md px-3xl py-md rounded-lg glow-button transition-all"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
