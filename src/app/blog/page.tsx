'use client';

import dynamic from 'next/dynamic';
import { SectionLoader } from '@/components/SectionLoader';

const BlogContent = dynamic(() => import('@/page-components/Blog').then(mod => ({ default: mod.Blog })), {
  ssr: false,
  loading: () => <SectionLoader minHeight="800px" />,
});

export default function BlogPage() {
  return <BlogContent />;
}


