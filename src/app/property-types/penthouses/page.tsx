'use client';

import dynamic from 'next/dynamic';
import { SectionLoader } from '@/components/SectionLoader';

const PenthousesContent = dynamic(() => import('@/app/property-types/penthouses/PenthousesContent').then(mod => ({ default: mod.default })), {
  ssr: false,
  loading: () => <SectionLoader minHeight="900px" />,
});

export default function PenthousesPage() {
  return <PenthousesContent />;
}
