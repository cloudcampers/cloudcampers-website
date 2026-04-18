import React from 'react';
import { ArrowRight, ChevronRight, CheckCircle2, BarChart3, Settings2, Cloud } from 'lucide-react';

export default function DigitalFrontier() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-violet-500/30 selection:text-violet-200">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-violet-600 flex items-center justify-center">
              <Cloud className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight">CloudCampers.</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
            <a href="#" className="hover:text-white transition-colors">Services</a>
            <a href="#" className="hover:text-white transition-colors">Case Studies</a>
            <a href="#" className="hover:text-white transition-colors">Company</a>
          </div>
          <button className="bg-white text-black px-5 py-2.5 rounded text-sm font-bold hover:bg-white/90 transition-colors">
            Start Project
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6 overflow-hidden min-h-[90vh] flex flex-col justify-center">
        {/* Decorative Grid & Glow */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-violet-600/20 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-mono uppercase tracking-wider mb-8">
            <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse"></span>
            Salesforce & MuleSoft Experts
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-[120px] font-black leading-[0.9] tracking-tighter mb-8">
            BUILD THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-violet-600">FRONTIER.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/60 max-w-2xl font-medium mb-12 leading-relaxed">
            We architect, build, and scale enterprise systems for the world's most ambitious companies. High-conviction consulting for high-stakes projects.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded flex items-center justify-center gap-2 transition-all">
              Engage Our Team <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded border border-white/10 transition-all">
              View Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 border-y border-white/10 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {[
              { label: "Projects Delivered", value: "200+" },
              { label: "Client Satisfaction", value: "98%" },
              { label: "Enterprise Clients", value: "50+" },
              { label: "Years Experience", value: "12+" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col pt-8 lg:pt-0 lg:px-8 first:pt-0 first:lg:pl-0">
                <span className="text-violet-500 font-mono text-sm uppercase tracking-widest mb-4">{stat.label}</span>
                <span className="text-6xl md:text-8xl font-black tracking-tighter">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">UNMATCHED <br/>TECHNICAL RIGOR.</h2>
            <p className="text-xl text-white/50 max-w-xl">We don't just implement software. We re-engineer your operational reality.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <Cloud className="w-8 h-8 text-violet-400" />,
                title: "Salesforce Implementation",
                desc: "Architecture and deployment of complex Salesforce orgs. Custom Apex, Lightning Web Components, and scalable data models."
              },
              {
                icon: <Settings2 className="w-8 h-8 text-violet-400" />,
                title: "MuleSoft Integration",
                desc: "API-led connectivity. We connect your entire enterprise stack into a cohesive, real-time data ecosystem."
              },
              {
                icon: <CheckCircle2 className="w-8 h-8 text-violet-400" />,
                title: "Process Automation",
                desc: "Replacing fragile manual workflows with robust, deterministic automated processes across your business."
              },
              {
                icon: <BarChart3 className="w-8 h-8 text-violet-400" />,
                title: "Data & Analytics",
                desc: "Turning raw system data into executive intelligence. Tableau and CRM Analytics deployments that drive decisions."
              }
            ].map((service, i) => (
              <div key={i} className="group relative bg-[#111] p-10 rounded-xl border border-white/5 hover:border-violet-500/50 transition-colors overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="mb-6 bg-black/50 w-16 h-16 rounded-lg border border-white/10 flex items-center justify-center group-hover:border-violet-500/50 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-white/60 leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 bg-[#0a0a0a] border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-24">
            <div className="flex flex-col justify-between h-full">
              <div className="mb-8">
                <div className="flex text-violet-500 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-3xl md:text-4xl font-medium leading-tight tracking-tight mb-8 text-white/90">
                  "They didn't just write code. They fundamentally understood our business logic and translated it into a system that scales."
                </blockquote>
              </div>
              <div>
                <div className="font-bold text-lg">Sarah Jenkins</div>
                <div className="text-white/50 font-mono text-sm uppercase mt-1">CTO, FinTech Global</div>
              </div>
            </div>

            <div className="flex flex-col justify-between h-full">
              <div className="mb-8">
                <div className="flex text-violet-500 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-3xl md:text-4xl font-medium leading-tight tracking-tight mb-8 text-white/90">
                  "The most technically proficient consulting team we've ever hired. Their MuleSoft architecture saved us months of development."
                </blockquote>
              </div>
              <div>
                <div className="font-bold text-lg">Marcus Chen</div>
                <div className="text-white/50 font-mono text-sm uppercase mt-1">VP Engineering, HealthCorp</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-40 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-violet-900/20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-violet-600/30 blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-8">READY TO <br/>BUILD?</h2>
          <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-2xl mx-auto">
            Stop patching legacy systems. Let's architect the future of your enterprise operations.
          </p>
          <button className="px-10 py-5 bg-white text-black hover:bg-white/90 font-black text-lg uppercase tracking-wider rounded transition-transform hover:scale-105 active:scale-95">
            Start the Conversation
          </button>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-8 px-6 border-t border-white/10 bg-black text-center text-white/40 text-sm font-mono uppercase">
        © {new Date().getFullYear()} CloudCampers Consulting. All rights reserved.
      </footer>
    </div>
  );
}
