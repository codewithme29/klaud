export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service?: string;
  message: string;
}

export interface CallbackFormData {
  name: string;
  phone: string;
  preferredTime?: string;
  message?: string;
}

export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  details?: string;
}

export interface NewsletterFormData {
  email: string;
}
