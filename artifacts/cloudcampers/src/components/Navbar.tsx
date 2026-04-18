import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import { CloudCampersFull } from "@/components/CloudCampersLogo";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#E5E7EB] shadow-sm"
          : "bg-[#FAF8F4]/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/">
            <div className="cursor-pointer">
              <CloudCampersFull height={30} />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`px-4 py-2 text-sm font-medium rounded transition-all duration-200 cursor-pointer ${
                    location === link.href
                      ? "text-[#2D6A4F] bg-[#2D6A4F]/8"
                      : "text-[#6B7280] hover:text-[#1C1C1E] hover:bg-[#1C1C1E]/5"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/contact">
              <span className="px-5 py-2.5 text-sm font-semibold bg-[#2D6A4F] text-white rounded hover:bg-[#1B4332] transition-all duration-200 cursor-pointer shadow-sm">
                Schedule Consultation
              </span>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded text-[#6B7280] hover:text-[#1C1C1E] hover:bg-[#1C1C1E]/5 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <RiCloseLine size={22} /> : <RiMenuLine size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-t border-[#E5E7EB]"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className={`block px-4 py-3 text-sm font-medium rounded transition-colors cursor-pointer ${
                      location === link.href
                        ? "text-[#2D6A4F] bg-[#2D6A4F]/8"
                        : "text-[#6B7280] hover:text-[#1C1C1E] hover:bg-[#1C1C1E]/5"
                    }`}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
              <Link href="/contact">
                <span className="block mt-2 px-4 py-3 text-sm font-semibold text-center bg-[#2D6A4F] text-white rounded cursor-pointer hover:bg-[#1B4332] transition-colors">
                  Schedule Consultation
                </span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
