'use client';

import { Building2, Home, MapPin, TrendingUp, Shield, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../../../components/figma/ImageWithFallback";
import { PropertyCTA } from "../../../components/PropertyCTA";
import villaHero from "@/assets/images/villa-hero.jpg";
import villaPool from "@/assets/images/villa-pool.jpg";
import villaModern from "@/assets/images/villa-modern.jpg";
import villaContemporary from "@/assets/images/villa-contemporary.jpg";
import villaLiving from "@/assets/images/villa-living.jpg";

export default function LuxuryVillasPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/90 to-accent/70 z-10" />
        <motion.div
          initial={{ scale: 1.05, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0"
        >
          <ImageWithFallback
            src={villaHero.src}
            alt="Luxury Villas in Dubai"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="container mx-auto px-4 lg:px-8 z-20 text-white text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl mb-4 px-2">Luxury Villas in Dubai</h1>
            <p className="text-base md:text-xl text-white/90 max-w-2xl mx-auto px-2">
              Experience unparalleled luxury living in Dubai's most prestigious villa communities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6">Premium Villa Properties</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Dubai's luxury villas represent the pinnacle of refined living, combining world-class architecture, 
              expansive private spaces, and exclusive locations. From Emirates Hills to Palm Jumeirah, our portfolio 
              features exceptional properties designed for discerning families and investors seeking the ultimate 
              in privacy, space, and prestige.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: Home,
                title: "Spacious Layouts",
                description: "4-7 bedroom configurations with expansive living areas, multiple reception rooms, and dedicated family spaces"
              },
              {
                icon: Sparkles,
                title: "Premium Finishes",
                description: "High-end materials, designer fixtures, Italian marble, and bespoke interior design options"
              },
              {
                icon: Building2,
                title: "Smart Home Tech",
                description: "Integrated home automation systems for lighting, climate, security, and entertainment"
              },
              {
                icon: MapPin,
                title: "Prime Locations",
                description: "Prestigious addresses in gated communities with 24/7 security and concierge services"
              },
              {
                icon: Shield,
                title: "Privacy & Security",
                description: "Gated entrances, surveillance systems, and secure perimeter walls for complete peace of mind"
              },
              {
                icon: TrendingUp,
                title: "Investment Value",
                description: "Strong appreciation potential in Dubai's luxury real estate market with high rental yields"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-secondary p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="h-12 w-12 rounded-full bg-accent/20 dark:bg-accent/40 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-accent dark:text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Features */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6">Exceptional Villa Features</h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-2 w-2 rounded-full bg-accent"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Private Swimming Pools</h3>
                    <p className="text-sm text-muted-foreground">Infinity pools, heated options, and dedicated children's pools with landscaped surrounds</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-2 w-2 rounded-full bg-accent"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Landscaped Gardens</h3>
                    <p className="text-sm text-muted-foreground">Professionally designed outdoor spaces with mature trees, water features, and entertainment areas</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-2 w-2 rounded-full bg-accent"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Staff Accommodations</h3>
                    <p className="text-sm text-muted-foreground">Maid's quarters, driver's rooms, and separate service entrances for convenience</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-2 w-2 rounded-full bg-accent"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Premium Parking</h3>
                    <p className="text-sm text-muted-foreground">Multi-car garages with covered parking, EV charging stations, and ample guest parking</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <ImageWithFallback
                src={villaPool.src}
                alt="Luxury Villa Interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Prime Locations */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4">Prime Villa Communities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Exclusive addresses in Dubai's most sought-after neighborhoods
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Emirates Hills",
                description: "Dubai's Beverly Hills, featuring palatial villas with golf course views and ultra-premium amenities",
                image: villaModern.src
              },
              {
                name: "Palm Jumeirah",
                description: "Iconic waterfront villas with private beach access and stunning Arabian Gulf views",
                image: villaContemporary.src
              },
              {
                name: "Arabian Ranches",
                description: "Family-oriented community with championship golf, excellent schools, and resort-style amenities",
                image: villaLiving.src
              }
            ].map((location, index) => (
              <motion.div
                key={index}
                className="bg-secondary rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="relative h-48">
                  <ImageWithFallback
                    src={location.image}
                    alt={location.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{location.name}</h3>
                  <p className="text-sm text-muted-foreground">{location.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <PropertyCTA 
        title="Ready to Find Your Dream Villa?"
        description="Our expert team is ready to help you discover the perfect luxury villa that matches your lifestyle and investment goals"
      />
    </div>
  );
}
