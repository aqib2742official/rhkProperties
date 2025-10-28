'use client';

import { motion } from "motion/react";
import { TrendingUp, Clock, Shield, CheckCircle } from "lucide-react";

export default function PlatformFeaturesSection() {
  const platformFeatures = [
    {
      icon: TrendingUp,
      title: "Smart Deal Analysis",
      description: "Instant property valuation using market trends to identify fair deals quickly"
    },
    {
      icon: Clock,
      title: "Real-Time Tracking",
      description: "Live dashboard showing transaction progress from start to closing seamlessly"
    },
    {
      icon: Shield,
      title: "Built-In Compliance",
      description: "RERA-aligned processes with verified permits and bilingual legal contracts"
    },
    {
      icon: CheckCircle,
      title: "Instant Response",
      description: "Fast expert support with guaranteed response time throughout your journey"
    }
  ];

  return (
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
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {platformFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-background rounded-lg p-6 text-center will-change-transform flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="flex justify-center mb-4">
                <motion.div
                  className="h-16 w-16 rounded-full bg-accent/10 dark:bg-accent flex items-center justify-center"
                  whileHover={{ rotate: 360, scale: 1.15 }}
                  transition={{ duration: 0.4 }}
                >
                  <feature.icon className="h-8 w-8 text-accent" />
                </motion.div>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-center min-h-[2rem]">{feature.title}</h3>
              <p className="text-sm text-muted-foreground w-[280px] max-w-full mx-auto text-center line-clamp-3 min-h-[4rem]">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

