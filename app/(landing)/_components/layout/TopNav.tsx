"use client";

import Link from "next/link";
import Image from "next/image";
import type { Locale } from "../../content/landingCopy";
import { landingCopy, t } from "../../content/landingCopy";
import { useEffect, useMemo, useRef, useState } from "react";
import { LandingIcon } from "../ui/LandingIcon";

export function TopNav({ locale }: { locale: Locale }) {
  const otherLocale: Locale = locale === "en" ? "vi" : "en";
  const [isOpen, setIsOpen] = useState(false);
  const headerRowRef = useRef<HTMLDivElement | null>(null);
  const mobilePanelRef = useRef<HTMLDivElement | null>(null);
  const [overlayTopPx, setOverlayTopPx] = useState(0);
  const [activeId, setActiveId] = useState<string | null>(null);

  const getHashId = (href: string) => {
    const idx = href.indexOf("#");
    if (idx < 0) return null;
    const id = href.slice(idx + 1);
    return id.length ? id : null;
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const headerOffset = overlayTopPx || headerRowRef.current?.getBoundingClientRect().height || 0;
    const y = window.scrollY + el.getBoundingClientRect().top - headerOffset - 8;
    window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
  };

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
    const updateFromHash = () => {
      const id = window.location.hash?.replace(/^#/, "") || null;
      setActiveId(id);
    };

    updateFromHash();
    window.addEventListener("hashchange", updateFromHash);
    return () => window.removeEventListener("hashchange", updateFromHash);
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

  const navItems = useMemo(
    () =>
      [
        { href: `/${locale}#overview`, label: t(locale, landingCopy.nav.overview) },
        { href: `/${locale}#products`, label: t(locale, landingCopy.nav.products) },
        { href: `/${locale}#how`, label: t(locale, landingCopy.nav.how) },
        { href: `/${locale}#features`, label: t(locale, landingCopy.nav.features) },
        { href: `/${locale}#investment`, label: t(locale, landingCopy.nav.investment) },
        { href: `/${locale}#economics`, label: t(locale, landingCopy.nav.economics) },
        { href: `/${locale}#market`, label: t(locale, landingCopy.nav.market) },
      ] as const,
    [locale],
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const headerOffset = overlayTopPx || headerRowRef.current?.getBoundingClientRect().height || 0;
    const ids = navItems.map((i) => getHashId(i.href)).filter((v): v is string => !!v);
    const uniqueIds = Array.from(new Set(ids));

    const elements = uniqueIds
      .map((id) => ({ id, el: document.getElementById(id) }))
      .filter((x): x is { id: string; el: HTMLElement } => !!x.el);

    if (!elements.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .map((e) => ({
            id: (e.target as HTMLElement).id,
            ratio: e.intersectionRatio,
            top: e.boundingClientRect.top,
          }));

        if (!visible.length) return;

        visible.sort((a, b) => {
          if (b.ratio !== a.ratio) return b.ratio - a.ratio;
          return a.top - b.top;
        });

        setActiveId((prev) => visible[0]?.id ?? prev);
      },
      {
        root: null,
        threshold: [0.15, 0.3, 0.5, 0.75],
        rootMargin: `-${Math.ceil(headerOffset + 4)}px 0px -55% 0px`,
      },
    );

    for (const { el } of elements) obs.observe(el);
    return () => obs.disconnect();
  }, [navItems, overlayTopPx]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#fbf9f6]/90 backdrop-blur-md pt-[env(safe-area-inset-top)]">
      <div
        ref={headerRowRef}
        className="relative z-50 max-w-[1200px] mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3 sm:py-6"
      >
        <Link
          href={`/${locale}#top`}
          className="flex items-center gap-3 text-primary truncate max-w-[55vw] sm:max-w-none"
          onClick={() => setIsOpen(false)}
          aria-label={landingCopy.brand}
        >
          <Image
            src="/brand/logo.png"
            alt={landingCopy.brand}
            width={180}
            height={60}
            priority
            className="h-9 sm:h-11 w-auto"
          />
        </Link>
        <div className="hidden md:flex gap-8 items-center font-headline font-medium tracking-tight">
          {navItems.map((item) => {
            const id = getHashId(item.href);
            const isActive = !!id && id === activeId;
            return (
            <Link
              key={item.href}
              className={
                isActive
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-on-surface-variant hover:text-primary transition-colors"
              }
              href={item.href}
              onClick={(e) => {
                if (!id) return;
                e.preventDefault();
                setIsOpen(false);
                setActiveId(id);
                window.history.replaceState(null, "", `#${id}`);
                scrollToSection(id);
              }}
            >
              {item.label}
            </Link>
            );
          })}
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
            <LandingIcon name={isOpen ? "close" : "menu"} size={22} className="text-primary" />
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
                {navItems.map((item) => {
                  const id = getHashId(item.href);
                  const isActive = !!id && id === activeId;
                  return (
                  <Link
                    key={item.href}
                    className={
                      isActive
                        ? "py-3 px-2 rounded-xl text-primary bg-black/5"
                        : "py-3 px-2 rounded-xl text-on-surface-variant hover:text-primary transition-colors hover:bg-black/5 active:bg-black/10"
                    }
                    href={item.href}
                    onClick={(e) => {
                      if (!id) {
                        setIsOpen(false);
                        return;
                      }
                      e.preventDefault();
                      setIsOpen(false);
                      setActiveId(id);
                      window.history.replaceState(null, "", `#${id}`);
                      scrollToSection(id);
                    }}
                  >
                    {item.label}
                  </Link>
                  );
                })}

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

