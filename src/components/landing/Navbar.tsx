import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  pageTitle?: string;
}

const Navbar = ({ pageTitle }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 h-16 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-full items-center justify-between px-6">
        <a href="/" className="text-lg font-bold tracking-tight text-foreground">
          {pageTitle ? (
            pageTitle
          ) : (
            <>
              <span className="gradient-text">AI</span> Employee Factory
            </>
          )}
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-6 md:flex">
          <a href="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Home
          </a>
          <a href="/services" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Services
          </a>
          <Button
            asChild
            className="gradient-bg shadow-glow border-0 text-accent-foreground hover:opacity-90"
          >
            <a href="https://api.leadconnectorhq.com/widget/booking/9BPqaisHVu2RRPbF1tcv" target="_blank" rel="noopener noreferrer">Book Appointment</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-b border-border bg-background px-6 py-4 md:hidden">
          <a href="/" className="block py-2 text-sm font-medium text-muted-foreground">
            Home
          </a>
          <a href="/services" className="block py-2 text-sm font-medium text-muted-foreground">
            Services
          </a>
          <Button
            asChild
            className="gradient-bg shadow-glow mt-2 w-full border-0 text-accent-foreground"
          >
            <a href="https://api.leadconnectorhq.com/widget/booking/9BPqaisHVu2RRPbF1tcv" target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)}>Book Appointment</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
