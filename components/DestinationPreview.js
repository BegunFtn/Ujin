"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageProvider";

export default function DestinationPreview({
  images,
  activeImage,
  onSelect,
}) {
  const { t } = useLanguage();

  return (
    <div className="absolute bottom-0 right-0 z-20 w-[310px] max-w-[82%] rounded-tl-[58px] rounded-br-[34px] bg-[#d1d1d1]/95 px-6 pb-5 pt-4 shadow-[0_12px_30px_rgba(15,23,42,.12)] backdrop-blur-sm dark:bg-[#2a2d31]/95">
      <div className="mb-4 flex justify-end">
        <a
          href="#tour"
          className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-white underline decoration-white/90 underline-offset-4"
        >
          {t.preview.knowMore}
          <ArrowRight size={18} />
        </a>
      </div>

      <div className="flex items-center justify-end">
        {images.slice(1).map((image, index) => {
          const imageIndex = index + 1;
          const active = activeImage === imageIndex;

          return (
            <button
              key={image}
              type="button"
              onClick={() => onSelect(imageIndex)}
              aria-label={`${t.preview.showDestination} ${imageIndex}`}
              className={[
                "relative h-[52px] w-[52px] overflow-hidden rounded-full border-[3px] border-white shadow-md transition duration-300",
                index === 0 ? "" : "-ml-[9px]",
                active ? "z-20 scale-110" : "z-10 hover:z-30 hover:scale-105",
              ].join(" ")}
            >
              <Image
                src={image}
                alt={`${t.preview.destinationAlt} ${imageIndex}`}
                fill
                sizes="52px"
                className="object-cover"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}