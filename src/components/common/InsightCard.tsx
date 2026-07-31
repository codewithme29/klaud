import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface InsightCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
}

export function InsightCard({
  slug,
  title,
  excerpt,
  category,
  date,
  author,
  readTime,
}: InsightCardProps) {
  return (
    <Link
      to={`/blog/${slug}`}
      className="group flex h-full flex-col rounded-2xl border border-[var(--border-color)] bg-[var(--bg-primary)] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06),0_12px_32px_rgba(0,0,0,0.04)] hover:-translate-y-0.5"
    >
      <div className="mb-4 flex h-40 items-center justify-center rounded-xl bg-gradient-to-br from-primary/[0.04] to-secondary/[0.04] border border-[var(--border-color)]">
        <span className="font-heading text-3xl font-bold text-primary/15">{category[0]}</span>
      </div>

      <Badge variant="secondary" className="mb-2.5 w-fit">
        {category}
      </Badge>

      <h3 className="font-heading text-[15px] font-semibold text-[var(--text-primary)] leading-snug transition-colors group-hover:text-secondary">
        {title}
      </h3>

      <p className="mt-2 flex-1 text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-2">
        {excerpt}
      </p>

      <div className="mt-4 flex items-center gap-4 text-xs text-[var(--text-tertiary)]">
        <span className="flex items-center gap-1.5">
          <Calendar className="h-3.5 w-3.5" />
          {date}
        </span>
        <span className="flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5" />
          {readTime}
        </span>
      </div>

      <div className="mt-4 flex items-center gap-1 text-sm font-medium text-secondary opacity-0 transition-all group-hover:opacity-100">
        <span>Read More</span>
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
