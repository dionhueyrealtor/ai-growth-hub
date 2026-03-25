import { useEffect } from "react";
import { Check, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const included = [
  "AI call agent trained on your business to answer and book appointments",
  "Social media and inbound messaging automation",
  "Email & SMS follow-up sequences for every new lead",
  "Integration with your existing calendar or booking system",
];

const Offer = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.aiemployeefactory.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="offer" className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            Get Your AI Sales System Installed in{" "}
            <span className="gradient-text">14 Days.</span>
          </h2>

          <ul className="mt-10 space-y-4 text-left">
            {included.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm text-primary-foreground/80">{item}</span>
              </li>
            ))}
          </ul>

          {/* Risk reversal */}
          <div className="mt-10 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-6">
            <div className="flex items-center justify-center gap-2 mb-3">
              <ShieldCheck className="h-5 w-5 text-accent" />
              <span className="text-sm font-semibold">Risk-Free Guarantee</span>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              If we don't increase your booked appointments within 30 days, you don't pay
              for the second month.
            </p>
          </div>

          <Button
            asChild
            size="lg"
            className="mt-10 bg-primary-foreground text-primary font-semibold text-base hover:bg-primary-foreground/90 shadow-glow"
          >
            <a href="https://api.leadconnectorhq.com/widget/booking/9BPqaisHVu2RRPbF1tcv" target="_blank" rel="noopener noreferrer">
              Schedule Your Free 20-Minute Demo
            </a>
          </Button>

          {/* Embedded Lead Form */}
          <div className="mt-10 w-full" style={{ minHeight: "500px" }}>
            <iframe
              src="https://link.aiemployeefactory.com/widget/form/yuF3rQSbbvIi1gRqKprY"
              style={{ width: "100%", height: "500px", border: "none", borderRadius: "3px" }}
              id="inline-yuF3rQSbbvIi1gRqKprY"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Comp Lead Form"
              data-height="undefined"
              data-layout-iframe-id="inline-yuF3rQSbbvIi1gRqKprY"
              data-form-id="yuF3rQSbbvIi1gRqKprY"
              title="Comp Lead Form"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
