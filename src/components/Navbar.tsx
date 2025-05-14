
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="font-display text-2xl font-bold text-trybe-teal">TRYBE</span>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#problem" className="text-foreground hover:text-trybe-teal transition-colors">
              Why TRYBE
            </a>
            <a href="#product" className="text-foreground hover:text-trybe-teal transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="text-foreground hover:text-trybe-teal transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-foreground hover:text-trybe-teal transition-colors">
              FAQ
            </a>
            <Button>Join Waitlist</Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-trybe-teal focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#problem"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              Why TRYBE
            </a>
            <a
              href="#product"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <div className="px-3 py-2">
              <Button className="w-full">Join Waitlist</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
