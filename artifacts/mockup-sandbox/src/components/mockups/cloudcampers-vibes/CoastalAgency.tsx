import React from 'react';
import { ArrowRight, BarChart3, Cloud, Settings, Terminal, Quote } from 'lucide-react';

export default function CoastalAgency() {
  return (
    <div className="min-h-screen font-sans text-slate-800" style={{ fontFamily: '"Inter", "Outfit", sans-serif' }}>
      
      {/* Navigation (simplified) */}
      <nav className="absolute top-0 w-full z-10 px-8 py-6 flex justify-between items-center text-white border-b border-white/10">
        <div className="text-xl font-medium tracking-wide flex items-center gap-2">
          <Cloud className="w-6 h-6 text-[#0D9488]" />
          CloudCampers
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium opacity-90">
          <a href="#" className="hover:text-[#0D9488] transition-colors">Expertise</a>
          <a href="#" className="hover:text-[#0D9488] transition-colors">Work</a>
          <a href="#" className="hover:text-[#0D9488] transition-colors">Agency</a>
        </div>
        <button className="bg-white/10 hover:bg-white/20 px-5 py-2.5 rounded text-sm font-medium transition-all">
          Contact Us
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-8 flex flex-col justify-center min-h-[85vh]" style={{ backgroundColor: '#1A2B3C' }}>
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <h1 className="text-5xl md:text-7xl font-semibold text-white leading-[1.1] tracking-tight">
            Digital architecture <br/>
            <span className="text-[#0D9488]">designed for impact.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
            We architect, implement, and refine Salesforce and MuleSoft ecosystems for ambitious organizations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button className="bg-[#0D9488] hover:bg-[#0F9B8E] text-white px-8 py-4 rounded-sm text-sm font-medium tracking-wide transition-colors flex items-center justify-center gap-2">
              Start a Project <ArrowRight className="w-4 h-4" />
            </button>
            <button className="bg-transparent border border-white/20 hover:border-white/50 text-white px-8 py-4 rounded-sm text-sm font-medium tracking-wide transition-colors">
              Our Methodology
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-8 border-b border-slate-200" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {[
            { label: 'Successful Projects', value: '200+' },
            { label: 'Client Satisfaction', value: '98%' },
            { label: 'Enterprise Clients', value: '50+' },
            { label: 'Years of Excellence', value: '12+' }
          ].map((stat, i) => (
            <div key={i} className="text-center md:text-left border-l border-slate-200 pl-8">
              <div className="text-4xl md:text-5xl font-light text-[#0D9488] mb-2">{stat.value}</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-8" style={{ backgroundColor: '#EEF1F5' }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-20 max-w-2xl">
            <h2 className="text-4xl font-semibold text-slate-800 mb-6 tracking-tight">Capabilities</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We bring technical precision and thoughtful design to every layer of your operational stack.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Salesforce Implementation',
                desc: 'Tailored CRM architecture designed around your human processes, not the other way around.',
                icon: Cloud
              },
              {
                title: 'MuleSoft Integration',
                desc: 'Seamless data flow across your entire application ecosystem with robust API-led connectivity.',
                icon: Settings
              },
              {
                title: 'Process Automation',
                desc: 'Intelligent workflows that eliminate friction and allow your team to focus on meaningful work.',
                icon: Terminal
              },
              {
                title: 'Analytics & Reporting',
                desc: 'Clear, actionable intelligence extracted from complex data structures for leadership clarity.',
                icon: BarChart3
              }
            ].map((service, i) => (
              <div 
                key={i} 
                className="bg-white p-10 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300 shadow-sm"
                style={{ border: '1px solid #D1D5DB', borderLeft: '3px solid #0D9488' }}
              >
                <service.icon className="w-8 h-8 text-[#0D9488] mb-6 opacity-80" />
                <h3 className="text-2xl font-medium text-slate-800 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                  {service.desc}
                </p>
                <a href="#" className="inline-flex items-center text-sm font-semibold text-[#0D9488] group-hover:gap-3 gap-2 transition-all uppercase tracking-wider">
                  Explore <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-8 border-t border-slate-200" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          {[
            {
              quote: "CloudCampers didn't just install software; they redesigned how our entire revenue team collaborates. The clarity they brought to our Salesforce instance is remarkable.",
              author: "Sarah Jenkins",
              role: "VP of Revenue, TechFlow"
            },
            {
              quote: "Their MuleSoft architecture gave us a unified view of our customer for the first time in our history. They are true craftsmen in a sea of generic implementers.",
              author: "Marcus Chen",
              role: "CTO, GlobalRetail"
            }
          ].map((testimonial, i) => (
            <div key={i} className="relative">
              <Quote className="w-16 h-16 text-[#0D9488] opacity-10 absolute -top-6 -left-6" />
              <blockquote className="relative z-10">
                <p className="text-2xl font-light text-slate-700 leading-relaxed mb-8">
                  "{testimonial.quote}"
                </p>
                <footer>
                  <div className="font-semibold text-slate-900">{testimonial.author}</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wide mt-1">{testimonial.role}</div>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 text-center" style={{ backgroundColor: '#1A2B3C' }}>
        <div className="max-w-3xl mx-auto space-y-10">
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
            Ready to elevate your operations?
          </h2>
          <p className="text-xl text-slate-300 font-light">
            Let's discuss how thoughtful architecture can transform your business.
          </p>
          <button className="bg-[#0D9488] hover:bg-[#0F9B8E] text-white px-10 py-5 rounded-sm text-sm font-medium tracking-wider uppercase transition-colors inline-flex items-center gap-3">
            Schedule a Consultation <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
      
      {/* Minimal Footer */}
      <footer className="py-12 px-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6" style={{ backgroundColor: '#1A2B3C' }}>
        <div className="flex items-center gap-2 text-white">
          <Cloud className="w-5 h-5 text-[#0D9488]" />
          <span className="font-medium tracking-wide">CloudCampers</span>
        </div>
        <div className="text-sm text-slate-400">
          © {new Date().getFullYear()} CloudCampers Consulting. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
