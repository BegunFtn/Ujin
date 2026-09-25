"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

import CinematicThemeSwitcher from "@/components/ui/cinematic-theme-switcher";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/context/LanguageProvider";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLanguage();

  const links = [
    [t.header.home, "/"],
    [t.header.about, "/about"],
    [t.header.tour, "/tour"],
    // [t.header.package, "/package"],
    [t.header.contact, "/contact"],
  ];

  return (
    <header
      className="
        fixed left-0 right-0 top-0 z-50 w-full
        border-b border-white/10
        bg-white/10 backdrop-blur-xl
        transition-all duration-500 dark:bg-black/10
      "
    >
      <div
        className="
          mx-auto flex min-h-[112px] w-full max-w-[1180px]
          items-center justify-between gap-4 px-5 md:px-8
        "
      >
        <div className="flex shrink-0 items-center gap-4">
          <div className="flex w-[74px] flex-col items-center gap-1">
            <CinematicThemeSwitcher />

            <span className="text-[11px] text-black dark:text-white">
              Dark mode
            </span>
          </div>

          <Link
            href="/"
            className="relative block h-[48px] w-[116px]"
            aria-label="FirstFly home"
          >
            <Image
              src="/logo/molor-tur-logo-theme.svg"
              alt="MolorTur"
              fill
              priority
              className="object-contain dark:brightness-0 dark:invert"
            />
          </Link>
        </div>

        <nav className="hidden items-stretch md:flex">
          {links.map(([label, href], index) => (
            <Link
              key={href}
              href={href}
              className={[
                `
                  flex min-w-[94px] items-center justify-center
                  border-y border-white/30 bg-white/5 px-4 py-3
                  text-[13px] font-medium text-slate-900 backdrop-blur-md
                  transition-all duration-300 hover:bg-white/30
                  dark:border-white/15 dark:text-slate-100 dark:hover:bg-white/10
                `,
                index === 0 ? "border-l" : "",
                "border-r",
              ].join(" ")}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden lg:flex">
            <LanguageToggle />
          </div>

          <Link
            href="/contact"
            className="
              hidden rounded-[10px] bg-[#67caf0]/90 px-5 py-3
              text-[12px] font-semibold tracking-wide text-white
              shadow-[0_5px_18px_rgba(64,190,235,.40)] backdrop-blur-md
              transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4fc2ed]
              sm:inline-flex
            "
          >
            {t.header.bookNow}
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="
              inline-flex h-10 w-10 items-center justify-center rounded-lg
              border border-white/30 bg-white/15 text-slate-800 backdrop-blur-xl
              transition hover:bg-white/30
              dark:border-white/15 dark:bg-white/10 dark:text-white md:hidden
            "
            aria-label={t.header.toggleNavigation}
            aria-expanded={menuOpen}
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className="
            absolute left-5 right-5 top-[100px] rounded-2xl
            border border-white/20 bg-white/30 p-3
            shadow-[0_20px_50px_rgba(0,0,0,0.15)] backdrop-blur-2xl
            dark:border-white/10 dark:bg-black/40 md:hidden
          "
        >
          <nav className="grid gap-1">
            {links.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="
                  rounded-xl px-4 py-3 text-sm font-medium text-slate-800
                  transition hover:bg-white/40 dark:text-white dark:hover:bg-white/10
                "
              >
                {label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="
                mt-2 rounded-xl bg-[#67caf0] px-4 py-3 text-center
                text-sm font-semibold text-white
              "
            >
              {t.header.bookNow}
            </Link>
          </nav>

          <div className="mt-4 flex justify-center">
            <LanguageToggle />
          </div>
        </div>
      )}
    </header>
  );
}