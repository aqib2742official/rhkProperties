'use client';

import dynamic from 'next/dynamic';
import { SectionLoader } from '@/components/SectionLoader';

const ContactContent = dynamic(() => import('@/page-components/Contact').then(mod => ({ default: mod.Contact })), {
  ssr: false,
  loading: () => <SectionLoader minHeight="700px" />,
});

export default function ContactPage() {
  return <ContactContent />;
}


