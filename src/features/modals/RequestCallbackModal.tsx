import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { Phone } from 'lucide-react';
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
import { callbackSchema, type CallbackFormType } from '@/schemas/contact';

interface RequestCallbackModalProps {
  open: boolean;
  onClose: () => void;
}

export function RequestCallbackModal({ open, onClose }: RequestCallbackModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CallbackFormType>({
    resolver: zodResolver(callbackSchema),
  });

  const onSubmit = async () => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success('We will call you back shortly!');
    reset();
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
            <Phone className="h-5 w-5 text-primary" />
          </div>
          <DialogTitle>Request a Callback</DialogTitle>
          <DialogDescription>
            Fill in your details and we'll call you back within 24 hours.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            id="cb-name"
            label="Your Name *"
            placeholder="John Doe"
            error={errors.name?.message}
            {...register('name')}
          />
          <Input
            id="cb-phone"
            label="Phone Number *"
            type="tel"
            placeholder="+91 98765 43210"
            error={errors.phone?.message}
            {...register('phone')}
          />
          <Input
            id="cb-time"
            label="Preferred Call Time"
            placeholder="e.g., Between 2-4 PM"
            {...register('preferredTime')}
          />
          <Textarea
            id="cb-message"
            label="Message (Optional)"
            placeholder="Brief description of your requirement..."
            {...register('message')}
          />
          <Button type="submit" className="w-full" loading={isSubmitting}>
            Request Callback
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
