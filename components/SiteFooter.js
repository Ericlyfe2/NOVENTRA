import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-surface-container-lowest/50 border-t border-outline-variant">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-xl px-gutter py-3xl max-w-container-max mx-auto">
        <div className="space-y-lg">
          <div className="font-headline-lg text-headline-lg font-bold text-primary">
            Noventra
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-[20rem]">
            Advancing enterprise engineering through precision software solutions and strategic technology architecture.
          </p>
          <div className="font-label-md text-label-md text-on-surface-variant/60">
            PALACE MALL, East Legon,<br />Greater Accra, GHANA
          </div>
        </div>
        <div>
          <h5 className="font-title-lg text-title-lg text-on-surface mb-lg">Company</h5>
          <ul className="space-y-md">
            <li><Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-all" href="/about">About Us</Link></li>
            <li><Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-all" href="/portfolio">Portfolio</Link></li>
            <li><Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-all" href="/services">Services</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-title-lg text-title-lg text-on-surface mb-lg">Support</h5>
          <ul className="space-y-md">
            <li><Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-all" href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-all" href="/terms">Terms of Service</Link></li>
            <li><Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-all" href="/refund-policy">Refund Policy</Link></li>
            <li>
              <Link className="flex items-center gap-xs font-body-md text-body-md text-primary font-semibold hover:underline transition-all" href="/payment">
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>credit_card</span>
                Make a Payment
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-lg">
          <h5 className="font-title-lg text-title-lg text-on-surface">Newsletter</h5>
          <p className="font-body-md text-body-md text-on-surface-variant">Stay updated with our technical journals.</p>
          <div className="flex gap-0">
            <input
              className="bg-surface-container-high/50 border border-outline-variant/30 rounded-l-xl px-md py-sm w-full focus:outline-none focus:border-primary/50 text-on-surface placeholder:text-on-surface-variant/40"
              placeholder="Email"
              type="email"
              aria-label="Email for newsletter"
            />
            <button className="bg-primary text-on-primary px-lg rounded-r-xl hover:opacity-90 font-label-md transition-all">
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-outline-variant/50 py-lg">
        <div className="max-w-container-max mx-auto px-gutter flex flex-col sm:flex-row justify-between items-center gap-md">
          <p className="font-body-md text-body-md text-on-surface-variant/60 text-sm">
            &copy; {new Date().getFullYear()} Noventra Technologies. All rights reserved. Accra, Ghana.
          </p>
          <div className="flex gap-lg">
            <a className="text-on-surface-variant/60 hover:text-primary transition-colors" href="https://www.linkedin.com/company/noventra-technologies" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <span className="material-symbols-outlined text-[20px]">public</span>
            </a>
            <a className="text-on-surface-variant/60 hover:text-primary transition-colors" href="mailto:info@noventra.tech" aria-label="Email">
              <span className="material-symbols-outlined text-[20px]">alternate_email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
