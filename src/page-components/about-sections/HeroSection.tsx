'use client';

import { motion } from "motion/react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import officeImage from "@/assets/images/home-about-office.jpg";

export default function HeroSection() {
  return (
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
  );
}

