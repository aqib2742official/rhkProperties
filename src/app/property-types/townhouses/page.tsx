'use client';

import dynamic from 'next/dynamic';
import { SectionLoader } from '@/components/SectionLoader';

const TownhousesContent = dynamic(() => import('@/app/property-types/townhouses/TownhousesContent').then(mod => ({ default: mod.default })), {
  ssr: false,
  loading: () => <SectionLoader minHeight="900px" />,
});

export default function TownhousesPage() {
  return <TownhousesContent />;
}
