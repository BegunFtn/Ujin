"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageProvider";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-[#f5f5f5] pt-[112px] transition-colors duration-500 dark:bg-[#111315]">
  <section className="px-5 pt-6 pb-16 sm:px-6 md:px-8 md:pt-10 md:pb-24">
        <div className="mx-auto max-w-[1120px] rounded-[34px] bg-white px-6 py-14 shadow-[0_20px_60px_rgba(15,23,42,0.06)] transition-colors duration-500 dark:bg-[#17191c] sm:px-10 md:px-14 md:py-20 lg:px-20">
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            {/* LEFT CONTENT */}
            <div className="max-w-[430px] lg:pl-4">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.32em] text-[#e46a6a]">
                {t.aboutIntro.eyebrow}
              </p>

              <h1 className="text-[38px] font-extrabold uppercase leading-none tracking-[-0.03em] text-slate-950 dark:text-white sm:text-[46px]">
                {t.aboutIntro.title}
              </h1>

              <p className="mt-6 max-w-[390px] text-[14px] leading-7 text-slate-500 dark:text-slate-400">
                {t.aboutIntro.description}
              </p>

              <Link
                href="/tour"
                className="group mt-8 inline-flex items-center gap-3 rounded-[8px] bg-[#34a8cf] px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-[0_14px_28px_rgba(52,168,207,0.28)] transition duration-300 hover:-translate-y-1 hover:bg-[#2298c0]"
              >
                {t.aboutIntro.cta}
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>

            {/* RIGHT COLLAGE */}
            <div className="relative mx-auto w-full max-w-[560px] pb-16 sm:pb-20 lg:mx-0">
              <div className="space-y-5 pl-5 sm:pl-10">
                {/* TOP IMAGE */}
                <div className="relative ml-auto h-[165px] w-[88%] overflow-hidden rounded-[16px] shadow-[0_18px_36px_rgba(15,23,42,0.12)] sm:h-[190px]">
                  <Image
                    src="/images/about/hero.jpg"
                    alt={t.aboutIntro.imageAltOne}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 560px"
                    className="object-cover transition duration-700 hover:scale-105"
                  />
                </div>

                {/* MIDDLE IMAGE */}
                <div className="relative ml-auto h-[195px] w-[88%] overflow-hidden rounded-[16px] shadow-[0_18px_36px_rgba(15,23,42,0.12)] sm:h-[230px]">
                  <Image
                    src="/images/khamar/day2.jpg"
                    alt={t.aboutIntro.imageAltTwo}
                    fill
                    sizes="(max-width: 1024px) 100vw, 560px"
                    className="object-cover transition duration-700 hover:scale-105"
                  />
                </div>
              </div>

              {/* SMALL OVERLAPPING IMAGE */}
              <div className="absolute bottom-0 left-0 h-[165px] w-[185px] overflow-hidden rounded-[18px] border-[7px] border-white shadow-[0_18px_40px_rgba(15,23,42,0.18)] dark:border-[#17191c] sm:h-[190px] sm:w-[215px]">
                <Image
                  src="/images/khamar/day3.jpg"
                  alt={t.aboutIntro.imageAltThree}
                  fill
                  sizes="215px"
                  className="object-cover transition duration-700 hover:scale-105"
                />
              </div>

              {/* BLUE BADGE */}
              <div className="absolute bottom-2 left-[150px] z-20 rounded-[12px] bg-[#34a8cf] px-5 py-4 text-white shadow-[0_14px_28px_rgba(52,168,207,0.35)] sm:left-[178px] sm:px-6">
                <div className="text-[28px] font-extrabold leading-none sm:text-[34px]">
                  10+
                </div>
                <div className="mt-1 text-[11px] font-semibold sm:text-[12px]">
                  {t.aboutIntro.places}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OPTIONAL LOWER SECTION */}
      <section className="px-5 pb-24 sm:px-6 md:px-8">
        <div className="mx-auto grid max-w-[1120px] gap-5 md:grid-cols-3">
          {t.aboutIntro.stats.map((item) => (
            <div
              key={item.label}
              className="rounded-[24px] border border-black/5 bg-white px-7 py-8 shadow-[0_12px_40px_rgba(15,23,42,0.04)] transition-colors duration-500 dark:border-white/10 dark:bg-[#17191c]"
            >
              <div className="text-[30px] font-extrabold text-[#34a8cf]">
                {item.value}
              </div>
              <div className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
                {item.label}
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}