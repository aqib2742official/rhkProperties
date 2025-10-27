'use client';

import { motion } from "motion/react";
import { Property } from "../data/properties";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface PropertyCardProps {
  property: Property;
  priority?: boolean;
}

export function PropertyCard({ property, priority = false }: PropertyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="h-full"
    >
      <Card className="group overflow-hidden h-full flex flex-col">
        <div className="relative w-full overflow-hidden" style={{ paddingBottom: '75%' }}>
          <div className="absolute inset-0">
            <ImageWithFallback
              src={property.image}
              alt={property.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              priority={priority}
              quality={priority ? 85 : 75}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="absolute top-3 left-3 flex gap-2 z-10">
            <Badge
              variant={property.status === "Available" ? "default" : property.status === "Sold" ? "secondary" : "outline"}
              className={property.status === "Available" ? "bg-accent text-accent-foreground" : ""}
            >
              {property.status}
            </Badge>
            <Badge variant="secondary">{property.type}</Badge>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
