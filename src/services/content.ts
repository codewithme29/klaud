// Content service layer - currently returns static data
// Future: replace with CMS API calls (Strapi/Sanity/Contentful)

export const contentService = {
  getServices: async () => {
    // return apiClient.get<ServiceData[]>('/services');
    const { services } = await import('@/data/services');
    return services;
  },
  getService: async (slug: string) => {
    const { services } = await import('@/data/services');
    return services.find((s) => s.slug === slug) || null;
  },
  getTeam: async () => {
    const { team } = await import('@/data/team');
    return team;
  },
  getTestimonials: async () => {
    const { testimonials } = await import('@/data/testimonials');
    return testimonials;
  },
  getIndustries: async () => {
    const { industries } = await import('@/data/industries');
    return industries;
  },
  getFaqs: async () => {
    const { faqs } = await import('@/data/faq');
    return faqs;
  },
};
