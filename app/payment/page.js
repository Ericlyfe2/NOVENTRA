import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ShaderBackground from "@/components/ShaderBackground";
import PaymentContent from "@/components/PaymentContent";

export const metadata = {
  title: "Make a Payment",
  description:
    "Pay Noventra Technologies securely via Paystack — card, mobile money (MTN, Vodafone, AirtelTigo), and bank transfer accepted. PALACE MALL, East Legon, Greater Accra, GHANA.",
};

const CHANNELS = [
  { icon: "credit_card", title: "Cards", desc: "Visa, Mastercard & Verve, charged in Ghana Cedis." },
  { icon: "smartphone", title: "Mobile Money", desc: "MTN MoMo, Telecel Cash and AT Money supported." },
  { icon: "account_balance", title: "Bank Transfer", desc: "Direct transfer from all major Ghanaian banks." },
];

export default function PaymentPage() {
  return (
    <>
      <div className="fixed inset-0 z-[-1]">
        <div className="w-full h-full">
          <ShaderBackground />
        </div>
      </div>
      <SiteHeader />
      <main className="relative min-h-screen">
        <section className="max-w-container-max mx-auto px-gutter py-2xl md:py-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl items-start">
            <div className="lg:col-span-5 space-y-xl">
              <div className="inline-flex items-center gap-sm bg-primary/10 border border-primary/20 px-md py-xs rounded-full w-fit">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="font-label-md text-label-md text-primary uppercase tracking-widest">Secure Checkout</span>
              </div>
              <div className="space-y-md">
                <h1 className="font-display-lg text-display-lg text-on-surface leading-tight">
                  Fast, Secure Payments.
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[28rem]">
                  Settle invoices, project deposits, and consultation fees in seconds.
                  Powered by Paystack — PCI-DSS compliant and trusted across Africa.
                </p>
              </div>

              <div className="space-y-lg">
                {CHANNELS.map((c) => (
                  <div key={c.title} className="flex items-start gap-lg p-md rounded-lg bg-surface-container-low border border-white/5">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 border border-primary/20 shrink-0">
                      <span className="material-symbols-outlined text-primary">{c.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-title-lg text-title-lg text-on-surface mb-xs">{c.title}</h4>
                      <p className="font-body-md text-body-md text-on-surface-variant">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="glass-panel p-lg rounded-lg border-l-4 border-l-primary">
                <div className="flex items-center gap-md mb-sm">
                  <span className="material-symbols-outlined text-primary text-md">receipt_long</span>
                  <span className="font-label-md text-label-md text-primary">Receipts &amp; Refunds</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface">
                  Every payment is confirmed instantly and a receipt is emailed to you.
                  See our <a href="/refund-policy" className="text-primary hover:underline">Refund Policy</a> for terms.
                </p>
              </div>

              <div className="glass-panel p-lg rounded-lg relative overflow-hidden">
                <div className="flex items-center justify-between gap-md mb-sm">
                  <div className="flex items-center gap-sm">
                    <span className="material-symbols-outlined text-primary text-md">api</span>
                    <span className="font-label-md text-label-md text-on-surface">Paystack Payment API</span>
                  </div>
                  <span className="inline-flex items-center gap-xs bg-primary/10 border border-primary/20 px-sm py-[2px] rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    <span className="font-label-md text-[10px] text-primary uppercase tracking-widest">Live</span>
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Checkout runs on Paystack&apos;s official Transactions API —{" "}
                  <span className="text-on-surface">Initialize</span> starts your session on our server, and{" "}
                  <span className="text-on-surface">Verify</span>{" "}
                  confirms the outcome before we mark it paid. No card data ever touches Noventra&apos;s servers.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 reveal-form">
              <PaymentContent />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
