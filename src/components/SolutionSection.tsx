
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const SolutionSection = () => {
  const benefits = [
    "Monthly themed kits for trying new hobbies and skills",
    "Digital resources to guide your experience",
    "Reflection tools to capture your journey",
    "Supportive community to share with",
    "Gamified approach to make self-discovery fun"
  ];

  return (
    <section className="py-16 md:py-24 bg-trybe-teal/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="bg-white border-2 border-trybe-teal/20 p-6 rounded-xl shadow-xl transform rotate-3 mb-8 mx-auto max-w-sm md:max-w-md animate-float">
                <h3 className="font-display font-bold text-xl text-center mb-4">June Experience Box</h3>
                <div className="aspect-w-4 aspect-h-3">
                  <img 
                    src="https://images.unsplash.com/photo-1603357465999-314ce0bc4ee9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                    alt="Experience Box Content" 
                    className="rounded-lg object-cover w-full h-48"
                  />
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <div className="bg-trybe-teal/10 p-2 rounded-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1598521114137-d39a90565213?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
                      alt="Item 1" 
                      className="rounded-md w-full h-16 object-cover"
                    />
                  </div>
                  <div className="bg-trybe-purple/10 p-2 rounded-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1546484475-7f7bd55792da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
                      alt="Item 2" 
                      className="rounded-md w-full h-16 object-cover"
                    />
                  </div>
                  <div className="bg-trybe-orange/10 p-2 rounded-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1547336456-a4acbe35240c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
                      alt="Item 3" 
                      className="rounded-md w-full h-16 object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-6 -rotate-6 bg-white border-2 border-trybe-purple/20 p-4 rounded-xl shadow-lg max-w-[200px]">
                <h4 className="font-display font-bold text-sm mb-2">Discovery Journal</h4>
                <p className="text-xs text-muted-foreground">Document your journey and track your growth</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0 lg:col-span-7">
            <div className="text-center lg:text-left lg:max-w-xl">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                The Solution: <span className="text-trybe-teal">TRYBE</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We believe self-discovery should be fun, pressure-free, and accessible. TRYBE delivers curated monthly experiences that help you explore who you are, what brings you joy, and where your potential lies.
              </p>
              
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3 reveal">
                    <CheckCircle className="h-6 w-6 text-trybe-teal flex-shrink-0 mt-0.5" />
                    <p className="text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Button size="lg" className="px-8">
                  Explore TRYBE
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
