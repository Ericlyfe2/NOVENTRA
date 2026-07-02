import PageLayout from "@/components/PageLayout";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How Noventra Technologies collects, uses, and protects personal data, in line with Ghana's Data Protection Act, 2012 (Act 843).",
};

function Section({ title, children }) {
  return (
    <section className="mb-xl">
      <h2 className="font-title-lg text-title-lg text-primary mb-sm">{title}</h2>
      <div className="font-body-md text-body-md text-on-surface-variant space-y-sm">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <PageLayout
      title="Privacy Policy"
      intro="Effective date: 1 July 2026 · Last updated: 1 July 2026"
    >
      <div className="px-gutter pb-3xl">
        <div className="max-w-[52rem] mx-auto glass-panel p-3xl rounded-lg">
          <Section title="1. Who We Are">
            <p>
              Noventra Technologies (&quot;Noventra&quot;, &quot;we&quot;,
              &quot;us&quot;) is a software development and technology solutions
              company located at PALACE MALL, East Legon, Greater Accra, GHANA. This Privacy Policy explains how we
              collect, use, store, and protect personal data when you use our
              website or engage our services.
            </p>
          </Section>

          <Section title="2. Data We Collect">
            <p>We may collect the following personal data:</p>
            <ul className="list-disc pl-lg space-y-xs">
              <li>Contact details you provide (name, email address, phone number, company name) — for example when submitting our contact form or requesting a quote.</li>
              <li>Project and engagement information you share with us during the delivery of services.</li>
              <li>Payment-related information processed through our payment provider, Paystack. We do not store full card details on our systems.</li>
              <li>Basic technical data (browser type, device, pages visited) collected through standard web server logs and, where enabled, analytics cookies.</li>
            </ul>
          </Section>

          <Section title="3. How We Use Your Data">
            <ul className="list-disc pl-lg space-y-xs">
              <li>To respond to enquiries and provide requested services.</li>
              <li>To prepare proposals, invoices, and manage client engagements.</li>
              <li>To process payments securely through Paystack.</li>
              <li>To improve our website and communicate service updates.</li>
              <li>To comply with legal and accounting obligations.</li>
            </ul>
          </Section>

          <Section title="4. Data Storage & Security">
            <p>
              Personal data is stored on access-controlled systems and
              transmitted over encrypted (HTTPS/TLS) connections. We apply
              reasonable technical and organizational measures to protect data
              against unauthorized access, alteration, disclosure, or
              destruction, and we retain personal data only as long as necessary
              for the purposes described in this policy or as required by law.
            </p>
          </Section>

          <Section title="5. Third-Party Sharing">
            <p>
              We do not sell personal data. We share data only with service
              providers necessary to operate our business, including:
            </p>
            <ul className="list-disc pl-lg space-y-xs">
              <li><strong className="text-on-surface">Paystack</strong> — for secure payment processing. Paystack&apos;s own privacy policy governs data processed on its platform.</li>
              <li>Hosting and infrastructure providers used to run our website and client systems.</li>
            </ul>
            <p>
              We may also disclose data where required by law or a competent
              authority in Ghana.
            </p>
          </Section>

          <Section title="6. Your Rights (Ghana Data Protection Act, 2012 — Act 843)">
            <p>Under Act 843 you have the right to:</p>
            <ul className="list-disc pl-lg space-y-xs">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction of inaccurate or incomplete data.</li>
              <li>Request deletion of data we no longer have a lawful basis to keep.</li>
              <li>Object to processing for direct marketing purposes.</li>
            </ul>
            <p>
              To exercise any of these rights, contact us using the details
              below. We will respond within a reasonable time.
            </p>
          </Section>

          <Section title="7. Cookies">
            <p>
              Our website may use essential cookies required for it to function
              and, where enabled, analytics cookies to understand site usage.
              You can control or delete cookies through your browser settings.
            </p>
          </Section>

          <Section title="8. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. The
              &quot;Last updated&quot; date at the top of this page reflects the
              most recent revision. Material changes will be highlighted on this
              page.
            </p>
          </Section>

          <Section title="9. Contact for Privacy Concerns">
            <p>
              Noventra Technologies
              <br />
              PALACE MALL, East Legon, Greater Accra, GHANA
              <br />
              Email:{" "}
              <a
                href="mailto:info@noventra.tech"
                className="text-primary hover:underline underline-offset-4"
              >
                info@noventra.tech
              </a>
            </p>
          </Section>
        </div>
      </div>
    </PageLayout>
  );
}
