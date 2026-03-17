import { UserCheck, Zap, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: UserCheck,
    step: "01",
    title: "Clone Your Best Salesperson",
    description:
      "We learn your offers, scripts, FAQs, and booking process, then build and train an AI agent that sounds and responds like your top performer. It handles calls, website chats, and messages seamlessly.",
  },
  {
    icon: Zap,
    step: "02",
    title: "Automate Your Follow-Up",
    description:
      "We set up automated social posting, lead capture, and instant email/SMS follow-up so every new inquiry gets a fast, professional response—without you lifting a finger.",
  },
  {
    icon: TrendingUp,
    step: "03",
    title: "Optimize for More Appointments",
    description:
      "We track performance, refine messaging, and continuously improve your system so more leads turn into booked appointments over time.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/40">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Three simple steps to a fully automated sales system.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="group rounded-2xl bg-card p-8 shadow-card transition-all duration-200 hover:shadow-card-hover hover:-translate-y-1"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl gradient-bg text-accent-foreground">
                    <Icon size={20} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Step {s.step}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
