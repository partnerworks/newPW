import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, FileText, Users, Activity, ArrowRight, CheckCircle2, ChevronRight, Clock } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    document.title = "PartnerWorks | UK Cybersecurity Compliance Experts";
    
    // Handle hash scrolling if navigating back with a hash
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <main className="flex-grow pt-16">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-paper">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#FBB531_0%,_transparent_25%),radial-gradient(circle_at_bottom_left,_#60B9D9_0%,_transparent_25%),radial-gradient(circle_at_bottom_right,_#C48DB9_0%,_transparent_25%)] opacity-15" />
        
        {/* Faded Background Image */}
        <div 
          className="absolute top-0 right-0 w-full md:w-[55%] h-full opacity-20 md:opacity-40 pointer-events-none" 
          style={{ 
            maskImage: 'linear-gradient(to left, black 30%, transparent 100%)', 
            WebkitMaskImage: '-webkit-linear-gradient(right, black 30%, transparent 100%)' 
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200&auto=format&fit=crop"
            alt="Smiling professional woman in office"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface border border-surface-dark text-xs font-medium text-ink/70 mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              Cybersecurity Compliance Experts
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] mb-6">
              Compliance as a <br className="hidden md:block" />
              <span className="text-ink/50">business advantage.</span>
            </h1>
            <p className="text-base md:text-lg text-ink/70 max-w-xl mb-10 leading-relaxed">
              Expert guidance for ISO 27001 and ISO 42001 certification. We build robust, scalable security frameworks tailored for modern UK businesses, turning compliance from a hurdle into a growth driver.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="https://calendly.com/chrishyatt/45min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gold text-ink px-6 py-3 rounded-md text-sm font-semibold hover:bg-gold/90 transition-all group shadow-md"
              >
                Schedule a Discovery Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md text-sm font-medium text-ink/70 hover:bg-surface transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore our services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-paper">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 md:flex md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-xs font-bold tracking-widest uppercase text-ink/50 mb-3">Our Expertise</h2>
              <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">Specialised compliance services.</h3>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <ShieldCheck className="w-6 h-6" />,
                title: 'ISO 27001 Implementation',
                description: 'End-to-end guidance to achieve and maintain the global standard for information security management.',
                color: 'bg-gold text-ink',
              },
              {
                icon: <Activity className="w-6 h-6" />,
                title: 'ISO 42001 (AI) Compliance',
                description: 'Pioneering frameworks for the safe, secure, and responsible use of Artificial Intelligence in your organisation.',
                color: 'bg-blue text-ink',
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: 'Virtual CISO (vCISO)',
                description: 'Executive-level security leadership on a fractional basis, aligning security strategy with business goals.',
                color: 'bg-purple text-ink',
              },
              {
                icon: <FileText className="w-6 h-6" />,
                title: 'Gap Assessments',
                description: 'Comprehensive reviews of your current security posture against industry standards to identify vulnerabilities.',
                color: 'bg-gray-brand text-ink',
              },
              {
                icon: <CheckCircle2 className="w-6 h-6" />,
                title: 'Internal Audits',
                description: 'Independent, rigorous audits to ensure ongoing compliance and prepare your team for external certification.',
                color: 'bg-ink text-paper',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow group ${service.color}`}
              >
                <div className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                  {service.icon}
                </div>
                <h4 className="text-lg font-semibold mb-3">{service.title}</h4>
                <p className="text-sm opacity-80 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-24 md:py-32 bg-ink text-paper">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-xs font-bold tracking-widest uppercase text-gold mb-3">Why PartnerWorks</h2>
              <h3 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
                We don't just tick boxes. We build resilience.
              </h3>
              <p className="text-base text-paper/70 leading-relaxed mb-8">
                Many consultancies treat compliance as a paperwork exercise. We view it as a strategic asset. Our approach integrates seamlessly with your operations, minimising friction while maximising security.
              </p>
              
              <div className="space-y-4">
                {[
                  { title: 'Business-First Approach', desc: 'Security controls designed to enable, not hinder, your operations.', color: 'bg-gold text-ink' },
                  { title: 'Deep Technical Expertise', desc: 'We understand the technology stack, not just the policy requirements.', color: 'bg-blue text-ink' },
                  { title: 'Transparent Pricing', desc: 'Clear, predictable costs with no hidden fees or surprise invoices.', color: 'bg-purple text-ink' }
                ].map((item, i) => (
                  <div key={i} className={`flex gap-4 p-6 rounded-xl shadow-sm ${item.color}`}>
                    <div>
                      <h5 className="text-base font-semibold mb-1">{item.title}</h5>
                      <p className="text-sm opacity-90">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gray-brand rounded-2xl transform rotate-3 scale-105 opacity-20" />
              <div className="relative bg-surface text-ink p-10 md:p-12 rounded-2xl shadow-xl">
                <ShieldCheck className="w-10 h-10 text-gold mb-8" />
                <blockquote className="text-xl md:text-2xl font-medium leading-snug mb-8">
                  "PartnerWorks transformed our approach to ISO 27001. They made a complex, daunting process feel structured, manageable, and ultimately highly valuable to our business."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface-dark/50" />
                  <div>
                    <div className="text-sm font-semibold">Daniel N</div>
                    <div className="text-xs text-ink/60">Aztek Global</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <h2 className="text-xs font-bold tracking-widest uppercase text-ink/50 mb-3">Our Methodology</h2>
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">A structured path to certification.</h3>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue/10 text-blue font-medium text-sm">
              <Clock className="w-4 h-4" />
              Achieve certification in a 6 to 12 week period
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 relative">
            {[
              { step: '01', duration: 'Weeks 1-2', title: 'Discovery', desc: 'We assess your current posture and define the scope of your compliance journey.', color: 'bg-gold text-ink' },
              { step: '02', duration: 'Weeks 3-8', title: 'Remediation', desc: 'We help you implement the necessary controls, policies, and technical safeguards.', color: 'bg-blue text-ink' },
              { step: '03', duration: 'Weeks 9-10', title: 'Audit Prep', desc: 'Rigorous internal audits and management reviews to ensure you are fully prepared.', color: 'bg-purple text-ink' },
              { step: '04', duration: 'Weeks 11-12', title: 'Certification', desc: 'We stand by your side during the external audit to guarantee a successful outcome.', color: 'bg-gray-brand text-ink' }
            ].map((phase, i) => (
              <div key={i} className={`relative z-10 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow ${phase.color}`}>
                <div className="flex items-center justify-between mb-6">
                  <div className="text-3xl font-bold opacity-80">
                    {phase.step}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider bg-paper/50 px-3 py-1.5 rounded-md text-ink">
                    {phase.duration}
                  </div>
                </div>
                <h4 className="text-xl font-semibold mb-3">{phase.title}</h4>
                <p className="text-sm opacity-90 leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations Section */}
      <section className="py-16 bg-white border-y border-surface-dark/30">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm font-semibold text-ink/40 uppercase tracking-widest mb-10">
            Certified Expertise
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
            <div className="relative group">
              <div className="absolute inset-0 bg-surface rounded-lg animate-pulse -z-10 group-hover:hidden"></div>
              <img 
                src="/cissp-logo.svg" 
                alt="CISSP Certified" 
                className="h-20 md:h-24 object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                onError={(e) => { e.currentTarget.src = "https://placehold.co/200x80/f8f9fa/a1a1aa?text=CISSP+Logo+Here" }}
              />
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-surface rounded-lg animate-pulse -z-10 group-hover:hidden"></div>
              <img 
                src="/iso27001-logo.svg" 
                alt="PECB ISO/IEC 27001 Lead Implementer" 
                className="h-20 md:h-24 object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                onError={(e) => { e.currentTarget.src = "https://placehold.co/200x80/f8f9fa/a1a1aa?text=ISO+27001+Logo+Here" }}
              />
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-surface rounded-lg animate-pulse -z-10 group-hover:hidden"></div>
              <img 
                src="/iso42001-logo.svg" 
                alt="PECB ISO/IEC 42001 Lead Implementer" 
                className="h-20 md:h-24 object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                onError={(e) => { e.currentTarget.src = "https://placehold.co/200x80/f8f9fa/a1a1aa?text=ISO+42001+Logo+Here" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section id="insights" className="py-24 bg-paper">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 md:flex md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-xs font-bold tracking-widest uppercase text-ink/50 mb-3">Insights & Guides</h2>
              <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">Expert perspectives on compliance.</h3>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/iso-42001-guide" className="group block bg-surface p-8 rounded-xl border border-surface-dark shadow-sm hover:shadow-md transition-all">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue/10 text-blue text-xs font-bold uppercase tracking-wider mb-6">
                Comprehensive Guide
              </div>
              <h4 className="text-xl font-semibold mb-4 group-hover:text-blue transition-colors">ISO 42001 Implementation: The Complete Guide (2026)</h4>
              <p className="text-sm text-ink/70 leading-relaxed mb-6">
                How to build an AI Management System that satisfies regulators, wins customer trust, and actually works in practice — not just on paper.
              </p>
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-ink mt-auto">
                Read the guide <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link to="/iso-27001-guide" className="group block bg-surface p-8 rounded-xl border border-surface-dark shadow-sm hover:shadow-md transition-all">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gold/20 text-gold-dark text-xs font-bold uppercase tracking-wider mb-6">
                Comprehensive Guide
              </div>
              <h4 className="text-xl font-semibold mb-4 group-hover:text-gold-dark transition-colors">ISO 27001 Implementation: The Complete Guide (2026)</h4>
              <p className="text-sm text-ink/70 leading-relaxed mb-6">
                How to build an Information Security Management System that passes certification, wins contracts, and protects your business.
              </p>
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-ink mt-auto">
                Read the guide <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link to="/cyber-essentials-guide" className="group block bg-surface p-8 rounded-xl border border-surface-dark shadow-sm hover:shadow-md transition-all">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple/10 text-purple text-xs font-bold uppercase tracking-wider mb-6">
                Comprehensive Guide
              </div>
              <h4 className="text-xl font-semibold mb-4 group-hover:text-purple transition-colors">Cyber Essentials & Plus: The Complete Guide (2026)</h4>
              <p className="text-sm text-ink/70 leading-relaxed mb-6">
                Everything you need to know about the UK government's baseline cybersecurity certification — what it covers and how to pass.
              </p>
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-ink mt-auto">
                Read the guide <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden bg-surface-dark text-ink">
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">Ready to discuss your compliance requirements?</h2>
          <p className="text-base md:text-lg text-ink/80 mb-10 max-w-xl mx-auto font-medium">
            Book a free, no-obligation discovery call to discuss your compliance goals and see how PartnerWorks can help you achieve them.
          </p>
          <a
            href="https://calendly.com/chrishyatt/45min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-ink text-paper px-8 py-4 rounded-md text-sm font-semibold hover:bg-ink/90 transition-all group shadow-lg"
          >
            Schedule a Discovery Call
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </main>
  );
}
