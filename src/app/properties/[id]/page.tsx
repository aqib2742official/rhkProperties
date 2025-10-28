import dynamic from 'next/dynamic';
import { SectionLoader } from '@/components/SectionLoader';

const PropertyDetail = dynamic(() => import('@/page-components/PropertyDetail').then(mod => ({ default: mod.PropertyDetail })), {
  loading: () => <SectionLoader minHeight="800px" />,
  ssr: true,
});

interface PropertyPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { id } = await params;
  return <PropertyDetail propertyId={parseInt(id)} />;
}


