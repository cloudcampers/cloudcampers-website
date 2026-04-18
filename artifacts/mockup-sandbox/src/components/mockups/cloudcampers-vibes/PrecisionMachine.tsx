import React from 'react';
import { ArrowRight, ChevronRight, Activity, Database, Workflow, BarChart3, Quote } from 'lucide-react';

export default function PrecisionMachine() {
  return (
    <div className="min-h-screen bg-white text-[#111111] font-sans selection:bg-[#0057FF] selection:text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="font-bold text-xl tracking-tight">CloudCampers.</div>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-[#6B7280]">
          <a href="#" className="hover:text-[#111111] transition-colors">Services</a>
          <a href="#" className="hover:text-[#111111] transition-colors">Case Studies</a>
          <a href="#" className="hover:text-[#111111] transition-colors">Company</a>
          <a href="#" className="text-[#0057FF] hover:text-blue-800 transition-colors">Contact</a>
        </div>
      </nav>

      <hr className="border-[#E5E7EB]" />

      {/* Hero Section */}
      <section className="px-8 py-32 max-w-7xl mx-auto flex flex-col items-start">
        <div className="inline-flex items-center space-x-2 text-sm font-semibold tracking-wide text-[#0057FF] uppercase mb-8">
          <span className="w-8 h-[1px] bg-[#0057FF]"></span>
          <span>Enterprise Systems Architecture</span>
        </div>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[1.0] mb-8 max-w-5xl text-[#111111]">
          Surgical precision for complex systems.
        </h1>
        <p className="text-xl md:text-2xl text-[#6B7280] max-w-2xl leading-relaxed mb-12">
          We architect, implement, and optimize Salesforce and MuleSoft environments for enterprises that demand absolute reliability.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="bg-[#0057FF] hover:bg-blue-700 text-white px-8 py-4 text-sm font-semibold transition-colors flex items-center gap-2 w-full sm:w-auto justify-center">
            Schedule Assessment <ArrowRight className="w-4 h-4" />
          </button>
          <button className="bg-white border border-[#E5E7EB] hover:border-[#111111] text-[#111111] px-8 py-4 text-sm font-semibold transition-colors flex items-center gap-2 w-full sm:w-auto justify-center">
            View Capabilities
          </button>
        </div>
      </section>

      <hr className="border-[#E5E7EB]" />

      {/* Stats Section */}
      <section className="px-8 py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {[
            { value: "200+", label: "Projects Delivered" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "50+", label: "Enterprise Clients" },
            { value: "12+", label: "Years Experience" }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-4">
              <div className="text-6xl md:text-7xl font-bold tracking-tighter text-[#111111]">{stat.value}</div>
              <div className="text-xs font-bold tracking-widest text-[#6B7280] uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-[#E5E7EB]" />

      {/* Services Section */}
      <section className="px-8 py-32 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-[#111111]">Core Capabilities</h2>
          <p className="text-lg text-[#6B7280] max-w-xl">Focused expertise across the entire Salesforce and MuleSoft ecosystem.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Salesforce Implementation",
              desc: "End-to-end architecture and deployment of Sales, Service, and Revenue clouds.",
              icon: <Database className="w-6 h-6 mb-8 text-[#0057FF]" />
            },
            {
              title: "MuleSoft Integration",
              desc: "API-led connectivity strategies to unify your disparate enterprise systems.",
              icon: <Workflow className="w-6 h-6 mb-8 text-[#0057FF]" />
            },
            {
              title: "Process Automation",
              desc: "Eliminating manual overhead through intelligent workflow design.",
              icon: <Activity className="w-6 h-6 mb-8 text-[#0057FF]" />
            },
            {
              title: "Analytics & Intelligence",
              desc: "Transforming raw system data into actionable executive insights.",
              icon: <BarChart3 className="w-6 h-6 mb-8 text-[#0057FF]" />
            }
          ].map((service, i) => (
            <div key={i} className="p-10 border border-[#E5E7EB] bg-white hover:border-[#111111] transition-colors group cursor-pointer">
              {service.icon}
              <h3 className="text-xl font-bold mb-3 text-[#111111]">{service.title}</h3>
              <p className="text-[#6B7280] mb-8 max-w-sm leading-relaxed">{service.desc}</p>
              <div className="flex items-center text-sm font-semibold text-[#0057FF] group-hover:text-[#111111] transition-colors">
                Explore service <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-[#E5E7EB]" />

      {/* Testimonials */}
      <section className="px-8 py-32 max-w-7xl mx-auto bg-white">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <div className="flex flex-col justify-between h-full">
            <Quote className="w-8 h-8 text-[#E5E7EB] mb-8" />
            <p className="text-2xl md:text-3xl font-medium tracking-tight leading-snug mb-12 text-[#111111]">
              "CloudCampers didn't just write code; they re-architected our entire data model. The result was a 40% reduction in system latency."
            </p>
            <div>
              <div className="font-bold text-[#111111]">Sarah Jenkins</div>
              <div className="text-sm text-[#6B7280]">CTO, Global Logistics Corp</div>
            </div>
          </div>
          <div className="flex flex-col justify-between h-full">
            <Quote className="w-8 h-8 text-[#E5E7EB] mb-8" />
            <p className="text-2xl md:text-3xl font-medium tracking-tight leading-snug mb-12 text-[#111111]">
              "Their MuleSoft deployment was flawless. Delivered precisely on schedule with zero disruption to our existing operations."
            </p>
            <div>
              <div className="font-bold text-[#111111]">Marcus Chen</div>
              <div className="text-sm text-[#6B7280]">VP Engineering, FinTech Solutions</div>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-[#E5E7EB]" />

      {/* Footer CTA */}
      <section className="px-8 py-32 max-w-7xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 max-w-3xl text-[#111111]">
          Ready for operational excellence?
        </h2>
        <p className="text-xl text-[#6B7280] mb-12 max-w-xl">
          Engage our architects to review your current infrastructure and identify immediate optimization opportunities.
        </p>
        <button className="bg-[#111111] hover:bg-black text-white px-10 py-5 text-sm font-bold tracking-wide uppercase transition-colors flex items-center gap-2">
          Start the Conversation
        </button>
      </section>

      <hr className="border-[#E5E7EB]" />

      {/* Footer */}
      <footer className="px-8 py-12 text-sm text-[#6B7280] flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
        <div>© {new Date().getFullYear()} CloudCampers. All rights reserved.</div>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-[#111111] transition-colors">Privacy</a>
          <a href="#" className="hover:text-[#111111] transition-colors">Terms</a>
          <a href="#" className="hover:text-[#111111] transition-colors">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}