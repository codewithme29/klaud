export interface ServiceData {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  features: string[];
  benefits: BenefitData[];
  industries: string[];
  workflow: ProcessStepData[];
  faqs: FAQItemData[];
  category: 'verification' | 'investigation' | 'audit' | 'collection' | 'risk-management' | 'document-verification';
}

export interface IndustryData {
  id: string;
  name: string;
  description: string;
  icon: string;
  services: string[];
}

export interface TeamMemberData {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  qualifications: string[];
  experience: string;
  linkedin?: string;
  email?: string;
  executive: boolean;
  order: number;
}

export interface TestimonialData {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  rating?: number;
}

export interface FAQItemData {
  question: string;
  answer: string;
}

export interface ProcessStepData {
  step: number;
  title: string;
  description: string;
  icon?: string;
}

export interface BenefitData {
  title: string;
  description: string;
  icon: string;
}

export interface RegionData {
  id: string;
  name: string;
  cities: string[];
  coverage: 'full' | 'partial' | 'none';
  offices: string[];
  path?: string;
}

export interface OfficeData {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  phone: string;
  email: string;
  coordinates: { lat: number; lng: number };
  isHeadquarters: boolean;
}

export interface BlogPostData {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  tags: string[];
}

export interface JobPositionData {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  description: string;
  requirements: string[];
  postedDate: string;
}

export interface ValueData {
  title: string;
  description: string;
  icon: string;
}
