
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const CallToAction = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setEmail("");
      toast({
        title: "Success!",
        description: "You've joined the TRYBE waitlist. We'll be in touch soon!",
        duration: 5000,
      });
    }, 1500);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-trybe-teal/20 to-trybe-purple/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Join the Movement
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Be among the first to experience TRYBE and get special founding member benefits when we launch.
          </p>
          
          <div className="mt-8">
            <form onSubmit={handleSubmit} className="sm:flex sm:max-w-lg sm:mx-auto">
              <div className="min-w-0 flex-1">
                <Input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full px-4 py-6 rounded-l-md"
                />
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Button type="submit" disabled={loading} size="lg" className="w-full py-6">
                  {loading ? "Joining..." : "Join Waitlist"}
                </Button>
              </div>
            </form>
            <p className="mt-3 text-sm text-muted-foreground">
              By signing up, you agree to our Privacy Policy and Terms of Service.
            </p>
          </div>
          
          <div className="mt-16 flex justify-center space-x-6">
            <div className="bg-white shadow rounded-lg p-4 text-center w-32">
              <div className="text-4xl font-bold text-trybe-teal mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Early Interest</div>
            </div>
            <div className="bg-white shadow rounded-lg p-4 text-center w-32">
              <div className="text-4xl font-bold text-trybe-purple mb-1">15</div>
              <div className="text-sm text-muted-foreground">Pilot Users</div>
            </div>
            <div className="bg-white shadow rounded-lg p-4 text-center w-32">
              <div className="text-4xl font-bold text-trybe-orange mb-1">90%</div>
              <div className="text-sm text-muted-foreground">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
