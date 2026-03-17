import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, Share2, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Phone,
    title: "AI Call Handling & Appointment Booking",
    description:
      "We build and train an AI voice agent that answers your incoming calls, handles questions, and books appointments automatically—24/7.",
    bullets: [
      "Answers every call instantly (no missed opportunities)",
      "Handles FAQs and qualifies leads",
      "Books directly into your calendar",
    ],
  },
  {
    icon: MessageSquare,
    title: "Automated Lead Follow-Up (SMS & Email)",
    description:
      "We set up intelligent follow-up systems that respond to every new lead immediately and continue nurturing them until they book.",
    bullets: [
      "Instant replies to new inquiries",
      "Automated SMS and email sequences",
      "Converts cold or delayed leads into appointments",
    ],
  },
  {
    icon: Share2,
    title: "Social Media & Inbound Lead Automation",
    description:
      "We turn your social media and inbound messages into a consistent pipeline of qualified leads and booked appointments.",
    bullets: [
      "Automated responses to DMs and messages",
      "Consistent posting and engagement systems",
      "Converts attention into real inquiries",
    ],
  },
];

const steps = [
  "We learn your business and sales process",
  "We build and install your AI systems",
  "We optimize everything for more booked appointments",
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="container mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl">
            AI Systems That Turn Leads Into a{" "}
            <span className="gradient-text">Booked Appointment.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            We install and manage AI-powered sales and follow-up systems that help you respond
            faster, book more appointments, and grow—without hiring more staff.
          </p>
          <Button
            asChild
            size="lg"
            className="gradient-bg shadow-glow mt-10 border-0 text-base font-semibold text-accent-foreground hover:opacity-90"
          >
            <a href="https://api.leadconnectorhq.com/widget/booking/9BPqaisHVu2RRPbF1tcv" target="_blank" rel="noopener noreferrer">Book a Free Consultation</a>
          </Button>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={i}
                  className="group rounded-2xl bg-card p-8 shadow-card transition-all duration-200 hover:shadow-card-hover hover:-translate-y-1"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl gradient-bg text-accent-foreground">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-5 space-y-3">
                    {service.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span className="text-sm text-foreground/80">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className="gradient-bg shadow-glow mt-6 w-full border-0 text-accent-foreground hover:opacity-90"
                  >
                    <a href="https://api.leadconnectorhq.com/widget/booking/9BPqaisHVu2RRPbF1tcv" target="_blank" rel="noopener noreferrer">Book a Consultation</a>
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-border py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            Simple. Done For You. <span className="gradient-text">Built to Perform.</span>
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full gradient-bg text-sm font-bold text-accent-foreground">
                  {i + 1}
                </div>
                <p className="text-sm font-medium text-foreground">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="offer" className="bg-primary py-20 md:py-28">
        <div className="container mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-primary-foreground md:text-4xl">
            Ready to Stop Missing Opportunities?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-primary-foreground/70">
            Let's show you exactly how this would work for your business.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-10 bg-accent-foreground text-primary font-semibold hover:bg-accent-foreground/90"
          >
            <a href="https://api.leadconnectorhq.com/widget/booking/9BPqaisHVu2RRPbF1tcv" target="_blank" rel="noopener noreferrer">Book Your Free Consultation</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
