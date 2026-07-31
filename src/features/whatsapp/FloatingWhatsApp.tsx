import { MessageCircle } from 'lucide-react';
import { SITE } from '@/lib/constants';

export function FloatingWhatsApp() {
  const phone = SITE.phoneAlt.replace(/\D/g, '');
  const message = encodeURIComponent('Hello! I would like to know more about your services.');

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[1500] flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-green-600 hover:shadow-xl"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute inset-0 animate-ping rounded-full bg-green-500 opacity-20" />
    </a>
  );
}
