import React from 'react';
import { ArrowRight, BarChart3, Briefcase, Cpu, Quote, Workflow } from 'lucide-react';

export function ExecutiveSuite() {
  return (
    <div className="min-h-screen font-sans text-[#EDE8DF]" style={{ backgroundColor: '#101D2C' }}>
      {/* Navigation */}
      <nav className="border-b border-[#C9A84C]/20 px-8 py-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="font-['Playfair_Display'] text-2xl tracking-wide text-white">
            CloudCampers<span style={{ color: '#C9A84C' }}>.</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-[#EDE8DF]/80">
            <a href="#" className="hover:text-white transition-colors duration-300">Expertise</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Results</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Insights</a>
          </div>
          <button 
            className="px-6 py-2.5 text-sm uppercase tracking-widest border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#101D2C] transition-all duration-300"
          >
            Consultation
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-8 py-32 md:py-48 max-w-6xl mx-auto">
        <div className="max-w-4xl">
          <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl leading-tight text-white mb-8">
            Digital transformation for <br />
            <span style={{ color: '#C9A84C' }} className="italic">enterprise leaders.</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#EDE8DF]/80 leading-relaxed mb-12 max-w-2xl font-light">
            We architect and implement elite Salesforce and MuleSoft solutions for the world's most demanding organizations. Precision, discretion, and measurable impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button 
              className="px-8 py-4 bg-[#C9A84C] text-[#101D2C] text-sm uppercase tracking-widest font-semibold hover:bg-[#B8902A] transition-colors duration-300 flex items-center justify-center gap-3"
            >
              Partner With Us <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              className="px-8 py-4 border border-[#C9A84C]/30 text-white text-sm uppercase tracking-widest hover:border-[#C9A84C] transition-colors duration-300 flex items-center justify-center"
            >
              Review Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="w-full h-[1px] bg-[#C9A84C]/20" />

      {/* Stats Section */}
      <section className="px-8 py-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 divide-x divide-[#C9A84C]/20">
          <div className="pl-0 md:px-8 first:pl-0 flex flex-col items-center text-center">
            <div className="font-['Playfair_Display'] text-5xl text-[#C9A84C] mb-4">200+</div>
            <div className="text-sm uppercase tracking-widest text-[#EDE8DF]/70">Projects Delivered</div>
          </div>
          <div className="px-8 flex flex-col items-center text-center">
            <div className="font-['Playfair_Display'] text-5xl text-[#C9A84C] mb-4">98%</div>
            <div className="text-sm uppercase tracking-widest text-[#EDE8DF]/70">Client Satisfaction</div>
          </div>
          <div className="px-8 flex flex-col items-center text-center">
            <div className="font-['Playfair_Display'] text-5xl text-[#C9A84C] mb-4">50+</div>
            <div className="text-sm uppercase tracking-widest text-[#EDE8DF]/70">Enterprise Clients</div>
          </div>
          <div className="px-8 flex flex-col items-center text-center">
            <div className="font-['Playfair_Display'] text-5xl text-[#C9A84C] mb-4">12+</div>
            <div className="text-sm uppercase tracking-widest text-[#EDE8DF]/70">Years of Excellence</div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="w-full h-[1px] bg-[#C9A84C]/20" />

      {/* Services Section */}
      <section className="px-8 py-32 max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h2 className="font-['Playfair_Display'] text-4xl text-white">Our Disciplines</h2>
          <div className="hidden md:block w-32 h-[1px] bg-[#C9A84C]" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Salesforce Implementation",
              desc: "Architecting scalable CRM ecosystems that align precisely with complex corporate hierarchies and global operational requirements.",
              icon: <Briefcase className="w-8 h-8" />
            },
            {
              title: "MuleSoft Integration",
              desc: "Seamlessly connecting disparate legacy systems into a unified, secure data fabric that powers real-time enterprise intelligence.",
              icon: <Workflow className="w-8 h-8" />
            },
            {
              title: "Process Automation",
              desc: "Engineering intelligent workflows that eliminate friction, reduce risk, and accelerate decision-making at scale.",
              icon: <Cpu className="w-8 h-8" />
            },
            {
              title: "Analytics & Reporting",
              desc: "Distilling massive datasets into executive-grade dashboards that surface predictive insights and drive strategic action.",
              icon: <BarChart3 className="w-8 h-8" />
            }
          ].map((service, idx) => (
            <div 
              key={idx}
              className="p-10 border border-[#C9A84C]/30 hover:border-[#C9A84C] transition-colors duration-500 flex flex-col group"
              style={{ backgroundColor: '#162030' }}
            >
              <div className="text-[#C9A84C] mb-8 group-hover:scale-110 transition-transform duration-500 origin-left">
                {service.icon}
              </div>
              <h3 className="font-['Playfair_Display'] text-2xl text-white mb-4">{service.title}</h3>
              <p className="text-[#EDE8DF]/70 font-light leading-relaxed mb-8 flex-grow">
                {service.desc}
              </p>
              <div className="mt-auto flex items-center gap-2 text-sm uppercase tracking-widest text-[#C9A84C]">
                Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Separator */}
      <div className="w-full h-[1px] bg-[#C9A84C]/20" />

      {/* Testimonials */}
      <section className="px-8 py-32 max-w-6xl mx-auto">
        <h2 className="font-['Playfair_Display'] text-4xl text-center text-white mb-20">Client Perspectives</h2>
        
        <div className="grid md:grid-cols-2 gap-16 md:gap-8">
          {[
            {
              quote: "CloudCampers didn't just implement software; they restructured our global operational model. Their strategic foresight and technical execution are unparalleled.",
              author: "Sarah Jenkins",
              role: "Chief Operations Officer, Global Finance Corp"
            },
            {
              quote: "When dealing with multi-billion dollar integrations, you need partners who understand both the boardroom and the server room. They delivered flawlessly.",
              author: "Marcus Chen",
              role: "EVP of Technology, Apex Logistics"
            }
          ].map((testimonial, idx) => (
            <div key={idx} className="flex flex-col items-center text-center px-4">
              <Quote className="w-12 h-12 text-[#C9A84C]/30 mb-8" />
              <p className="font-['Playfair_Display'] text-2xl text-white italic leading-relaxed mb-8">
                "{testimonial.quote}"
              </p>
              <div>
                <div className="text-[#C9A84C] uppercase tracking-widest text-sm font-semibold mb-1">{testimonial.author}</div>
                <div className="text-[#EDE8DF]/60 text-sm">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-[#C9A84C]/20 px-8 py-32" style={{ backgroundColor: '#0D1B2A' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-white mb-8">
            Ready to elevate your enterprise?
          </h2>
          <p className="text-xl text-[#EDE8DF]/80 font-light mb-12">
            Schedule a confidential consultation to discuss your strategic objectives.
          </p>
          <button 
            className="px-10 py-5 bg-[#C9A84C] text-[#101D2C] text-sm uppercase tracking-widest font-semibold hover:bg-[#B8902A] transition-colors duration-300"
          >
            Initiate Engagement
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#C9A84C]/10 px-8 py-12 text-center text-sm text-[#EDE8DF]/50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div>&copy; {new Date().getFullYear()} CloudCampers Consulting. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-[#C9A84C] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#C9A84C] transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
