'use client';

import { motion } from "motion/react";

export default function CustomerPathwaySection() {
  const customerPathway = [
    { step: "01", title: "Discover", description: "Start with a consultation or browse our curated portfolio; we map your must-haves, timeline, and budget" },
    { step: "02", title: "Verify & Prepare", description: "We streamline onboarding and documents so viewings and offers move quickly and confidently" },
    { step: "03", title: "Experience", description: "Tour properties with accurate media and details; compare options using real market context" },
    { step: "04", title: "Decide", description: "Make an offer with transparent terms; we manage bilingual contracts and e-signing" },
    { step: "05", title: "Close", description: "We orchestrate clearances, NOC, Trustee appointment, and transfer" },
    { step: "06", title: "Handover", description: "Keys, checklists, and a smooth move-in. Your documents remain securely accessible for future reference" }
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
          <h2 className="mb-4 text-2xl md:text-3xl lg:text-4xl">Customer Pathway</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From discovery to handover, a transparent journey designed for your confidence
          </p>
        </motion.div>
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line - hidden on mobile, visible on desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-accent" />
          {/* Mobile timeline line - on the left */}
          <div className="md:hidden absolute left-4 top-0 h-full w-0.5 bg-accent" />
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
                  className="hidden md:block w-4 h-4 flex-shrink-0 rounded-full bg-accent border-4 border-gray-400 dark:border-white z-10"
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
  );
}

