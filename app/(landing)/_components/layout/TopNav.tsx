"use client";

import Link from "next/link";
import type { Locale } from "../../content/landingCopy";
import { landingCopy, t } from "../../content/landingCopy";
import { useEffect, useMemo, useRef, useState } from "react";

export function TopNav({ locale }: { locale: Locale }) {
  const otherLocale: Locale = locale === "en" ? "vi" : "en";
  const [isOpen, setIsOpen] = useState(false);
  const headerRowRef = useRef<HTMLDivElement | null>(null);
  const mobilePanelRef = useRef<HTMLDivElement | null>(null);
  const [overlayTopPx, setOverlayTopPx] = useState(0);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Node | null;
      if (!target) return;

      const headerEl = headerRowRef.current;
      const panelEl = mobilePanelRef.current;

      const clickedHeader = !!headerEl && headerEl.contains(target);
      const clickedPanel = !!panelEl && panelEl.contains(target);
      if (clickedHeader || clickedPanel) return;

      setIsOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown, { capture: true });
    return () => document.removeEventListener("pointerdown", onPointerDown, { capture: true });
  }, [isOpen]);

  useEffect(() => {
    const el = headerRowRef.current;
    if (!el) return;

    const update = () => setOverlayTopPx(el.getBoundingClientRect().height);
    update();

    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  const overlayStyle = useMemo<React.CSSProperties>(() => ({ top: overlayTopPx }), [overlayTopPx]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#fbf9f6]/90 backdrop-blur-md pt-[env(safe-area-inset-top)]">
      <div
        ref={headerRowRef}
        className="relative z-50 max-w-[1200px] mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3 sm:py-6"
      >
        <Link
          href={`/${locale}#top`}
          className="text-lg sm:text-2xl font-black text-primary truncate max-w-[55vw] sm:max-w-none"
          onClick={() => setIsOpen(false)}
        >
          {landingCopy.brand}
        </Link>
        <div className="hidden md:flex gap-8 items-center font-headline font-medium tracking-tight">
          <Link className="text-primary border-b-2 border-primary pb-1" href={`/${locale}#products`}>
            {t(locale, landingCopy.nav.products)}
          </Link>
          <Link
            className="text-on-surface-variant hover:text-primary transition-colors"
            href={`/${locale}#investment`}
          >
            {t(locale, landingCopy.nav.investment)}
          </Link>
          <Link
            className="text-on-surface-variant hover:text-primary transition-colors"
            href={`/${locale}#market`}
          >
            {t(locale, landingCopy.nav.market)}
          </Link>
        </div>
        <div className="flex items-center gap-2 sm:gap-6">
          <Link
            className="text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors px-2 py-2 rounded-lg hover:bg-black/5 active:bg-black/10"
            href={`/${otherLocale}`}
            onClick={() => setIsOpen(false)}
            aria-label={`Switch language to ${otherLocale.toUpperCase()}`}
          >
            {otherLocale.toUpperCase()}
          </Link>
          <Link
            href={`/${locale}#investment`}
            className="hidden sm:inline-flex bg-primary text-white px-5 sm:px-6 py-2.5 rounded-full font-bold hover:opacity-80 transition-opacity active:scale-95 duration-200"
            onClick={() => setIsOpen(false)}
          >
            {t(locale, landingCopy.nav.investNow)}
          </Link>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-outline-variant/40 text-primary bg-surface-container-lowest/70 hover:bg-surface-container-lowest transition-colors active:scale-[0.98]"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsOpen((v) => !v)}
          >
            <span className="material-symbols-outlined" aria-hidden="true">
              {isOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="md:hidden" id="mobile-nav">
          <div
            className="fixed left-0 right-0 bottom-0 bg-black/30 z-40"
            role="presentation"
            onClick={() => setIsOpen(false)}
            style={overlayStyle}
          />
          <div
            ref={mobilePanelRef}
            className="absolute left-0 right-0 top-full bg-[#fbf9f6] border-t border-outline-variant/30 shadow-lg z-40"
          >
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
              <div className="flex flex-col gap-1 font-headline font-medium">
                <Link
                  className="py-3 px-2 rounded-xl text-primary hover:bg-black/5 active:bg-black/10"
                  href={`/${locale}#products`}
                  onClick={() => setIsOpen(false)}
                >
                  {t(locale, landingCopy.nav.products)}
                </Link>
                <Link
                  className="py-3 px-2 rounded-xl text-on-surface-variant hover:text-primary transition-colors hover:bg-black/5 active:bg-black/10"
                  href={`/${locale}#investment`}
                  onClick={() => setIsOpen(false)}
                >
                  {t(locale, landingCopy.nav.investment)}
                </Link>
                <Link
                  className="py-3 px-2 rounded-xl text-on-surface-variant hover:text-primary transition-colors hover:bg-black/5 active:bg-black/10"
                  href={`/${locale}#market`}
                  onClick={() => setIsOpen(false)}
                >
                  {t(locale, landingCopy.nav.market)}
                </Link>

                <Link
                  href={`/${locale}#investment`}
                  className="mt-3 inline-flex justify-center bg-primary text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity active:scale-[0.99] duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {t(locale, landingCopy.nav.investNow)}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </nav>
  );
}

