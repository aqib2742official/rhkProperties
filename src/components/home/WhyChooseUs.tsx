'use client';

import Image from "next/image";
import { Building2, Users, TrendingUp, FileCheck } from "lucide-react";
import officeImage from "@/assets/images/home-about-office.jpg";

export function WhyChooseUs() {
  return (
    <section className="py-12 md:py-16 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="mb-6 text-xl md:text-2xl lg:text-3xl">Why Choose Us</h2>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-accent/10 dark:bg-accent flex items-center justify-center">
                    <Users className="h-5 w-5 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-lg">Expert Guidance</h3>
                  <p className="text-muted-foreground text-sm">
                    Dedicated advisors who tune the search to your lifestyle and goals.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-accent/10 dark:bg-accent flex items-center justify-center">
                    <Building2 className="h-5 w-5 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-lg">Prime Locations</h3>
                  <p className="text-muted-foreground text-sm">
                    Access to sought-after homes in prestigious communities.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-accent/10 dark:bg-accent flex items-center justify-center">
                    <FileCheck className="h-5 w-5 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-lg">Transparent Process</h3>
                  <p className="text-muted-foreground text-sm">
                    Clear steps, proactive updates, honest timelines.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-accent/10 dark:bg-accent flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-lg">Investor Mindset</h3>
                  <p className="text-muted-foreground text-sm">
                    Market context that helps you protect value and capture upside.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[350px] lg:h-[400px] rounded-lg overflow-hidden">
            <Image
              src={officeImage}
              alt="RHK Properties LLC Office"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

