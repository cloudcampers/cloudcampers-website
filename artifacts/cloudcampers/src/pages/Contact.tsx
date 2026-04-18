import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { RiMailLine, RiPhoneLine, RiMapPinLine, RiLinkedinFill, RiCheckLine, RiSendPlaneLine } from "react-icons/ri";

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

const serviceOptions = [
  "Salesforce Implementation",
  "MuleSoft Integration",
  "Sales Cloud",
  "Service Cloud",
  "Marketing Cloud",
  "CPQ & Billing",
  "Experience Cloud",
  "Salesforce Health Check / Audit",
  "Analytics & Einstein",
  "Managed Services",
  "Other / Not Sure Yet",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid email is required";
    if (!form.company.trim()) e.company = "Company name is required";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="relative py-24 px-6 lg:px-8 overflow-hidden grid-bg">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-semibold text-primary uppercase tracking-widest mb-4 block">Contact Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Let's Talk About{" "}
              <span className="gradient-text">Your Project</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Whether you have a clear scope or just a challenge you're trying to solve — we're happy to listen and help you think through it.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Main Content */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <FadeIn>
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-6">Get In Touch</h2>
                  <div className="space-y-5 mb-10">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                        <RiMailLine size={16} className="text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground mb-0.5">Email</div>
                        <a href="mailto:hello@cloudcampers.net" className="text-sm font-medium text-foreground hover:text-primary transition-colors">info@cloudcampers.net</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                        <RiPhoneLine size={16} className="text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground mb-0.5">Phone</div>
                        <a href="tel:+18005551234" className="text-sm font-medium text-foreground hover:text-primary transition-colors">+1 (281) 750-9514</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                        <RiMapPinLine size={16} className="text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground mb-0.5">Headquarters</div>
                        <div className="text-sm font-medium text-foreground">United States</div>
                        <div className="text-xs text-muted-foreground">Remote-first, serving clients globally</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                        <RiLinkedinFill size={16} className="text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground mb-0.5">LinkedIn</div>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-foreground hover:text-primary transition-colors">CloudCampers on LinkedIn</a>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl border border-[hsl(220,25%,18%)] bg-[hsl(220,28%,11%)]">
                    <h3 className="text-sm font-bold text-foreground mb-3">What to expect</h3>
                    <ul className="space-y-3">
                      {[
                        "Response within 1 business day",
                        "30-min discovery call to understand your needs",
                        "No-obligation project assessment",
                        "Clear proposal with timeline and fixed pricing",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <RiCheckLine size={13} className="text-primary mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <FadeIn delay={0.15}>
                {submitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-12 rounded-2xl border border-primary/30 bg-primary/5">
                    <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                      <RiCheckLine size={28} className="text-primary" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-foreground mb-3">Message Received</h3>
                    <p className="text-muted-foreground text-base max-w-sm">
                      Thank you for reaching out. A member of our team will be in touch within 1 business day.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="p-8 rounded-2xl border border-[hsl(220,25%,18%)] bg-[hsl(220,28%,11%)] space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-foreground mb-2">Full Name *</label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: "" }); }}
                          className={`w-full px-4 py-3 rounded-xl bg-[hsl(220,28%,14%)] border text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all ${errors.name ? "border-destructive" : "border-[hsl(220,25%,20%)] focus:border-primary/50"}`}
                          placeholder="Your full name"
                        />
                        {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-foreground mb-2">Work Email *</label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: "" }); }}
                          className={`w-full px-4 py-3 rounded-xl bg-[hsl(220,28%,14%)] border text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all ${errors.email ? "border-destructive" : "border-[hsl(220,25%,20%)] focus:border-primary/50"}`}
                          placeholder="you@company.com"
                        />
                        {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-2">Company *</label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => { setForm({ ...form, company: e.target.value }); setErrors({ ...errors, company: "" }); }}
                        className={`w-full px-4 py-3 rounded-xl bg-[hsl(220,28%,14%)] border text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all ${errors.company ? "border-destructive" : "border-[hsl(220,25%,20%)] focus:border-primary/50"}`}
                        placeholder="Your company name"
                      />
                      {errors.company && <p className="text-xs text-destructive mt-1">{errors.company}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-2">Service of Interest</label>
                      <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[hsl(220,28%,14%)] border border-[hsl(220,25%,20%)] text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all appearance-none"
                      >
                        <option value="" className="bg-[hsl(220,28%,11%)]">Select a service...</option>
                        {serviceOptions.map((s) => (
                          <option key={s} value={s} className="bg-[hsl(220,28%,11%)]">{s}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-2">Tell Us About Your Project *</label>
                      <textarea
                        value={form.message}
                        onChange={(e) => { setForm({ ...form, message: e.target.value }); setErrors({ ...errors, message: "" }); }}
                        rows={5}
                        className={`w-full px-4 py-3 rounded-xl bg-[hsl(220,28%,14%)] border text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none ${errors.message ? "border-destructive" : "border-[hsl(220,25%,20%)] focus:border-primary/50"}`}
                        placeholder="Describe your current challenges, goals, timeline, or anything you'd like us to know..."
                      />
                      {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 text-base font-semibold bg-primary text-[hsl(220,30%,8%)] rounded-xl hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5"
                    >
                      Send Message
                      <RiSendPlaneLine size={18} />
                    </button>

                    <p className="text-xs text-muted-foreground text-center">
                      We respect your privacy. Your information will never be shared with third parties.
                    </p>
                  </form>
                )}
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
