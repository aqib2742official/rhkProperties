'use client';

import dynamic from 'next/dynamic';
import { PremiumSlider } from "../components/PremiumSlider";
import { HeroHighlights } from "../components/home/HeroHighlights";

// Lazy load home page sections below the fold
const FeaturedProperties = dynamic(() => import("../components/home/FeaturedProperties").then(mod => ({ default: mod.FeaturedProperties })), {
  ssr: false,
});

const WhyChooseUs = dynamic(() => import("../components/home/WhyChooseUs").then(mod => ({ default: mod.WhyChooseUs })), {
  ssr: false,
});

const Neighborhoods = dynamic(() => import("../components/home/Neighborhoods").then(mod => ({ default: mod.Neighborhoods })), {
  ssr: false,
});

const HowItWorks = dynamic(() => import("../components/home/HowItWorks").then(mod => ({ default: mod.HowItWorks })), {
  ssr: false,
});

const TrustCompliance = dynamic(() => import("../components/home/TrustCompliance").then(mod => ({ default: mod.TrustCompliance })), {
  ssr: false,
});

const PropertyCTA = dynamic(() => import("../components/PropertyCTA").then(mod => ({ default: mod.PropertyCTA })), {
  ssr: false,
});

export function Home() {
  return (
    <div className="w-full">
      {/* Premium Hero Slider */}
      <PremiumSlider />

      {/* Hero Highlights Section */}
      <HeroHighlights />

      {/* Featured Properties */}
      <FeaturedProperties />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Neighborhoods Section */}
      <Neighborhoods />

      {/* How It Works */}
      <HowItWorks />

      {/* Trust & Compliance Section */}
      <TrustCompliance />

      {/* CTA Section */}
      <PropertyCTA 
        title="Ready to Find Your Perfect Property?"
        description="Let our expert team help you discover the ideal home or investment opportunity in Dubai"
      />
    </div>
  );
}
