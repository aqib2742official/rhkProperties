'use client';

import dynamic from 'next/dynamic';
import { SectionLoader } from '@/components/SectionLoader';

const CommercialPropertiesContent = dynamic(() => import('@/app/property-types/commercial-properties/CommercialPropertiesContent').then(mod => ({ default: mod.default })), {
  ssr: false,
  loading: () => <SectionLoader minHeight="900px" />,
});

export default function CommercialPropertiesPage() {
  return <CommercialPropertiesContent />;
}
