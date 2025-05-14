
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "How does the TRYBE membership work?",
      answer: "As a TRYBE member, you receive curated experience boxes monthly (Premium plan) or digital content (Basic plan). Each month explores a different theme, helping you discover new hobbies, skills, and perspectives with the guidance and community support you need."
    },
    {
      question: "Can I pause or skip a month?",
      answer: "Yes! We understand life gets busy. Premium members can pause their physical box delivery or switch to digital-only for any month with at least 7 days notice before the next billing cycle."
    },
    {
      question: "What's included in a typical Experience Box?",
      answer: "Each Experience Box contains everything you need to try a new activity or skill, including high-quality supplies, step-by-step guides, and access to online tutorials and community events related to that month's theme."
    },
    {
      question: "How do you select monthly themes?",
      answer: "We curate themes based on community interest, expert recommendations, and developmental psychology principles. Members can also vote on upcoming themes, ensuring we're exploring what matters most to our community."
    },
    {
      question: "Is TRYBE suitable for complete beginners?",
      answer: "Absolutely! TRYBE is specifically designed with beginners in mind. Our experiences require no prior knowledge or skills - just curiosity and willingness to try something new."
    },
    {
      question: "When will TRYBE officially launch?",
      answer: "We're currently in the pre-launch phase and building our waitlist. Join now to be among the first to experience TRYBE and receive special founding member benefits when we launch in the coming months."
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-trybe-orange/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
            Everything you need to know about TRYBE
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="reveal">
              <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
