'use client';

import { motion } from "motion/react";
import { Building, Clock, CheckCircle, Globe } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Building,
      title: "Property Sales",
      description: "Expert guidance in buying and selling premium properties across Dubai successfully"
    },
    {
      icon: Clock,
      title: "Property Management",
      description: "Comprehensive management services for property owners and real estate investors"
    },
    {
      icon: CheckCircle,
      title: "Investment Consulting",
      description: "Strategic advice on real estate investments and complete portfolio management"
    },
    {
      icon: Globe,
      title: "International Services",
      description: "Supporting international buyers and investors entering the UAE real estate market"
    }
  ];

  return (
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
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-secondary rounded-lg p-6 text-center will-change-transform flex flex-col items-center"
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
                <div className="h-16 w-16 rounded-full bg-accent/10 dark:bg-accent flex items-center justify-center">
                  <service.icon className="h-8 w-8 text-accent" />
                </div>
              </motion.div>
              <h3 className="mb-2 text-center min-h-[2rem]">{service.title}</h3>
              <p className="text-sm text-muted-foreground w-[260px] max-w-full mx-auto text-center line-clamp-3 min-h-[4rem]">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

