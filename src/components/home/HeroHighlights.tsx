'use client';

import { CheckCircle2, TrendingUp, Clock, Shield } from "lucide-react";

// Highlights defined at the top
const highlights = [
  {
    icon: TrendingUp,
    title: "Live Status Tracking",
    description: "Track your journey from KYC through permit, media, viewings to closing in real time"
  },
  {
    icon: Clock,
    title: "Instant Response Promise",
    description: "Fast, helpful replies to new inquiries backed by our expert support team"
  },
  {
    icon: Shield,
    title: "Compliance Built-In",
    description: "Trakheesi-aligned advertising with bilingual contracts and auditable records"
  },
  {
    icon: CheckCircle2,
    title: "Seamless Closing",
    description: "Complete coordination of NOC, clearances, Trustee appointment, and handover"
  }
];

export function HeroHighlights() {
  return (
    <section className="py-8 md:py-12 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Trust Strip */}
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-block px-4 py-2 bg-accent/10 dark:bg-accent rounded-full">
            <span className="text-accent dark:text-accent-foreground text-xl md:text-2xl lg:text-3xl font-[500]">RERA-aligned • Trakheesi-ready • Privacy-first</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
          {highlights.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="text-center flex flex-col items-center">
                <div className="flex justify-center mb-4">
                  <IconComponent className="h-12 w-12 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-center">{item.title}</h3>
                <p className="text-muted-foreground text-sm text-center w-[300px] mx-auto line-clamp-3">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
