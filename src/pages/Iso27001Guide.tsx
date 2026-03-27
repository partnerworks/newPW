import React, { useEffect } from 'react';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { iso27001Markdown } from '../content/iso27001';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does it take to get ISO 27001 certified?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For most UK SMEs with 20–100 employees, expect 4–6 months from project kickoff to certification. The active implementation work typically takes 8–12 weeks, with additional time for the certification body to schedule and conduct the audit. Timelines extend for larger or more complex organisations."
      }
    },
    {
      "@type": "Question",
      "name": "How much does ISO 27001 certification cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For a typical UK SME, the all-in cost — consultancy, any technology gaps, and certification body fees — usually falls between £10,000 and £20,000. This compares favourably to traditional consultancies (£10,000–25,000 for consultancy alone) and enterprise platforms like Vanta (£8,000–80,000 per year). PartnerWorks engagements for UK SMEs typically range from £5,000 to £8,000 for the consultancy element."
      }
    },
    {
      "@type": "Question",
      "name": "Do we need ISO 27001 if we already have Cyber Essentials?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "They serve different purposes. Cyber Essentials covers five baseline technical controls. ISO 27001 provides a comprehensive management system covering governance, risk management, people, physical security, and continuous improvement — far broader in scope. Many organisations hold both. If your clients or contracts require ISO 27001 specifically, Cyber Essentials alone will not satisfy that requirement."
      }
    },
    {
      "@type": "Question",
      "name": "Can a small company realistically achieve ISO 27001?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. ISO 27001 is designed to be scalable to any organisation size. The controls and documentation should be proportionate to your size and risks — a 30-person company does not need enterprise-grade controls. With experienced guidance, small organisations often achieve certification faster than larger ones because there is less complexity to manage."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if we fail the certification audit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You do not pass or fail in a binary sense. The auditor may raise major or minor nonconformities. Minor nonconformities require a corrective action plan and are verified at the next surveillance audit — they do not prevent certification. Major nonconformities must be resolved before certification is granted, but the certification body gives you time to address them. With proper preparation, major nonconformities are uncommon."
      }
    },
    {
      "@type": "Question",
      "name": "How much ongoing effort is required after certification?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Maintaining certification requires regular activities: annual risk assessment reviews, policy reviews, internal audits, management reviews, and ongoing evidence collection. For an SME, this typically equates to a few hours per month of focused ISMS maintenance, plus preparation time before annual surveillance audits. A compliance management platform significantly reduces this burden by automating reminders and tracking."
      }
    },
    {
      "@type": "Question",
      "name": "Do we need to hire a dedicated information security person?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not necessarily. Many SMEs assign the ISMS lead role to an existing senior employee — often someone in IT, operations, or compliance — who takes it on as part of their broader responsibilities. What matters is that someone has clear ownership, adequate time allocation, and the competence to maintain the system. External support (like PartnerWorks' annual health check) can supplement internal capability."
      }
    },
    {
      "@type": "Question",
      "name": "Can ISO 27001 help with UK GDPR compliance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ISO 27001 provides the technical and organisational security measures that GDPR requires, and the ICO recognises certification as evidence of appropriate measures. However, ISO 27001 does not cover all GDPR requirements — data subject rights, lawful bases, privacy impact assessments, and data protection governance need additional measures. ISO 27001 provides the security foundation that GDPR compliance builds upon."
      }
    }
  ]
};

export default function Iso27001Guide() {
  useEffect(() => {
    document.title = "ISO 27001 Implementation: The Complete Guide | PartnerWorks";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'The complete guide to ISO 27001 implementation for UK organisations. Learn how to build an Information Security Management System that passes certification and wins contracts.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'The complete guide to ISO 27001 implementation for UK organisations. Learn how to build an Information Security Management System that passes certification and wins contracts.';
      document.head.appendChild(meta);
    }
    
    // Add JSON-LD Schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqSchema);
    document.head.appendChild(script);
    
    // Scroll to top on load
    window.scrollTo(0, 0);

    return () => {
      // Cleanup schema on unmount
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="pt-32 pb-24 bg-paper">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <Link to="/" className="inline-flex items-center text-sm font-medium text-ink/60 hover:text-ink transition-colors mb-8">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to Home
          </Link>
        </div>
        
        <article className="prose prose-lg prose-headings:font-semibold prose-a:text-blue hover:prose-a:text-blue/80 prose-img:rounded-xl max-w-none prose-details:bg-surface prose-details:p-4 prose-details:rounded-lg prose-details:mb-4 prose-summary:font-semibold prose-summary:cursor-pointer prose-summary:text-ink">
          <Markdown rehypePlugins={[rehypeRaw]}>{iso27001Markdown}</Markdown>
        </article>

        <div className="mt-16 p-8 bg-surface-dark rounded-2xl border border-surface-dark/50 text-center">
          <h3 className="text-2xl font-semibold mb-4">Need expert guidance with ISO 27001?</h3>
          <p className="text-ink/70 mb-8 max-w-2xl mx-auto">
            Our team of certified lead implementers can help you build an Information Security Management System tailored to your organisation's specific needs and regulatory requirements.
          </p>
          <a
            href="https://calendly.com/chrishyatt/45min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gold text-ink px-8 py-4 rounded-md text-sm font-semibold hover:bg-gold/90 transition-all shadow-md"
          >
            Schedule a Discovery Call
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
