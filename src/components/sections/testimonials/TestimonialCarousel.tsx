import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/common/SectionHeading';
import { TestimonialCard } from '@/components/common/TestimonialCard';
import { testimonials } from '@/data/testimonials';

interface TestimonialCarouselProps {
  variant?: 'default' | 'dark';
}

export function TestimonialCarousel({ variant = 'default' }: TestimonialCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center', skipSnaps: false },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => { emblaApi.off('select', onSelect); };
  }, [emblaApi, onSelect]);

  return (
    <Section dark={variant === 'dark'}>
      <SectionHeading
        label="Testimonials"
        title="What Our Clients Say"
        subtitle="Trusted by leading Banks, NBFCs, and Corporate organizations across India."
      />

      <div className="relative">
        <div ref={emblaRef} className="overflow-hidden rounded-xl">
          <div className="flex gap-6">
            {testimonials.map((t) => (
              <div key={t.id} className="min-w-0 shrink-0 grow-0 basis-full md:basis-1/2 lg:basis-1/3">
                <TestimonialCard
                  quote={t.quote}
                  author={t.author}
                  role={t.role}
                  company={t.company}
                  rating={t.rating}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-secondary)] transition-all duration-200 hover:border-primary hover:bg-primary hover:text-white hover:shadow-md disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2 px-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={cn(
                  'h-3 rounded-full transition-all duration-300',
                  index === selectedIndex
                    ? 'w-10 bg-primary'
                    : 'w-3 bg-[var(--border-color)] hover:bg-[var(--text-tertiary)]'
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-secondary)] transition-all duration-200 hover:border-primary hover:bg-primary hover:text-white hover:shadow-md disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </Section>
  );
}
