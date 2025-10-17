'use client';

// import { Bed, Bath, Maximize, MapPin } from "lucide-react";
// import Link from "next/link";
import { motion } from "motion/react";
import { Property } from "../data/properties";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
// import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  // const formatPrice = (price: number) => {
  //   return `AED ${(price / 1000000).toFixed(2)}M`;
  // };

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
      <div className="relative w-full overflow-hidden" style={{ paddingBottom: '85%' }}>
        <div className="absolute inset-0">
          <ImageWithFallback
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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

      {/* <CardContent className="p-5 flex flex-col flex-1">
        <div className="mb-3 flex-1">
          <p className="text-muted-foreground flex items-center gap-1 mb-1">
            <MapPin className="h-4 w-4 flex-shrink-0" />
            <span className="text-sm line-clamp-1">{property.location}</span>
          </p>
          <h3 className="line-clamp-2">{property.title}</h3>
        </div>

        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground flex-wrap">
          <div className="flex items-center gap-1">
            <Bed className="h-4 w-4" />
            <span>{property.bedrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4" />
            <span>{property.bathrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <Maximize className="h-4 w-4" />
            <span>{property.area.toLocaleString()} sqft</span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-2 mt-auto">
          <span className="text-accent whitespace-nowrap font-medium">{formatPrice(property.price)}</span>
          <Button 
            variant="outline" 
            size="sm"
            className="hover:bg-accent hover:text-accent-foreground hover:border-accent whitespace-nowrap"
            asChild
          >
            <Link href={`/properties/${property.id}`}>View Details</Link>
          </Button>
        </div>
      </CardContent> */}
    </Card>
    </motion.div>
  );
}
