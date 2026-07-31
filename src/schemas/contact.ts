import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .min(10, 'Phone number must be at least 10 digits')
    .regex(/^[+]?[\d\s()-]+$/, 'Please enter a valid phone number'),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000),
});

export const callbackSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z
    .string()
    .min(10, 'Valid phone is required')
    .regex(/^[+]?[\d\s()-]+$/),
  preferredTime: z.string().optional(),
  message: z.string().max(500).optional(),
});

export const quoteSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(10, 'Valid phone is required'),
  company: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  details: z.string().max(2000).optional(),
});

export const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

export type ContactFormType = z.infer<typeof contactSchema>;
export type CallbackFormType = z.infer<typeof callbackSchema>;
export type QuoteFormType = z.infer<typeof quoteSchema>;
export type NewsletterFormType = z.infer<typeof newsletterSchema>;
