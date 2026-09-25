"use client";

import Image from "next/image";
import Link from "next/link";

import { getKhamarTrip } from "@/data/khamarTrip";
import { useLanguage } from "@/context/LanguageProvider";

export default function TourPage() {
  const { language, t } = useLanguage();
  const trip = getKhamarTrip(language);

  return (
    <div className="bg-[#071f29] text-white">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[720px] overflow-hidden">
        <Image
          src="/images/about/hero.jpg"
          alt={trip.title}
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#071f29]/40 via-[#071f29]/10 to-[#071f29]" />

        {/* Side text */}
        <div className="absolute left-6 top-1/2 hidden -translate-y-1/2 lg:block">
          <p
            className="
              rotate-180
              text-[11px]
              uppercase
              tracking-[0.45em]
              text-white/70
              [writing-mode:vertical-rl]
            "
          >
            {t.about.exploreMongolia}
          </p>
        </div>

        {/* Hero content */}
        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-[720px]
            max-w-[1120px]
            items-center
            justify-center
            px-6
            text-center
          "
        >
          <div className="max-w-[760px]">
            <p
              className="
                mb-5
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.35em]
                text-[#f4cc75]
              "
            >
              {trip.subtitle}
            </p>

            <h1
              className="
                font-serif
                text-[45px]
                leading-[1.05]
                sm:text-[60px]
                md:text-[72px]
              "
            >
              {trip.title}
              <br />
              {trip.duration}
            </h1>

            <div className="mt-8 flex justify-center gap-5">
              <Link
                href="#tour-program"
                className="
                  border-b
                  border-[#f4cc75]
                  pb-1
                  text-[12px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#f4cc75]
                "
              >
                {t.about.program}
              </Link>

              <Link
                href="/contact"
                className="
                  border-b
                  border-white/60
                  pb-1
                  text-[12px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-white/80
                "
              >
                {t.about.contact}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TOUR PROGRAM ================= */}
      <div id="tour-program">
      {trip.days.map((day, index) => {
        const imageLeft = index % 2 === 1;

        return (
          <section
            key={day.day}
            className="
              relative
              overflow-hidden
              py-28
              md:py-40
            "
          >
            {/* subtle background line */}
            <div className="pointer-events-none absolute left-0 right-0 top-1/2 h-px bg-white/[0.025]" />

            <div
              className="
                relative
                mx-auto
                grid
                max-w-[1120px]
                items-center
                gap-20
                px-6

                md:grid-cols-2
                md:gap-24
              "
            >
              {/* ================= IMAGE LEFT ================= */}
        {imageLeft && (
          <div
            className="
              relative
              mx-auto
              w-full
              max-w-[390px]

              md:order-1
              md:mx-0
            "
          >
            {/* Poster outer decorative frame */}
            <div
              className="
                absolute
                -left-4
                -top-4
                h-full
                w-full
                border
                border-[#f4cc75]/25
              "
            />

            {/* small top line */}
            <div
              className="
                absolute
                -top-8
                left-0
                flex
                items-center
                gap-3
              "
            >
              <span className="h-px w-10 bg-[#f4cc75]" />

              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.35em]
                  text-[#f4cc75]
                "
              >
                {t.about.day} {String(day.day).padStart(2, "0")}
              </span>
            </div>

            {/* IMAGE */}
            <div
              className="
                group
                relative
                z-10
                h-[500px]
                w-full
                overflow-hidden

                sm:h-[540px]
                md:h-[560px]
              "
            >
              <Image
                src={day.image}
                alt={day.title}
                fill
                sizes="390px"
                className="
                  object-cover
                  object-center
                  transition-transform
                  duration-1000
                  ease-out

                  group-hover:scale-[1.04]
                "
              />

              {/* cinematic overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#071f29]/65
                  via-transparent
                  to-black/10
                "
              />

              {/* poster bottom label */}
              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  right-5
                  flex
                  items-end
                  justify-between
                "
              >
                <div>
                  <p
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.3em]
                      text-[#f4cc75]
                    "
                  >
                    {t.about.destination}
                  </p>

                  <p className="mt-1 font-serif text-xl text-white">
                    {day.location}
                  </p>
                </div>

                <span
                  className="
                    font-serif
                    text-[42px]
                    leading-none
                    text-white/20
                  "
                >
                  {String(day.day).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* small corner decoration */}
            <div
              className="
                absolute
                -bottom-4
                -right-4
                h-16
                w-16
                border-b
                border-r
                border-[#f4cc75]/40
              "
            />
          </div>
        )}

        {/* ================= TEXT ================= */}
        <div
          className={
            imageLeft
              ? "relative md:order-2"
              : "relative"
          }
        >
          {/* BIG NUMBER */}
          <span
            className="
              pointer-events-none
              absolute
              -left-8
              -top-24
              select-none

              font-serif
              text-[140px]
              font-bold
              leading-none
              text-white/[0.035]

              md:-left-16
              md:-top-28
              md:text-[190px]
            "
          >
            {String(day.day).padStart(2, "0")}
          </span>

          <div className="relative z-10">

            {/* SMALL LABEL */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#f4cc75]" />

              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.32em]
                  text-[#f4cc75]
                "
              >
                {day.location}
              </p>
            </div>

            {/* TITLE */}
            <h2
              className="
                max-w-[520px]
                font-serif
                text-[42px]
                leading-[1.05]

                sm:text-[48px]
                md:text-[54px]
              "
            >
              {day.title}
            </h2>

            {/* ACTIVITIES */}
            <div
              className="
                mt-8
                max-w-[470px]
                space-y-4

                text-[14px]
                leading-7
                text-white/60
              "
            >
              {day.activities.map((activity, activityIndex) => (
                <div
                  key={activityIndex}
                  className="flex gap-3"
                >
                  <span className="mt-[11px] h-1 w-1 shrink-0 rounded-full bg-[#f4cc75]" />

                  <p>
                    {activity}
                  </p>
                </div>
              ))}
            </div>

            {/* DETAILS */}
            <div
              className="
                mt-8
                max-w-[460px]
                border-l
                border-[#f4cc75]/30
                pl-5

                text-[12px]
                leading-7
                text-white/50
              "
            >
              <p>
                <span className="font-semibold text-[#f4cc75]">
                  {t.about.transport}
                </span>

                <span className="mx-2 text-white/20">—</span>

                {day.transport}
              </p>

              <p>
                <span className="font-semibold text-[#f4cc75]">
                  {t.about.food}
                </span>

                <span className="mx-2 text-white/20">—</span>

                {day.food}
              </p>

              <p>
                <span className="font-semibold text-[#f4cc75]">
                  {t.about.hotel}
                </span>

                <span className="mx-2 text-white/20">—</span>

                {day.hotel}
              </p>
            </div>

            {/* LINK */}
            <Link
              href="/contact"
              className="
                group
                mt-8
                inline-flex
                items-center
                gap-3

                text-[11px]
                font-bold
                uppercase
                tracking-[0.24em]
                text-[#f4cc75]
              "
            >
              {t.about.details}

              <span
                className="
                  transition-transform
                  duration-300

                  group-hover:translate-x-2
                "
              >
                →
              </span>
            </Link>
          </div>
        </div>

        {/* ================= IMAGE RIGHT ================= */}
        {!imageLeft && (
          <div
            className="
              relative
              mx-auto
              w-full
              max-w-[390px]

              md:ml-auto
              md:mr-0
            "
          >
            {/* Poster outer frame */}
            <div
              className="
                absolute
                -right-4
                -top-4
                h-full
                w-full
                border
                border-[#f4cc75]/25
              "
            />

            {/* top label */}
            <div
              className="
                absolute
                -top-8
                right-0
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.35em]
                  text-[#f4cc75]
                "
              >
                {t.about.day} {String(day.day).padStart(2, "0")}
              </span>

              <span className="h-px w-10 bg-[#f4cc75]" />
            </div>

            {/* IMAGE */}
            <div
              className="
                group
                relative
                z-10
                h-[500px]
                w-full
                overflow-hidden

                sm:h-[540px]
                md:h-[560px]
              "
            >
              <Image
                src={day.image}
                alt={day.title}
                fill
                sizes="390px"
                className="
                  object-cover
                  object-center
                  transition-transform
                  duration-1000
                  ease-out

                  group-hover:scale-[1.04]
                "
              />

              {/* cinematic overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#071f29]/65
                  via-transparent
                  to-black/10
                "
              />

              {/* bottom label */}
              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  right-5
                  flex
                  items-end
                  justify-between
                "
              >
                <div>
                  <p
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.3em]
                      text-[#f4cc75]
                    "
                  >
                    {t.about.destination}
                  </p>

                  <p className="mt-1 font-serif text-xl text-white">
                    {day.location}
                  </p>
                </div>

                <span
                  className="
                    font-serif
                    text-[42px]
                    leading-none
                    text-white/20
                  "
                >
                  {String(day.day).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* corner decoration */}
            <div
              className="
                absolute
                -bottom-4
                -left-4
                h-16
                w-16
                border-b
                border-l
                border-[#f4cc75]/40
              "
            />
          </div>
        )}
      </div>
    </section>
  );
})}
      </div>
    </div>
  );
}