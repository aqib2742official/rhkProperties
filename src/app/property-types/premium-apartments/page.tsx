'use client';

import { Building, Shield, Dumbbell, UtensilsCrossed, TrendingUp, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../../../components/figma/ImageWithFallback";
import { PropertyCTA } from "../../../components/PropertyCTA";
import apartmentHero from "@/assets/images/apartment-hero.jpg";
import apartmentLiving from "@/assets/images/apartment-living.jpg";
import apartmentLuxury from "@/assets/images/apartment-luxury.jpg";
import apartmentModern from "@/assets/images/apartment-modern.jpg";
import commercialHero from "@/assets/images/commercial-hero.jpg";

export default function PremiumApartmentsPage() {
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
            src={apartmentHero.src}
            alt="Premium Apartments in Dubai"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="container mx-auto px-4 lg:px-8 z-20 text-white text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl mb-4 px-2">Premium Apartments</h1>
            <p className="text-base md:text-xl text-white/90 max-w-2xl mx-auto px-2">
              Sophisticated urban living with world-class amenities and stunning city views
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6">Contemporary Apartment Living</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Dubai's premium apartment market offers exceptional living experiences in the city's most dynamic 
              neighborhoods. From Downtown Dubai to Dubai Marina, our curated selection features high-rise 
              residences with cutting-edge design, five-star amenities, and unparalleled convenience for 
              modern professionals, families, and investors.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: Building,
                title: "Modern Architecture",
                description: "Floor-to-ceiling windows, contemporary finishes, and open-plan layouts maximizing natural light"
              },
              {
                icon: Shield,
                title: "24/7 Security",
                description: "Advanced security systems, concierge services, and secure access control for peace of mind"
              },
              {
                icon: Dumbbell,
                title: "Fitness & Wellness",
                description: "State-of-the-art gyms, yoga studios, swimming pools, and dedicated wellness facilities"
              },
              {
                icon: UtensilsCrossed,
                title: "Dining Options",
                description: "Access to rooftop restaurants, cafés, and proximity to Dubai's finest dining establishments"
              },
              {
                icon: MapPin,
                title: "Prime Connectivity",
                description: "Walking distance to metro stations, major highways, and key business districts"
              },
              {
                icon: TrendingUp,
                title: "Strong ROI",
                description: "Proven rental yields and capital appreciation in Dubai's thriving real estate market"
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

      {/* Apartment Features */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative w-full overflow-hidden rounded-lg" style={{ paddingBottom: '75%' }}>
              <div className="absolute inset-0">
                <ImageWithFallback
                  src={apartmentLiving.src}
                  alt="Modern Apartment Interior"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6">Exclusive Amenities</h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 mt-2">
                    <div className="h-2 w-2 rounded-full bg-accent dark:bg-white"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Smart Home Integration</h3>
                    <p className="text-sm text-muted-foreground">Control lighting, temperature, and security systems through mobile apps and voice commands</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 mt-2">
                    <div className="h-2 w-2 rounded-full bg-accent dark:bg-white"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Premium Kitchen & Bathrooms</h3>
                    <p className="text-sm text-muted-foreground">Fully equipped European kitchens with high-end appliances and designer bathroom fixtures</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 mt-2">
                    <div className="h-2 w-2 rounded-full bg-accent dark:bg-white"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Private Balconies</h3>
                    <p className="text-sm text-muted-foreground">Spacious outdoor terraces with stunning cityscape, marina, or Burj Khalifa views</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 mt-2">
                    <div className="h-2 w-2 rounded-full bg-accent dark:bg-white"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Covered Parking</h3>
                    <p className="text-sm text-muted-foreground">Dedicated parking spaces with EV charging points and easy building access</p>
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
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4">Iconic Locations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Live in the heart of Dubai's most vibrant and connected neighborhoods
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Downtown Dubai",
                description: "Home to Burj Khalifa and Dubai Mall, offering unparalleled urban lifestyle and entertainment",
                image: apartmentLuxury.src
              },
              {
                name: "Dubai Marina",
                description: "Waterfront living with stunning marina views, yacht clubs, and cosmopolitan dining scene",
                image: apartmentModern.src
              },
              {
                name: "Business Bay",
                description: "Central business district with modern towers, canal views, and proximity to DIFC",
                image: commercialHero.src
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

      {/* Investment Section */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6 text-center">Why Invest in Dubai Apartments?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-background p-6 rounded-lg max-w-[600px]">
                <h3 className="text-lg font-semibold mb-3">High Rental Yields</h3>
                <p className="text-sm text-muted-foreground">
                  Dubai consistently offers rental yields of 5-8% annually, significantly higher than many global cities. 
                  Premium apartments in prime locations attract high-quality tenants year-round.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg max-w-[600px]">
                <h3 className="text-lg font-semibold mb-3">Capital Appreciation</h3>
                <p className="text-sm text-muted-foreground">
                  Strategic developments and infrastructure projects continue to drive property values upward, 
                  providing strong long-term capital growth potential for investors.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg max-w-[600px]">
                <h3 className="text-lg font-semibold mb-3">Tax-Free Environment</h3>
                <p className="text-sm text-muted-foreground">
                  Zero property taxes, capital gains tax, or rental income tax, allowing investors to maximize 
                  their returns and reinvest profits efficiently.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg max-w-[600px]">
                <h3 className="text-lg font-semibold mb-3">Golden Visa Eligibility</h3>
                <p className="text-sm text-muted-foreground">
                  Property investments above AED 2 million qualify for UAE's 10-year Golden Visa, offering 
                  long-term residency for you and your family.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <PropertyCTA 
        title="Find Your Perfect Apartment"
        description="Explore our exclusive portfolio of premium apartments and discover the ideal home or investment opportunity"
      />
    </div>
  );
}
