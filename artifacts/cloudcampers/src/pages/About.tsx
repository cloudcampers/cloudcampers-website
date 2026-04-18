import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";
import { RiArrowRightLine, RiCheckLine } from "react-icons/ri";
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

const values = [
  {
    title: "Integrity First",
    description: "We tell clients what they need to hear, not what they want to hear. Honest assessments lead to better outcomes.",
  },
  {
    title: "Deep Expertise",
    description: "Every consultant on our team holds multiple certifications and has led real-world enterprise engagements.",
  },
  {
    title: "Outcome-Oriented",
    description: "We measure success by business impact — adoption rates, time savings, and revenue outcomes — not story points closed.",
  },
  {
    title: "Long-Term Partners",
    description: "We invest in understanding your business so deeply that we become an extension of your internal team.",
  },
];

const team = [
  {
    name: "Alex Torres",
    role: "Founder & Principal Architect",
    certs: ["Salesforce Architect", "MuleSoft Integration Professional"],
    bio: "15 years building enterprise integration platforms. Former architect at Accenture and Deloitte Digital.",
  },
  {
    name: "Jordan Kim",
    role: "VP, Salesforce Practice",
    certs: ["Salesforce Application Architect", "Sales Cloud Expert"],
    bio: "Led 40+ Salesforce transformations across financial services, healthcare, and manufacturing.",
  },
  {
    name: "Riley Morgan",
    role: "Lead MuleSoft Architect",
    certs: ["MuleSoft Certified Architect", "Anypoint Platform Specialist"],
    bio: "Designed API-led connectivity frameworks for Fortune 500 companies across three continents.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 px-6 lg:px-8 overflow-hidden grid-bg">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-semibold text-primary uppercase tracking-widest mb-4 block">About CloudCampers</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Built by Practitioners,{" "}
              <span className="gradient-text">For Practitioners</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              CloudCampers was founded by enterprise architects who were tired of consulting firms that prioritized billings over outcomes. We built the firm we wished we could hire.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6 lg:px-8 bg-[hsl(220,28%,10%)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div>
                <span className="text-xs font-semibold text-primary uppercase tracking-widest mb-4 block">Our Mission</span>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
                  We Make Complex Systems Simple to Operate
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Enterprise technology should work for your people, not the other way around. We believe the best Salesforce implementation is the one your team actually uses, and the best integration is the one nobody notices — because it just works.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Since 2012, we've helped over 50 enterprise organizations across North America modernize their CRM and integration stacks. Our clients stay with us because we stay invested in their success.
                </p>
                <div className="flex flex-wrap gap-6">
                  <div>
                    <div className="text-3xl font-extrabold gradient-text">2012</div>
                    <div className="text-xs text-muted-foreground mt-1">Founded</div>
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold gradient-text">50+</div>
                    <div className="text-xs text-muted-foreground mt-1">Enterprise Clients</div>
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold gradient-text">200+</div>
                    <div className="text-xs text-muted-foreground mt-1">Projects Shipped</div>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="p-8 rounded-2xl border-gradient bg-[hsl(220,28%,11%)]">
                <h3 className="text-lg font-bold mb-6 text-foreground">Our Certifications</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-[hsl(220,28%,14%)] border border-[hsl(220,25%,20%)]">
                    <SalesforceMark size={28} className="mt-0.5 shrink-0" />
                    <div>
                      <div className="font-semibold text-sm text-foreground mb-2">Salesforce Certified Partner</div>
                      <div className="space-y-1.5">
                        {["Salesforce Architect", "Application Architect", "System Architect", "Sales Cloud Consultant", "Service Cloud Consultant", "CPQ Specialist"].map((c) => (
                          <div key={c} className="flex items-center gap-2 text-xs text-muted-foreground">
                            <RiCheckLine size={12} className="text-primary shrink-0" />
                            {c}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-[hsl(220,28%,14%)] border border-[hsl(220,25%,20%)]">
                    <MulesoftMark size={28} className="mt-0.5 shrink-0" />
                    <div>
                      <div className="font-semibold text-sm text-foreground mb-2">MuleSoft Certified Partner</div>
                      <div className="space-y-1.5">
                        {["MuleSoft Certified Integration Architect", "Anypoint Platform Developer", "MuleSoft Platform Architect"].map((c) => (
                          <div key={c} className="flex items-center gap-2 text-xs text-muted-foreground">
                            <RiCheckLine size={12} className="text-primary shrink-0" />
                            {c}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="text-xs font-semibold text-primary uppercase tracking-widest mb-3 block">Our Values</span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">What We Stand For</h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.1}>
                <div className="p-7 rounded-2xl border border-[hsl(220,25%,18%)] bg-[hsl(220,28%,11%)] hover:border-primary/30 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                    <span className="text-xs font-bold text-primary">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 lg:px-8 bg-[hsl(220,28%,10%)]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="text-xs font-semibold text-primary uppercase tracking-widest mb-3 block">Leadership</span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">The Team Behind the Work</h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.12}>
                <div className="p-8 rounded-2xl border-gradient bg-[hsl(220,28%,11%)] text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/30 to-violet-600/30 border border-primary/20 flex items-center justify-center mx-auto mb-5">
                    <span className="text-xl font-extrabold text-primary">{member.name.split(" ").map(n => n[0]).join("")}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-xs text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{member.bio}</p>
                  <div className="flex flex-wrap gap-1.5 justify-center">
                    {member.certs.map((cert) => (
                      <span key={cert} className="px-2.5 py-1 text-xs text-primary/80 bg-primary/8 border border-primary/15 rounded-full">{cert}</span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl font-extrabold mb-4">Ready to Work with Us?</h2>
            <p className="text-muted-foreground text-lg mb-8">Let's talk about your challenges and how CloudCampers can help.</p>
            <Link href="/contact">
              <span className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold bg-primary text-[hsl(220,30%,8%)] rounded-xl hover:bg-primary/90 transition-all cursor-pointer shadow-xl shadow-primary/30 hover:-translate-y-0.5">
                Get in Touch <RiArrowRightLine size={18} />
              </span>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
