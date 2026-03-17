import { Sparkles, Stethoscope, Activity, Wrench, Scissors, Users } from "lucide-react";

const industries = [
  { icon: Sparkles, title: "Med Spas", desc: "Stop losing thousands each month from missed calls and slow responses." },
  { icon: Stethoscope, title: "Dental & Ortho Clinics", desc: "End the phone tag with new patients and fill your schedule faster." },
  { icon: Activity, title: "Chiropractors & PT", desc: "Get consistent bookings without hiring more front-desk staff." },
  { icon: Wrench, title: "Home Services", desc: "Respond faster than competitors—HVAC, plumbing, roofing, and more." },
  { icon: Scissors, title: "Salons & Beauty", desc: "Handle the flood of DMs and scheduling requests automatically." },
  { icon: Users, title: "Coaches & Consultants", desc: "Fill your calendar with qualified calls while you focus on clients." },
];

const WhoWeHelp = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            Who We Help
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We work with local businesses that rely on calls and appointments to generate
            revenue—and can't afford to miss opportunities.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group rounded-2xl border border-border bg-card p-6 transition-all duration-200 hover:shadow-card-hover hover:border-accent/30"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Icon size={20} />
                </div>
                <h3 className="font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;
