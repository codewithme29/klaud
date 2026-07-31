import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { faqs } from '@/data/faq';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

interface FAQSectionProps {
  variant?: 'default' | 'dark';
}

export function FAQSection({ variant = 'default' }: FAQSectionProps) {
  return (
    <Section dark={variant === 'dark'}>
      <SectionHeading
        label="FAQ"
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our services and processes."
      />

      <ScrollReveal>
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-primary)] p-2 shadow-sm">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="px-4 first:pt-2 last:pb-2">
                  <AccordionTrigger className="text-left font-medium text-[15px] hover:text-primary [&[data-state=open]]:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[15px] leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}
