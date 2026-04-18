import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";
import { RiArrowRightLine, RiTrophyLine, RiTimeLine, RiArrowUpLine } from "react-icons/ri";

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

const caseStudies = [
  {
    industry: "Financial Services",
    company: "Meridian Capital Group",
    title: "Unified CRM Transformation Across 12 Business Units",
    challenge: "Meridian operated 12 separate Salesforce orgs — a consequence of rapid M&A activity. Sales teams couldn't share leads, compliance couldn't enforce policy consistently, and reporting was a manual nightmare requiring 3 FTE analysts.",
    solution: "We designed and executed a full org consolidation strategy: merging 12 orgs into a unified architecture with division-level data partitioning, role-based visibility, and a centralized compliance framework. The project ran in parallel with their annual renewal cycle to minimize disruption.",
    outcome: "The consolidated org launched on time and under budget. Within 90 days, cross-sell pipeline increased 34% as reps gained visibility into the full client relationship.",
    metrics: [
      { label: "Pipeline Growth", value: "+34%", icon: RiArrowUpLine },
      { label: "Reporting Time Saved", value: "40 hrs/wk", icon: RiTimeLine },
      { label: "Orgs Consolidated", value: "12 → 1", icon: RiTrophyLine },
    ],
    duration: "9 months",
    services: ["Salesforce Architect", "Data Migration", "CPQ", "Sales Cloud"],
  },
  {
    industry: "Healthcare Technology",
    company: "HealthBridge Networks",
    title: "Real-Time EHR Integration via MuleSoft Anypoint",
    challenge: "HealthBridge needed to synchronize patient records across a Salesforce Health Cloud CRM and three legacy EHR systems in real time. HIPAA compliance requirements and the sensitivity of PHI data made a custom point-to-point approach untenable.",
    solution: "We architected a HIPAA-compliant API-led connectivity framework on MuleSoft Anypoint Platform. System APIs abstracted each EHR, process APIs handled HL7 transformation and deduplication logic, and experience APIs served the Salesforce Health Cloud integration — each independently versionable and auditable.",
    outcome: "Patient records synchronize within seconds across all systems. The audit-ready API layer reduced compliance review time from 3 days to 4 hours.",
    metrics: [
      { label: "Sync Latency", value: "<3 sec", icon: RiTimeLine },
      { label: "Compliance Review Time", value: "-87%", icon: RiArrowUpLine },
      { label: "Systems Integrated", value: "4", icon: RiTrophyLine },
    ],
    duration: "7 months",
    services: ["MuleSoft Anypoint", "Health Cloud", "API Design", "HIPAA Compliance"],
  },
  {
    industry: "Financial Services",
    company: "Vantage Capital Partners",
    title: "Agentforce Deployment Deflecting 61% of Tier-1 Service Volume",
    challenge: "Vantage's service team was overwhelmed by repetitive client inquiries — account status, document requests, and policy lookups — consuming over 60% of agent capacity and creating 3–5 day response backlogs during peak periods.",
    solution: "We designed and deployed a suite of Agentforce autonomous agents grounded in Salesforce data and configured with custom Actions. Agents handle case intake, retrieve account and policy data, trigger document workflows, and escalate to human reps only when judgment is required. All handoffs include full context transfer.",
    outcome: "61% of Tier-1 service volume is now resolved autonomously. Human agents focus on complex, high-value interactions. Average resolution time for deflected cases dropped from 3 days to under 4 hours.",
    metrics: [
      { label: "Tier-1 Volume Deflected", value: "61%", icon: RiArrowUpLine },
      { label: "Resolution Time", value: "−82%", icon: RiArrowUpLine },
      { label: "CSAT Score", value: "4.8/5", icon: RiTrophyLine },
    ],
    duration: "4 months",
    services: ["Agentforce", "Service Cloud", "MuleSoft", "Einstein AI"],
  },
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="relative py-24 px-6 lg:px-8 overflow-hidden grid-bg">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-semibold text-primary uppercase tracking-widest mb-4 block">Case Studies</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-['Playfair_Display'] font-semibold tracking-tight mb-6">
              Real Results for{" "}
              <span className="gradient-text">Real Enterprises</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We let outcomes speak for themselves. Here's a look at three engagements that changed the trajectory of our clients' technology programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-12">
          {caseStudies.map((cs, i) => (
            <FadeIn key={cs.company} delay={i * 0.1}>
              <div className="rounded border border-[#E5E7EB] bg-white overflow-hidden hover:border-[#2D6A4F]/30 transition-colors">
                {/* Top bar */}
                <div className="px-8 pt-8 pb-6 border-b border-[#E5E7EB]">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                    <div>
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 border border-primary/20 rounded-full mb-3">{cs.industry}</span>
                      <h2 className="text-xl md:text-2xl font-extrabold text-foreground leading-tight">{cs.title}</h2>
                      <p className="text-sm text-muted-foreground mt-1">{cs.company}</p>
                    </div>
                    <div className="shrink-0 text-right">
                      <div className="text-xs text-muted-foreground">Duration</div>
                      <div className="text-sm font-semibold text-foreground">{cs.duration}</div>
                    </div>
                  </div>
                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    {cs.metrics.map((m) => (
                      <div key={m.label} className="text-center p-4 rounded bg-[#FDFBF7] border border-[#E5E7EB]">
                        <div className="text-2xl font-extrabold gradient-text mb-1">{m.value}</div>
                        <div className="text-xs text-muted-foreground">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div>
                    <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">The Challenge</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">Our Approach</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{cs.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">The Outcome</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">{cs.outcome}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {cs.services.map((s) => (
                        <span key={s} className="px-2.5 py-1 text-xs text-primary/80 bg-primary/8 border border-primary/15 rounded-full">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="p-12 rounded text-center border border-[#E5E7EB] bg-[#FDFBF7]">
              <h2 className="text-2xl md:text-3xl font-['Playfair_Display'] font-semibold text-[#1C1C1E] mb-4">Your Success Story Starts Here</h2>
              <p className="text-[#6B7280] text-lg mb-8 max-w-xl mx-auto font-light">
                Every client on this page started with a conversation. Let's have one.
              </p>
              <Link href="/contact">
                <span className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium bg-[#2D6A4F] text-white rounded hover:bg-[#1B4332] transition-all cursor-pointer">
                  Start the Conversation
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
