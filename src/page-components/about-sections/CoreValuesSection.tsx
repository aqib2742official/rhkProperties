'use client';

import { motion } from "motion/react";
import { Shield, Heart, Sparkles, CheckCircle } from "lucide-react";

export default function CoreValuesSection() {
  const values = [
    {
      icon: Shield,
      title: "Transparency",
      description: "Plain language, clear steps, and real-time updates with honest communication"
    },
    {
      icon: Heart,
      title: "Service",
      description: "Fast follow-up, proactive support, and genuine care for your goals and success"
    },
    {
      icon: Sparkles,
      title: "Quality",
      description: "Professional media, verified listings, and polished presentation in every detail"
    },
    {
      icon: CheckCircle,
      title: "Accountability",
      description: "Auditable actions with documented evidence and role-based access control"
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
          <h2 className="mb-4 text-2xl md:text-3xl lg:text-4xl">Our Core Values</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-background rounded-lg p-6 will-change-transform flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <motion.div
                className="h-12 w-12 rounded-full bg-accent/10 dark:bg-accent flex items-center justify-center mb-4"
                whileHover={{ rotate: 360, scale: 1.15 }}
                transition={{ duration: 0.4 }}
              >
                <value.icon className="h-6 w-6 text-accent" />
              </motion.div>
              <h3 className="mb-2 text-center min-h-[2rem]">{value.title}</h3>
              <p className="text-sm text-muted-foreground w-[280px] max-w-full mx-auto text-center line-clamp-3 min-h-[4rem]">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

