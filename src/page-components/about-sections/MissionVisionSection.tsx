'use client';

import { motion } from "motion/react";
import { Target, TrendingUp } from "lucide-react";

export default function MissionVisionSection() {
  return (
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
            <div className="h-12 w-12 rounded-full bg-accent/10 dark:bg-accent flex items-center justify-center mb-4">
              <Target className="h-6 w-6 text-accent" />
            </div>
            <h2 className="mb-4 text-xl md:text-2xl lg:text-3xl">Our Mission</h2>
            <p className="text-muted-foreground">
              We standardize the property journey end-to-end with transparent workflows, fast communication, and strong compliance. Our mission is to remove uncertainty at every milestone, empower agents with better tools, and give clients the real-time clarity they deserve on every transaction.
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
            <div className="h-12 w-12 rounded-full bg-accent/10 dark:bg-accent flex items-center justify-center mb-4">
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
  );
}

