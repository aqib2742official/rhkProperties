import { PropertyDetail } from '@/page-components/PropertyDetail';

interface PropertyPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { id } = await params;
  return <PropertyDetail propertyId={parseInt(id)} />;
}


