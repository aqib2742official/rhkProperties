'use client';

import { motion } from "motion/react";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Onboard & Verify",
      description: "Quick signup, secure identity checks, and your status tracker begins"
    },
    {
      step: "02",
      title: "Prepare & Publish",
      description: "Form A, Trakheesi permit, pro media, and polished listing published"
    },
    {
      step: "03",
      title: "Engage & Negotiate",
      description: "Unified messages, punctual viewings, transparent offers with next steps"
    },
    {
      step: "04",
      title: "Close & Handover",
      description: "NOC, utilities, Trustee appointment, transfer, and keys coordination"
    }
  ];

  return (
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
          {steps.map((item, index) => (
            <motion.div
              key={index}
              className="text-center flex flex-col items-center"
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
                <div className="w-20 h-20 rounded-full bg-accent/10 dark:bg-accent flex items-center justify-center border-2 border-accent/30 dark:border-accent/50">
                  <span className="text-accent dark:text-accent-foreground text-2xl font-semibold">{item.step}</span>
                </div>
              </motion.div>
              <h3 className="mb-2 text-center">{item.title}</h3>
              <p className="text-sm text-muted-foreground text-center w-[280px] max-w-full mx-auto line-clamp-4">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

