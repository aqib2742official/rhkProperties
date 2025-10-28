'use client';

import dynamic from 'next/dynamic';
import { SectionLoader } from '@/components/SectionLoader';

const FAQContent = dynamic(() => import("@/page-components/FAQ").then(mod => ({ default: mod.FAQ })), {
  ssr: false,
  loading: () => <SectionLoader minHeight="800px" />,
});

export default function FAQPage() {
  return <FAQContent />;
}

