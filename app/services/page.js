import ServicesContent from "@/components/ServicesContent";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Services",
  description:
    "Custom software development, web and mobile app development, UI/UX design, cloud solutions, business automation, e-commerce, and AI-powered applications.",
};

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <ServicesContent />
      <SiteFooter />
    </>
  );
}
