'use client';

import { Building2, CheckCircle2, Users, TrendingUp, Clock, Shield, FileCheck } from "lucide-react";
import { motion } from "motion/react";
import { PropertyCard } from "../components/PropertyCard";
import { PremiumSlider } from "../components/PremiumSlider";
import { PropertyCTA } from "../components/PropertyCTA";
import { properties } from "../data/properties";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import officeImage from "@/assets/images/home-about-office.jpg";
import downtownImage from "@/assets/images/home-neighborhood-downtown.jpg";
import marinaImage from "@/assets/images/home-neighborhood-marina.jpg";
import palmImage from "@/assets/images/home-neighborhood-palm.jpg";

export function Home() {
  const featuredProperties = properties.filter(p => p.status === "Available").slice(0, 4);

  return (
    <div className="w-full">
      {/* Premium Hero Slider */}
      <PremiumSlider />

      {/* Hero Highlights Section */}
      <section className="py-8 md:py-12 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Trust Strip */}
          <motion.div
            className="text-center mb-8 md:mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="inline-block px-4 py-2 bg-accent/10 dark:bg-accent rounded-full">
              <span className="text-accent text-xl md:text-2xl lg:text-3xl font-[500]">RERA-aligned • Trakheesi-ready • Privacy-first</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.05, ease: "easeOut" }}
            >
              <motion.div
                className="flex justify-center mb-4"
                whileHover={{ scale: 1.15, rotate: 360 }}
                transition={{ duration: 0.4 }}
              >
                <TrendingUp className="h-12 w-12 text-accent" />
              </motion.div>
              <h3 className="text-lg font-semibold mb-2">Live Status Tracking</h3>
              <p className="text-muted-foreground text-sm">KYC → Form A → permit → media → viewings → offers → closing. See progress in real time</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            >
              <motion.div
                className="flex justify-center mb-4"
                whileHover={{ scale: 1.15, rotate: 360 }}
                transition={{ duration: 0.4 }}
              >
                <Clock className="h-12 w-12 text-accent" />
              </motion.div>
              <h3 className="text-lg font-semibold mb-2">5-Minute Response Promise</h3>
              <p className="text-muted-foreground text-sm">New inquiries get a fast, helpful reply backed by an expert support team</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
            >
              <motion.div
                className="flex justify-center mb-4"
                whileHover={{ scale: 1.15, rotate: 360 }}
                transition={{ duration: 0.4 }}
              >
                <Shield className="h-12 w-12 text-accent" />
              </motion.div>
              <h3 className="text-lg font-semibold mb-2">Compliance Built-In</h3>
              <p className="text-muted-foreground text-sm">Trakheesi-aligned advertising, bilingual contracts, secure e-signing, auditable records</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
            >
              <motion.div
                className="flex justify-center mb-4"
                whileHover={{ scale: 1.15, rotate: 360 }}
                transition={{ duration: 0.4 }}
              >
                <CheckCircle2 className="h-12 w-12 text-accent" />
              </motion.div>
              <h3 className="text-lg font-semibold mb-2">Seamless Closing</h3>
              <p className="text-muted-foreground text-sm">We coordinate NOC, clearances, Trustee appointment, transfer, and handover</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 lg:px-8">
          {/* <div className="text-center mb-8 md:mb-12">
            <h2 className="mb-4 text-2xl md:text-3xl lg:text-4xl">Premium Property Portfolio</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We curate a select portfolio of villas, penthouses, and apartments across Dubai's flagship neighborhoods.
              Expect verified details, true-to-life media, and clean, consistent presentation—so decisions are easy and informed.
            </p>
          </div> */}
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
          {/* <div className="text-center">
            <Button 
              variant="outline"
              size="lg"
              className="hover:bg-accent hover:text-accent-foreground hover:border-accent"
              asChild
            >
              <Link href="/properties">
                View All Properties
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div> */}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="mb-6 text-xl md:text-2xl lg:text-3xl">Why Choose Us</h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center">
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
                    <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center">
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
                    <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center">
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
                    <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center">
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
              <ImageWithFallback
                src={officeImage.src}
                alt="RHK Properties LLC Office"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h2 className="mb-4 text-2xl md:text-3xl lg:text-4xl">Explore Premium Neighborhoods</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover Dubai's most prestigious locations
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                name: "Downtown Dubai",
                properties: "120+ Properties",
                image: downtownImage.src
              },
              {
                name: "Dubai Marina",
                properties: "95+ Properties",
                image: marinaImage.src
              },
              {
                name: "Palm Jumeirah",
                properties: "75+ Properties",
                image: palmImage.src
              }
            ].map((neighborhood, index) => (
              <div key={index}>
                <motion.div
                  className="relative h-64 md:h-72 lg:h-80 rounded-lg overflow-hidden group will-change-transform"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
                  whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
                  <ImageWithFallback
                    src={neighborhood.image}
                    alt={neighborhood.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                    <h3 className="text-white mb-2">{neighborhood.name}</h3>
                    <p className="text-white/80 text-sm">{neighborhood.properties}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h2 className="mb-4 text-2xl md:text-3xl lg:text-4xl">A guided journey, start to finish.</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every milestone is clear and trackable
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                step: "01",
                title: "Onboard & Verify",
                description: "Quick signup, secure identity checks, and your status tracker begins with clear milestones"
              },
              {
                step: "02",
                title: "Prepare & Publish",
                description: "Form A, Trakheesi permit, pro media, polished listing live on our site and top portals"
              },
              {
                step: "03",
                title: "Engage & Negotiate",
                description: "Unified messages and calls; punctual viewings; transparent offers with clear next steps"
              },
              {
                step: "04",
                title: "Close & Handover",
                description: "NOC, OA/service charges, utilities, Trustee appointment, transfer, and keys, all coordinated by us"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
              >
                <motion.div
                  className="relative inline-block mb-6 cursor-pointer"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-accent text-2xl">{item.step}</span>
                  </div>
                </motion.div>
                <h3 className="mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real stories from satisfied property owners
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah Williams",
                role: "Penthouse Owner",
                image: testimonialImage.src,
                text: "RHK Properties LLC made our dream of owning a Dubai property come true. Their professionalism and attention to detail were exceptional."
              },
              {
                name: "Ahmed Al-Rashid",
                role: "Villa Owner",
                image: testimonialImage.src,
                text: "The team went above and beyond to find us the perfect family villa. Highly recommend their services!"
              },
              {
                name: "Lisa Chen",
                role: "Investor",
                image: testimonialImage.src,
                text: "Best real estate agency in Dubai. Their market knowledge and investment advice are unparalleled."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-secondary p-6 rounded-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,102,255,0.1)" }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="mb-0 truncate">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground truncate">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Trust & Compliance Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 dark:bg-accent rounded-full mb-6">
              <Shield className="h-5 w-5 text-accent dark:text-white" />
              <span className="text-accent dark:text-white font-semibold text-sm">Compliance Built-In</span>
            </div>
            <h2 className="mb-6 text-2xl md:text-3xl lg:text-4xl">Compliance is built-in.</h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              We publish only with verified permits, keep bilingual contracts consistent, and maintain a complete evidence trail.
              Data is encrypted, access is role-based, and every action is auditable so quality and accountability are never in doubt.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <motion.div
              className="bg-secondary p-6 rounded-lg text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.05, ease: "easeOut" }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Shield className="h-10 w-10 text-accent mx-auto mb-4" />
              <h3 className="mb-2 text-lg font-semibold">Privacy & Security</h3>
              <p className="text-sm text-muted-foreground">
                Role-based access, encryption in transit and at rest, and full audit logs
              </p>
            </motion.div>
            <motion.div
              className="bg-secondary p-6 rounded-lg text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <FileCheck className="h-10 w-10 text-accent mx-auto mb-4" />
              <h3 className="mb-2 text-lg font-semibold">Verified Permits</h3>
              <p className="text-sm text-muted-foreground">
                Trakheesi permits verified and displayed before going live
              </p>
            </motion.div>
            <motion.div
              className="bg-secondary p-6 rounded-lg text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <CheckCircle2 className="h-10 w-10 text-accent mx-auto mb-4" />
              <h3 className="mb-2 text-lg font-semibold">Bilingual Contracts</h3>
              <p className="text-sm text-muted-foreground">
                Form A and Form F securely e-signed in with verifiable trails
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <PropertyCTA 
        title="Ready to Find Your Perfect Property?"
        description="Let our expert team help you discover the ideal home or investment opportunity in Dubai"
      />
    </div>
  );
}
