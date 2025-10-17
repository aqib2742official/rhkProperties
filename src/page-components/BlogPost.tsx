'use client';

import { ArrowLeft, Calendar, User } from "lucide-react";
import Link from "next/link";
import { blogPosts } from "../data/properties";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface BlogPostProps {
  blogId: number;
}

export function BlogPost({ blogId }: BlogPostProps) {
  const post = blogPosts.find(p => p.id === blogId);

  if (!post) {
    return (
      <div className="w-full py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="mb-4">Blog Post Not Found</h2>
          <Button asChild>
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-8">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          className="mb-6"
          asChild
        >
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>

        {/* Post Header */}
        <article>
          <Badge className="mb-4 bg-accent text-accent-foreground">
            {post.category}
          </Badge>
          
          <h1 className="mb-6">{post.title}</h1>

          <div className="flex items-center gap-4 text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <User className="h-5 w-5" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="aspect-video rounded-lg overflow-hidden mb-8">
            <ImageWithFallback
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Post Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-6">
              {post.excerpt}
            </p>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                Dubai's real estate market continues to demonstrate remarkable resilience and growth, positioning itself as one of the most attractive property investment destinations globally. The city's strategic location, world-class infrastructure, and forward-thinking policies have created an environment where both local and international investors can thrive.
              </p>
              
              <h2>Market Performance and Trends</h2>
              <p>
                The UAE property market has shown consistent growth over the past year, with particular strength in the luxury segment. Premium waterfront properties and downtown penthouses have seen especially strong demand from international buyers seeking second homes and investment opportunities.
              </p>
              
              <h2>Investment Opportunities</h2>
              <p>
                For investors looking to enter the Dubai real estate market, several key areas offer exceptional potential. Palm Jumeirah continues to be a prime location for luxury villa investments, while Downtown Dubai attracts those seeking high-rise apartments with iconic views. Dubai Marina and JBR remain popular for their vibrant lifestyle offerings.
              </p>
              
              <h2>Future Outlook</h2>
              <p>
                Looking ahead, the market shows strong fundamentals supported by major infrastructure projects, Expo 2020 legacy developments, and continued government initiatives to attract international investment. The introduction of long-term visas and investor-friendly regulations further enhances Dubai's appeal as a property investment destination.
              </p>
              
              <p>
                Whether you're a first-time buyer, seasoned investor, or looking for your dream home, the Dubai real estate market offers diverse opportunities across various price points and property types. Working with experienced real estate professionals can help you navigate the market and make informed decisions aligned with your goals.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 bg-secondary rounded-lg p-8 text-center">
            <h3 className="mb-4">Interested in Dubai Real Estate?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our team of experts is ready to help you find the perfect property or answer any questions about the Dubai real estate market.
            </p>
            <Button 
              className="bg-accent text-accent-foreground hover:bg-accent/90"
              asChild
            >
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </article>

        {/* Related Posts */}
        <div className="mt-16">
          <h2 className="mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts.filter(p => p.id !== post.id).slice(0, 2).map((relatedPost) => (
              <Link href={`/blog/${relatedPost.id}`} key={relatedPost.id}>
                <div className="group cursor-pointer bg-secondary rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <Badge variant="secondary" className="mb-2">
                    {relatedPost.category}
                  </Badge>
                  <h3 className="mb-2 line-clamp-2">{relatedPost.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{relatedPost.excerpt}</p>
                </div>
              </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
