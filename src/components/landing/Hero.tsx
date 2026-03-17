import { Phone, MessageSquare, CalendarCheck, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const statusItems = [
  { icon: Phone, text: "Incoming call answered", time: "Just now" },
  { icon: MessageSquare, text: "Lead qualified via SMS", time: "2 min ago" },
  { icon: CalendarCheck, text: "Appointment booked", time: "5 min ago" },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % statusItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="container mx-auto grid gap-12 px-6 md:grid-cols-2 md:items-center md:gap-16">
        {/* Text */}
        <div className="max-w-xl">
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Your AI Sales Employee That{" "}
            <span className="gradient-text">Never Sleeps.</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            We build and install an AI version of your best salesperson to answer calls,
            respond to leads, and book appointments 24/7—while automated follow-ups turn
            every inquiry into revenue.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              "Never miss another call—your AI answers, qualifies, and books instantly",
              "Turn social media, website, and SMS inquiries into real appointments automatically",
              "Every lead gets consistent follow-up until they're ready to book",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm text-foreground/80">{item}</span>
              </li>
            ))}
          </ul>

          <Button
            asChild
            size="lg"
            className="gradient-bg shadow-glow mt-10 border-0 text-base font-semibold text-accent-foreground hover:opacity-90"
          >
            <a href="#offer">Book Your Free Growth Call</a>
          </Button>
        </div>

        {/* Status Feed Visual */}
        <div className="relative mx-auto w-full max-w-sm md:mx-0">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <div className="mb-4 flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-green-500 animate-status-pulse" />
              <span className="text-xs font-medium text-muted-foreground">AI Agent Live</span>
            </div>
            <div className="space-y-3">
              {statusItems.map((item, i) => {
                const Icon = item.icon;
                const isActive = i === activeIndex;
                return (
                  <div
                    key={i}
                    className={`flex items-center gap-3 rounded-xl p-3 transition-all duration-500 ${
                      isActive
                        ? "bg-accent/10 shadow-sm scale-[1.02]"
                        : "bg-secondary/50"
                    }`}
                  >
                    <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                      isActive ? "gradient-bg text-accent-foreground" : "bg-muted text-muted-foreground"
                    }`}>
                      <Icon size={18} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{item.text}</p>
                      <p className="text-xs text-muted-foreground">{item.time}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
