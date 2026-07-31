import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { Send, Loader2 } from 'lucide-react';
import { newsletterSchema, type NewsletterFormType } from '@/schemas/contact';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function NewsletterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterFormType>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    toast.success('Subscribed successfully!');
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-3">
      <div className="flex-1">
        <Input
          id="newsletter-email"
          type="email"
          placeholder="Enter your email"
          error={errors.email?.message}
          {...register('email')}
        />
      </div>
      <Button type="submit" loading={isSubmitting}>
        Subscribe
      </Button>
    </form>
  );
}
