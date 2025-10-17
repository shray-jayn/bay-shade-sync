import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const faqs = [
  {
    question: 'How quiet are the motorized systems?',
    answer:
      'Our Somfy and Lutron motors are whisper-quiet, typically under 40 decibels — quieter than a normal conversation. You\'ll barely notice them operating.',
  },
  {
    question: 'Can motorized blinds withstand Bay Area winds?',
    answer:
      'Yes. Our exterior zip-track systems are wind-rated up to 60+ mph with integrated sensors that automatically retract the blinds in high winds to protect your investment.',
  },
  {
    question: 'Do I need to hardwire the motors or can they run on batteries?',
    answer:
      'We offer both options. Battery-powered motors (rechargeable lithium) are perfect for retrofit installations. Hardwired motors provide worry-free, permanent power. We can also integrate solar panels for exterior applications.',
  },
  {
    question: 'Will motorized shades work with my HOA rules?',
    answer:
      'Most HOAs approve interior motorized shades without issue. For exterior systems, we help with documentation and can provide spec sheets that demonstrate compliance with architectural guidelines.',
  },
  {
    question: 'What\'s the typical lead time from order to installation?',
    answer:
      'Because we manufacture locally in the Bay Area, our lead times are 2-4 weeks for most projects. Complex or large-scale installations may take slightly longer. We\'ll provide an accurate timeline during your consultation.',
  },
  {
    question: 'Do the shades work during power outages?',
    answer:
      'Battery-powered shades will continue to operate during outages. For hardwired systems, we can integrate with your home\'s backup power. Many of our motors also have manual override capabilities.',
  },
  {
    question: 'Can I add motorization to my existing blinds?',
    answer:
      'In most cases, it\'s more cost-effective to install new motorized blinds than retrofit existing ones. However, we\'ll evaluate your current blinds during the consultation to determine the best approach.',
  },
  {
    question: 'How long do the motors last?',
    answer:
      'Premium motors from Somfy and Lutron typically last 10-15 years with normal use. All our installations come with manufacturer warranties and local service support.',
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold font-display">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Get answers to common questions about motorized shading
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-semibold pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
