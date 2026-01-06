"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Instagram,
  MessageCircle,
  Twitter,
  Youtube,
} from "lucide-react";
import { Logo } from "@/components/logo";
import Image from "next/image";

/* =======================
   Restaurant Footer Data
======================= */

const restaurantLinks = [
  {
    href: "https://www.instagram.com/twist_in_flavours/?hl=en",
    label: "About Us",
  },
  {
    href: "https://www.instagram.com/twist_in_flavours/?hl=en",
    label: "Our Story",
  },
  {
    href: "https://www.instagram.com/twist_in_flavours/?hl=en",
    label: "Careers",
  },
  {
    href: "https://www.instagram.com/twist_in_flavours/?hl=en",
    label: "Customer Reviews",
  },
  {
    href: "https://www.instagram.com/twist_in_flavours/?hl=en",
    label: "Contact Us",
  },
];

const menuLinks = [
  { href: "/Menu_Twist_In_Flavours_.pdf", label: "Our Menu" },
  { href: "/Menu_Twist_In_Flavours_.pdf", label: "Chef’s Specials" },
  { href: "/Menu_Twist_In_Flavours_.pdf", label: "Vegetarian" },
  { href: "/Menu_Twist_In_Flavours_.pdf", label: "Desserts" },
];

const infoLinks = [
  {
    href: "https://www.google.com/maps/reserve/v/dine/c/ipYOgmCfoJQ?source=pa&opi=89978449&hl=en-IN&gei=stFcaareCKqYseMPv5WZkQ0&sourceurl=https://www.google.com/search?q%3DTwist%2BIn%2BFlavours%2BChhatrapati%2BSambhajiNagar%2B.%2B?%2B.%26oq%3DTwist%2BIn%2B%26gs_lcrp%3DEgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzISCAEQLhgUGK8BGMcBGIcCGIAEMgYIAhBFGDkyBwgDEC4YgAQyBggEEEUYPDIGCAUQRRg8MgYIBhBFGDwyBggHEC4YQNIBCDI0ODRqMGoxqAIAsAIA%26sourceid%3Dchrome%26ie%3DUTF-8",
    label: "Reservations",
  },
  {
    href: "https://www.instagram.com/twist_in_flavours/?hl=en",
    label: "Private Events",
  },
  {
    href: "https://www.google.com/maps/reserve/v/dine/c/ipYOgmCfoJQ?source=pa&opi=89978449&hl=en-IN&gei=stFcaareCKqYseMPv5WZkQ0&sourceurl=https://www.google.com/search?q%3DTwist%2BIn%2BFlavours%2BChhatrapati%2BSambhajiNagar%2B.%2B?%2B.%26oq%3DTwist%2BIn%2B%26gs_lcrp%3DEgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzISCAEQLhgUGK8BGMcBGIcCGIAEMgYIAhBFGDkyBwgDEC4YgAQyBggEEEUYPDIGCAUQRRg8MgYIBhBFGDwyBggHEC4YQNIBCDI0ODRqMGoxqAIAsAIA%26sourceid%3Dchrome%26ie%3DUTF-8",
    label: "Catering",
  },
  {
    href: "https://www.instagram.com/twist_in_flavours/?hl=en",
    label: "Gallery",
  },
  { href: "https://www.instagram.com/twist_in_flavours/?hl=en", label: "FAQs" },
];

const communityLinks = [
  {
    href: "https://www.instagram.com/twist_in_flavours/?hl=en",
    label: "Instagram",
  },
  { href: "https://www.facebook.com/twistinflavours/", label: "Facebook" },
  { href: "tel:9960302200", label: "Call Us" },
  {
    href: "https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzIGCAEQRRg5MgYIAhBFGDsyEggDEC4YQxivARjHARiABBiKBTIGCAQQRRg8MgYIBRBFGDwyBggGEEUYPDIGCAcQLhhA0gEIMTMyN2owajGoAgCwAgA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KTGavUbCmds7MdD3n9AMc8iU&daddr=Twist+in+Flavours+Cafe+%26+Restaurant,+Snehnagar,+Konkanwadi,+Chhatrapati+Sambhajinagar,+Maharashtra+431005",
    label: "Google Maps",
  },
];

const footerLinks = [
  {
    name: "Restaurant",
    links: restaurantLinks,
  },
  {
    name: "Menu",
    links: menuLinks,
  },
  {
    name: "Info",
    links: infoLinks,
  },
];

export default function Footer() {
  return (
    <footer className="m-1 rounded-3xl border ">
      <div className="mx-auto max-w-5xl space-y-16 py-16 px-4">
        {/* Top */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-8">
          <Link
            href="#"
            aria-label="go home"
            className="flex items-center gap-4"
          >
            <Image
              src="/images/TIF_Circular_[ 2025 ]_.png"
              alt="Twist In Flavours"
              width={80}
              height={100}
              className="w-14"
            />
            <span className="text-lg font-semibold">Twist In Flavours</span>
          </Link>

          {/* Socials */}
          <div className="flex gap-3">
            {/* Threads / X */}
            <Link
              href="#"
              aria-label="Threads"
              className="text-muted-foreground hover:text-primary block"
              onClick={() =>
                window.open(
                  "https://wa.me/919960302200?text=Hello%20I%20found%20your%20cafe%20online!",
                  "_blank"
                )
              }
            >
              <svg
                className="size-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <MessageCircle />
              </svg>
            </Link>

            {/* Instagram */}
            <Link
              href="#"
              aria-label="Instagram"
              className="text-muted-foreground hover:text-primary block"
              onClick={() => {
                window.open(
                  "https://www.instagram.com/twist_in_flavours/?hl=en",
                  "_blank"
                );
              }}
            >
              <svg className="size-6" viewBox="0 0 24 24">
                <Instagram />
              </svg>
            </Link>

            {/* Facebook */}
            <Link
              href="#"
              aria-label="YouTube"
              className="text-muted-foreground hover:text-primary block"
              onClick={() =>
                window.open(
                  "https://www.facebook.com/twistinflavours",
                  "_blank"
                )
              }
            >
              <svg className="size-6" viewBox="0 0 24 24">
                <Facebook />
              </svg>
            </Link>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {footerLinks.map((group, index) => (
            <div key={index}>
              <span className="font-medium text-[#00345b]">{group.name}</span>
              <ul className="mt-4 space-y-4">
                {group.links.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      target="_blank"
                      className="text-muted-foreground hover:text-primary text-sm duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Community + Newsletter */}
          <div>
            <span className="text-sm font-medium text-[#00345b]">Connect</span>
            <ul className="mt-4 space-y-4">
              {communityLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary text-sm duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="bg-[#fed7a2] mt-16 flex items-center justify-between rounded-md px-6 py-3">
          <span>© Twist In Flavours</span>
          <Link
            href="#"
            className="text-muted-foreground hover:text-primary text-sm"
            onClick={() => {window.open("https://www.linkedin.com/in/chiranjeev-singh-sandhu/", "_blank")}}
          >
            WebSite By - Chiranjeev Singh Sandhu
          </Link>
        </div>
      </div>
    </footer>
  );
}
