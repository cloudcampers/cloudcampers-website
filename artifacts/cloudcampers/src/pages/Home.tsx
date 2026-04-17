import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";
import {
  RiArrowRightLine,
  RiCheckLine,
  RiShieldCheckLine,
  RiBarChartBoxLine,
  RiFlowChart,
  RiTeamLine,
  RiStarFill,
  RiDoubleQuotesL,
} from "react-icons/ri";
import { SiSalesforce, SiMulesoft } from "react-icons/si";

const stats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50+", label: "Enterprise Clients" },
  { value: "12+", label: "Years Experience" },
];

const services = [
  {
    icon: SiSalesforce,
    title: "Salesforce Implementation",
    description: "End-to-end Salesforce deployments tailored to your business model. Sales Cloud, Service Cloud, Marketing Cloud, and more.",
    tags: ["Sales Cloud", "Service Cloud", "CPQ"],
  },
  {
    icon: SiMulesoft,
    title: "MuleSoft Integration",
    description: "Connect your enterprise systems with robust, scalable API-led integrations built on Anypoint Platform.",
    tags: ["Anypoint Platform", "API Design", "iPaaS"],
  },
  {
    icon: RiFlowChart,
    title: "Process Automation",
    description: "Streamline operations with Salesforce Flow, Process Builder, and intelligent automation workflows.",
    tags: ["Flow Builder", "Automation", "AI"],
  },
  {
    icon: RiBarChartBoxLine,
    title: "Analytics & Reporting",
    description: "Unlock business intelligence with Salesforce Einstein Analytics and custom report dashboards.",
    tags: ["Einstein Analytics", "Tableau", "CRM Analytics"],
  },
];

const testimonials = [
  {
    quote: "CloudCampers transformed our entire CRM stack. We went from a patchwork of disconnected systems to a unified platform in under 6 months.",
    author: "Sarah Mitchell",
    role: "CTO, NovaTech Industries",
    stars: 5,
  },
  {
    quote: "The MuleSoft expertise they brought was unmatched. Our API layer now handles 10x the throughput with half the maintenance burden.",
    author: "James Reyes",
    role: "VP Engineering, Meridian Financial",
    stars: 5,
  },
];

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-blue-600/8 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-[250px] h-[250px] bg-violet-600/8 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold text-primary bg-primary/10 border border-primary/20 rounded-full mb-8 tracking-wider uppercase">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              Salesforce & MuleSoft Experts
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6"
          >
            Build the{" "}
            <span className="gradient-text">Connected Enterprise</span>
            <br />
            Your Business Deserves
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            CloudCampers delivers elite Salesforce and MuleSoft consulting to mid-market and enterprise organizations. We architect integrations and CRM transformations that last.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact">
              <span className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold bg-primary text-[hsl(220,30%,8%)] rounded-xl hover:bg-primary/90 transition-all duration-200 cursor-pointer shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5">
                Start Your Project
                <RiArrowRightLine size={18} />
              </span>
            </Link>
            <Link href="/case-studies">
              <span className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-foreground bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-200 cursor-pointer hover:-translate-y-0.5">
                View Case Studies
              </span>
            </Link>
          </motion.div>

          {/* Trust logos */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 flex flex-col items-center gap-4"
          >
            <p className="text-xs text-muted-foreground uppercase tracking-widest">Certified Partners</p>
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2.5 text-muted-foreground/60">
                <SiSalesforce size={22} className="text-[#00A1E0]" />
                <span className="text-sm font-medium">Salesforce Partner</span>
              </div>
              <div className="w-px h-5 bg-white/10" />
              <div className="flex items-center gap-2.5 text-muted-foreground/60">
                <SiMulesoft size={20} className="text-[#00A1E0]" />
                <span className="text-sm font-medium">MuleSoft Partner</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-center justify-center">
            <div className="w-1 h-2 bg-primary/60 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-[hsl(220,25%,14%)] bg-[hsl(220,28%,10%)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-extrabold gradient-text mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-xs font-semibold text-primary uppercase tracking-widest mb-3 block">What We Do</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
                End-to-End Salesforce &<br />MuleSoft Expertise
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                From architecture to deployment to ongoing support — we cover the full lifecycle of your enterprise platform.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.1}>
                <div className="group p-8 rounded-2xl border-gradient bg-[hsl(220,28%,11%)] hover:bg-[hsl(220,28%,13%)] transition-all duration-300 cursor-default hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/15 group-hover:border-primary/30 transition-all">
                    <service.icon size={22} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-5">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-xs font-medium text-primary/80 bg-primary/8 border border-primary/15 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div className="text-center mt-10">
              <Link href="/services">
                <span className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all cursor-pointer">
                  Explore All Services <RiArrowRightLine size={18} />
                </span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why CloudCampers */}
      <section className="py-24 px-6 lg:px-8 bg-[hsl(220,28%,10%)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div>
                <span className="text-xs font-semibold text-primary uppercase tracking-widest mb-4 block">Why Choose Us</span>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
                  The Partner That Stays Until It Works
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  We don't hand off a deployment and disappear. CloudCampers stays embedded until your team is confident, your data is clean, and your ROI is measurable.
                </p>
                <ul className="space-y-4">
                  {[
                    "Certified Salesforce & MuleSoft architects on every engagement",
                    "Fixed-scope projects with transparent pricing",
                    "Post-go-live support included as standard",
                    "Industry-specific expertise in Finance, Healthcare, and Manufacturing",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-5 h-5 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center mt-0.5 shrink-0">
                        <RiCheckLine size={11} className="text-primary" />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <Link href="/about">
                    <span className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-foreground bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all cursor-pointer">
                      Learn More About Us <RiArrowRightLine size={16} />
                    </span>
                  </Link>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: RiShieldCheckLine, title: "Certified Team", desc: "Every consultant is certified at the highest tier" },
                  { icon: RiTeamLine, title: "Collaborative", desc: "We work alongside your internal teams, not around them" },
                  { icon: RiBarChartBoxLine, title: "Data-Driven", desc: "Every decision backed by metrics and measurable outcomes" },
                  { icon: RiFlowChart, title: "Scalable Architecture", desc: "Built to grow with your business, not just your current needs" },
                ].map((card, i) => (
                  <div key={card.title} className="p-6 rounded-2xl bg-[hsl(220,28%,12%)] border border-[hsl(220,25%,20%)] hover:border-primary/30 transition-colors">
                    <card.icon size={22} className="text-primary mb-3" />
                    <h4 className="text-sm font-bold text-foreground mb-1.5">{card.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-xs font-semibold text-primary uppercase tracking-widest mb-3 block">Client Stories</span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">What Our Clients Say</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <FadeIn key={t.author} delay={i * 0.15}>
                <div className="p-8 rounded-2xl border-gradient bg-[hsl(220,28%,11%)] relative">
                  <RiDoubleQuotesL size={28} className="text-primary/30 mb-4" />
                  <p className="text-foreground/90 leading-relaxed mb-6 italic">"{t.quote}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-sm text-foreground">{t.author}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{t.role}</div>
                    </div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.stars }).map((_, j) => (
                        <RiStarFill key={j} size={13} className="text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="relative p-12 md:p-16 rounded-3xl overflow-hidden text-center border border-primary/20 bg-gradient-to-br from-primary/10 via-[hsl(220,28%,12%)] to-violet-900/10">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
              <span className="text-xs font-semibold text-primary uppercase tracking-widest mb-4 block">Ready to Transform?</span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
                Let's Build Something That Lasts
              </h2>
              <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
                Whether you're starting from scratch or untangling a legacy system, CloudCampers has the expertise to get you there.
              </p>
              <Link href="/contact">
                <span className="inline-flex items-center gap-2 px-10 py-4 text-base font-semibold bg-primary text-[hsl(220,30%,8%)] rounded-xl hover:bg-primary/90 transition-all duration-200 cursor-pointer shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5">
                  Schedule a Discovery Call
                  <RiArrowRightLine size={18} />
                </span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
