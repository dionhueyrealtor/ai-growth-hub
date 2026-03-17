import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="text-lg font-bold text-foreground">AI Employee Factory LLC</p>
            <div className="mt-4 space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <MapPin size={14} className="shrink-0" />
                369 Logan Ave, Sharon, PA 16146
              </p>
              <p className="flex items-center gap-2">
                <Phone size={14} className="shrink-0" />
                724-734-8757
              </p>
              <p className="flex items-center gap-2">
                <Mail size={14} className="shrink-0" />
                info@aiemployeefactory.com
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-2 flex items-end justify-start md:justify-end gap-6">
            <a href="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Use
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} AI Employee Factory LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
