import type { FAQItemData, ServiceData } from '@/types/content';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'KAPI KAVACH SERVICES PVT. LTD.',
    url: 'https://kapikavach.com',
    logo: 'https://kapikavach.com/logo.png',
    description:
      'Verification, Investigation, Risk Management, Audit and Collection Services for BFSI and Corporate clients.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-9889001577',
      contactType: 'customer service',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'KAPI KAVACH SERVICES',
    url: 'https://kapikavach.com',
  };
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(items: FAQItemData[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
