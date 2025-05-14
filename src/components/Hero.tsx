
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pattern-bg pt-16 md:pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <div className="mt-4">
              <h1 className="text-4xl tracking-tight font-display font-extrabold text-foreground sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                <span className="block">Rediscover yourself,</span>
                <span className="block mt-2 text-trybe-teal">one try at a time.</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
                A monthly membership that delivers curated experiences for self-discovery. 
                Explore new hobbies, skills, and lifestyles with zero pressure, pure curiosity.
              </p>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Button size="lg" className="w-full sm:w-auto px-8 py-6 text-lg">
                    Join the Waitlist
                  </Button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 py-6 text-lg">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg overflow-hidden">
              <div className="relative bg-white p-6 sm:p-8 rounded-xl shadow-xl border-2 border-trybe-teal/20 animate-float">
                <div className="aspect-w-1 aspect-h-1 w-full bg-trybe-purple/10 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1591291621164-2c6367723315?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
                    alt="Experience Box" 
                    className="object-cover h-48 w-full"
                  />
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <span className="inline-block bg-trybe-purple/20 text-trybe-purple px-3 py-1 rounded-full text-sm font-medium mb-2">
                    May Box
                  </span>
                  <h3 className="font-display font-bold text-xl">Zen Zone</h3>
                  <p className="text-muted-foreground mt-1">Discover mindfulness practices to bring calm to your busy life</p>
                </div>
                <div className="absolute -top-4 -right-4 bg-trybe-teal text-white text-xs rounded-full w-16 h-16 flex items-center justify-center font-bold transform rotate-12">
                  NEW!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
