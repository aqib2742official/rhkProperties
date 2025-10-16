'use client';

import { Calendar, User, ArrowRight } from "lucide-react";
import Link from "next/link";
import { blogPosts } from "../data/properties";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Blog() {
  return (
    <div className="w-full py-6">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="mb-4">Insights & Guides</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Short reads on market trends, community deep-dives, home tours, and closing essentials. Practical context to help you decide with confidence
          </p>
        </div>

        {/* Featured Post */}
        {blogPosts.length > 0 && (
          <Card className="mb-8 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="aspect-[4/3] md:aspect-auto">
                <ImageWithFallback
                  src={blogPosts[blogPosts.length - 1].image}
                  alt={blogPosts[blogPosts.length - 1].title}
                  className="w-full max-h-[300px] object-cover"
                />
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <Badge className="w-fit mb-3 bg-accent text-accent-foreground">
                  {blogPosts[blogPosts.length - 1].category}
                </Badge>
                <h2 className="mb-3">{blogPosts[blogPosts.length - 1].title}</h2>
                <p className="text-muted-foreground mb-4">{blogPosts[blogPosts.length - 1].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{blogPosts[blogPosts.length - 1].author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(blogPosts[blogPosts.length - 1].date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                </div>
                <Button 
                  className="w-fit bg-accent text-accent-foreground hover:bg-accent/90"
                  asChild
                >
                  <Link href={`/blog/${blogPosts[blogPosts.length - 1].id}`}>
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </div>
          </Card>
        )}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
          {blogPosts.slice(1).map((post) => (
            <Card key={post.id} className="group overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
              <div className="relative w-full overflow-hidden" style={{ paddingBottom: '75%' }}>
                <div className="absolute inset-0">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <CardContent className="p-6 flex flex-col flex-1">
                <Badge variant="secondary" className="mb-3 w-fit">
                  {post.category}
                </Badge>
                <h3 className="mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-1">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4 flex-wrap">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3 flex-shrink-0" />
                    <span className="truncate">{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3 flex-shrink-0" />
                    <span className="whitespace-nowrap">{new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric',
                      year: 'numeric' 
                    })}</span>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="hover:bg-accent hover:text-accent-foreground hover:border-accent mt-auto self-start"
                  asChild
                >
                  <Link href={`/blog/${post.id}`}>
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
