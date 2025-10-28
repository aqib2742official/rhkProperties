import dynamic from 'next/dynamic';
import { SectionLoader } from '@/components/SectionLoader';

const BlogPost = dynamic(() => import('@/page-components/BlogPost').then(mod => ({ default: mod.BlogPost })), {
  loading: () => <SectionLoader minHeight="800px" />,
  ssr: true,
});

interface BlogPostPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params;
  return <BlogPost blogId={parseInt(id)} />;
}


