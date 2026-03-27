import React, { useEffect } from 'react';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { iso42001Markdown } from '../content/iso42001';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can we implement ISO 42001 without ISO 27001?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, ISO 42001 is a standalone standard. However, if your organisation processes sensitive data or operates in a regulated industry, you will almost certainly need ISO 27001 as well. The most efficient approach is to implement both as an integrated management system rather than sequentially."
      }
    },
    {
      "@type": "Question",
      "name": "How is ISO 42001 different from simply having an AI ethics policy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An ethics policy states your principles. ISO 42001 requires you to operationalise those principles through structured processes, defined roles, documented risk assessments, ongoing monitoring, internal audits, and management review. The difference is between aspiration and evidence."
      }
    },
    {
      "@type": "Question",
      "name": "We use third-party AI models — do we still need ISO 42001?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. You are responsible for how AI is used within your organisation, regardless of whether you developed the model. ISO 42001 requires governance of third-party AI including vendor assessment, contractual requirements, and ongoing monitoring."
      }
    },
    {
      "@type": "Question",
      "name": "Does ISO 42001 certification guarantee EU AI Act compliance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Certification demonstrates that your AI governance infrastructure is robust and systematic. EU AI Act compliance requires system-specific conformity assessment. However, ISO 42001 provides the management system foundation that makes demonstrating compliance significantly more straightforward."
      }
    },
    {
      "@type": "Question",
      "name": "How does this affect organisations that only use AI for low-risk purposes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Even low-risk AI use benefits from structured governance. Scope your AIMS proportionately — you do not need enterprise-grade controls for a chatbot that recommends office supplies — but having a framework in place demonstrates maturity and prepares you for expansion into higher-risk AI applications."
      }
    },
    {
      "@type": "Question",
      "name": "What is the relationship between ISO 42001 and the UK's AI regulatory approach?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The UK has adopted a principles-based, sector-specific approach rather than comprehensive AI legislation. However, regulators including the FCA, PRA, and ICO are increasing expectations around AI governance. ISO 42001 certification provides a recognised governance credential that satisfies these evolving expectations."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to get ISO 42001 certified?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For small organisations with 1–10 AI systems, expect 4–6 months from gap analysis to certification readiness. Mid-market organisations typically need 9–12 months. Those with existing ISO 27001 certification can often reduce the timeline by 30–40% due to governance overlap."
      }
    },
    {
      "@type": "Question",
      "name": "Can ISO 42001 be integrated with an existing ISO 27001 management system?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely — and this is the approach we strongly recommend. Both standards share the Annex SL harmonised structure, so the management system backbone is structurally identical. Organisations with ISO 27001 can leverage approximately 40–50% of their existing governance processes, significantly reducing cost, effort, and duplication."
      }
    }
  ]
};

export default function Iso42001Guide() {
  useEffect(() => {
    document.title = "ISO 42001 Implementation: The Complete Guide | PartnerWorks";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'The complete guide to ISO 42001 implementation for UK organisations. Learn how to build an AI Management System that satisfies regulators and wins trust.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'The complete guide to ISO 42001 implementation for UK organisations. Learn how to build an AI Management System that satisfies regulators and wins trust.';
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
          <Markdown rehypePlugins={[rehypeRaw]}>{iso42001Markdown}</Markdown>
        </article>

        <div className="mt-16 p-8 bg-surface-dark rounded-2xl border border-surface-dark/50 text-center">
          <h3 className="text-2xl font-semibold mb-4">Need expert guidance with ISO 42001?</h3>
          <p className="text-ink/70 mb-8 max-w-2xl mx-auto">
            Our team of certified lead implementers can help you build an AI Management System tailored to your organisation's specific needs and regulatory requirements.
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
