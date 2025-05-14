
import { Package2, Monitor, BookOpen, Users, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ProductFeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const ProductFeature = ({ icon, title, description }: ProductFeatureProps) => {
  return (
    <Card className="border-2 border-trybe-teal/20 hover:border-trybe-teal/50 transition-all hover:shadow-lg h-full">
      <CardHeader className="pb-2">
        <div className="bg-trybe-teal/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
          {icon}
        </div>
        <CardTitle className="font-display text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

const ProductOverview = () => {
  const productFeatures = [
    {
      icon: <Package2 className="text-trybe-teal h-6 w-6" />,
      title: "Experience Boxes",
      description: "Monthly themed kits with everything you need to try something new, from art supplies to tech gadgets."
    },
    {
      icon: <Monitor className="text-trybe-teal h-6 w-6" />,
      title: "Digital Kits",
      description: "Videos, challenges, and templates to guide your experience and help you take your exploration further."
    },
    {
      icon: <BookOpen className="text-trybe-teal h-6 w-6" />,
      title: "Discovery Journal",
      description: "A beautiful reflection tool to document your journey and insights after every 3-month exploration cycle."
    },
    {
      icon: <Users className="text-trybe-teal h-6 w-6" />,
      title: "Community",
      description: "Connect with other explorers, share your journeys, wins, and fails in a supportive environment."
    },
    {
      icon: <Award className="text-trybe-teal h-6 w-6" />,
      title: "Purpose Passport",
      description: "Earn playful badges as you try new things, unlocking deeper experiences and special community events."
    }
  ];

  const recentThemes = [
    {
      name: "Zen Zone",
      image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      description: "Mindfulness practices and tools for modern living"
    },
    {
      name: "Tech Curious",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      description: "Beginner-friendly introduction to coding and digital creation"
    },
    {
      name: "Maker Month",
      image: "https://images.unsplash.com/photo-1607346705432-b3408f58102d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      description: "Hands-on crafting experiences to discover your creative side"
    }
  ];

  return (
    <section id="product" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Product Overview
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
            Everything you need for your self-discovery journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {productFeatures.map((feature, index) => (
            <div key={index} className="reveal">
              <ProductFeature 
                icon={feature.icon} 
                title={feature.title} 
                description={feature.description} 
              />
            </div>
          ))}
        </div>

        <div className="mt-24">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-center mb-8">
            Recent Experience Themes
          </h3>
          
          <Tabs defaultValue="zen" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="zen">Zen Zone</TabsTrigger>
              <TabsTrigger value="tech">Tech Curious</TabsTrigger>
              <TabsTrigger value="maker">Maker Month</TabsTrigger>
            </TabsList>
            
            {recentThemes.map((theme, index) => (
              <TabsContent key={index} value={theme.name.toLowerCase().split(" ")[0]} className="pt-4">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="rounded-xl overflow-hidden">
                    <img 
                      src={theme.image} 
                      alt={theme.name} 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-2xl font-display font-bold mb-4">{theme.name}</h4>
                    <p className="text-lg text-muted-foreground mb-6">{theme.description}</p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center">
                        <span className="bg-trybe-teal/10 text-trybe-teal p-1 rounded mr-2">✓</span>
                        <span>Exclusive physical kit with essential tools</span>
                      </li>
                      <li className="flex items-center">
                        <span className="bg-trybe-teal/10 text-trybe-teal p-1 rounded mr-2">✓</span>
                        <span>Digital guides with beginner-friendly instructions</span>
                      </li>
                      <li className="flex items-center">
                        <span className="bg-trybe-teal/10 text-trybe-teal p-1 rounded mr-2">✓</span>
                        <span>Community challenges and expert Q&A sessions</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;
