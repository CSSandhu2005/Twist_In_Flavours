"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, MessageCircle, ArrowRight } from "lucide-react";

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: -20, filter: "blur(10px)" },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { delay: i * 0.15, duration: 0.5 },
    }),
  };

  return (
    <section ref={sectionRef} className="bg-[#f6f6ee] px-4 py-10">
      <div className="mx-auto max-w-6xl relative ">
        {/* HEADER (normal flow on mobile, overlay on desktop) */}
        <div className="mb-4 flex items-center justify-between md:absolute md:top-3 md:z-10 md:w-[85%]">
          <div className="flex items-center gap-1 text-sm font-medium text-gray-600">
            <span className="inline-flex items-center justify-center text-xl font-bold pt-1">
              *
            </span>

            <motion.span
              variants={fadeUp}
              initial="hidden"
              animate={visible ? "show" : "hidden"}
              custom={0}
            >
              About Us
            </motion.span>
          </div>

          <div className="flex gap-3">
            {/* {[Facebook, Instagram, MessageCircle].map((Icon, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                animate={visible ? "show" : "hidden"}
                custom={i + 1}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 bg-gray-100"
              >
                <Icon size={14} className="text-[#00345b]" />
              </motion.div>
            ))} */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={visible ? "show" : "hidden"}
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border border-gray-200 bg-gray-100"
              onClick={() =>
                window.open(
                  "https://www.facebook.com/twistinflavours",
                  "_blank"
                )
              }
            >
              <Facebook size={14} className="text-[#00345b]" />
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={visible ? "show" : "hidden"}
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border border-gray-200 bg-gray-100"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/twist_in_flavours/?hl=en",
                  "_blank"
                )
              }
            >
              <Instagram size={14} className="text-[#00345b]" />
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={visible ? "show" : "hidden"}
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border border-gray-200 bg-gray-100"
              onClick={() =>
                window.open(
                  "https://wa.me/919960302200?text=Hello%20I%20found%20your%20cafe%20online!",
                  "_blank"
                )
              }
            >
              <MessageCircle size={14} className="text-[#00345b]" />
            </motion.div>
          </div>
        </div>

        {/* IMAGE + FLOATING CARD */}
        <div className="relative mb-6">
          <motion.figure
            variants={fadeUp}
            initial="hidden"
            animate={visible ? "show" : "hidden"}
            custom={4}
          >
            <svg viewBox="0 0 100 40" className="w-full">
              <defs>
                <clipPath id="clip-shape" clipPathUnits="objectBoundingBox">
                  <path d="M0.0998072 1H0.422076H0.749756C0.767072 1 0.774207 0.961783 0.77561 0.942675V0.807325C0.777053 0.743631 0.791844 0.731953 0.799059 0.734076H0.969813C0.996268 0.730255 1.00088 0.693206 0.999875 0.675159V0.0700637C0.999875 0.0254777 0.985045 0.00477707 0.977629 0H0.902473C0.854975 0 0.890448 0.138535 0.850165 0.138535H0.0204424C0.00408849 0.142357 0 0.180467 0 0.199045V0.410828C0 0.449045 0.0136283 0.46603 0.0204424 0.469745H0.0523086C0.0696245 0.471019 0.0735527 0.497877 0.0733523 0.511146V0.915605C0.0723903 0.983121 0.090588 1 0.0998072 1Z" />
                </clipPath>
              </defs>

              <image
                href="/images/insta_1.jpg"
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid slice"
                clipPath="url(#clip-shape)"
              />
            </svg>
          </motion.figure>

          {/* FLOATING CARD
              - stacked on mobile
              - absolute on desktop */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={visible ? "show" : "hidden"}
            custom={6}
            className="
              mt-4
              w-full
              rounded-2xl
              bg-[#f6f6ee]
              py-4
              text-left
              md:absolute
              md:bottom-6
              md:right-0
              md:mt-0
              md:w-auto
              md:text-right
            "
          >
            <div className="text-lg font-semibold text-[#00345b]">
              Curated{" "}
              <span className="font-normal text-gray-600">RECIPIES</span>
            </div>
            <div className="mt-1 text-gray-600">
              <span className="font-bold text-[#00345b]">Always</span> Worth
              Staying
            </div>
          </motion.div>
        </div>

        {/* STATS */}
        <div className="mb-4 text-sm">
          <motion.div
            className="flex items-center gap-2"
            variants={fadeUp}
            initial="hidden"
            animate={visible ? "show" : "hidden"}
            custom={5}
          >
            <span className="font-bold text-[#00345b]">Years</span>
            <span className="text-gray-600">Of Flavours</span>
            <span className="text-gray-300">|</span>
            <span className="font-bold text-[#00345b]">Countless</span>
            <span className="text-gray-600">Smiles</span>
          </motion.div>
        </div>

        {/* CONTENT */}
        <div className="grid gap-8 pt-6 md:grid-cols-3 md:pt-10">
          <div className="md:col-span-2">
            <motion.h1
              className="mb-8 text-2xl font-semibold leading-[110%] text-gray-900 sm:text-4xl md:text-5xl"
              variants={fadeUp}
              initial="hidden"
              animate={visible ? "show" : "hidden"}
              custom={7}
            >
              Crafting Experiences That Feels Like Home.
            </motion.h1>

            <div className="grid gap-8 text-gray-600 md:grid-cols-2">
              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate={visible ? "show" : "hidden"}
                custom={8}
              >
                Our journey began as a small café dream and evolved into a space
                where flavors, ambience, and moments come together to create
                lasting memories.
              </motion.p>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate={visible ? "show" : "hidden"}
                custom={9}
              >
                Every café has a soul, and we specialize in serving ours with
                warmth and intention. By blending taste with aesthetics, we
                create experiences guests love.
              </motion.p>
            </div>
          </div>

          <div className="pt-6 text-left md:text-right">
            <motion.div
              className="mb-2 text-2xl font-bold text-[#00345b]"
              variants={fadeUp}
              initial="hidden"
              animate={visible ? "show" : "hidden"}
              custom={10}
            >
              Twist In Flavours
            </motion.div>

            <motion.div
              className="mb-6 text-sm text-gray-600"
              variants={fadeUp}
              initial="hidden"
              animate={visible ? "show" : "hidden"}
              custom={11}
            >
              Aesthetic Café | Mon - Sun | 7:30 AM - 11:00 PM
            </motion.div>

            <motion.p
              className="mb-4 font-medium text-gray-900"
              variants={fadeUp}
              initial="hidden"
              animate={visible ? "show" : "hidden"}
              custom={12}
            >
              Ready to turn your coffee break into a moment?
            </motion.p>

            <motion.button
              variants={fadeUp}
              initial="hidden"
              animate={visible ? "show" : "hidden"}
              custom={13}
              className="inline-flex items-center gap-2 rounded-lg bg-[#00345b] px-5 py-3 font-semibold text-white shadow-lg transition-all hover:gap-4 hover:bg-[#e9ddc3] hover:text-black"
              onClick ={() => window.open("https://www.google.com/maps/reserve/v/dine/c/ipYOgmCfoJQ?source=pa&opi=89978449&hl=en-IN&gei=88pcaYOVHt-74-EPosHxyAU&sourceurl=https://www.google.com/search?q%3DTwist%2BIn%2BFlavours%2BChhatrapati%2BSambhajiNagar%2B.%2B?%2B.%26oq%3DTwist%2BIn%2BFla%26gs_lcrp%3DEgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzIGCAEQRRg5MgYIAhBFGDsyDQgDEC4YrwEYxwEYgAQyBggEEEUYPDIGCAUQRRg8MgYIBhBFGDwyBggHEC4YQNIBCDI5MDlqMGoxqAIAsAIA%26sourceid%3Dchrome%26ie%3DUTF-8", "_blank")}
            >
              LET&apos;S MEET ☕✨ <ArrowRight size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
