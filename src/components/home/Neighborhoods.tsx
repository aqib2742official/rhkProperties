'use client';

import Image from "next/image";
import { motion } from "motion/react";
import downtownImage from "@/assets/images/home-neighborhood-downtown.jpg";
import marinaImage from "@/assets/images/home-neighborhood-marina.jpg";
import palmImage from "@/assets/images/home-neighborhood-palm.jpg";

export default function Neighborhoods() {
  const neighborhoods = [
    {
      name: "Downtown Dubai",
      properties: "120+ Properties",
      image: downtownImage.src,
      imageImport: downtownImage
    },
    {
      name: "Dubai Marina",
      properties: "95+ Properties",
      image: marinaImage.src,
      imageImport: marinaImage
    },
    {
      name: "Palm Jumeirah",
      properties: "75+ Properties",
      image: palmImage.src,
      imageImport: palmImage
    }
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h2 className="mb-4 text-2xl md:text-3xl lg:text-4xl">Explore Premium Neighborhoods</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover Dubai's most prestigious locations
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {neighborhoods.map((neighborhood, index) => (
            <div key={index}>
              <motion.div
                className="relative h-64 md:h-72 lg:h-80 rounded-lg overflow-hidden group will-change-transform"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
                <Image
                  src={neighborhood.imageImport}
                  alt={neighborhood.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                  <h3 className="text-white mb-2">{neighborhood.name}</h3>
                  <p className="text-white/80 text-sm">{neighborhood.properties}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

