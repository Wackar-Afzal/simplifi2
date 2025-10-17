export const seoMetadata = {
  default: {
    title: "SimpliFi | Modern Card Issuing & Payments Platform",
    description: "We power the cards behind your brand. Instantly issue and manage virtual or physical cards, enable payments in multiple currencies, and scale globally through one secure API platform.",
    keywords: "Cards as a Service, Embedded card issuance, Branded card program, Virtual cards API, Real-time spend control, Multi-currency cards, Fintech infrastructure, PCI compliant card platform, Global card platform, Corporate payouts platform, Reward & gifting programs, BNPL & credit infrastructure, Wallet & payments API, KYC KYB compliance for fintech, Card issuance in days, Financial infrastructure for startups, Embedded finance platform, Secure card APIs, MENA fintech platform, Card programs for businesses, Payment Solutions, Card Issuing, Modern Card Issuing",
    openGraph: {
      title: "SimpliFi | Modern Card Issuing & Payments Platform",
      description: "We power the cards behind your brand. Instantly issue and manage virtual or physical cards, enable payments in multiple currencies, and scale globally through one secure API platform.",
      type: "website",
      url: "https://simplifipay.com/",
      images: [
        {
          url: "https://simplifipay.com/logo1.png",
          width: 1200,
          height: 630,
          alt: "SimpliFi | Modern Card Issuing & Payments Platform",
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: "SimpliFi | Modern Card Issuing & Payments Platform",
      description: "We power the cards behind your brand. Instantly issue and manage virtual or physical cards, enable payments in multiple currencies, and scale globally through one secure API platform.",
      image: "https://simplifipay.com/logo1.png",
    },
    robots: {
      index: true,
      follow: true,
    },
  },
  home: {
    title: "SimpliFi | Modern Card Issuing & Payments Platform - Cards as a Service",
    description: "Leading Cards as a Service platform with embedded card issuance, branded card programs, and real-time spend control. PCI compliant fintech infrastructure for startups and enterprises across MENA.",
    keywords: "Cards as a Service, Embedded card issuance, Branded card program, Virtual cards API, Real-time spend control, Multi-currency cards, Fintech infrastructure, PCI compliant card platform, Global card platform, Corporate payouts platform, Reward & gifting programs, BNPL & credit infrastructure, Wallet & payments API, KYC KYB compliance for fintech, Card issuance in days, Financial infrastructure for startups, Embedded finance platform, Secure card APIs, MENA fintech platform, Card programs for businesses, Payment Solutions, Card Issuing, Modern Card Issuing",
  },
  products: {
    title: "Cards as a Service & Embedded Card Issuance | SimpliFi",
    description: "Choose between embedded card issuance for instant deployment or Cards as a Service for complete branded card program control. Modern card issuing platform with virtual cards API and real-time spend control.",
    keywords: "Cards as a Service, Embedded card issuance, Branded card program, Virtual cards API, Real-time spend control, Multi-currency cards, Card issuance in days, Modern card issuing platform",
  },
  features: {
    title: "Card Issuing Features | Multi-Currency Cards & Real-Time Control | SimpliFi",
    description: "Comprehensive card issuing features including multi-currency cards, real-time spend control, virtual cards API, instant card issuance, and KYC KYB compliance for fintech.",
    keywords: "Multi-currency cards, Real-time spend control, Virtual cards API, Instant card issuance, KYC KYB compliance for fintech, Card issuing features, PCI compliant card platform",
  },
  capabilities: {
    title: "Card Issuing Capabilities | PCI Compliant Platform | SimpliFi",
    description: "Enterprise-grade card issuing capabilities with PCI compliant card platform, KYC KYB compliance for fintech, identity verification, and comprehensive settlement services.",
    keywords: "PCI compliant card platform, KYC KYB compliance for fintech, Card issuing capabilities, Identity verification, Settlement services, Card fulfillment",
  },
  solutions: {
    title: "Payment Solutions | Corporate Payouts & Reward Programs | SimpliFi",
    description: "Comprehensive payment solutions including corporate payouts platform, reward & gifting programs, BNPL & credit infrastructure, and wallet & payments API.",
    keywords: "Payment Solutions, Corporate payouts platform, Reward & gifting programs, BNPL & credit infrastructure, Wallet & payments API, Payment infrastructure",
  },
  about: {
    title: "About SimpliFi | MENA Fintech Platform | Card Programs for Businesses",
    description: "Learn about SimpliFi, the leading MENA fintech platform providing card programs for businesses, financial infrastructure for startups, and secure card APIs.",
    keywords: "MENA fintech platform, Card programs for businesses, Financial infrastructure for startups, Secure card APIs, About SimpliFi, Fintech company",
  },
  contact: {
    title: "Contact SimpliFi | Get Started with Card Issuing | Modern Card Issuing Platform",
    description: "Contact SimpliFi to get started with our modern card issuing platform. Cards as a Service, embedded card issuance, and comprehensive payment solutions.",
    keywords: "Contact SimpliFi, Get started card issuing, Modern card issuing platform, Cards as a Service contact, Embedded card issuance contact",
  },
};

export const structuredData = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SimpliFi",
    "description": "Modern Card Issuing & Payments Platform providing Cards as a Service, embedded card issuance, and branded card programs",
    "url": "https://simplifipay.com",
    "logo": "https://simplifipay.com/logo1.png",
    "sameAs": [
      "https://linkedin.com/company/simplifi",
      "https://twitter.com/simplifi"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "AE",
      "addressRegion": "Dubai"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "contact@simplifipay.com"
    }
  },
  product: {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "SimpliFi Card Issuing Platform",
    "description": "Cards as a Service platform with embedded card issuance, branded card programs, and real-time spend control",
    "brand": {
      "@type": "Brand",
      "name": "SimpliFi"
    },
    "offers": {
      "@type": "Offer",
      "description": "Modern card issuing platform with virtual cards API and multi-currency support",
      "category": "Financial Services"
    }
  },
  service: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Cards as a Service",
    "description": "Complete card issuing service with embedded card issuance, branded card programs, and real-time spend control",
    "provider": {
      "@type": "Organization",
      "name": "SimpliFi"
    },
    "serviceType": "Financial Services",
    "areaServed": "MENA",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Card Issuing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Embedded Card Issuance"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Branded Card Program"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Virtual Cards API"
          }
        }
      ]
    }
  }
};
