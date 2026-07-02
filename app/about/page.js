import PageLayout from "@/components/PageLayout";

export const metadata = {
  title: "About Us",
  description:
    "Noventra Technologies is a software development and technology solutions company based in Greater Accra, Ghana, serving startups, small businesses, and enterprises.",
};

const VALUES = [
  {
    icon: "shield",
    title: "Security",
    desc: "Every system we ship is built on secure-by-design principles, from authentication flows to data storage.",
  },
  {
    icon: "trending_up",
    title: "Scalability",
    desc: "We architect platforms that grow with your business — from first users to enterprise-scale traffic.",
  },
  {
    icon: "verified",
    title: "Reliability",
    desc: "Rigorous testing, monitoring, and maintenance keep the software we deliver dependable in production.",
  },
  {
    icon: "handshake",
    title: "Client Partnership",
    desc: "We work as an extension of your team, with transparent communication at every stage of an engagement.",
  },
];

export default function AboutPage() {
  return (
    <PageLayout
      title="About Noventra Technologies"
      intro="A software development and technology solutions company helping businesses improve efficiency, automate processes, and accelerate digital growth."
    >
      <section className="px-gutter pb-3xl">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-xl">
          <div className="lg:col-span-8 glass-panel p-3xl rounded-lg">
            <h2 className="font-headline-lg text-headline-lg mb-lg">Company Overview</h2>
            <p className="font-body-lg text-body-lg text-on-surface mb-lg">
              Noventra Technologies is a software development and technology
              solutions company that designs, develops, and maintains modern web
              applications, mobile applications, cloud-based platforms, and
              custom business software for individuals, startups, small
              businesses, and enterprises.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant mb-lg">
              Based at PALACE MALL, East Legon, Greater Accra, GHANA, we combine local
              expertise with global engineering standards. Our teams serve
              clients across Education, Healthcare, Finance, Logistics, Retail,
              and Professional Services — delivering software that improves
              efficiency, automates processes, and accelerates digital growth.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              From the first discovery conversation to long-term maintenance and
              support, we take ownership of outcomes, not just deliverables.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-lg">
            <div className="glass-panel p-xl rounded-lg flex-1">
              <h3 className="font-title-lg text-title-lg text-primary mb-sm">Our Mission</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                To empower businesses of every size with secure, scalable, and
                dependable technology that turns operational challenges into
                growth opportunities.
              </p>
            </div>
            <div className="glass-panel p-xl rounded-lg flex-1">
              <h3 className="font-title-lg text-title-lg text-primary mb-sm">Our Vision</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                To be a leading African technology partner known for precision
                engineering, trusted delivery, and lasting client relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-gutter pb-3xl">
        <div className="max-w-container-max mx-auto">
          <h2 className="font-headline-lg text-headline-lg mb-xl text-center">Why Choose Noventra</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
            {VALUES.map((value) => (
              <div key={value.title} className="glass-panel p-xl rounded-lg">
                <span className="material-symbols-outlined text-primary text-3xl mb-md">
                  {value.icon}
                </span>
                <h3 className="font-title-lg text-title-lg mb-sm">{value.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
