export interface SEOMeta {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  noIndex?: boolean;
  keywords?: string[];
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}
