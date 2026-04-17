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
    industry: "Manufacturing",
    company: "Vantage Industrial Group",
    title: "CPQ & Billing Overhaul Cutting Quote Cycle by 73%",
    challenge: "Vantage's sales team spent an average of 4 hours on each quote due to complex product configurations, manual pricing approval chains, and disconnected billing. Win rates were declining as competitors quoted faster.",
    solution: "We replaced their spreadsheet-and-email quoting process with Salesforce CPQ. We modeled 2,400+ product SKUs, built a dynamic guided selling interface, automated 8-stage approval workflows with parallel routing, and integrated CPQ with their ERP billing system via MuleSoft.",
    outcome: "Quote cycle time dropped from 4 hours to 65 minutes. First-year contract value increased as reps began confidently quoting larger bundles without approval anxiety.",
    metrics: [
      { label: "Quote Cycle Reduction", value: "73%", icon: RiArrowUpLine },
      { label: "Avg Deal Size", value: "+22%", icon: RiArrowUpLine },
      { label: "SKUs Modeled", value: "2,400+", icon: RiTrophyLine },
    ],
    duration: "6 months",
    services: ["Salesforce CPQ", "MuleSoft ERP Integration", "Billing", "Process Automation"],
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
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
              <div className="rounded-3xl border border-[hsl(220,25%,18%)] bg-[hsl(220,28%,11%)] overflow-hidden hover:border-primary/20 transition-colors">
                {/* Top bar */}
                <div className="px-8 pt-8 pb-6 border-b border-[hsl(220,25%,16%)]">
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
                      <div key={m.label} className="text-center p-4 rounded-xl bg-[hsl(220,28%,14%)] border border-[hsl(220,25%,20%)]">
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
            <div className="relative p-12 rounded-3xl overflow-hidden text-center border border-primary/20 bg-gradient-to-br from-primary/10 via-[hsl(220,28%,12%)] to-violet-900/10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
              <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Your Success Story Starts Here</h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                Every client on this page started with a conversation. Let's have one.
              </p>
              <Link href="/contact">
                <span className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold bg-primary text-[hsl(220,30%,8%)] rounded-xl hover:bg-primary/90 transition-all cursor-pointer shadow-xl shadow-primary/30 hover:-translate-y-0.5">
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
