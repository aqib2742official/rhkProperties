import dynamic from 'next/dynamic';
import { SectionLoader } from '@/components/SectionLoader';

const Properties = dynamic(() => import('@/page-components/Properties').then(mod => ({ default: mod.Properties })), {
  loading: () => <SectionLoader minHeight="600px" />,
  ssr: true,
});

export default function PropertiesPage() {
  return <Properties />;
}


