'use client';

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PropertyCTAProps {
  title: string;
  description: string;
  buttonText?: string;
  href?: string;
}

export function PropertyCTA({ 
  title, 
  description,
  href = "/contact"
}: PropertyCTAProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const MotionH2 = mounted ? motion.h2 : 'h2';
  const MotionP = mounted ? motion.p : 'p';
  const MotionDiv = mounted ? motion.div : 'div';
  const MotionButton = mounted ? motion.button : 'button';

  const h2Props = mounted ? {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.5 },
    transition: { duration: 0.4, ease: "easeOut" }
  } : {};

  const pProps = mounted ? {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.5 },
    transition: { duration: 0.4, delay: 0.1, ease: "easeOut" }
  } : {};

  const divProps = mounted ? {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, amount: 0.5 },
    transition: { duration: 0.4, delay: 0.2, ease: "easeOut" }
  } : {};

  const buttonProps = mounted ? {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 }
  } : {};

  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-accent to-accent/70 dark:from-accent/60 dark:to-accent/20 text-white">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <MotionH2 
          className="text-2xl md:text-3xl lg:text-4xl mb-4"
          {...h2Props}
        >
          {title}
        </MotionH2>
        <MotionP 
          className="text-white/90 mb-8 max-w-xl mx-auto"
          {...pProps}
        >
          {description}
        </MotionP>
        <MotionDiv {...divProps}>
          <Link href={href} className="inline-block">
            <MotionButton
              className="flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-medium 
              rounded-lg hover:bg-white/90 transition-colors cursor-pointer 
              text-sm md:text-base w-max mx-auto"
              {...buttonProps}
              type="button"
              aria-label="Get in Touch"
            >
              Get in Touch
              <ArrowRight className="h-5 w-5 text-gray-900" />
            </MotionButton>
          </Link>
        </MotionDiv>
      </div>
    </section>
  );
}

