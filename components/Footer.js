"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageProvider";

function FacebookIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13.5 22v-9h3l.5-3.5h-3.5V7.3c0-1 .3-1.8 1.8-1.8H17V2.4c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.4v2.8H7.5V13h2.8v9h3.2Z" />
    </svg>
  );
}

function InstagramIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  const { t } = useLanguage();

  const links = [
    [t.header.home, "/"],
    [t.header.about, "/about"],
    [t.header.tour, "/tour"],
    // [t.header.package, "/package"],
    [t.header.contact, "/contact"],
  ];

  return (
    <footer className="border-t border-black/10 bg-[#f1f1f1] transition-colors duration-500 dark:border-white/10 dark:bg-[#0c0e10]">
      <div className="mx-auto max-w-[1120px] px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Link href="/" className="relative block h-[45px] w-[120px]">
              <Image
                src="/logo/molor-tur-logo-theme.svg"
                alt="MolorTur"
                fill
                className="object-contain object-left dark:brightness-0 dark:invert"
              />
            </Link>

            <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-bold text-black dark:text-white">
              {t.footer.quickLinks}
            </h3>

            <div className="flex flex-col gap-3">
              {links.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-slate-600 transition hover:text-[#55c4ec] dark:text-slate-400"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-bold text-black dark:text-white">
              {t.footer.destinations}
            </h3>

            <div className="flex flex-col gap-3 text-sm text-slate-600 dark:text-slate-400">
              {t.footer.destinationNames.map((name) => (
                <span key={name}>{name}</span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-bold text-black dark:text-white">
              {t.footer.contact}
            </h3>

            <div className="flex flex-col gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-[#55c4ec]" />
                <span>{t.footer.location}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#55c4ec]" />
                <span>+976 96000421</span>
                <span>+976 96660371</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#55c4ec]" />
                <span>sandtur79@gmail.com</span>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61594147902258"
                aria-label="Facebook"
                className="
                  flex h-10 w-10 items-center justify-center rounded-full
                  bg-white text-slate-700 shadow-sm transition
                  hover:-translate-y-1 hover:bg-[#55c4ec] hover:text-white
                  dark:bg-white/10 dark:text-white dark:hover:bg-[#55c4ec]
                "
              >
                <FacebookIcon size={20} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="
                  flex h-10 w-10 items-center justify-center rounded-full
                  bg-white text-slate-700 shadow-sm transition
                  hover:-translate-y-1 hover:bg-[#55c4ec] hover:text-white
                  dark:bg-white/10 dark:text-white dark:hover:bg-[#55c4ec]
                "
              >
                <InstagramIcon size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-black/10 dark:border-white/10">
        <div className="mx-auto flex max-w-[1120px] flex-col items-center justify-between gap-3 px-6 py-5 sm:flex-row">
          <p className="text-xs text-slate-500">{t.footer.rights}</p>

          <div className="flex gap-5">
            <a
              href="#"
              className="text-xs text-slate-500 transition hover:text-[#55c4ec]"
            >
              {t.footer.privacy}
            </a>

            <a
              href="#"
              className="text-xs text-slate-500 transition hover:text-[#55c4ec]"
            >
              {t.footer.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}