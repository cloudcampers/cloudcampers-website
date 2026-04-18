import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";
import {
  RiArrowRightLine,
  RiCheckLine,
  RiFlowChart,
  RiBarChartBoxLine,
  RiSettings4Line,
  RiCpuLine,
} from "react-icons/ri";
import { SalesforceMark } from "@/components/SalesforceLogo";
import { MulesoftMark } from "@/components/MulesoftLogo";

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

const salesforceServices = [
  {
    name: "Sales Cloud",
    description: "Supercharge your revenue team with intelligent opportunity management, forecasting, and pipeline automation tailored to your sales motion.",
    features: ["Opportunity & Pipeline Management", "Territory & Quota Management", "Einstein Forecasting", "Agentforce for Sales"],
  },
  {
    name: "Service Cloud",
    description: "Deliver exceptional customer support at scale with case management, knowledge bases, and AI-powered agent assistance.",
    features: ["Case Management & Routing", "Knowledge Base Authoring", "Einstein Bots & Chatbots", "Omni-Channel Support"],
  },
  {
    name: "Marketing Cloud",
    description: "Orchestrate personalized customer journeys across email, mobile, advertising, and social with data-driven campaign automation.",
    features: ["Journey Builder", "Email Studio", "Mobile Studio", "Advertising Studio"],
  },
  {
    name: "Agentforce",
    description: "Deploy autonomous AI agents that take action across your Salesforce ecosystem — handling service cases, qualifying leads, and driving pipeline without human intervention.",
    features: ["AI Agent Configuration", "Prompt Engineering & Grounding", "Agent Actions & Flows", "Human Handoff Workflows"],
  },
  {
    name: "Experience Cloud",
    description: "Build branded digital portals for customers, partners, and employees — connected directly to your Salesforce data.",
    features: ["Partner Portals", "Self-Service Communities", "Custom Branded Sites", "Mobile-Responsive Experiences"],
  },
  {
    name: "Salesforce Health Check & Optimization",
    description: "Struggling with technical debt? We audit your existing org, identify risk areas, and produce a prioritized remediation roadmap.",
    features: ["Security & Compliance Audit", "Apex & Flow Code Review", "Data Quality Assessment", "Governance Playbook"],
  },
];

const mulesoftServices = [
  {
    name: "API-Led Connectivity",
    description: "Design a three-tier API architecture (System, Process, Experience) that decouples integrations and reduces point-to-point complexity.",
    features: ["API Design & Mocking", "RAML & OAS Specifications", "Reusable Integration Assets", "API Governance Framework"],
  },
  {
    name: "Anypoint Platform Implementation",
    description: "Deploy and configure the Anypoint Platform (cloud, hybrid, or on-prem) and establish the operating model for your integration team.",
    features: ["Platform Deployment", "Environment Configuration", "Runtime Manager Setup", "Team Onboarding & Training"],
  },
  {
    name: "Legacy System Integration",
    description: "Connect ERP, HCM, CRM, and custom on-prem systems to your cloud ecosystem without disrupting existing operations.",
    features: ["SAP, Oracle, Workday Connectors", "Database Integration", "File & Batch Processing", "B2B EDI Integration"],
  },
  {
    name: "Real-Time Data Streaming",
    description: "Implement event-driven architectures that move data instantly across systems — eliminating overnight batch jobs and stale dashboards.",
    features: ["Event-Driven Architecture", "Kafka & Streaming Integration", "Change Data Capture", "Near Real-Time Sync"],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="relative py-24 px-6 lg:px-8 overflow-hidden grid-bg">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-semibold text-primary uppercase tracking-widest mb-4 block">Our Services</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Full-Spectrum Consulting for{" "}
              <span className="gradient-text">Modern Enterprises</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Whether you're adopting Salesforce for the first time or untangling a decade of integration debt, we have the expertise to move you forward.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Salesforce Services */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 rounded-xl bg-[#00A1E0]/10 border border-[#00A1E0]/20 flex items-center justify-center">
                <SalesforceMark size={28} />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">Salesforce Services</h2>
                <p className="text-muted-foreground text-sm mt-0.5">Cloud implementations, customizations, and ongoing optimization</p>
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {salesforceServices.map((service, i) => (
              <FadeIn key={service.name} delay={i * 0.08}>
                <div className="h-full p-7 rounded-2xl border border-[hsl(220,25%,18%)] bg-[hsl(220,28%,11%)] hover:border-primary/30 hover:bg-[hsl(220,28%,12%)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/8">
                  <h3 className="text-lg font-bold text-foreground mb-3">{service.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <RiCheckLine size={13} className="text-primary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* MuleSoft Services */}
      <section className="py-20 px-6 lg:px-8 bg-[hsl(220,28%,10%)]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 rounded-xl bg-[#00A1E0]/10 border border-[#00A1E0]/20 flex items-center justify-center">
                <MulesoftMark size={28} />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">MuleSoft Integration</h2>
                <p className="text-muted-foreground text-sm mt-0.5">API-led connectivity and enterprise integration architecture</p>
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mulesoftServices.map((service, i) => (
              <FadeIn key={service.name} delay={i * 0.1}>
                <div className="h-full p-8 rounded-2xl border-gradient bg-[hsl(220,28%,11%)] hover:bg-[hsl(220,28%,13%)] transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((f) => (
                      <span key={f} className="px-3 py-1 text-xs text-primary/80 bg-primary/8 border border-primary/15 rounded-full">{f}</span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-10">Additional Capabilities</h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: RiFlowChart, title: "Process Automation", desc: "Salesforce Flow, Apex triggers, and intelligent automation" },
              { icon: RiBarChartBoxLine, title: "Analytics & BI", desc: "Einstein Analytics, Tableau CRM, and custom dashboards" },
              { icon: RiCpuLine, title: "AI & Einstein", desc: "Predictive scoring, recommendations, and AI-powered workflows" },
              { icon: RiSettings4Line, title: "Managed Services", desc: "Ongoing admin support, monitoring, and platform governance" },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="p-6 rounded-2xl border border-[hsl(220,25%,18%)] bg-[hsl(220,28%,11%)] hover:border-primary/30 transition-colors">
                  <item.icon size={24} className="text-primary mb-4" />
                  <h3 className="text-base font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="relative p-12 rounded-3xl overflow-hidden text-center border border-primary/20 bg-gradient-to-br from-primary/10 via-[hsl(220,28%,12%)] to-violet-900/10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
              <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Not sure where to start?</h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                We offer complimentary discovery calls to assess your current landscape and identify quick wins.
              </p>
              <Link href="/contact">
                <span className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold bg-primary text-[hsl(220,30%,8%)] rounded-xl hover:bg-primary/90 transition-all cursor-pointer shadow-xl shadow-primary/30 hover:-translate-y-0.5">
                  Schedule Free Discovery Call
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
