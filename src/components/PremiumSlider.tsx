'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
// import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import villaHero from "@/assets/images/home-hero-slider-1.jpg";
import penthouseHero from "@/assets/images/home-hero-slider-2.jpg";
import townhouseHero from "@/assets/images/home-hero-slider-3.jpg";
import apartmentHero from "@/assets/images/home-hero-slider-4.jpg";

interface Slide {
  id: number;
  image: string;
  imageImport: typeof villaHero;
  title: string;
  subtitle: string;
  description: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: villaHero.src,
    imageImport: villaHero,
    title: "Real Estate, Finally Transparent.",
    subtitle: "From First Hello to Handover",
    description: "Experience a seamless property journey with clarity, speed, and complete compliance. Your trusted partner for a confident real estate experience."
  },
  {
    id: 2,
    image: penthouseHero.src,
    imageImport: penthouseHero,
    title: "Premium Property Portfolio.",
    subtitle: "Curated Homes Across Dubai's Flagship Neighborhoods.",
    description: "Explore verified villas, penthouses, and apartments presented with true-to-life media, transparent details, and consistent quality."
  },
  {
    id: 3,
    image: townhouseHero.src,
    imageImport: townhouseHero,
    title: "A Guided Journey, Start to Finish.",
    subtitle: "Transparent. Efficient. Effortless.",
    description: "From onboarding to handover, secure checks, clear milestones, and proactive updates keep your property experience smooth and stress-free."
  },
  {
    id: 4,
    image: apartmentHero.src,
    imageImport: apartmentHero,
    title: "Compliance Built-In.",
    subtitle: "Compliance & Trust, Built Into Every Transaction.",
    description: "Built on trust and accountability with bilingual contracts, secure e-signing, and verified advertising to ensure every step meets Dubai's real estate standards."
  }
];


export function PremiumSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Simple fade animation only
  const variants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden bg-black">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            opacity: { duration: 0.5 },
          }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10" />
            <Image
              src={slides[currentIndex].imageImport}
              alt={slides[currentIndex].title}
              fill
              priority={currentIndex === 0}
              quality={85}
              sizes="100vw"
              placeholder="blur"
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="relative z-20 h-full flex items-center">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-2xl">
                <div className="inline-block mb-4 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30">
                  <span className="text-gray-200 text-sm md:text-base">{slides[currentIndex].subtitle}</span>
                </div>

                <h2
                  className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-4 md:mb-6"
                  style={{ textShadow: "0 4px 20px rgba(0,0,0,0.5)" }}
                >
                  {slides[currentIndex].title}
                </h2>

                <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-8">
                  {slides[currentIndex].description}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      {/* <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all hover:scale-110"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all hover:scale-110"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button> */}

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3" role="group" aria-label="Slider navigation">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${index === currentIndex
              ? "bg-accent w-12"
              : "bg-white/40 w-2 hover:bg-white/60"
              }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to slide ${index + 1}: ${slides[index].title}`}
            aria-current={index === currentIndex ? "true" : "false"}
            type="button"
          />
        ))}
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <div className="hidden md:flex absolute bottom-20 left-1/2 -translate-x-1/2 z-30 flex-col items-center gap-2">
        <span className="text-white/60 text-xs uppercase tracking-wider">Scroll</span>
        <motion.div
          className="w-0.5 h-8 bg-white/40"
          animate={{
            scaleY: [1, 1.5, 1],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  );
}
