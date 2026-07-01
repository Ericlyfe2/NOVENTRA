import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-xl px-gutter py-3xl max-w-container-max mx-auto">
        <div className="md:col-span-1">
          <div className="font-headline-lg text-headline-lg font-bold text-primary mb-md">
            Noventra
          </div>
          <p className="text-on-surface-variant text-body-md">
            Precision engineering for the next generation of software
            enterprise.
          </p>
        </div>
        <div>
          <h4 className="font-label-md text-label-md text-on-surface font-bold mb-lg uppercase tracking-wider">
            Services
          </h4>
          <ul className="space-y-sm text-on-surface-variant">
            <li>
              <Link className="hover:text-primary transition-colors" href="/services#custom-software">
                Custom Software
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary transition-colors" href="/services#cloud-solutions">
                Cloud Solutions
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary transition-colors" href="/services#ai-applications">
                AI Applications
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary transition-colors" href="/services#ui-ux-design">
                UI/UX Design
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-md text-label-md text-on-surface font-bold mb-lg uppercase tracking-wider">
            Company
          </h4>
          <ul className="space-y-sm text-on-surface-variant">
            <li>
              <Link className="hover:text-primary transition-colors" href="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary transition-colors" href="/privacy-policy">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary transition-colors" href="/terms">
                Terms &amp; Conditions
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary transition-colors" href="/refund-policy">
                Refund &amp; Cancellation Policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-md text-label-md text-on-surface font-bold mb-lg uppercase tracking-wider">
            Contact
          </h4>
          <p className="text-on-surface-variant text-body-md mb-md">
            Near Obofour Church, Plot Fawoade,
            <br />
            Mamponteng, Ashanti Region, Ghana.
          </p>
          <a
            className="text-primary font-bold hover:underline underline-offset-4"
            href="mailto:info@noventra.tech"
          >
            info@noventra.tech
          </a>
        </div>
      </div>
      <div className="border-t border-outline-variant py-lg px-gutter max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-md">
        <p className="text-on-surface-variant text-label-md">
          &copy; {new Date().getFullYear()} Noventra Technologies. All rights
          reserved. Mamponteng, Ashanti Region, Ghana.
        </p>
        <div className="flex gap-lg">
          <a
            className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-all"
            href="https://www.linkedin.com/company/noventra-technologies"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            public
          </a>
          <a
            className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-all"
            href="mailto:info@noventra.tech"
            aria-label="Email"
          >
            alternate_email
          </a>
        </div>
      </div>
    </footer>
  );
}
