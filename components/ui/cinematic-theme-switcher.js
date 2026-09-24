"use client";

import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function CinematicThemeSwitcher() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [burstKey, setBurstKey] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        aria-hidden="true"
        className="h-[40px] w-[72px] rounded-full bg-slate-200 dark:bg-slate-800"
      />
    );
  }

  const isDark = theme === "dark" || resolvedTheme === "dark";

  function toggleTheme() {
    setBurstKey((value) => value + 1);
    setTheme(isDark ? "light" : "dark");
  }

  return (
    <motion.button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      onClick={toggleTheme}
      whileTap={{ scale: 0.96 }}
      className="relative h-[40px] w-[72px] overflow-hidden rounded-full border border-black/10 bg-gradient-to-br from-white via-slate-100 to-slate-300 p-[4px] shadow-[inset_3px_3px_7px_rgba(15,23,42,.18),inset_-3px_-3px_7px_rgba(255,255,255,.9),0_5px_14px_rgba(15,23,42,.12)] transition-all duration-500 dark:border-white/10 dark:from-slate-800 dark:via-slate-900 dark:to-black dark:shadow-[inset_3px_3px_8px_rgba(0,0,0,.8),inset_-2px_-2px_6px_rgba(148,163,184,.15),0_7px_18px_rgba(0,0,0,.35)]"
    >
      <Sun
        size={13}
        className="absolute left-[9px] top-1/2 -translate-y-1/2 text-amber-500"
      />
      <Moon
        size={13}
        className="absolute right-[9px] top-1/2 -translate-y-1/2 text-slate-100"
      />

      <motion.span
        className="relative z-10 flex h-[30px] w-[30px] items-center justify-center rounded-full border border-white/70 bg-white shadow-[0_4px_12px_rgba(15,23,42,.22)] dark:border-slate-500/50 dark:bg-slate-700"
        animate={{ x: isDark ? 32 : 0 }}
        transition={{ type: "spring", stiffness: 360, damping: 24 }}
      >
        {isDark ? (
          <Moon size={14} className="text-yellow-200" />
        ) : (
          <Sun size={14} className="text-amber-500" />
        )}
      </motion.span>

      <motion.span
        key={burstKey}
        className="pointer-events-none absolute left-1/2 top-1/2 h-2 w-2 rounded-full"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 8, opacity: [0, 0.28, 0] }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(250,204,21,.9), rgba(250,204,21,0))"
            : "radial-gradient(circle, rgba(96,165,250,.8), rgba(96,165,250,0))",
          transform: "translate(-50%, -50%)",
        }}
      />
    </motion.button>
  );
}
