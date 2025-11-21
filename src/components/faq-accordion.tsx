"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQAccordionProps = {
  items: { question: string; answer: string }[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <Accordion type="single" collapsible className="space-y-4">
      {items.map((item, idx) => (
        <AccordionItem value={`faq-${idx}`} key={item.question}>
          <AccordionTrigger className="text-codeweek-purple-200 hover:text-white">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-codeweek-purple-300">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

