"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // Assuming you have a `cn` utility from shadcn
import { Food } from "./hero-section-7";

 const heroImages = [
    {
      src: 'https://b.zmtcdn.com/data/o2_assets/110a09a9d81f0e5305041c1b507d0f391743058910.png',
      alt: 'A delicious cheeseburger',
      className: 'w-35 top-[10%] left-[5%] md:w-64 md:top-10 md:left-20 lg:w-62 lg:top-[12%] lg:left-[18%] animate-float',
    },
    {
      src: 'https://b.zmtcdn.com/data/o2_assets/b4f62434088b0ddfa9b370991f58ca601743060218.png',
      alt: 'A bamboo steamer with dumplings',
      className: 'w-35 top-[12%] right-4 md:w-48 md:top-16 md:right-16 lg:right-[25%] lg:top-[12%] animate-float',
    },
    {
      src: 'https://b.zmtcdn.com/data/o2_assets/316495f4ba2a9c9d9aa97fed9fe61cf71743059024.png',
      alt: 'A slice of pizza',
      className: 'w-42 -bottom-[5%] right-5 md:w-56 md:bottom-16 md:right-20 lg:right-[28%] lg:-bottom-[3%] animate-float',
    },
     {
      src: 'https://b.zmtcdn.com/data/o2_assets/70b50e1a48a82437bfa2bed925b862701742892555.png',
      alt: 'A basil leaf',
      className: 'w-18 sm:w-12 top-[60%] left-[5%] lg:w-28 lg:top-[50%] lg:left-[22%] animate-float',
    },
    {
      src: 'https://b.zmtcdn.com/data/o2_assets/9ef1cc6ecf1d92798507ffad71e9492d1742892584.png',
      alt: 'A slice of tomato',
      className: 'w-18 top-[60%] right-[5%] lg:right-[22%] lg:top-[57%] animate-float',
    },
    {
      src: 'https://b.zmtcdn.com/data/o2_assets/9ef1cc6ecf1d92798507ffad71e9492d1742892584.png',
      alt: 'A slice of tomato',
      className: 'w-20 scale-x-[-1] bottom-[0%] left-[5%] lg:bottom-[0%] lg:left-[22%] animate-float',
    },
  ];

// Props interface for the component
interface MainHeroProps {
  tagline: string;
  title: React.ReactNode;
  description: string;
  ctaText: string;
  images: string[];
  className?: string;
}

// Reusable Button component styled like in the image
const ActionButton = ({ children }: { children: React.ReactNode }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="mt-8 px-8 py-3 rounded-full bg-red-500 text-white font-semibold shadow-lg transition-colors hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
  >
    {children}
  </motion.button>
);

// The main hero component
export const MainHero: React.FC<MainHeroProps> = ({
  tagline,
  title,
  description,
  ctaText,
  images,
  className,
}) => {
  // Animation variants for the text content
  const FADE_IN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 20 },
    },
  };

  // Duplicate images for a seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <section
      className={cn(
        "relative w-full h-screen bg-[#f6f6ee] flex flex-col items-start pt-46 text-center lg:pt-56",
        className
      )}
    >
        {/* Tagline */}
        {/* <motion.div
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          className="mb-4 inline-block rounded-full border border-border bg-card/50 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur-sm"
        >
          {tagline}
        </motion.div> */}

        {/* Main Title */}
        {/* <motion.h1
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground"
        >
          {typeof title === "string"
            ? title.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  variants={FADE_IN_ANIMATION_VARIANTS}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))
            : title}
        </motion.h1> */}

        {/* Description */}
        {/* <motion.p
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          transition={{ delay: 0.5 }}
          className="mt-6 max-w-xl text-lg text-muted-foreground"
        >
          {description}
        </motion.p> */}

        {/* Call to Action Button */}
        {/* <motion.div
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          transition={{ delay: 0.6 }}
        >
          <ActionButton>{ctaText}</ActionButton>
        </motion.div> */}

      <Food
        title="Twist In Flavours"
        description="For over a decade, we've enabled our customers to discover new tastes, delivered right to their doorstep."
        images={heroImages}
      />


      {/* Animated Image Marquee */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 md:h-2/5 overflow-hidden mask-[linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
        <motion.div
          className="flex gap-4 will-change-transform"
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{
            ease: "linear",
            duration: 40,
            repeat: Infinity,
          }}
          style={{
            transform: "translateZ(0)",
          }}
        >
          {duplicatedImages.map((src, index) => (
            <div
              key={index}
              className="relative aspect-3/4 h-48 md:h-64 shrink-0"
              style={{
                rotate: `${index % 2 === 0 ? -2 : 5}deg`,
              }}
            >
              <img
                src={src}
                alt={`Showcase image ${index + 1}`}
                className="w-full h-full object-cover rounded-2xl shadow-md"
                draggable={false}
                decoding="async"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
