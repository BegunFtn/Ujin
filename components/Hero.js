"use client";

import Image from "next/image";
import { useState } from "react";
import DestinationPreview from "@/components/DestinationPreview";

const images = [
  "/images/heronew.jpg",
  // "/images/slider-1.jpg",
  // "/images/slider-2.jpg",
  // "/images/slider-3.jpg",
  // "/images/slider-4.jpg",
];

export default function Hero() {
  const [activeImage, setActiveImage] = useState(0);

  return (
   <section
  id="home"
  className="
    bg-[#f7f7f7]
    px-4
    pt-[136px]
    pb-8

    transition-colors
    duration-500

    dark:bg-[#111315]

    sm:px-6
    md:px-8
  "
>
      <div className="relative mx-auto w-full max-w-[1120px]">
        <div
          className="
            relative
            h-[505px]
            overflow-hidden
            rounded-[42px]
          "
        >
          {/* HERO IMAGE */}
          <Image
            key={images[activeImage]}
            src={images[activeImage]}
            alt="Beautiful travel destination"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1120px"
            className="object-cover"
          />

          {/* OVERLAY */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-black/35
              via-black/10
              to-black/0
            "
          />

          {/* HERO TEXT */}
          <div
            className="
              absolute
              left-[7%]
              top-[47%]
              z-10
              w-[86%]
              max-w-[680px]
              -translate-y-1/2
              text-white

              md:w-auto
            "
          >
            <p
              className="
                mb-2
                text-[13px]
                font-medium
                uppercase
                tracking-[0.02em]

                sm:text-[15px]
              "
            >
              Your Adventure Starts Here
            </p>

            <h1
              className="
                text-[39px]
                font-extrabold
                leading-[1.12]
                tracking-[-0.035em]

                sm:text-[50px]
                md:text-[54px]
              "
            >
              <span
                className="
                  font-medium
                  text-transparent
                  [-webkit-text-stroke:1.4px_white]
                "
              >
                Discover
              </span>{" "}
              Amazing

              <br />

              Places And Create

              <br />

              Stories To{" "}

              <span
                className="
                  text-transparent
                  [-webkit-text-stroke:1.4px_white]
                "
              >
                Remember
              </span>
            </h1>

            <a
              href="/package"
              className="
                mt-7
                inline-flex
                rounded-[11px]
                bg-[#67caf0]
                px-5
                py-3
                text-[13px]
                font-semibold
                text-white
                shadow-[0_6px_16px_rgba(61,185,231,.4)]
                transition

                hover:-translate-y-0.5
                hover:bg-[#50c1eb]
              "
            >
              Book A Trip Now
            </a>
          </div>

          {/* DESTINATION PREVIEW */}
          <DestinationPreview
            images={images}
            activeImage={activeImage}
            onSelect={setActiveImage}
          />
        </div>
      </div>
    </section>
  );
}