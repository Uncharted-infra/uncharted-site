"use client";

import { useEffect } from "react";

import { useTheme } from "@/components/ui/ThemeProvider";
import { themeFaviconPaths } from "@/lib/favicon-metadata";

function setThemedLink(rel: string, href: string) {
  const selector = `link[rel='${rel}'][data-theme-aware]`;
  let link = document.querySelector(selector) as HTMLLinkElement | null;

  if (!link) {
    link = document.createElement("link");
    link.rel = rel;
    link.setAttribute("data-theme-aware", "true");
    document.head.appendChild(link);
  }

  link.href = href;
}

function applyThemeIcons(theme: "light" | "dark") {
  const isDark = theme === "dark";
  setThemedLink("icon", isDark ? themeFaviconPaths.dark : themeFaviconPaths.light);
  setThemedLink(
    "shortcut icon",
    isDark ? themeFaviconPaths.dark : themeFaviconPaths.light
  );
  setThemedLink(
    "apple-touch-icon",
    isDark ? themeFaviconPaths.appleDark : themeFaviconPaths.appleLight
  );
}

export function ThemeFavicon() {
  const { theme } = useTheme();

  useEffect(() => {
    applyThemeIcons(theme);
  }, [theme]);

  return null;
}
