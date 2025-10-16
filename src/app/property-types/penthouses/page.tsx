'use client';

import { Crown, Maximize, Waves, Star, Wine, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { ImageWithFallback } from "../../../components/figma/ImageWithFallback";

export default function PenthousesPage() {
  return (
    <div className="w-full overflow-x-hidden">
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
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Luxury Penthouses in Dubai"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="container mx-auto px-4 lg:px-8 z-20 text-white text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl mb-4 px-2">Exclusive Penthouses</h1>
            <p className="text-base md:text-xl text-white/90 max-w-2xl mx-auto px-2">
              Sky-high luxury living with panoramic views and unmatched elegance
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6">The Crown of Luxury Living</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Dubai's penthouses represent the absolute pinnacle of urban luxury with expansive sky residences, 
              breathtaking 360-degree views, private pools, and bespoke interiors. From towering above Downtown 
              Dubai to overlooking Palm Jumeirah, our collection features the most prestigious addresses where 
              exclusivity meets extraordinary design.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: Crown,
                title: "Ultra-Exclusive",
                description: "Limited availability in Dubai's most iconic towers with only one or two penthouses per building"
              },
              {
                icon: Maximize,
                title: "Expansive Spaces",
                description: "5,000 - 20,000+ sq ft of living space across multiple levels with soaring ceiling heights"
              },
              {
                icon: Waves,
                title: "Private Pools",
                description: "Infinity pools on private terraces with panoramic city, sea, or desert views"
              },
              {
                icon: Star,
                title: "Bespoke Design",
                description: "Custom interior design by world-renowned architects and interior designers"
              },
              {
                icon: Wine,
                title: "Entertainment Spaces",
                description: "Private cinema rooms, wine cellars, bars, and entertainment lounges"
              },
              {
                icon: Sparkles,
                title: "Premium Services",
                description: "Dedicated concierge, private elevators, and exclusive access to 5-star hotel amenities"
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

      {/* Penthouse Features */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6">Unparalleled Luxury Features</h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-2 w-2 rounded-full bg-accent"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Panoramic Terraces</h3>
                    <p className="text-sm text-muted-foreground">Expansive outdoor spaces spanning 2,000+ sq ft with professional landscaping and outdoor kitchens</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-2 w-2 rounded-full bg-accent"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Private Elevators</h3>
                    <p className="text-sm text-muted-foreground">Direct access from your private parking to your penthouse with biometric security</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-2 w-2 rounded-full bg-accent"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Master Suite Excellence</h3>
                    <p className="text-sm text-muted-foreground">Palatial master bedrooms with walk-in closets, spa bathrooms, and private balconies</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-2 w-2 rounded-full bg-accent"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Advanced Technology</h3>
                    <p className="text-sm text-muted-foreground">Integrated smart home systems controlling all aspects of your residence from anywhere</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Luxury Penthouse Interior"
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
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4">Iconic Addresses</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Crown jewel residences in Dubai's most prestigious developments
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Burj Khalifa",
                description: "The world's tallest building offering unmatched prestige and the most spectacular views in Dubai",
                image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
              },
              {
                name: "One Palm",
                description: "Ultra-luxury development on Palm Jumeirah with private beach access and world-class amenities",
                image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
              },
              {
                name: "DAMAC Heights",
                description: "Sculptural tower in Marina with innovative architecture and panoramic water views",
                image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
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

      {/* Investment Value */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6 text-center">Investment Excellence</h2>
            <p className="text-muted-foreground text-center mb-8">
              Penthouses represent the ultimate store of value in Dubai's luxury real estate market
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Rarity Value</h3>
                <p className="text-sm text-muted-foreground">
                  Limited supply of penthouse units ensures sustained demand and premium pricing. Many buildings 
                  have only one or two penthouses, making them highly sought-after assets.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Prestige Premium</h3>
                <p className="text-sm text-muted-foreground">
                  Penthouses command significantly higher per-square-foot valuations due to their exclusivity, 
                  views, and amenities, offering strong capital appreciation potential.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Elite Tenant Pool</h3>
                <p className="text-sm text-muted-foreground">
                  Attract high-net-worth individuals, executives, and celebrities willing to pay premium rents 
                  for the ultimate lifestyle experience and privacy.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Legacy Asset</h3>
                <p className="text-sm text-muted-foreground">
                  Iconic penthouses in landmark buildings become trophy assets that appreciate over decades, 
                  serving as legacy investments for families.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-accent to-accent/80 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4">Discover Your Sky Palace</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Explore our exclusive portfolio of Dubai's most prestigious penthouses. Schedule a private viewing with our luxury property specialists
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-gray-700 rounded-lg hover:bg-white/90 transition-colors font-semibold"
          >
            Arrange Private Viewing
          </Link>
        </div>
      </section>
    </div>
  );
}
