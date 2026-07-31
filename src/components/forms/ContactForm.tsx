import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';
import { contactSchema, type ContactFormType } from '@/schemas/contact';
import { contactService } from '@/services/contact';
import { services } from '@/data/services';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<ContactFormType>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormType) => {
    try {
      const result = await contactService.submit(data);
      toast.success('Message sent successfully! We will get back to you shortly.');
      reset();
    } catch {
      toast.error('Failed to send message. Please try again or call us directly.');
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Input
          id="name"
          label="Full Name *"
          placeholder="John Doe"
          error={errors.name?.message}
          {...register('name')}
        />
        <Input
          id="email"
          label="Email Address *"
          type="email"
          placeholder="john@company.com"
          error={errors.email?.message}
          {...register('email')}
        />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Input
          id="phone"
          label="Phone Number *"
          type="tel"
          placeholder="+91 98765 43210"
          error={errors.phone?.message}
          {...register('phone')}
        />
        <Input
          id="company"
          label="Company Name"
          placeholder="Your Company"
          {...register('company')}
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-[var(--text-secondary)]">
          Service Interested In
        </label>
        <Select onValueChange={(v) => setValue('service', v)}>
          <SelectTrigger>
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            {services.map((s) => (
              <SelectItem key={s.id} value={s.title}>
                {s.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Textarea
        id="message"
        label="Message *"
        placeholder="Tell us about your requirements..."
        rows={5}
        error={errors.message?.message}
        {...register('message')}
      />

      <Button type="submit" size="lg" loading={isSubmitting} className="w-full md:w-auto">
        <Send className="h-4 w-4" />
        Send Message
      </Button>
    </motion.form>
  );
}
