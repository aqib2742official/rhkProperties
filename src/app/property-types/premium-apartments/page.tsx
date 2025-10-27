'use client';

import dynamic from 'next/dynamic';
import { SectionLoader } from '@/components/SectionLoader';

const PremiumApartmentsContent = dynamic(() => import('@/app/property-types/premium-apartments/PremiumApartmentsContent').then(mod => ({ default: mod.default })), {
  ssr: false,
  loading: () => <SectionLoader minHeight="900px" />,
});

export default function PremiumApartmentsPage() {
  return <PremiumApartmentsContent />;
}
