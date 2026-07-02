import IndustriesContent from "@/components/IndustriesContent";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Industries We Serve",
  description:
    "Noventra Technologies builds software for Education, Healthcare, Finance, Logistics, Retail, and Professional Services organizations.",
};

export default function IndustriesPage() {
  return (
    <>
      <SiteHeader />
      <IndustriesContent />
      <SiteFooter />
    </>
  );
}
