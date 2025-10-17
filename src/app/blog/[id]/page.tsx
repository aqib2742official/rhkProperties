import { BlogPost } from '@/page-components/BlogPost';

interface BlogPostPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params;
  return <BlogPost blogId={parseInt(id)} />;
}


