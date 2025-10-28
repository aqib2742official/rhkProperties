'use client';

import { Home, Users, Trees, Car, GraduationCap, Heart } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../../../components/figma/ImageWithFallback";
import { PropertyCTA } from "../../../components/PropertyCTA";
import townhouseHero from "@/assets/images/townhouse-hero.jpg";
import townhouseInterior from "@/assets/images/townhouse-interior.jpg";
import villaLiving from "@/assets/images/villa-living.jpg";
import townhouseDesign from "@/assets/images/townhouse-living.jpg";
import townhouseLiving from "@/assets/images/townhouse-living.jpg";

export default function TownhousesContent() {
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
            src={townhouseHero.src}
            alt="Modern Townhouses in Dubai"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="container mx-auto px-4 lg:px-8 z-20 text-white text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl mb-4 px-2">Contemporary Townhouses</h1>
            <p className="text-base md:text-xl text-white/90 max-w-2xl mx-auto px-2">
              Perfect balance of space, privacy, and community living for modern families
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6">Family-Focused Living</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Dubai's townhouse communities offer the ideal lifestyle for growing families, combining the space and 
              privacy of a villa with the convenience and amenities of community living. From award-winning schools 
              to landscaped parks and recreational facilities, these master-planned communities provide everything 
              your family needs within walking distance.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: Home,
                title: "Spacious Layouts",
                description: "3-5 bedroom configurations with multiple living areas and flexible spaces"
              },
              {
                icon: Users,
                title: "Community Living",
                description: "Family-oriented neighborhoods with parks, playgrounds, and community events"
              },
              {
                icon: Trees,
                title: "Private Gardens",
                description: "Front and back gardens for outdoor space and entertaining guests"
              },
              {
                icon: Car,
                title: "Covered Parking",
                description: "Private garages with additional guest parking within the community"
              },
              {
                icon: GraduationCap,
                title: "Top Schools",
                description: "Proximity to prestigious international schools and nurseries nearby"
              },
              {
                icon: Heart,
                title: "Healthcare Access",
                description: "Close to quality medical facilities and family health centers"
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
                <div className="h-12 w-12 rounded-full bg-accent/10 dark:bg-accent flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-accent dark:text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Townhouse Features */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative w-full overflow-hidden rounded-lg" style={{ paddingBottom: '75%' }}>
              <div className="absolute inset-0">
                <ImageWithFallback
                  src={townhouseInterior.src}
                  alt="Modern Townhouse Interior"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6">Modern Living Features</h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 mt-2">
                    <div className="h-2 w-2 rounded-full bg-accent dark:bg-white"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Open-Plan Design</h3>
                    <p className="text-sm text-muted-foreground">Flowing living and dining areas perfect for family gatherings and entertaining</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 mt-2">
                    <div className="h-2 w-2 rounded-full bg-accent dark:bg-white"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Modern Kitchens</h3>
                    <p className="text-sm text-muted-foreground">Fully equipped with European appliances, breakfast counters, and ample storage</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 mt-2">
                    <div className="h-2 w-2 rounded-full bg-accent dark:bg-white"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">En-Suite Bedrooms</h3>
                    <p className="text-sm text-muted-foreground">Master bedrooms with walk-in closets and additional bedrooms with built-in wardrobes</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 mt-2">
                    <div className="h-2 w-2 rounded-full bg-accent dark:bg-white"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Maid's Room</h3>
                    <p className="text-sm text-muted-foreground">Separate accommodation for domestic help with private bathroom</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prime Locations */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4">Top Townhouse Communities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dubai's best family communities offering quality of life and smart investments
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Reem",
                description: "Master-planned community with excellent schools, parks, and a strong sense of neighborhood",
                image: villaLiving.src
              },
              {
                name: "Town Square",
                description: "Contemporary community featuring schools, retail, and recreational facilities within a walkable environment",
                image: townhouseDesign.src
              },
              {
                name: "Dubai Hills Estate",
                description: "Premium lifestyle destination with championship golf, parks, and Dubai Hills Mall on your doorstep",
                image: townhouseLiving.src
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
                <div className="relative w-full overflow-hidden" style={{ paddingBottom: '75%' }}>
                  <div className="absolute inset-0">
                    <ImageWithFallback
                      src={location.image}
                      alt={location.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
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

      {/* Community Amenities */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6 text-center">Community Amenities</h2>
            <p className="text-muted-foreground text-center mb-8">
              Everything your family needs for a fulfilling lifestyle
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Sports & Recreation</h3>
                <p className="text-sm text-muted-foreground">
                  Swimming pools, tennis courts, basketball courts, jogging tracks, and cycling paths throughout 
                  the community. Many developments include fitness centers and sports clubs.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Children's Facilities</h3>
                <p className="text-sm text-muted-foreground">
                  Age-appropriate playgrounds, splash pads, and safe play areas. Organized activities and summer 
                  camps keep children engaged and active.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Retail & Dining</h3>
                <p className="text-sm text-muted-foreground">
                  On-site retail centers with supermarkets, caf├®s, restaurants, and essential services. Many 
                  communities feature weekly markets and food festivals.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Green Spaces</h3>
                <p className="text-sm text-muted-foreground">
                  Landscaped parks, community gardens, BBQ areas, and outdoor seating. Pet-friendly zones and 
                  walking trails create a true suburban lifestyle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Benefits */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6">Why Invest in Townhouses?</h2>
            <p className="text-muted-foreground mb-8">
              Townhouses offer excellent value propositions for both end-users and investors. With lower price 
              points than villas but more space than apartments, they attract a broad tenant demographic including 
              families, professionals, and small businesses. Strong rental demand in family communities ensures 
              consistent yields of 5-7% annually, while community developments continue to mature and appreciate.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-accent mb-2">AED 1.5M+</div>
                <p className="text-sm text-muted-foreground">Entry Price Point</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">5-7%</div>
                <p className="text-sm text-muted-foreground">Annual Rental Yield</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">15-20%</div>
                <p className="text-sm text-muted-foreground">5-Year Appreciation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <PropertyCTA 
        title="Find Your Family Home"
        description="Discover the perfect townhouse for your family in Dubai's best communities. Contact our team for personalized recommendations"
      />
    </div>
  );
}
