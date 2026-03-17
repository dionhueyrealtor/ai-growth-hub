import { Clock, ShieldCheck, MailCheck, UserMinus, CalendarPlus } from "lucide-react";

const benefits = [
  { icon: Clock, text: "Every call and message gets answered instantly—even after hours" },
  { icon: ShieldCheck, text: "Leads are handled professionally instead of slipping through the cracks" },
  { icon: MailCheck, text: 'Automated follow-ups convert "just looking" into booked appointments' },
  { icon: UserMinus, text: "No need to hire, train, or manage additional staff" },
  { icon: CalendarPlus, text: "Your calendar fills up while you focus on running your business" },
];

const WhyThisWorks = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/40">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            Why This Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Most businesses don't have a lead problem—they have a{" "}
            <span className="font-semibold text-foreground">follow-up problem</span>. We fix that.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div key={i} className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg gradient-bg text-accent-foreground">
                  <Icon size={18} />
                </div>
                <p className="text-sm leading-relaxed text-foreground/80 pt-2">{b.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyThisWorks;
