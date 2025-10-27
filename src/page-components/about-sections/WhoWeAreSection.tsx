'use client';

import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import teamPhoto from "@/assets/images/about-team-photo.jpg";

export default function WhoWeAreSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="mb-4 md:mb-6 text-2xl md:text-3xl lg:text-4xl">Who We Are</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2025, we set out to build a client-first, technology-enabled real-estate experience for Dubai, one that's as transparent as it is premium.
                Our focus is simple: elevate every step of the journey with clear communication, disciplined process, and precise execution.
              </p>
              <p>
                We combine professional service with modern tools to deliver an experience that feels both premium and refreshingly straightforward.
                Every listing is verified, every milestone is tracked, and every interaction is designed to move you forward with confidence.
              </p>
              <p>
                Our team brings deep market knowledge, proven negotiation skills, and a genuine commitment to protecting your interests.
                Whether you're buying your first home or managing a property portfolio, we provide the clarity and support you deserve.
              </p>
            </div>
          </div>
          <div
            className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden will-change-transform"
            style={{ pointerEvents: 'none' }}
          >
            <ImageWithFallback
              src={teamPhoto.src}
              alt="RHK Properties Team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

