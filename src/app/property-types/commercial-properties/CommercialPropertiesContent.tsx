'use client';

import { Building2, TrendingUp, Users, Shield, MapPin, Briefcase } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../../../components/figma/ImageWithFallback";
import { PropertyCTA } from "../../../components/PropertyCTA";
import commercialHero from "@/assets/images/commercial-hero.jpg";
import commercialOffice from "@/assets/images/commercial-office.jpg";
import commercialWorkspace from "@/assets/images/commercial-workspace.jpg";
import commercialCorporate from "@/assets/images/commercial-corporate.jpg";
import commercialDesk from "@/assets/images/commercial-desk.jpg";

export default function CommercialPropertiesContent() {
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
            src={commercialHero.src}
            alt="Commercial Properties in Dubai"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="container mx-auto px-4 lg:px-8 z-20 text-white text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl mb-4 px-2">Commercial Properties</h1>
            <p className="text-base md:text-xl text-white/90 max-w-2xl mx-auto px-2">
              Prime business locations driving growth and delivering exceptional returns
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6">Strategic Business Investments</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Dubai's commercial real estate sector offers unparalleled opportunities for investors seeking stable,
              high-yield returns. From Grade A offices in DIFC to retail spaces in high-footfall locations, our
              portfolio encompasses premium commercial assets in the region's most strategic business districts.
              Benefit from Dubai's business-friendly environment, strategic location, and world-class infrastructure.
            </p>
          </div>

          {/* Property Types */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: Building2,
                title: "Office Spaces",
                description: "Grade A offices in DIFC, and other prime business districts with modern facilities"
              },
              {
                icon: Briefcase,
                title: "Retail Units",
                description: "High-street shops, mall units, and retail centers in high-footfall locations"
              },
              {
                icon: Users,
                title: "Co-Working Spaces",
                description: "Flexible workspace solutions in premium locations catering to modern businesses"
              },
              {
                icon: MapPin,
                title: "Showrooms",
                description: "Retail and automotive showrooms on major highways and commercial streets"
              },
              {
                icon: Shield,
                title: "Warehouses",
                description: "Industrial units and logistics facilities in Dubai's strategic free zones"
              },
              {
                icon: TrendingUp,
                title: "Mixed-Use",
                description: "Integrated developments combining retail, office, and hospitality components"
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

      {/* Key Features */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6">Premium Commercial Features</h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 mt-2">
                    <div className="h-2 w-2 rounded-full bg-accent dark:bg-white"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Grade A Specifications</h3>
                    <p className="text-sm text-muted-foreground">Modern buildings with raised floors, suspended ceilings, and central A/C systems</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 mt-2">
                    <div className="h-2 w-2 rounded-full bg-accent dark:bg-white"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Advanced Technology</h3>
                    <p className="text-sm text-muted-foreground">High-speed internet, smart building systems, and comprehensive IT infrastructure</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 mt-2">
                    <div className="h-2 w-2 rounded-full bg-accent dark:bg-white"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Strategic Locations</h3>
                    <p className="text-sm text-muted-foreground">Prime addresses in established business districts with excellent connectivity</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 mt-2">
                    <div className="h-2 w-2 rounded-full bg-accent dark:bg-white"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Ample Parking</h3>
                    <p className="text-sm text-muted-foreground">Dedicated parking spaces with visitor parking and easy access</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-full overflow-hidden rounded-lg" style={{ paddingBottom: '75%' }}>
              <div className="absolute inset-0">
                <ImageWithFallback
                  src={commercialOffice.src}
                  alt="Modern Office Space"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prime Business Districts */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4">Prime Business Districts</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Strategic locations at the heart of Dubai's commercial landscape
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "DIFC",
                description: "Dubai International Financial Centre - the region's premier financial hub with world-class offices",
                image: commercialWorkspace.src
              },
              {
                name: "Business Bay",
                description: "Dubai's central business district featuring modern towers and excellent connectivity",
                image: commercialCorporate.src
              },
              {
                name: "Dubai Media City",
                description: "Creative hub for media, marketing, and technology companies with state-of-the-art facilities",
                image: commercialDesk.src
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

      {/* Investment Benefits */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6 text-center">Investment Advantages</h2>
            <p className="text-muted-foreground text-center mb-8">
              Why Dubai's commercial real estate market offers exceptional opportunities
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">High Rental Yields</h3>
                <p className="text-sm text-muted-foreground">
                  Commercial properties in Dubai offer rental yields of 7-10%, higher than residential real estate.
                  Prime office locations command premium rents from multinationals.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Long-Term Tenancies</h3>
                <p className="text-sm text-muted-foreground">
                  Corporate tenants typically sign 3–5 year leases, providing predictable cash flow and reducing vacancies. Many agreements include annual rent increases.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Strategic Location</h3>
                <p className="text-sm text-muted-foreground">
                  Dubai's position as a global business hub connecting East and West ensures sustained demand
                  from international companies establishing regional headquarters.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Business-Friendly Environment</h3>
                <p className="text-sm text-muted-foreground">
                  100% foreign ownership, zero corporate tax in free zones, and streamlined business setup attract global enterprises, driving commercial property demand.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Infrastructure Excellence</h3>
                <p className="text-sm text-muted-foreground">
                  World-class airports, ports, and connectivity infrastructure support Dubai's role as a logistics
                  and business hub, enhancing commercial property values.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Expo 2020 Legacy</h3>
                <p className="text-sm text-muted-foreground">
                  Post-Expo developments and infrastructure improvements continue to create new commercial
                  opportunities and drive market growth across multiple sectors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types Detail */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-8 text-center">Commercial Property Categories</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-accent pl-6 py-2">
                <h3 className="text-xl font-semibold mb-2">Office Spaces</h3>
                <p className="text-muted-foreground">
                  From boutique offices to full-floor corporate suites, our portfolio includes properties suitable
                  for businesses of all sizes. Fitted and shell-and-core options available in DIFC, Business Bay,
                  JLT, and Dubai Media City.
                </p>
              </div>
              <div className="border-l-4 border-accent pl-6 py-2">
                <h3 className="text-xl font-semibold mb-2">Retail Investments</h3>
                <p className="text-muted-foreground">
                  High-street retail units, mall kiosks, and standalone shops in prime, high-traffic locations.
                  Food & beverage, fashion, and lifestyle retail opportunities in both established and rapidly emerging neighborhoods.
                </p>
              </div>
              <div className="border-l-4 border-accent pl-6 py-2">
                <h3 className="text-xl font-semibold mb-2">Industrial & Warehousing</h3>
                <p className="text-muted-foreground">
                  Modern warehouses and logistics facilities in Dubai's key free zones. Temperature-controlled storage, advanced distribution centers,
                  and light industrial units with excellent highway connectivity.
                </p>
              </div>
              <div className="border-l-4 border-accent pl-6 py-2">
                <h3 className="text-xl font-semibold mb-2">Hospitality Assets</h3>
                <p className="text-muted-foreground">
                  Hotel apartments, boutique hotels, and serviced residences in major tourist and business districts.
                  Professionally managed investment options with attractive, guaranteed returns and long-term growth potential available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <PropertyCTA
        title="Ready to Invest in Commercial Real Estate?"
        description="Our commercial property experts will help you identify the right investment opportunities aligned with your financial goals"
      />
    </div>
  );
}

