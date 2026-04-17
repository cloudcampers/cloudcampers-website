import { Link } from "wouter";
import { RiLinkedinFill, RiTwitterFill, RiMailLine, RiPhoneLine, RiMapPinLine } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="bg-[hsl(220,30%,5%)] border-t border-[hsl(220,25%,14%)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[hsl(220,30%,8%)]" stroke="currentColor" strokeWidth="2.5">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <span className="text-lg font-bold text-foreground">
                Cloud<span className="text-primary">Campers</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Elite Salesforce and MuleSoft consulting. We help enterprises build the integrations and CRM foundations that scale.
            </p>
            <div className="flex gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-[hsl(220,28%,14%)] border border-[hsl(220,25%,20%)] flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all">
                <RiLinkedinFill size={16} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-[hsl(220,28%,14%)] border border-[hsl(220,25%,20%)] flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all">
                <RiTwitterFill size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5">
              {["Salesforce Implementation", "MuleSoft Integration", "Sales Cloud", "Service Cloud", "Marketing Cloud", "CPQ & Billing"].map((s) => (
                <li key={s}>
                  <Link href="/services">
                    <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">{s}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", href: "/about" },
                { label: "Case Studies", href: "/case-studies" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <RiMailLine size={16} className="mt-0.5 text-primary shrink-0" />
                <a href="mailto:hello@cloudcampers.net" className="hover:text-primary transition-colors">hello@cloudcampers.net</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <RiPhoneLine size={16} className="mt-0.5 text-primary shrink-0" />
                <a href="tel:+18005551234" className="hover:text-primary transition-colors">+1 (800) 555-1234</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <RiMapPinLine size={16} className="mt-0.5 text-primary shrink-0" />
                <span>United States</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[hsl(220,25%,14%)] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} CloudCampers.net. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-xs text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-xs text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
