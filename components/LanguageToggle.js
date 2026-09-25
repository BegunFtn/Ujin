"use client";

import "./LanguageToggle.css";
import { useLanguage } from "@/context/LanguageProvider";

export default function LanguageToggle() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <div className="language-switch">
      <span className={`language-label ${language === "en" ? "active" : ""}`}>
        EN
      </span>

      <button
        type="button"
        className={`language-toggle ${language}`}
        onClick={toggleLanguage}
        aria-label={t.header.changeLanguage}
        aria-pressed={language === "mn"}
      >
        <div className="flag flag-en">🇬🇧</div>
        <div className="flag flag-mn">🇲🇳</div>
        <div className="language-knob" />
      </button>

      <span className={`language-label ${language === "mn" ? "active" : ""}`}>
        MN
      </span>
    </div>
  );
}