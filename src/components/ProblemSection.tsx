
import { Lightbulb, Compass, Battery } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ProblemCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const ProblemCard = ({ icon, title, description }: ProblemCardProps) => {
  return (
    <Card className="border-2 border-trybe-purple/10 hover:border-trybe-purple/30 transition-all hover:shadow-lg">
      <CardContent className="pt-6">
        <div className="bg-trybe-purple/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="font-display text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

const ProblemSection = () => {
  const problems = [
    {
      icon: <Lightbulb className="text-trybe-purple h-6 w-6" />,
      title: "Feeling Lost",
      description: "Young people struggle to find direction in life, unsure of their passions and purpose."
    },
    {
      icon: <Battery className="text-trybe-purple h-6 w-6" />,
      title: "Burnout & Anxiety",
      description: "Pressure to 'figure it all out' leads to anxiety instead of clarity and exploration."
    },
    {
      icon: <Compass className="text-trybe-purple h-6 w-6" />,
      title: "Lack of Safe Spaces",
      description: "Limited environments to explore identity without the pressure to perform or commit."
    }
  ];

  return (
    <section id="problem" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            The Problem We're Solving
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
            Self-discovery shouldn't be stressful, yet for many young adults, it is.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="reveal">
              <ProblemCard 
                icon={problem.icon} 
                title={problem.title} 
                description={problem.description} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
