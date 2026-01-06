import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { HandWrittenTitle } from "./ui/hand-writing-text";
import { LocationTag } from "./location-tag";
import Image from "next/image";

interface FloatingImageProps {
  src: string;
  alt: string;
  className: string;
}

export interface FloatingFoodHeroProps {
  title: string;
  description: string;
  images: FloatingImageProps[];
  className?: string;
}

const FADE_IN_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 20 },
  },
};


export function Food({
  title,
  description,
  images,
  className,
}: FloatingFoodHeroProps) {
  return (
    <>
      {/* Floating Images */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={cn(
              "absolute object-contain will-change-transform animate-float",
              image.className
            )}
            style={{
              animationDelay: `${index * 300}ms`,
            }}
          />
        ))}
      </div>

      {/* Text */}
      
      <div className="relative z-20 container mx-auto px-4 text-center max-w-2xl flex flex-col justify-center gap-2 lg:gap-5">
        <Image
          src="/images/TIF_Circular_[ 2025 ]_.png"
          alt="Hero Title"
          width={150}
          height={100}
          className="mx-auto w-62"
        />

        <motion.p
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          transition={{ delay: 0.5 }}
          className=" max-w-2xl text-lg text-muted-foreground"
        >
          {description}
        </motion.p>

        {/* <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-8 py-3 rounded-full bg-red-500 text-white font-semibold shadow-lg transition-colors hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
        >
          Button
        </motion.button> */}
        <LocationTag city="Chh. SambhajiNagar, MH" country="India" timezone="PST" />
        
      </div>
    </>
  );
}
