import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { FileText } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { quoteSchema, type QuoteFormType } from '@/schemas/contact';
import { services } from '@/data/services';

interface QuoteRequestModalProps {
  open: boolean;
  onClose: () => void;
}

export function QuoteRequestModal({ open, onClose }: QuoteRequestModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormType>({
    resolver: zodResolver(quoteSchema),
  });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success('Quote request submitted! We will contact you shortly.');
    reset();
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10">
            <FileText className="h-5 w-5 text-secondary" />
          </div>
          <DialogTitle>Request a Quote</DialogTitle>
          <DialogDescription>
            Tell us about your requirements and we'll provide a customized quote.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Input
              id="q-name"
              label="Your Name *"
              error={errors.name?.message}
              {...register('name')}
            />
            <Input
              id="q-email"
              label="Email *"
              type="email"
              error={errors.email?.message}
              {...register('email')}
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Input
              id="q-phone"
              label="Phone *"
              type="tel"
              error={errors.phone?.message}
              {...register('phone')}
            />
            <Input
              id="q-company"
              label="Company"
              {...register('company')}
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-[var(--text-secondary)]">
              Service Required *
            </label>
            <Select onValueChange={(v) => setValue('service', v)}>
              <SelectTrigger>
                <SelectValue placeholder="Select service" />
              </SelectTrigger>
              <SelectContent>
                {services.map((s) => (
                  <SelectItem key={s.id} value={s.title}>
                    {s.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.service && (
              <p className="mt-1 text-xs text-red-500">{errors.service.message}</p>
            )}
          </div>

          <Textarea
            id="q-details"
            label="Project Details"
            placeholder="Describe your requirements in detail..."
            {...register('details')}
          />

          <Button type="submit" className="w-full" loading={isSubmitting}>
            Submit Quote Request
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
