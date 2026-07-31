import type { IndustryData } from '@/types/content';

export const industries: IndustryData[] = [
  {
    id: 'banks',
    name: 'Banks',
    description: 'Comprehensive verification and risk management solutions for public and private sector banks.',
    icon: 'Building2',
    services: ['kyc-verification', 'residence-verification', 'employment-verification', 'field-investigation', 'risk-management', 'audit-compliance'],
  },
  {
    id: 'nbfc',
    name: 'NBFC',
    description: 'Tailored verification and collection services for Non-Banking Financial Companies.',
    icon: 'Landmark',
    services: ['contact-point-verification', 'kyc-verification', 'collection-recovery', 'field-investigation'],
  },
  {
    id: 'insurance',
    name: 'Insurance',
    description: 'Specialized investigation and verification services for insurance companies.',
    icon: 'Shield',
    services: ['field-investigation', 'fraud-control-unit-investigation', 'document-verification', 'residence-verification'],
  },
  {
    id: 'housing-finance',
    name: 'Housing Finance',
    description: 'Mortgage verification and field investigation services for housing finance companies.',
    icon: 'Home',
    services: ['residence-verification', 'contact-point-verification', 'document-verification', 'field-investigation'],
  },
  {
    id: 'fintech',
    name: 'FinTech',
    description: 'Digital-first verification solutions for modern financial technology companies.',
    icon: 'Smartphone',
    services: ['kyc-verification', 'document-verification', 'contact-point-verification', 'employment-verification'],
  },
  {
    id: 'telecom',
    name: 'Telecom',
    description: 'Verification and field services for telecommunications companies.',
    icon: 'Wifi',
    services: ['contact-point-verification', 'field-investigation', 'document-verification'],
  },
  {
    id: 'government',
    name: 'Government',
    description: 'Investigation and audit services for government departments and PSUs.',
    icon: 'Building',
    services: ['field-investigation', 'audit-compliance', 'due-diligence', 'risk-management'],
  },
  {
    id: 'corporate',
    name: 'Corporate',
    description: 'End-to-end verification, due diligence and risk management for corporate organizations.',
    icon: 'Building2',
    services: ['employment-verification', 'due-diligence', 'audit-compliance', 'risk-management'],
  },
  {
    id: 'microfinance',
    name: 'Microfinance',
    description: 'Field verification and collection support for microfinance institutions.',
    icon: 'Users',
    services: ['contact-point-verification', 'field-investigation', 'collection-recovery'],
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce',
    description: 'Verification and investigation services for e-commerce platforms.',
    icon: 'ShoppingCart',
    services: ['document-verification', 'field-investigation', 'employment-verification'],
  },
];
