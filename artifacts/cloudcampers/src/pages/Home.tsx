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
  RiDoubleQuotesL,
} from "react-icons/ri";
import { SalesforceMark } from "@/components/SalesforceLogo";
import { MulesoftMark } from "@/components/MulesoftLogo";

const stats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50+", label: "Enterprise Clients" },
  { value: "12+", label: "Years Experience" },
];

const services = [
  {
    renderIcon: () => <SalesforceMark size={24} />,
    title: "Salesforce Implementation",
    description: "End-to-end Salesforce deployments tailored to your business model. Sales Cloud, Service Cloud, Marketing Cloud, and more.",
    tags: ["Sales Cloud", "Service Cloud", "Agentforce"],
  },
  {
    renderIcon: () => <MulesoftMark size={24} />,
    title: "MuleSoft Integration",
    description: "Connect your enterprise systems with robust, scalable API-led integrations built on Anypoint Platform.",
    tags: ["Anypoint Platform", "API Design", "iPaaS"],
  },
  {
    renderIcon: () => <RiFlowChart size={22} className="text-[#2D6A4F]" />,
    title: "Process Automation",
    description: "Streamline operations with Salesforce Flow, Process Builder, and intelligent automation workflows.",
    tags: ["Flow Builder", "Automation", "AI"],
  },
  {
    renderIcon: () => <RiBarChartBoxLine size={22} className="text-[#2D6A4F]" />,
    title: "Analytics & Reporting",
    description: "Unlock business intelligence with Salesforce Einstein Analytics and custom report dashboards.",
    tags: ["Einstein Analytics", "Tableau", "CRM Analytics"],
  },
];

const testimonials = [
  {
    quote: "CloudCampers didn't just implement software; they re-architected how our sales organization operates. Their strategic foresight is unmatched.",
    author: "Sarah Mitchell",
    role: "CTO, NovaTech Industries",
  },
  {
    quote: "The MuleSoft expertise they brought was unmatched. Our API layer now handles 10x the throughput with half the maintenance burden.",
    author: "James Reyes",
    role: "VP Engineering, Meridian Financial",
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
    <div className="min-h-screen" style={{ backgroundColor: '#FAF8F4' }}>

      {/* Hero Section */}
      <section className="px-6 lg:px-8 pt-36 pb-32 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold text-[#2D6A4F] bg-[#2D6A4F]/8 border border-[#2D6A4F]/20 rounded-full mb-8 tracking-wider uppercase">
            <span className="w-1.5 h-1.5 bg-[#2D6A4F] rounded-full animate-pulse" />
            Salesforce & MuleSoft Experts
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-['Playfair_Display'] font-semibold leading-tight mb-8 text-[#1C1C1E]"
        >
          Strategic digital transformation.<br />
          <span className="text-[#2D6A4F] italic font-normal">Expertly delivered.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl md:text-2xl text-[#6B7280] mb-12 max-w-3xl mx-auto font-light leading-relaxed"
        >
          We partner with ambitious organizations to architect and implement enterprise-grade Salesforce and MuleSoft solutions that drive measurable business value.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/contact">
            <span className="inline-flex items-center gap-2 px-8 py-4 bg-[#2D6A4F] text-white font-medium rounded text-lg hover:bg-[#1B4332] transition-colors cursor-pointer">
              Discuss Your Initiative <RiArrowRightLine size={20} />
            </span>
          </Link>
          <Link href="/case-studies">
            <span className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-[#D1D5DB] text-[#1C1C1E] font-medium rounded text-lg hover:bg-[#F3F4F6] transition-colors cursor-pointer">
              Read Our Case Studies
            </span>
          </Link>
        </motion.div>

        {/* Certified Partners */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 flex flex-col items-center gap-4"
        >
          <p className="text-xs text-[#6B7280] uppercase tracking-widest">Certified Partners</p>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2.5 text-[#6B7280]">
              <SalesforceMark size={22} />
              <span className="text-sm font-medium">Salesforce Partner</span>
            </div>
            <div className="w-px h-5 bg-[#E5E7EB]" />
            <div className="flex items-center gap-2.5 text-[#6B7280]">
              <MulesoftMark size={20} />
              <span className="text-sm font-medium">MuleSoft Partner</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-[#E5E7EB] bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 lg:divide-x divide-[#E5E7EB]">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <div className="text-center lg:px-8">
                  <div className="text-4xl lg:text-5xl font-['Playfair_Display'] font-bold text-[#2D6A4F] mb-2">{stat.value}</div>
                  <div className="text-sm uppercase tracking-widest text-[#6B7280] font-medium">{stat.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-20">
              <span className="text-xs font-semibold text-[#2D6A4F] uppercase tracking-widest mb-3 block">What We Do</span>
              <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-semibold text-[#1C1C1E] mb-6">Our Capabilities</h2>
              <p className="text-xl text-[#6B7280] max-w-2xl mx-auto font-light">
                Comprehensive advisory and implementation services across the Salesforce ecosystem.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.1}>
                <div className="group bg-white p-10 rounded border border-[#E5E7EB] hover:border-[#2D6A4F] transition-colors cursor-default">
                  <div className="mb-6 bg-[#F3F4F6] w-16 h-16 rounded flex items-center justify-center group-hover:bg-[#E8F3ED] transition-colors">
                    {service.renderIcon()}
                  </div>
                  <h3 className="text-2xl font-['Playfair_Display'] font-semibold mb-4 text-[#1C1C1E]">{service.title}</h3>
                  <p className="text-[#6B7280] leading-relaxed text-lg font-light mb-5">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-xs font-medium text-[#2D6A4F] bg-[#2D6A4F]/8 border border-[#2D6A4F]/20 rounded-full">
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
                <span className="inline-flex items-center gap-2 text-[#2D6A4F] font-semibold hover:gap-3 transition-all cursor-pointer">
                  Explore All Services <RiArrowRightLine size={18} />
                </span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why CloudCampers */}
      <section className="py-24 px-6 lg:px-8 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div>
                <span className="text-xs font-semibold text-[#2D6A4F] uppercase tracking-widest mb-4 block">Why Choose Us</span>
                <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-semibold text-[#1C1C1E] mb-6">
                  The Partner That Stays Until It Works
                </h2>
                <p className="text-[#6B7280] text-lg leading-relaxed mb-8 font-light">
                  We don't hand off a deployment and disappear. CloudCampers stays embedded until your team is confident, your data is clean, and your ROI is measurable.
                </p>
                <ul className="space-y-4">
                  {[
                    "Certified Salesforce & MuleSoft architects on every engagement",
                    "Fixed-scope projects with transparent pricing",
                    "Post-go-live support included as standard",
                    "Industry-specific expertise in Finance, Healthcare, and Manufacturing",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-[#6B7280]">
                      <span className="w-5 h-5 rounded-full bg-[#2D6A4F]/15 border border-[#2D6A4F]/30 flex items-center justify-center mt-0.5 shrink-0">
                        <RiCheckLine size={11} className="text-[#2D6A4F]" />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <Link href="/about">
                    <span className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#1C1C1E] bg-white border border-[#E5E7EB] rounded hover:bg-[#F9FAFB] transition-all cursor-pointer">
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
                ].map((card) => (
                  <div key={card.title} className="p-6 rounded bg-white border border-[#E5E7EB] hover:border-[#2D6A4F]/40 transition-colors">
                    <card.icon size={22} className="text-[#2D6A4F] mb-3" />
                    <h4 className="text-sm font-semibold text-[#1C1C1E] mb-1.5">{card.title}</h4>
                    <p className="text-xs text-[#6B7280] leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonials — dark section for contrast */}
      <section className="bg-[#1C1C1E] text-white py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-semibold mb-6">Trusted by Industry Leaders</h2>
              <div className="w-16 h-1 bg-[#2D6A4F] mx-auto"></div>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-16">
            {testimonials.map((t, i) => (
              <FadeIn key={t.author} delay={i * 0.15}>
                <div className="relative">
                  <RiDoubleQuotesL size={56} className="absolute -top-4 -left-6 text-[#374151] opacity-50" />
                  <p className="text-xl md:text-2xl font-light leading-relaxed mb-8 relative z-10 font-['Playfair_Display'] italic">
                    "{t.quote}"
                  </p>
                  <div>
                    <div className="font-semibold text-lg">{t.author}</div>
                    <div className="text-[#9CA3AF]">{t.role}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 lg:px-8 text-center max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-semibold text-[#1C1C1E] mb-8">
            Ready to elevate your operations?
          </h2>
          <p className="text-xl text-[#6B7280] mb-12 font-light">
            Connect with our senior partners to discuss how we can accelerate your digital transformation journey.
          </p>
          <Link href="/contact">
            <span className="inline-flex items-center gap-2 px-10 py-5 bg-[#2D6A4F] text-white font-medium rounded text-lg hover:bg-[#1B4332] transition-colors cursor-pointer">
              Schedule a Consultation <RiArrowRightLine size={20} />
            </span>
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
