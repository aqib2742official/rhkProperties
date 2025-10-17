'use client';

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Bed, Bath, Maximize, MapPin, Check } from "lucide-react";
import { properties } from "../data/properties";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface PropertyDetailProps {
  propertyId: number;
}

export function PropertyDetail({ propertyId }: PropertyDetailProps) {
  const property = properties.find(p => p.id === propertyId);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!property) {
    return (
      <div className="w-full py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="mb-4">Property Not Found</h2>
          <Button asChild>
            <Link href="/properties">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Properties
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return `AED ${(price / 1000000).toFixed(2)}M`;
  };

  return (
    <div className="w-full py-8">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          className="mb-6"
          asChild
        >
          <Link href="/properties">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Properties
          </Link>
        </Button>

        {/* Property Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <h1 className="mb-2">{property.title}</h1>
              <p className="text-muted-foreground flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                {property.location}
              </p>
            </div>
            <div className="text-right">
              <p className="text-3xl text-accent mb-2">{formatPrice(property.price)}</p>
              <div className="flex gap-2">
                <Badge 
                  variant={property.status === "Available" ? "default" : property.status === "Sold" ? "secondary" : "outline"}
                  className={property.status === "Available" ? "bg-accent text-accent-foreground" : ""}
                >
                  {property.status}
                </Badge>
                <Badge variant="secondary">{property.type}</Badge>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Image Gallery */}
          <div className="lg:col-span-2">
            <div className="mb-4 aspect-video rounded-lg overflow-hidden">
              <ImageWithFallback
                src={property.gallery[selectedImage]}
                alt={property.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {property.gallery.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-video rounded overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? "border-accent" : "border-transparent"
                  }`}
                >
                  <ImageWithFallback
                    src={image}
                    alt={`${property.title} - Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Property Info Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="bg-secondary rounded-lg p-6">
              <h3 className="mb-4">Property Details</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Bed className="h-5 w-5" />
                    <span>Bedrooms</span>
                  </div>
                  <span>{property.bedrooms}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Bath className="h-5 w-5" />
                    <span>Bathrooms</span>
                  </div>
                  <span>{property.bathrooms}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Maximize className="h-5 w-5" />
                    <span>Area</span>
                  </div>
                  <span>{property.area.toLocaleString()} sqft</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-accent text-accent-foreground rounded-lg p-6">
              <h3 className="mb-4">Interested in this property?</h3>
              <p className="mb-4 text-accent-foreground/90">Contact us to schedule a viewing or get more information</p>
              <Button 
                className="w-full bg-white text-primary hover:bg-white/90"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Description & Features */}
        <div className="grid lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div>
              <h2 className="mb-4">Description</h2>
              <p className="text-muted-foreground leading-relaxed">{property.description}</p>
            </div>

            {/* Features */}
            <div>
              <h2 className="mb-4">Features & Amenities</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div>
              <h2 className="mb-4">Location</h2>
              <div className="bg-secondary rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="h-12 w-12 mx-auto mb-2" />
                  <p>Map integration available</p>
                  <p className="text-sm">{property.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
