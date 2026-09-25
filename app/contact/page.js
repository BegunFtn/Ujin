"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageProvider";

export default function ContactPage() {
  const { t } = useLanguage();

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();

  // Form element-ийг await-аас өмнө хадгална
  const formElement = e.currentTarget;

  setLoading(true);
  setSent(false);
  setError("");

  const form = new FormData(formElement);

  const data = {
    tour: form.get("tour"),
    date: form.get("date"),
    name: form.get("name"),
    people: form.get("people"),
    email: form.get("email"),
    message: form.get("message"),
  };

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Failed to send request");
    }

    // Амжилттай
    setSent(true);

    // Form reset
    formElement.reset();

    // Success message 5 секунд харагдана
    setTimeout(() => {
      setSent(false);
    }, 5000);
  } catch (err) {
    console.error("Contact form error:", err);

    setError("Хүсэлт илгээхэд алдаа гарлаа.");
  } finally {
    setLoading(false);
  }
};

  return (
    <main className="min-h-screen bg-[#f5f5f5] pt-[112px] transition-colors duration-500 dark:bg-[#111315]">
      <section className="px-5 pb-20 pt-8 sm:px-6 md:px-8 md:pt-12">
        <div className="mx-auto max-w-[1120px] rounded-[34px] bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.06)] dark:bg-[#17191c] sm:p-8">
          <div className="relative min-h-[560px] overflow-hidden rounded-[26px] lg:min-h-[600px]">
            {/* BACKGROUND */}
            <Image
              src="/images/about/hero.jpg"
              alt={t.contactPage.imageAlt}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1120px"
              className="object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/35" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/20 to-black/15" />

            {/* CONTENT */}
            <div className="relative z-10 grid min-h-[560px] items-center gap-14 px-7 py-14 sm:px-10 md:px-14 lg:min-h-[600px] lg:grid-cols-2 lg:px-20">
              {/* LEFT */}
              <div className="max-w-[430px] text-white">
                <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.32em] text-[#72d7f5]">
                  {t.contactPage.eyebrow}
                </p>

                <h1 className="text-[48px] font-light uppercase leading-[0.92] tracking-[-0.04em] sm:text-[60px] md:text-[68px]">
                  {t.contactPage.titleOne}
                  <br />
                  {t.contactPage.titleTwo}
                </h1>

                <p className="mt-7 max-w-[360px] text-[13px] leading-6 text-white/75">
                  {t.contactPage.description}
                </p>

                <div className="mt-9 flex flex-wrap gap-7 text-[12px] text-white/75">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/45">
                      {t.contactPage.phoneLabel}
                    </p>

                    <p className="mt-2 font-medium text-white">
                      +976 96000421
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/45">
                      {t.contactPage.emailLabel}
                    </p>

                    <p className="mt-2 font-medium text-white">
                      hello@firstfly.com
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT FORM */}
              <div className="w-full max-w-[430px] lg:ml-auto">
                <h2 className="mb-7 text-[24px] font-semibold text-white sm:text-[28px]">
                  {t.contactPage.formTitle}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* TOUR */}
                  <div className="border-b border-white/40">
                    <select
                      name="tour"
                      required
                      defaultValue=""
                      className="w-full appearance-none bg-transparent py-3 text-[13px] text-white outline-none"
                    >
                      <option value="" disabled className="text-black">
                        {t.contactPage.chooseTour}
                      </option>

                      <option value="khamar" className="text-black">
                        {t.contactPage.khamarTour}
                      </option>

                      <option value="gobi" className="text-black">
                        {t.contactPage.gobiTour}
                      </option>

                      <option value="custom" className="text-black">
                        {t.contactPage.customTour}
                      </option>
                    </select>
                  </div>

                  {/* DATE */}
                  <div className="border-b border-white/40">
                    <input
                      name="date"
                      type="date"
                      required
                      className="w-full bg-transparent py-3 text-[13px] text-white outline-none [color-scheme:dark]"
                    />
                  </div>

                  {/* NAME */}
                  <div className="border-b border-white/40">
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder={t.contactPage.name}
                      className="w-full bg-transparent py-3 text-[13px] text-white outline-none placeholder:text-white/70"
                    />
                  </div>

                  {/* PEOPLE */}
                  <div className="border-b border-white/40">
                    <input
                      name="people"
                      type="number"
                      min="1"
                      required
                      placeholder={t.contactPage.people}
                      className="w-full bg-transparent py-3 text-[13px] text-white outline-none placeholder:text-white/70"
                    />
                  </div>

                  {/* EMAIL */}
                  <div className="border-b border-white/40">
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder={t.contactPage.email}
                      className="w-full bg-transparent py-3 text-[13px] text-white outline-none placeholder:text-white/70"
                    />
                  </div>

                  {/* MESSAGE */}
                  <div className="border-b border-white/40">
                    <textarea
                      name="message"
                      rows={2}
                      placeholder={t.contactPage.message}
                      className="w-full resize-none bg-transparent py-3 text-[13px] text-white outline-none placeholder:text-white/70"
                    />
                  </div>

                  <div className="flex items-center gap-5 pt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      aria-label={t.contactPage.send}
                      className="
                        group
                        flex
                        h-[58px]
                        w-[58px]
                        items-center
                        justify-center
                        rounded-full
                        bg-white
                        text-[#2298c0]
                        shadow-[0_12px_30px_rgba(0,0,0,0.18)]
                        transition-all
                        duration-300
                        hover:scale-105
                        hover:bg-[#67caf0]
                        hover:text-white
                        disabled:cursor-not-allowed
                        disabled:opacity-50
                      "
                    >
                      {loading ? (
                        <span className="text-sm">...</span>
                      ) : (
                        <ArrowRight
                          size={20}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      )}
                    </button>

                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
                      {loading ? "Sending..." : t.contactPage.send}
                    </span>
                  </div>

                  {sent && (
                    <div className="mt-4 rounded-xl border border-green-400/30 bg-green-500/20 px-4 py-3 text-sm text-white backdrop-blur-md">
                      {t.contactPage.success}
                    </div>
                  )}

                  {error && (
                    <div className="mt-4 rounded-xl border border-red-400/30 bg-red-500/20 px-4 py-3 text-sm text-white backdrop-blur-md">
                      {error}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}