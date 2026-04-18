import { Link } from "wouter";
import { RiLinkedinFill, RiTwitterFill, RiMailLine, RiPhoneLine, RiMapPinLine } from "react-icons/ri";
import { CloudCampersFull } from "@/components/CloudCampersLogo";

export default function Footer() {
  return (
    <footer className="bg-[#FDFBF7] border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <CloudCampersFull height={30} />
            </div>
            <p className="text-sm text-[#6B7280] leading-relaxed mb-6">
              Elite Salesforce and MuleSoft consulting. We help enterprises build the integrations and CRM foundations that scale.
            </p>
            <div className="flex gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded bg-white border border-[#E5E7EB] flex items-center justify-center text-[#6B7280] hover:text-[#2D6A4F] hover:border-[#2D6A4F]/40 transition-all">
                <RiLinkedinFill size={16} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded bg-white border border-[#E5E7EB] flex items-center justify-center text-[#6B7280] hover:text-[#2D6A4F] hover:border-[#2D6A4F]/40 transition-all">
                <RiTwitterFill size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold text-[#1C1C1E] mb-4 uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5">
              {["Salesforce Implementation", "MuleSoft Integration", "Sales Cloud", "Service Cloud", "Marketing Cloud", "Agentforce"].map((s) => (
                <li key={s}>
                  <Link href="/services">
                    <span className="text-sm text-[#6B7280] hover:text-[#2D6A4F] transition-colors cursor-pointer">{s}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold text-[#1C1C1E] mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", href: "/about" },
                { label: "Case Studies", href: "/case-studies" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-sm text-[#6B7280] hover:text-[#2D6A4F] transition-colors cursor-pointer">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold text-[#1C1C1E] mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-[#6B7280]">
                <RiMailLine size={16} className="mt-0.5 text-[#2D6A4F] shrink-0" />
                <a href="mailto:hello@cloudcampers.net" className="hover:text-[#2D6A4F] transition-colors">hello@cloudcampers.net</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#6B7280]">
                <RiPhoneLine size={16} className="mt-0.5 text-[#2D6A4F] shrink-0" />
                <a href="tel:+12817509514" className="hover:text-[#2D6A4F] transition-colors">+1 (281) 750-9514</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#6B7280]">
                <RiMapPinLine size={16} className="mt-0.5 text-[#2D6A4F] shrink-0" />
                <span>United States</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#E5E7EB] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#6B7280]">
            &copy; {new Date().getFullYear()} CloudCampers.net. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-xs text-[#6B7280] hover:text-[#1C1C1E] cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-xs text-[#6B7280] hover:text-[#1C1C1E] cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
