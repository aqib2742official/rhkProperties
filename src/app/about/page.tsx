'use client';

import dynamic from 'next/dynamic';
import { SectionLoader } from '@/components/SectionLoader';
import { PropertyCTA } from '@/components/PropertyCTA';

// Dynamic imports for all sections
const HeroSection = dynamic(() => import('@/page-components/about-sections/HeroSection'), {
  ssr: false,
  loading: () => <SectionLoader minHeight="500px" />,
});

const WhoWeAreSection = dynamic(() => import('@/page-components/about-sections/WhoWeAreSection'), {
  ssr: false,
  loading: () => <SectionLoader minHeight="500px" />,
});

const CoreValuesSection = dynamic(() => import('@/page-components/about-sections/CoreValuesSection'), {
  ssr: false,
  loading: () => <SectionLoader minHeight="500px" />,
});

const MissionVisionSection = dynamic(() => import('@/page-components/about-sections/MissionVisionSection'), {
  ssr: false,
  loading: () => <SectionLoader minHeight="400px" />,
});

const CustomerPathwaySection = dynamic(() => import('@/page-components/about-sections/CustomerPathwaySection'), {
  ssr: false,
  loading: () => <SectionLoader minHeight="600px" />,
});

const ServicesSection = dynamic(() => import('@/page-components/about-sections/ServicesSection'), {
  ssr: false,
  loading: () => <SectionLoader minHeight="500px" />,
});

const PlatformFeaturesSection = dynamic(() => import('@/page-components/about-sections/PlatformFeaturesSection'), {
  ssr: false,
  loading: () => <SectionLoader minHeight="500px" />,
});

export default function AboutPage() {
  return (
    <div className="w-full">
      <HeroSection />
      <WhoWeAreSection />
      <CoreValuesSection />
      <MissionVisionSection />
      <CustomerPathwaySection />
      <ServicesSection />
      <PlatformFeaturesSection />
      <PropertyCTA 
        title="Ready to Work With Us?"
        description="Let our expert team guide you through your real estate journey with professionalism and care"
      />
    </div>
  );
}
