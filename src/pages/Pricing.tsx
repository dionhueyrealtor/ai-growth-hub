import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const BOOKING_URL = "https://api.leadconnectorhq.com/widget/booking/9BPqaisHVu2RRPbF1tcv";

type Plan = {
  name: string;
  monthly: number;
  annual: number;
  features: string[];
  popular?: boolean;
  checkoutUrl: string;
};

const plans: Plan[] = [
  {
    name: "Starter Plan",
    monthly: 197,
    annual: 1970,
    checkoutUrl: "https://buy.stripe.com/8x28wOgG4eJQ2nTdOz0Jq0c",
    features: [
      "Instant speed-to-lead response (24/7)",
      "Multichannel AI across SMS, chat, and email",
      "AI qualification + appointment booking",
      "Automated follow-up + nurture sequences",
      "Real-time conversation feed",
      "Easy A2P registration + guided setup",
      "Ongoing support",
      "Cancel anytime",
      "Up to 500 active leads in CRM",
      "1 team member included",
    ],
  },
  {
    name: "Pro Plan",
    monthly: 497,
    annual: 4970,
    features: [
      "Everything in Starter, plus:",
      "Up to 1,000 active leads in CRM",
      "Up to 3 team members included",
    ],
  },
  {
    name: "Scale Plan",
    monthly: 797,
    annual: 7970,
    popular: true,
    features: [
      "Everything in Pro, plus:",
      "Up to 2,500 active leads in CRM",
      "Up to 5 team members included",
      "Exclusive Voice AI",
    ],
  },
  {
    name: "Elite Plan",
    monthly: 1197,
    annual: 11970,
    features: [
      "Everything in Scale, plus:",
      "Unlimited active leads in CRM",
      "Up to 10 team members included",
      "Exclusive Voice AI (priority access)",
    ],
  },
];

const usageRows = [
  { category: "Voice AI", type: "Usage", rate: "$0.17 / min", example: "~59 minutes" },
  { category: "Outbound Calls", type: "Usage", rate: "$0.0196 / min", example: "~510 minutes" },
  { category: "Inbound Calls", type: "Usage", rate: "$0.0119 / min", example: "~840 minutes" },
  { category: "SMS", type: "Usage", rate: "$0.0116 / segment", example: "~860 segments" },
  { category: "Emails", type: "Usage", rate: "$0.0009 / email", example: "~11,110 emails" },
  { category: "Slack Sending", type: "Premium Action", rate: "$0.01 / action", example: "1,000 actions" },
  { category: "Phone Numbers", type: "Monthly", rate: "$1–$3 / number", example: "—" },
  { category: "A2P 10DLC Submission", type: "One-Time", rate: "$25–$30", example: "—" },
];

const Pricing = () => {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <section className="text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose the plan that fits your business. Plans start at $197 per month.
          </p>
          <p className="mt-4 text-base font-semibold text-foreground">
            One-time setup fee: <span className="gradient-text font-bold">$0</span> (applies to all plans)
          </p>

          {/* Toggle */}
          <div className="mt-8 inline-flex items-center rounded-full border border-border bg-card p-1 shadow-card">
            <button
              onClick={() => setBilling("monthly")}
              className={`rounded-full px-6 py-2 text-sm font-semibold transition-all ${
                billing === "monthly"
                  ? "gradient-bg text-accent-foreground shadow-glow"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("annual")}
              className={`relative rounded-full px-6 py-2 text-sm font-semibold transition-all ${
                billing === "annual"
                  ? "gradient-bg text-accent-foreground shadow-glow"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Annual
              <span className="absolute -top-2 -right-2 rounded-full bg-emerald-500 px-2 py-0.5 text-[10px] font-bold text-white">
                Save
              </span>
            </button>
          </div>
        </section>

        {/* Plans grid */}
        <section className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => {
            const price = billing === "monthly" ? plan.monthly : Math.round(plan.annual / 12);
            return (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border bg-card p-6 shadow-card transition-all hover:shadow-card-hover ${
                  plan.popular ? "border-accent ring-2 ring-accent/40" : "border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="gradient-bg shadow-glow rounded-full px-4 py-1 text-xs font-bold text-accent-foreground">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-center text-base font-bold uppercase tracking-wider text-foreground">
                  {plan.name}
                </h3>
                <div className="mt-4 text-center">
                  <span className="text-4xl font-extrabold text-foreground">${price}</span>
                  <span className="text-sm text-muted-foreground">/month</span>
                  {billing === "annual" && (
                    <p className="mt-1 text-xs text-muted-foreground">billed annually</p>
                  )}
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-500" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className="gradient-bg shadow-glow mt-6 w-full border-0 text-accent-foreground hover:opacity-90"
                >
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                    Get Started
                  </a>
                </Button>
              </div>
            );
          })}
        </section>

        {/* Usage & Additional Costs */}
        <section className="mt-20">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
              Usage & Additional Costs
            </h2>
            <p className="mt-3 text-muted-foreground">
              Usage-based rates apply in addition to your plan. Below are approximate volumes for ~$10 in usage.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-card">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-secondary text-foreground">
                  <tr>
                    <th className="px-6 py-4 font-semibold">Category</th>
                    <th className="px-6 py-4 font-semibold">Type</th>
                    <th className="px-6 py-4 font-semibold">Rate</th>
                    <th className="px-6 py-4 font-semibold">~$10 Example</th>
                  </tr>
                </thead>
                <tbody>
                  {usageRows.map((row) => (
                    <tr key={row.category} className="border-t border-border">
                      <td className="px-6 py-4 font-medium text-foreground">{row.category}</td>
                      <td className="px-6 py-4 text-muted-foreground">{row.type}</td>
                      <td className="px-6 py-4 text-muted-foreground">{row.rate}</td>
                      <td className="px-6 py-4 text-muted-foreground">{row.example}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            $0 setup fee on all plans. Additional team members:{" "}
            <span className="font-semibold text-foreground">$97/month each</span>.
          </p>
        </section>

        {/* CTA */}
        <section className="mt-20 rounded-3xl border border-border bg-card p-10 text-center shadow-card">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Not sure which plan is right for you?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Book a free consultation and we'll help you pick the perfect fit.
          </p>
          <Button
            asChild
            size="lg"
            className="gradient-bg shadow-glow mt-6 border-0 text-accent-foreground hover:opacity-90"
          >
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              Book Your Free Consultation
            </a>
          </Button>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
