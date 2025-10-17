'use client';

import { CheckCircle2, TrendingUp, Clock, Shield } from "lucide-react";

export function HeroHighlights() {
  return (
    <section className="py-8 md:py-12 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Trust Strip */}
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-block px-4 py-2 bg-accent/10 dark:bg-accent rounded-full">
            <span className="text-accent text-xl md:text-2xl lg:text-3xl font-[500]">RERA-aligned • Trakheesi-ready • Privacy-first</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <TrendingUp className="h-12 w-12 text-accent" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Live Status Tracking</h3>
            <p className="text-muted-foreground text-sm">KYC → Form A → permit → media → viewings → offers → closing. See progress in real time</p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Clock className="h-12 w-12 text-accent" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Instant Response Promise</h3>
            <p className="text-muted-foreground text-sm">New inquiries get a fast, helpful reply backed by an expert support team</p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Shield className="h-12 w-12 text-accent" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Compliance Built-In</h3>
            <p className="text-muted-foreground text-sm">Trakheesi-aligned advertising, bilingual contracts, secure e-signing, auditable records</p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle2 className="h-12 w-12 text-accent" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Seamless Closing</h3>
            <p className="text-muted-foreground text-sm">We coordinate NOC, clearances, Trustee appointment, transfer, and handover</p>
          </div>
        </div>
      </div>
    </section>
  );
}
