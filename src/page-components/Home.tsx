'use client';

import dynamic from 'next/dynamic';
import { PremiumSlider } from "../components/PremiumSlider";
import { HeroHighlights } from "../components/home/HeroHighlights";
import { SectionLoader } from "../components/SectionLoader";
import { PropertyCTA } from "../components/PropertyCTA";

// Lazy load home page sections below the fold with loading fallbacks
const FeaturedProperties = dynamic(() => import("../components/home/FeaturedProperties"), {
  ssr: false,
  loading: () => <SectionLoader minHeight="500px" />,
});

const WhyChooseUs = dynamic(() => import("../components/home/WhyChooseUs"), {
  ssr: false,
  loading: () => <SectionLoader minHeight="600px" />,
});

const Neighborhoods = dynamic(() => import("../components/home/Neighborhoods"), {
  ssr: false,
  loading: () => <SectionLoader minHeight="600px" />,
});

const HowItWorks = dynamic(() => import("../components/home/HowItWorks"), {
  ssr: false,
  loading: () => <SectionLoader minHeight="500px" />,
});

const TrustCompliance = dynamic(() => import("../components/home/TrustCompliance"), {
  ssr: false,
  loading: () => <SectionLoader minHeight="400px" />,
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
