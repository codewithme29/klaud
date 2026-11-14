import type { NavItem } from '@/types/navigation';

export const navItems: NavItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Services',
    href: '/services',
    // mega: {
    //   label: 'Our Services',
    //   description: 'Comprehensive verification and investigation solutions',
    //   columns: [
    //     [
    //       { label: 'Verification Services', href: '/services', description: 'KYC, residence, employment verification' },
    //       { label: 'Contact Point Verification', href: '/services#contact-point-verification', description: 'Address verification with geo-tagging' },
    //       { label: 'Residence Verification', href: '/services#residence-verification', description: 'Residential address KYC verification' },
    //       { label: 'Employment Verification', href: '/services#employment-verification', description: 'Employment history & credential checks' },
    //       { label: 'KYC Verification', href: '/services#kyc-verification', description: 'Complete KYC verification solutions' },
    //     ],
    //     [
    //       { label: 'Investigation Services', href: '/services', description: 'Professional investigation and due diligence' },
    //       { label: 'Field Investigation', href: '/services#field-investigation', description: 'On-ground investigation services' },
    //       { label: 'Fraud Control', href: '/services#fraud-control', description: 'Fraud detection and investigation' },
    //       { label: 'Due Diligence', href: '/services#due-diligence', description: 'Business and partner due diligence' },
    //       { label: 'Mystery Audit', href: '/services#mystery-audit', description: 'Service quality evaluation' },
    //     ],
    //     [
    //       { label: 'Risk & Compliance', href: '/services', description: 'Risk management and audit services' },
    //       { label: 'Audit & Compliance', href: '/services#audit', description: 'Internal and regulatory audits' },
    //       { label: 'Risk Management', href: '/services#risk-management', description: 'Enterprise risk solutions' },
    //       { label: 'Collection & Recovery', href: '/services#collection', description: 'Debt collection and asset recovery' },
    //       { label: 'Document Verification', href: '/services#document-verification', description: 'Document authenticity verification' },
    //     ],
    //   ],
    // },
  },
  {
    label: 'Industries',
    href: '/industries',
  },
  {
    label: 'Coverage',
    href: '/coverage',
  },
  {
    label: 'Leadership',
    href: '/leadership',
  },
  {
    label: 'Careers',
    href: '/careers',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];
