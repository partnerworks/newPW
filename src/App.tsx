import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ShieldCheck, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import Home from './pages/Home';
import Iso42001Guide from './pages/Iso42001Guide';
import Iso27001Guide from './pages/Iso27001Guide';
import CyberEssentialsGuide from './pages/CyberEssentialsGuide';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = React.useState(false);

  const navLinks = [
    { name: 'Services', href: '/#services' },
    { name: 'Why Us', href: '/#why-us' },
    { name: 'Process', href: '/#process' },
    { name: 'Insights', href: '/#insights' },
  ];

  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans text-ink bg-paper selection:bg-gold/30">
        {/* Navigation */}
        <header className="fixed top-0 w-full z-50 bg-paper/90 backdrop-blur-md border-b border-surface-dark/50">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo.svg" alt="Partnerworks Logo" className="h-7 md:h-8 object-contain" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-sm font-medium text-ink/70 hover:text-ink transition-colors">
                  {link.name}
                </a>
              ))}
              <a
                href="https://calendly.com/chrishyatt/45min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold bg-gold text-ink px-4 py-2 rounded-md hover:bg-gold/90 transition-colors shadow-sm"
              >
                Discovery Call
              </a>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 -mr-2 text-ink/70 hover:text-ink"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Nav */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 w-full bg-paper border-b border-surface-dark/50 px-6 py-4 flex flex-col gap-4 shadow-lg">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-ink/80 hover:text-ink"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://calendly.com/chrishyatt/45min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold bg-gold text-ink px-4 py-2 rounded-md text-center mt-2 shadow-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Discovery Call
              </a>
            </div>
          )}
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/iso-42001-guide" element={<Iso42001Guide />} />
          <Route path="/iso-27001-guide" element={<Iso27001Guide />} />
          <Route path="/cyber-essentials-guide" element={<CyberEssentialsGuide />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-ink text-paper py-16 border-t border-surface-dark/20">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            <div className="flex flex-col gap-6">
              <img src="/logo-white.svg" alt="Partnerworks Logo" className="h-6 md:h-7 object-contain self-start" />
              <p className="text-sm text-paper/70 leading-relaxed max-w-sm">
                Simplifying cyber risk management - ISO 27001 & ISO 42001
              </p>
            </div>
            
            <div className="flex flex-col gap-6">
              <div className="h-6 md:h-7 flex items-center">
                <h4 className="font-semibold text-paper">Contact</h4>
              </div>
              <div className="flex flex-col gap-3 text-sm text-paper/70">
                <a href="mailto:hello@partnerworks.ai" className="hover:text-gold transition-colors">hello@partnerworks.ai</a>
                <a href="tel:+4402081634295" className="hover:text-gold transition-colors">+44 (0) 20 8163 4295</a>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="h-6 md:h-7 flex items-center">
                <h4 className="font-semibold text-paper">Location</h4>
              </div>
              <div className="flex flex-col gap-1 text-sm text-paper/70">
                <p>Partnerworks Ltd</p>
                <p>Windsor, SL4 3HU, UK</p>
              </div>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-paper/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-xs text-paper/60">
              <button onClick={() => setIsPrivacyPolicyOpen(true)} className="hover:text-paper transition-colors">Privacy Policy</button>
              <a href="#" className="hover:text-paper transition-colors">Terms of Service</a>
            </div>
            <span className="text-xs text-paper/60">© {new Date().getFullYear()} Partnerworks Ltd. All rights reserved.</span>
          </div>
        </footer>

        {/* Privacy Policy Drawer */}
        <AnimatePresence>
          {isPrivacyPolicyOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsPrivacyPolicyOpen(false)}
                className="fixed inset-0 bg-ink/60 backdrop-blur-sm z-50"
              />
              <motion.div
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed bottom-0 left-0 w-full max-h-[85vh] bg-paper z-50 rounded-t-3xl shadow-2xl overflow-y-auto border-t border-surface-dark/10"
              >
                <div className="max-w-3xl mx-auto px-6 py-8">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-semibold text-ink">Privacy Policy</h2>
                    <button
                      onClick={() => setIsPrivacyPolicyOpen(false)}
                      className="p-2 rounded-full hover:bg-surface-dark/10 transition-colors text-ink/70 hover:text-ink"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  <div className="prose prose-sm prose-ink max-w-none">
                    <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
                    <p>At Partnerworks Ltd, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>
                    
                    <h3>1. Information We Collect</h3>
                    <p>We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Website, or otherwise when you contact us.</p>
                    <p>The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make, and the products and features you use. The personal information we collect may include the following:</p>
                    <ul>
                      <li>Names</li>
                      <li>Phone numbers</li>
                      <li>Email addresses</li>
                      <li>Job titles</li>
                      <li>Company names</li>
                    </ul>

                    <h3>2. How We Use Your Information</h3>
                    <p>We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>
                    <ul>
                      <li>To facilitate account creation and logon process.</li>
                      <li>To send administrative information to you.</li>
                      <li>To fulfill and manage your orders and requests.</li>
                      <li>To send you marketing and promotional communications.</li>
                      <li>To respond to user inquiries/offer support to users.</li>
                    </ul>

                    <h3>3. Contact Us</h3>
                    <p>If you have questions or comments about this notice, you may email us at hello@partnerworks.ai or by post to:</p>
                    <p>
                      Partnerworks Ltd<br />
                      Windsor, SL4 3HU<br />
                      United Kingdom
                    </p>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}
