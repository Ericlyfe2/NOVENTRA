import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-[60vh] flex items-center justify-center px-gutter py-3xl">
        <div className="glass-panel p-xl md:p-3xl rounded-lg text-center max-w-[32rem] w-full">
          <div className="font-display-lg text-display-lg text-primary mb-md">404</div>
          <h1 className="font-headline-lg text-headline-lg mb-sm">Page not found</h1>
          <p className="font-body-md text-body-md text-on-surface-variant mb-xl">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
          <Link
            href="/"
            className="inline-block bg-primary text-on-primary font-label-md text-label-md px-3xl py-md rounded glow-button transition-all"
          >
            Back to Home
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
