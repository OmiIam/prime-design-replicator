
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQSection = () => {
  const faqs = [
    {
      question: "Are you mining for yourself?",
      answer: "No, we provide mining services for our clients. Our team manages the infrastructure and operations, allowing you to benefit from crypto mining without the technical hurdles."
    },
    {
      question: "What is the maintenance fee?",
      answer: "Our maintenance fee is 15% of the mining rewards, which covers electricity, cooling, security, and technical staff. This ensures your mining operation runs smoothly without unexpected costs."
    },
    {
      question: "How does Bitcoin mining work?",
      answer: "Bitcoin mining is the process of adding transaction records to Bitcoin's public ledger (blockchain). Mining requires solving complex mathematical problems using specialized computers. Our mining farms handle this complexity for you."
    },
    {
      question: "Where is your mining farm located?",
      answer: "Our mining operations are strategically located in regions with low electricity costs and cool climates, including facilities in Canada, Iceland, and Kazakhstan."
    },
    {
      question: "Which pools are you using for mining?",
      answer: "We utilize a combination of top mining pools including Foundry USA, Antpool, and F2Pool to maximize mining efficiency and returns."
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="glass-panel mb-4 border-none">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-12 text-center">
          <Button className="bg-amber-700 hover:bg-amber-600 border border-amber-500 px-12 py-6 h-auto text-lg">
            JOIN PRIMETRADE
          </Button>
          
          <div className="mt-4 flex items-center justify-center text-sm">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4L3 8L12 12L21 8L12 4Z" stroke="currentColor" strokeWidth="2" />
              <path d="M3 16L12 20L21 16" stroke="currentColor" strokeWidth="2" />
              <path d="M3 12L12 16L21 12" stroke="currentColor" strokeWidth="2" />
            </svg>
            Access 12+ wealth creation methods
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
