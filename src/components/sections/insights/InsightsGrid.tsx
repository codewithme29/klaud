import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/common/SectionHeading';
import { InsightCard } from '@/components/common/InsightCard';

const insights = [
  {
    slug: 'future-of-verification',
    title: 'The Future of Verification: Technology-Driven Solutions',
    excerpt: 'How digital transformation is reshaping the verification industry and what it means for BFSI organizations.',
    category: 'Industry Insights',
    date: 'Jan 15, 2024',
    author: 'KLAUD HUNTER Team',
    readTime: '5 min read',
  },
  {
    slug: 'kyc-compliance-2024',
    title: 'KYC Compliance: Essential Guide for Financial Institutions',
    excerpt: 'A comprehensive guide to navigating KYC compliance requirements and best practices in the current regulatory landscape.',
    category: 'Compliance',
    date: 'Dec 20, 2024',
    author: 'KLAUD HUNTER Team',
    readTime: '8 min read',
  },
  {
    slug: 'fraud-prevention-tips',
    title: 'Top 10 Fraud Prevention Strategies for NBFCs',
    excerpt: 'Essential strategies to protect your organization from fraud, including field verification best practices.',
    category: 'Risk Management',
    date: 'Nov 28, 2024',
    author: 'KLAUD HUNTER Team',
    readTime: '6 min read',
  },
];

interface InsightsGridProps {
  variant?: 'default' | 'dark' | 'navy';
}

export function InsightsGrid({ variant = 'default' }: InsightsGridProps) {
  const isDark = variant === 'dark' || variant === 'navy';

  return (
    <Section id="insights" dark={variant === 'dark'} navy={variant === 'navy'}>
      <SectionHeading
        label="Insights"
        title="Latest from KLAUD HUNTER"
        subtitle="Industry insights, compliance updates, and best practices for verification and risk management."
        light={variant === 'navy'}
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {insights.map((post) => (
          <InsightCard key={post.slug} {...post} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          to="/blog"
          className={cn(
            'inline-flex items-center gap-2 text-sm font-medium transition-colors',
            variant === 'navy'
              ? 'text-white hover:text-white/80'
              : 'text-secondary hover:text-secondary/80'
          )}
        >
          View All Insights
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}
