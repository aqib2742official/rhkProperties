'use client';

import { motion } from "motion/react";
import { PropertyCard } from "../PropertyCard";
import { properties } from "../../data/properties";

export function FeaturedProperties() {
  const featuredProperties = properties.filter(p => p.status === "Available").slice(0, 4);

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h2 className="mb-4 text-2xl md:text-3xl lg:text-4xl">Premium Property Portfolio</h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            We curate a select portfolio of villas, penthouses, and apartments across Dubai's flagship neighborhoods.
            Expect verified details, true-to-life media, and clean, consistent presentation so decisions are easy and informed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 auto-rows-fr">
          {featuredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

