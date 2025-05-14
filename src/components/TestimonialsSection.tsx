
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { QuoteIcon } from "lucide-react";

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  avatar?: string;
  initials: string;
}

const Testimonial = ({ quote, name, role, avatar, initials }: TestimonialProps) => {
  return (
    <Card className="h-full">
      <CardContent className="pt-6">
        <QuoteIcon className="h-8 w-8 text-trybe-teal opacity-40 mb-4" />
        <p className="text-lg mb-6 italic">"{quote}"</p>
        <div className="flex items-center">
          <Avatar className="h-10 w-10 mr-3">
            {avatar ? <AvatarImage src={avatar} alt={name} /> : null}
            <AvatarFallback className="bg-trybe-purple text-white">{initials}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "TRYBE helped me discover a passion for pottery I never knew I had. It's amazing how trying something new without pressure can lead to such joy!",
      name: "Aisha P.",
      role: "Marketing Professional",
      initials: "AP"
    },
    {
      quote: "Being neurodivergent, I've always struggled with finding activities that work for me. TRYBE's approach made exploration stress-free and enjoyable.",
      name: "Raj S.",
      role: "Software Developer",
      initials: "RS"
    },
    {
      quote: "After feeling burned out in my career, the monthly TRYBE boxes gave me something to look forward to. I've rediscovered my creative side!",
      name: "Maya K.",
      role: "Recent Graduate",
      initials: "MK"
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            What Our Members Say
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
            90% of our pilot users reported feeling clearer and happier
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="reveal">
              <Testimonial {...testimonial} />
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-trybe-teal/5 border border-trybe-teal/20 rounded-full px-6 py-2">
            <span className="text-trybe-teal font-medium">500+ people</span>
            <span className="mx-2 text-muted-foreground">have joined our waitlist</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
