import PageLayout from "@/components/PageLayout";

export const metadata = {
  title: "Refund & Cancellation Policy",
  description:
    "Refund and cancellation policy for software development and technology services provided by Noventra Technologies.",
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

export default function RefundPolicyPage() {
  return (
    <PageLayout
      title="Refund & Cancellation Policy"
      intro="Effective date: 1 July 2026 · Last updated: 1 July 2026"
    >
      <div className="px-gutter pb-3xl">
        <div className="max-w-[52rem] mx-auto glass-panel p-3xl rounded-3xl">
          <Section title="1. Scope">
            <p>
              Noventra Technologies provides professional software development
              and technology services rather than physical goods. This policy
              explains how refunds and cancellations are handled for service
              engagements paid for via Paystack, bank transfer, or other agreed
              methods.
            </p>
          </Section>

          <Section title="2. Refunds">
            <ul className="list-disc pl-lg space-y-xs">
              <li>Refund requests are considered on a case-by-case basis, depending on the stage of the project and the work already performed.</li>
              <li>No refunds are issued for completed milestones or deliverables that the client has reviewed and accepted.</li>
              <li>If a project is cancelled before work begins, deposits are refundable less any costs already incurred (for example, third-party licenses or domain purchases made on the client&apos;s behalf).</li>
              <li>If Noventra is unable to deliver agreed work for reasons within our control, the client is entitled to a refund of amounts paid for the undelivered portion.</li>
            </ul>
          </Section>

          <Section title="3. Cancellations">
            <ul className="list-disc pl-lg space-y-xs">
              <li>Either party may cancel an engagement by giving written notice as specified in the service agreement (or a minimum of 7 days&apos; notice where not specified).</li>
              <li>On cancellation, the client is invoiced for all work completed up to the effective cancellation date.</li>
              <li>Any prepaid amounts exceeding the value of completed work are handled under the refund terms above.</li>
            </ul>
          </Section>

          <Section title="4. Processing Approved Refunds">
            <p>
              Approved refunds are processed within 5–10 business days to the
              original payment method where possible. Refunds for payments made
              via Paystack are returned through Paystack; timing of the final
              credit may depend on your bank or mobile money provider.
            </p>
          </Section>

          <Section title="5. How to Request a Refund">
            <p>
              Send your request, including the project name, invoice number, and
              reason, to{" "}
              <a
                href="mailto:info@noventra.tech"
                className="text-primary hover:underline underline-offset-4"
              >
                info@noventra.tech
              </a>{" "}
              with the subject line &quot;Refund Request&quot;. We acknowledge
              refund requests within 2 business days.
            </p>
          </Section>
        </div>
      </div>
    </PageLayout>
  );
}
