"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

interface LocationTagProps {
  city?: string;
  country?: string;
  timezone?: string;
}

export function LocationTag({
  city = "San Francisco",
  country = "USA",
  timezone = "PST",
}: LocationTagProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  const isTouchDevice =
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0);

  const [isRevealed, setIsRevealed] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isRevealed || !isTouchDevice) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsRevealed(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isRevealed]);

  useEffect(() => {
    if (!isTouchDevice && isHovered) {
      setIsRevealed(false);
    }
  }, [isHovered]);

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="
        group cursor-pointer relative mx-auto inline-flex w-fit items-center gap-3
        rounded-full
        border border-[#00345b]/30
        bg-[#00345b]/90
        px-4 py-2.5
        text-white
        transition-all duration-500 ease-out
        hover:bg-[#00345b]
        hover:border-[#00345b]/50
        hover:shadow-[0_0_20px_rgba(0,52,91,0.35)]
      "
    >
      {/* Live pulse indicator (UNCHANGED) */}
      <div className="relative flex items-center justify-center">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
      </div>

      {/* Location text */}
      <div
        ref={containerRef}
        className="flex items-center gap-2 overflow-hidden relative"
      >
        {/* Initial text */}
        <span
          className="text-sm font-medium transition-all duration-500 cursor-pointer"
          style={{
            color: "white",
            transform:
              isHovered || isRevealed ? "translateY(-100%)" : "translateY(0)",
            opacity: isHovered || isRevealed ? 0 : 1,
          }}
          onClick={() => {
            if (isTouchDevice) setIsRevealed(true);
          }}
        >
          {city}, {country}
        </span>

        {/* Google Maps text */}
        <span
          className="absolute left-0 text-sm font-medium transition-all duration-500"
          style={{
            color: "white",
            transform:
              isHovered || isRevealed ? "translateY(0)" : "translateY(100%)",
            opacity: isHovered || isRevealed ? 1 : 0,
            pointerEvents: isHovered || isRevealed ? "auto" : "none",
          }}
        >
          <Link
            href="https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDwyBggCEEUYPDIGCAMQRRg8MgYIBBAuGEDSAQkxMDExNWowajGoAgCwAgA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KTGavUbCmds7MdD3n9AMc8iU&daddr=Twist+in+Flavours+Cafe+%26+Restaurant,+Snehnagar,+Konkanwadi,+Chhatrapati+Sambhajinagar,+Maharashtra+431005"
            target="_blank"
            onClick={(e) => {
              if (isTouchDevice && !isRevealed) {
                e.preventDefault();
                setIsRevealed(true);
              }
            }}
          >
            Google Maps Location
          </Link>
        </span>
      </div>

      {/* Arrow indicator */}
      <svg
        className="h-3 w-3 transition-all duration-300"
        style={{
          color: "white",
          transform: isHovered
            ? "translateX(2px) rotate(-45deg)"
            : "translateX(0) rotate(0)",
          opacity: isHovered ? 1 : 0.6,
        }}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
        />
      </svg>
    </button>
  );
}
