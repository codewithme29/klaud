import type { ContactFormData } from '@/types/forms';
import { apiClient } from './api';

export const contactService = {
  submit: async (data: ContactFormData) => {
    try {
      // Try EmailJS if configured
      if (import.meta.env.VITE_EMAILJS_SERVICE_ID) {
        const emailjs = await import('@emailjs/browser');
        return emailjs.default.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
          {
            name: data.name,
            email: data.email,
            phone: data.phone,
            company: data.company || '',
            service: data.service || '',
            message: data.message,
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
      }
    } catch {
      // Fallback to API
    }
    return apiClient.post('/contact', data);
  },
};
