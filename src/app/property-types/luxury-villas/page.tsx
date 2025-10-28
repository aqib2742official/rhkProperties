'use client';

import dynamic from 'next/dynamic';
import { SectionLoader } from '@/components/SectionLoader';

const LuxuryVillasContent = dynamic(() => import('./LuxuryVillasContent').then(mod => ({ default: mod.default })), {
  ssr: false,
  loading: () => <SectionLoader minHeight="900px" />,
});

export default function LuxuryVillasPage() {
  return <LuxuryVillasContent />;
}
