import PageLayout from "@/components/PageLayout";

export const metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions governing the services provided by Noventra Technologies, a software development company in Ghana.",
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

export default function TermsPage() {
  return (
    <PageLayout
      title="Terms & Conditions"
      intro="Effective date: 1 July 2026 · Last updated: 1 July 2026"
    >
      <div className="px-gutter pb-3xl">
        <div className="max-w-[52rem] mx-auto glass-panel p-3xl rounded-3xl">
          <Section title="1. About These Terms">
            <p>
              These Terms &amp; Conditions (&quot;Terms&quot;) govern the use of
              the Noventra Technologies website and the provision of our
              services. By engaging our services or using this website, you
              agree to these Terms.
            </p>
          </Section>

          <Section title="2. Services Offered">
            <p>
              Noventra Technologies provides software development and technology
              services, including custom software development, website design
              and development, mobile app development, UI/UX design, API
              integration, cloud solutions, business automation, e-commerce
              platforms, AI-powered applications, software maintenance and
              technical support, and technology consulting. The specific scope,
              deliverables, and timeline of any engagement are defined in a
              written proposal, quotation, or service agreement.
            </p>
          </Section>

          <Section title="3. Client Obligations & Acceptable Use">
            <ul className="list-disc pl-lg space-y-xs">
              <li>Provide accurate information, content, and timely feedback needed to deliver the agreed work.</li>
              <li>Use our website and deliverables only for lawful purposes.</li>
              <li>Not attempt to disrupt, reverse engineer, or gain unauthorized access to our systems.</li>
              <li>Obtain any third-party rights or licenses for materials you supply to us.</li>
            </ul>
          </Section>

          <Section title="4. Payment Terms">
            <ul className="list-disc pl-lg space-y-xs">
              <li>Fees, deposits, and milestone schedules are set out in the applicable proposal or invoice.</li>
              <li>Unless otherwise agreed, projects begin after receipt of the agreed deposit.</li>
              <li>Payments are processed securely via Paystack or by bank transfer as indicated on the invoice.</li>
              <li>Invoices are payable within the period stated on the invoice; late payment may pause work.</li>
            </ul>
          </Section>

          <Section title="5. Intellectual Property">
            <p>
              Upon full payment, the client owns the agreed final deliverables,
              including bespoke source code created for the engagement, unless
              the service agreement states otherwise. Noventra retains ownership
              of pre-existing tools, libraries, and know-how used in delivery,
              and grants the client a license to use them as part of the
              deliverables. We may reference completed non-confidential work in
              our portfolio unless the client requests otherwise in writing.
            </p>
          </Section>

          <Section title="6. Limitation of Liability">
            <p>
              To the maximum extent permitted by law, Noventra&apos;s total
              liability arising out of any engagement is limited to the fees
              paid for the specific services giving rise to the claim. We are
              not liable for indirect or consequential losses, including loss of
              profits, data, or business opportunity, except where such
              liability cannot be excluded by law.
            </p>
          </Section>

          <Section title="7. Termination">
            <p>
              Either party may terminate an engagement with written notice as
              set out in the applicable service agreement. On termination, the
              client pays for all work completed and accepted up to the
              termination date. Sections relating to payment, intellectual
              property, and liability survive termination.
            </p>
          </Section>

          <Section title="8. Governing Law">
            <p>
              These Terms are governed by the laws of the Republic of Ghana.
              Any dispute that cannot be resolved amicably shall be subject to
              the jurisdiction of the courts of Ghana.
            </p>
          </Section>

          <Section title="9. Contact">
            <p>
              Questions or disputes regarding these Terms should be directed to:
              <br />
              Noventra Technologies, Near Obofour Church, Plot Fawoade,
              Mamponteng, Ashanti Region, Ghana
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
