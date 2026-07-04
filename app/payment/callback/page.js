import { Suspense } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ShaderBackground from "@/components/ShaderBackground";
import PaymentCallbackContent from "@/components/PaymentCallbackContent";

export const metadata = {
  title: "Payment Status",
  description: "Confirming your Paystack payment to Noventra Technologies.",
};

export default function PaymentCallbackPage() {
  return (
    <>
      <div className="fixed inset-0 z-[-1]">
        <div className="w-full h-full">
          <ShaderBackground />
        </div>
      </div>
      <SiteHeader />
      <main className="relative min-h-screen flex items-center">
        <section className="max-w-container-max mx-auto px-gutter py-2xl md:py-3xl w-full">
          <div className="max-w-[32rem] mx-auto">
            <Suspense fallback={null}>
              <PaymentCallbackContent />
            </Suspense>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
