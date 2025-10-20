'use client';

import { Target, TrendingUp, Shield, Globe, Heart, Sparkles, Building, Clock, CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { PropertyCTA } from "../components/PropertyCTA";
import officeImage from "@/assets/images/home-about-office.jpg";
import teamPhoto from "@/assets/images/about-team-photo.jpg";

export function About() {

  const platformFeatures = [
    {
      icon: TrendingUp,
      title: "Smart Deal Analysis",
      description: "Instant property valuation using comparable sales data and market trends to help you identify fair deals"
    },
    {
      icon: Clock,
      title: "Real-Time Tracking",
      description: "Live dashboard showing your transaction progress from documentation to closing with complete transparency"
    },
    {
      icon: Shield,
      title: "Built-In Compliance",
      description: "RERA-aligned processes with Trakheesi-verified permits and bilingual contracts for complete legal security"
    },
    {
      icon: CheckCircle,
      title: "Instant Response",
      description: "Fast, expert support with guaranteed response time and dedicated assistance throughout your journey"
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Transparency",
      description: "Plain language, clear steps, and real-time updates. No jargon, no surprises, just honest communication every step of the way."
    },
    {
      icon: Heart,
      title: "Service",
      description: "Fast follow-up, proactive support, and genuine care for your goals. We treat every client relationship as a long-term partnership."
    },
    {
      icon: Sparkles,
      title: "Quality",
      description: "Professional media, verified listings, and polished presentation. Every detail reflects our commitment to excellence."
    },
    {
      icon: CheckCircle,
      title: "Accountability",
      description: "Auditable actions, documented evidence, and role-based access. Quality and responsibility are built into our process, not added later."
    }
  ];

  const customerPathway = [
    { step: "01", title: "Discover", description: "Start with a consultation or browse our curated portfolio; we map your must-haves, timeline, and budget" },
    { step: "02", title: "Verify & Prepare", description: "We streamline onboarding and documents so viewings and offers move quickly and confidently" },
    { step: "03", title: "Experience", description: "Tour properties with accurate media and details; compare options using real market context" },
    { step: "04", title: "Decide", description: "Make an offer with transparent terms; we manage bilingual contracts and e-signing" },
    { step: "05", title: "Close", description: "We orchestrate clearances, NOC, Trustee appointment, and transfer" },
    { step: "06", title: "Handover", description: "Keys, checklists, and a smooth move-in. Your documents remain securely accessible for future reference" }
  ];

  const services = [
    {
      icon: Building,
      title: "Property Sales",
      description: "Expert guidance in buying and selling premium properties across Dubai"
    },
    {
      icon: Clock,
      title: "Property Management",
      description: "Comprehensive management services for property owners and investors"
    },
    {
      icon: CheckCircle,
      title: "Investment Consulting",
      description: "Strategic advice on real estate investments and portfolio management"
    },
    {
      icon: Globe,
      title: "International Services",
      description: "Supporting international buyers and investors entering the UAE market"
    }
  ];

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
          style={{ pointerEvents: 'none' }}
        >
          <ImageWithFallback
            src={officeImage.src}
            alt="About RHK Properties LLC"
            className="w-full h-full object-cover opacity-100"
          />
        </motion.div>
        <div className="container mx-auto px-4 lg:px-8 z-20 text-white text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl mb-4 px-2">About RHK Properties LLC</h1>
            <p className="text-base md:text-xl text-white/90 max-w-2xl mx-auto px-2">
              Client-first, technology-enabled real estate experience for Dubai
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="mb-4 md:mb-6 text-2xl md:text-3xl lg:text-4xl">Who We Are</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2025, we set out to build a client-first, technology-enabled real-estate experience for Dubai, one that's as transparent as it is premium.
                  Our focus is simple: elevate every step of the journey with clear communication, disciplined process, and precise execution.
                </p>
                <p>
                  We combine professional service with modern tools to deliver an experience that feels both premium and refreshingly straightforward.
                  Every listing is verified, every milestone is tracked, and every interaction is designed to move you forward with confidence.
                </p>
                <p>
                  Our team brings deep market knowledge, proven negotiation skills, and a genuine commitment to protecting your interests.
                  Whether you're buying your first home or managing a property portfolio, we provide the clarity and support you deserve.
                </p>
              </div>
            </div>
            <div
              className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden will-change-transform"
              style={{ pointerEvents: 'none' }}
            >
              <ImageWithFallback
                src={teamPhoto.src}
                alt="RHK Properties Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h2 className="mb-4 text-2xl md:text-3xl lg:text-4xl">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-background rounded-lg p-6 will-change-transform"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <motion.div
                  className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center mb-4"
                  whileHover={{ rotate: 360, scale: 1.15 }}
                  transition={{ duration: 0.4 }}
                >
                  <value.icon className="h-6 w-6 text-accent" />
                </motion.div>
                <h3 className="mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <motion.div
              className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg p-6 md:p-8 border border-accent/20 will-change-transform"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-accent" />
              </div>
              <h2 className="mb-4 text-xl md:text-2xl lg:text-3xl">Our Mission</h2>
              <p className="text-muted-foreground">
                We standardize the property journey end-to-end by combining transparent workflows, fast communication, and rigorous compliance.
                Our mission is to remove uncertainty at each milestone (onboarding, permits, media, viewings, offers, closing), empower agents with excellent tools,
                and give clients the real-time clarity they deserve for every transaction, every time.
              </p>
            </motion.div>
            <motion.div
              className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg p-6 md:p-8 border border-accent/20 will-change-transform"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <h2 className="mb-4 text-xl md:text-2xl lg:text-3xl">Our Vision</h2>
              <p className="text-muted-foreground">
                To make Dubai real estate clear, confident, and delightfully efficient where every seller and buyer can see the path ahead,
                trust the data behind each decision, and move forward without friction. We envision a market where transparency and quality
                are the standard, not the exception.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Customer Pathway */}
      <section className="py-12 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h2 className="mb-4 text-2xl md:text-3xl lg:text-4xl">Customer Pathway</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From discovery to handover, a transparent journey designed for your confidence
            </p>
          </motion.div>
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line - hidden on mobile, visible on desktop */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-accent/20" />
            {/* Mobile timeline line - on the left */}
            <div className="md:hidden absolute left-4 top-0 h-full w-0.5 bg-accent/20" />
            <div className="space-y-8 md:space-y-12">
              {customerPathway.map((item, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center gap-4 md:gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
                >
                  {/* Mobile layout */}
                  <motion.div
                    className="w-4 h-4 flex-shrink-0 rounded-full bg-accent border-4 border-background z-10 md:hidden"
                    whileHover={{ scale: 1.5 }}
                    transition={{ duration: 0.2 }}
                  />
                  <div className="flex-1 md:hidden">
                    <motion.div
                      className="bg-background rounded-lg p-4 md:p-6 w-full"
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    >
                      <div className="text-accent mb-2 font-bold text-sm">Step {item.step}</div>
                      <h3 className="mb-2 text-lg">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </motion.div>
                  </div>

                  {/* Desktop layout */}
                  <div className={`hidden md:flex md:flex-1 ${index % 2 === 0 ? 'md:justify-end text-right' : 'md:justify-start text-left'}`}>
                    <motion.div
                      className="bg-background rounded-lg p-6 max-w-md will-change-transform"
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    >
                      <div className="text-accent mb-2 font-bold text-sm">Step {item.step}</div>
                      <h3 className="mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </motion.div>
                  </div>
                  <motion.div
                    className="hidden md:block w-4 h-4 flex-shrink-0 rounded-full bg-accent border-4 border-background z-10"
                    whileHover={{ scale: 1.5 }}
                    transition={{ duration: 0.2 }}
                  />
                  <div className="hidden md:block md:flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h2 className="mb-4 text-2xl md:text-3xl lg:text-4xl">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive real estate solutions tailored to your needs
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-secondary rounded-lg p-6 text-center will-change-transform"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <motion.div
                  className="flex justify-center mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center">
                    <service.icon className="h-8 w-8 text-accent" />
                  </div>
                </motion.div>
                <h3 className="mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Platform & Features */}
      <section className="py-12 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 dark:bg-accent rounded-full mb-4">
              <Shield className="h-5 w-5 text-accent dark:text-white" />
              <span className="text-accent dark:text-white font-semibold text-sm">Technology-Enabled Experience</span>
            </div>
            <h2 className="mb-4 text-2xl md:text-3xl lg:text-4xl">Our Platform & Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Modern tools and processes designed to make your real estate journey transparent, efficient, and stress-free
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platformFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-background rounded-lg p-6 text-center will-change-transform"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <div className="flex justify-center mb-4">
                  <motion.div
                    className="h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center"
                    whileHover={{ rotate: 360, scale: 1.15 }}
                    transition={{ duration: 0.4 }}
                  >
                    <feature.icon className="h-8 w-8 text-accent" />
                  </motion.div>
                </div>
                <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to helping you find your perfect property
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index} 
                className="bg-secondary rounded-lg overflow-hidden group"
                initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative w-full" style={{ paddingBottom: '100%' }}>
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="mb-1">{member.name}</h3>
                  <p className="text-sm text-accent mb-2">{member.role}</p>
                  <p className="text-xs text-muted-foreground">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <PropertyCTA 
        title="Ready to Work With Us?"
        description="Let our expert team guide you through your real estate journey with professionalism and care"
      />
    </div>
  );
}
