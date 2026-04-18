import React from 'react';
import { ArrowRight, CheckCircle2, BarChart3, Settings, Users, Quote } from 'lucide-react';

export default function TrustedAdvisor() {
  return (
    <div className="min-h-screen font-sans text-[#1C1C1E]" style={{ backgroundColor: '#FAF8F4' }}>
      {/* Header/Nav */}
      <header className="px-8 py-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-2xl font-bold font-['Playfair_Display'] tracking-tight text-[#2D6A4F]">
          CloudCampers
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-[#6B7280]">
          <a href="#" className="hover:text-[#1C1C1E] transition-colors">Expertise</a>
          <a href="#" className="hover:text-[#1C1C1E] transition-colors">Case Studies</a>
          <a href="#" className="hover:text-[#1C1C1E] transition-colors">Our Team</a>
          <a href="#" className="hover:text-[#1C1C1E] transition-colors">Insights</a>
        </nav>
        <button className="px-5 py-2.5 bg-[#2D6A4F] text-white text-sm font-medium rounded hover:bg-[#1B4332] transition-colors">
          Schedule Consultation
        </button>
      </header>

      {/* Hero Section */}
      <section className="px-8 pt-24 pb-32 max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-['Playfair_Display'] font-semibold leading-tight mb-8 text-[#1C1C1E]">
          Strategic digital transformation.<br />
          <span className="text-[#2D6A4F] italic font-normal">Expertly delivered.</span>
        </h1>
        <p className="text-xl md:text-2xl text-[#6B7280] mb-12 max-w-3xl mx-auto font-light leading-relaxed">
          We partner with ambitious organizations to architect and implement enterprise-grade Salesforce and MuleSoft solutions that drive measurable business value.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-4 bg-[#2D6A4F] text-white font-medium rounded text-lg hover:bg-[#1B4332] transition-colors flex items-center gap-2">
            Discuss Your Initiative <ArrowRight className="w-5 h-5" />
          </button>
          <button className="px-8 py-4 bg-transparent border border-[#D1D5DB] text-[#1C1C1E] font-medium rounded text-lg hover:bg-[#F3F4F6] transition-colors">
            Read Our Case Studies
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-[#E5E7EB] bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 divide-x-0 md:divide-x divide-[#E5E7EB]">
            <div className="text-center md:px-8">
              <div className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold text-[#2D6A4F] mb-2">200+</div>
              <div className="text-sm uppercase tracking-widest text-[#6B7280] font-medium">Projects Delivered</div>
            </div>
            <div className="text-center md:px-8">
              <div className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold text-[#2D6A4F] mb-2">98%</div>
              <div className="text-sm uppercase tracking-widest text-[#6B7280] font-medium">Client Satisfaction</div>
            </div>
            <div className="text-center md:px-8">
              <div className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold text-[#2D6A4F] mb-2">50+</div>
              <div className="text-sm uppercase tracking-widest text-[#6B7280] font-medium">Enterprise Clients</div>
            </div>
            <div className="text-center md:px-8">
              <div className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold text-[#2D6A4F] mb-2">12+</div>
              <div className="text-sm uppercase tracking-widest text-[#6B7280] font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-semibold text-[#1C1C1E] mb-6">Our Capabilities</h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto font-light">
            Comprehensive advisory and implementation services across the Salesforce ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Salesforce Implementation",
              desc: "End-to-end deployment of Sales Cloud, Service Cloud, and industry-specific solutions tailored to your complex operational requirements.",
              icon: <CheckCircle2 className="w-8 h-8 text-[#2D6A4F]" />
            },
            {
              title: "MuleSoft Integration",
              desc: "Connecting disparate systems into a unified architecture. We build robust, scalable API networks that accelerate data flow.",
              icon: <Settings className="w-8 h-8 text-[#2D6A4F]" />
            },
            {
              title: "Process Automation",
              desc: "Streamlining workflows and eliminating manual redundancies through intelligent automation and refined business logic.",
              icon: <BarChart3 className="w-8 h-8 text-[#2D6A4F]" />
            },
            {
              title: "Data & Analytics",
              desc: "Transforming raw data into actionable executive intelligence with Tableau and custom CRM reporting frameworks.",
              icon: <Users className="w-8 h-8 text-[#2D6A4F]" />
            }
          ].map((service, i) => (
            <div key={i} className="bg-white p-10 rounded border border-[#E5E7EB] hover:border-[#2D6A4F] transition-colors group">
              <div className="mb-6 bg-[#F3F4F6] w-16 h-16 rounded flex items-center justify-center group-hover:bg-[#E8F3ED] transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-['Playfair_Display'] font-semibold mb-4 text-[#1C1C1E]">{service.title}</h3>
              <p className="text-[#6B7280] leading-relaxed text-lg font-light">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#1C1C1E] text-white py-32 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-semibold mb-6">Trusted by Industry Leaders</h2>
            <div className="w-16 h-1 bg-[#2D6A4F] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div className="relative">
              <Quote className="absolute -top-6 -left-8 w-16 h-16 text-[#374151] opacity-50" />
              <p className="text-xl md:text-2xl font-light leading-relaxed mb-8 relative z-10 font-['Playfair_Display'] italic">
                "CloudCampers didn't just implement software; they re-architected how our sales organization operates. Their strategic foresight is unmatched."
              </p>
              <div>
                <div className="font-semibold text-lg">Sarah Jenkins</div>
                <div className="text-[#9CA3AF]">VP of Global Sales, TechNexus</div>
              </div>
            </div>
            <div className="relative">
              <Quote className="absolute -top-6 -left-8 w-16 h-16 text-[#374151] opacity-50" />
              <p className="text-xl md:text-2xl font-light leading-relaxed mb-8 relative z-10 font-['Playfair_Display'] italic">
                "The MuleSoft integration was complex, involving legacy systems we thought were untouchable. The CloudCampers team navigated it with absolute precision."
              </p>
              <div>
                <div className="font-semibold text-lg">Marcus Chen</div>
                <div className="text-[#9CA3AF]">Chief Information Officer, Horizon Finance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-32 px-8 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-semibold text-[#1C1C1E] mb-8">
          Ready to elevate your operations?
        </h2>
        <p className="text-xl text-[#6B7280] mb-12 font-light">
          Connect with our senior partners to discuss how we can accelerate your digital transformation journey.
        </p>
        <button className="px-10 py-5 bg-[#2D6A4F] text-white font-medium rounded text-lg hover:bg-[#1B4332] transition-colors inline-flex items-center gap-2">
          Schedule a Consultation <ArrowRight className="w-5 h-5" />
        </button>
      </section>
      
      {/* Footer minimal */}
      <footer className="py-8 border-t border-[#E5E7EB] text-center text-[#6B7280] text-sm">
        <p>© {new Date().getFullYear()} CloudCampers Consulting. All rights reserved.</p>
      </footer>
    </div>
  );
}
