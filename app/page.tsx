import React from "react";
import { MainHero } from "@/components/hero-3";
import { Navbar1 } from "@/components/ui/navbar-1";
import { Food } from "@/components/hero-section-7";
import { ReviewSummaryCard } from "@/components/card-2";
import ReachOutToUs from "@/components/ReachOutToUs";
import AboutSection from "@/components/about-section";
import Footer from "@/components/Footer";
import { CTA } from "@/components/ui/call-to-action";

const DEMO_IMAGES = [
  "images/insta_1.jpg",
  "images/insta_2.jpg",
  "images/Food_1.jpg",
  "images/insta_4.jpg",
  "images/Food_2.jpg",
  "images/insta_5.jpg",
  "images/Food_3.jpg",
  "images/insta_1.jpg",
  "images/insta_2.jpg",
  "images/Food_1.jpg",
  "images/insta_4.jpg",
  "images/fix.jpg",
  "images/insta_5.jpg",
  "images/Food_2.jpg",
  "images/Food_3.jpg",
];

const Page = () => {
  return (
    <div className="min-h-screen w-full bg-[#f6f6ee]">
      <Navbar1 />
      <section id="home">
        <MainHero
          tagline="Twist In Flavours"
          title="Experience the Twist In Flavours"
          description="Discover our unique blend of flavors that will tantalize your taste buds."
          ctaText="Explore Our Menu"
          images={DEMO_IMAGES}
        />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="reach">
        <ReachOutToUs />
      </section>
      <section id="order">
        <CTA />
      </section>
      <Footer />
    </div>
  );
};

export default Page;
