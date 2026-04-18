import React from "react";
import { ArrowRight, Cloud, Database, BarChart, Settings, Quote, CheckCircle2 } from "lucide-react";

export function SoftAuthority() {
  return (
    <div className="min-h-screen bg-[#F8F7FF] text-[#1e1b4b] font-['DM_Sans'] overflow-x-hidden selection:bg-[#5B4FCF] selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#F8F7FF]/80 backdrop-blur-md z-50 border-b border-[#5B4FCF]/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#5B4FCF] flex items-center justify-center">
              <Cloud className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight">CloudCampers</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-[#5B4FCF] transition-colors">Services</a>
            <a href="#" className="hover:text-[#5B4FCF] transition-colors">Case Studies</a>
            <a href="#" className="hover:text-[#5B4FCF] transition-colors">About</a>
            <button className="bg-[#5B4FCF] text-white px-5 py-2.5 rounded-full hover:bg-[#4a3ebd] transition-colors shadow-sm">
              Book a Consultation
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-48 lg:pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F0EFFF] text-[#5B4FCF] text-sm font-semibold mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5B4FCF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5B4FCF]"></span>
            </span>
            Salesforce & MuleSoft Experts
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-slate-900">
            Enterprise systems, <br />
            <span className="text-[#5B4FCF]">perfectly aligned.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            We architect, implement, and optimize your Salesforce and MuleSoft ecosystems. Building scalable foundations for the next generation of enterprise growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-[#5B4FCF] text-white rounded-full font-medium hover:bg-[#4a3ebd] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#5B4FCF]/25 flex items-center justify-center gap-2">
              Start Your Project <ArrowRight className="w-4 h-4" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-[#5B4FCF] rounded-full font-medium border border-[#5B4FCF]/20 hover:border-[#5B4FCF] hover:bg-slate-50 transition-all">
              View Case Studies
            </button>
          </div>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#5B4FCF]/10 to-transparent rounded-full blur-3xl -z-10"></div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-[#5B4FCF]/10 bg-white/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center relative z-10">
            {[
              { label: "Projects Delivered", value: "200+" },
              { label: "Client Satisfaction", value: "98%" },
              { label: "Enterprise Clients", value: "50+" },
              { label: "Years Experience", value: "12+" }
            ].map((stat, i) => (
              <div key={i} className="group relative">
                <div className="text-4xl md:text-5xl font-bold text-[#5B4FCF] mb-2">{stat.value}</div>
                <div className="h-1 w-12 bg-[#5B4FCF]/20 mx-auto rounded-full mb-3 overflow-hidden relative">
                   <div className="absolute inset-y-0 left-0 bg-[#5B4FCF] w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
                </div>
                <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Capabilities designed for scale</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">From complex integrations to custom architecture, we deliver solutions that drive measurable business outcomes.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Salesforce Implementation",
                desc: "End-to-end implementation and optimization of Sales Cloud, Service Cloud, and custom Lightning applications.",
                icon: Cloud,
                tag: "Architecture"
              },
              {
                title: "MuleSoft Integration",
                desc: "Seamlessly connect your enterprise applications, data, and devices with robust API-led connectivity.",
                icon: Database,
                tag: "Integration"
              },
              {
                title: "Process Automation",
                desc: "Streamline operations with intelligent workflows, reducing manual effort and eliminating data silos.",
                icon: Settings,
                tag: "Optimization"
              },
              {
                title: "Analytics & Reporting",
                desc: "Transform complex data into actionable insights with Tableau and CRM Analytics implementations.",
                icon: BarChart,
                tag: "Intelligence"
              }
            ].map((service, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_-4px_rgba(91,79,207,0.05)] border border-[#5B4FCF]/5 hover:shadow-[0_8px_30px_-4px_rgba(91,79,207,0.12)] transition-all group cursor-pointer hover:-translate-y-1">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#F0EFFF] flex items-center justify-center text-[#5B4FCF] group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 bg-[#F8F7FF] text-[#5B4FCF] text-xs font-semibold rounded-full border border-[#5B4FCF]/10">
                    {service.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "CloudCampers transformed our disjointed systems into a unified source of truth. Their approach to MuleSoft integration was methodical and incredibly effective.",
                author: "Sarah Jenkins",
                role: "CTO, TechFlow Global"
              },
              {
                quote: "The cleanest Salesforce implementation I've seen in my 15-year career. They don't just build what you ask for, they architect what you actually need.",
                author: "Marcus Chen",
                role: "VP Operations, Nexus Corp"
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-[#F0EFFF]/50 rounded-3xl p-10 relative">
                <Quote className="w-10 h-10 text-[#5B4FCF]/20 absolute top-8 left-8" />
                <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-medium mb-8 relative z-10 pt-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#5B4FCF] to-[#8176E5] text-white flex items-center justify-center font-bold text-lg">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{testimonial.author}</div>
                    <div className="text-sm text-[#5B4FCF] font-medium">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#5B4FCF]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10 bg-white/10 backdrop-blur-md rounded-3xl p-12 md:p-20 border border-white/20 shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Ready to modernize your infrastructure?</h2>
          <p className="text-indigo-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Join the industry leaders who trust CloudCampers to architect and manage their most critical systems.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-[#5B4FCF] rounded-full font-bold hover:bg-slate-50 transition-all shadow-lg transform hover:-translate-y-0.5">
              Schedule a Discovery Call
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent text-white border border-white/30 rounded-full font-medium hover:bg-white/10 transition-all">
              Contact our Sales Team
            </button>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-indigo-100">
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-white" /> Free initial consultation</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-white" /> Custom roadmap</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-white" /> No commitment</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-sm text-slate-500 bg-[#F8F7FF] border-t border-[#5B4FCF]/10">
        <p>© {new Date().getFullYear()} CloudCampers Consulting. All rights reserved.</p>
      </footer>
    </div>
  );
}
