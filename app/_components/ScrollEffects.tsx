"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

function prefersReducedMotion() {
  if (typeof window === "undefined") return true;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

function q(el: Element, selector: string) {
  return Array.from(el.querySelectorAll<HTMLElement>(selector));
}

function animateSection(section: HTMLElement) {
  const type = section.dataset.animate || section.id || "default";

  const base: gsap.TweenVars = {
    duration: 0.8,
    ease: "power2.out",
  };

  const title = q(section, "[data-anim='title']");
  const subtitle = q(section, "[data-anim='subtitle']");
  const body = q(section, "[data-anim='body']");
  const media = q(section, "[data-anim='media']");
  const cards = q(section, "[data-anim='card']");
  const items = q(section, "[data-anim='item']");
  const ctas = q(section, "[data-anim='cta']");

  const isHero = type === "hero" || section.id === "top";

  // Hero is above the fold; using ScrollTrigger here can leave elements in a
  // partially-initialized "from" state during load/refresh on some setups.
  const tl = isHero
    ? gsap.timeline({ defaults: base })
    : gsap.timeline({
        defaults: base,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

  // Section-specific choreography (fall back to a consistent reveal).
  if (isHero) {
    if (title.length) tl.from(title, { y: 18, autoAlpha: 0, immediateRender: false }, 0);
    if (subtitle.length) tl.from(subtitle, { y: 14, autoAlpha: 0, immediateRender: false }, 0.05);
    if (ctas.length)
      tl.from(ctas, { y: 10, autoAlpha: 0, stagger: 0.08, immediateRender: false }, 0.12);
    if (media.length)
      tl.from(
        media,
        { y: 14, autoAlpha: 0, scale: 0.985, duration: 0.9, immediateRender: false },
        0.08,
      );

    // Ensure we don't leave inline styles that could "mute" hover styles.
    tl.set([...title, ...subtitle, ...ctas, ...media], { clearProps: "opacity,visibility,transform" });
    return tl;
  }

  if (type === "trust") {
    if (items.length) tl.from(items, { y: 14, autoAlpha: 0, stagger: 0.07 }, 0);
    return tl;
  }

  if (type === "overview") {
    tl.from(section.querySelectorAll(":scope > div"), { y: 16, autoAlpha: 0 }, 0);
    return tl;
  }

  if (type === "products") {
    if (media.length) tl.from(media, { x: -18, autoAlpha: 0 }, 0);
    const right = [...title, ...subtitle, ...body].filter(Boolean);
    if (right.length) tl.from(right, { x: 18, autoAlpha: 0, stagger: 0.05 }, 0.02);
    if (cards.length) tl.from(cards, { y: 12, autoAlpha: 0, stagger: 0.08 }, 0.15);
    return tl;
  }

  if (type === "value") {
    if (title.length) tl.from(title, { y: 14, autoAlpha: 0 }, 0);
    if (subtitle.length) tl.from(subtitle, { y: 10, autoAlpha: 0 }, 0.06);
    if (cards.length) tl.from(cards, { y: 14, autoAlpha: 0, stagger: 0.08 }, 0.12);
    return tl;
  }

  if (type === "how") {
    if (title.length) tl.from(title, { y: 14, autoAlpha: 0 }, 0);
    if (items.length)
      tl.from(items, { y: 18, autoAlpha: 0, scale: 0.98, stagger: 0.08 }, 0.08);
    return tl;
  }

  if (type === "features") {
    if (title.length) tl.from(title, { y: 14, autoAlpha: 0 }, 0);
    if (cards.length) tl.from(cards, { y: 16, autoAlpha: 0, stagger: 0.06 }, 0.08);
    return tl;
  }

  if (type === "investment") {
    if (title.length) tl.from(title, { y: 14, autoAlpha: 0 }, 0);
    if (subtitle.length) tl.from(subtitle, { y: 10, autoAlpha: 0 }, 0.05);
    if (cards.length)
      tl.from(cards, { y: 16, autoAlpha: 0, scale: 0.985, stagger: 0.07 }, 0.1);
    return tl;
  }

  if (type === "economics") {
    if (title.length) tl.from(title, { y: 14, autoAlpha: 0 }, 0);
    if (subtitle.length) tl.from(subtitle, { y: 10, autoAlpha: 0 }, 0.06);
    if (cards.length) tl.from(cards, { y: 14, autoAlpha: 0, stagger: 0.08 }, 0.1);
    return tl;
  }

  if (type === "market") {
    const left = [...title, ...subtitle, ...body].filter(Boolean);
    if (left.length) tl.from(left, { x: -18, autoAlpha: 0, stagger: 0.05 }, 0);
    if (items.length) tl.from(items, { x: -14, autoAlpha: 0, stagger: 0.05 }, 0.08);
    if (media.length) tl.from(media, { x: 18, autoAlpha: 0 }, 0.02);
    if (media.length) {
      gsap.to(media, {
        yPercent: -4,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }
    return tl;
  }

  if (type === "funding") {
    if (title.length) tl.from(title, { y: 14, autoAlpha: 0 }, 0);
    if (cards.length) tl.from(cards, { y: 14, autoAlpha: 0, stagger: 0.08 }, 0.08);
    if (ctas.length) tl.from(ctas, { y: 10, autoAlpha: 0 }, 0.12);
    if (!title.length && !cards.length && !ctas.length) {
      tl.from(section.querySelectorAll(":scope > div"), { y: 14, autoAlpha: 0 }, 0);
    }
    return tl;
  }

  // Default reveal for any other section.
  const targets = [...title, ...subtitle, ...body, ...cards, ...items, ...media, ...ctas];
  if (targets.length) {
    tl.from(targets, { y: 14, autoAlpha: 0, stagger: 0.05 }, 0);
  } else {
    tl.from(section.querySelectorAll(":scope > *"), { y: 14, autoAlpha: 0, stagger: 0.05 }, 0);
  }
  return tl;
}

export function ScrollEffects() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (prefersReducedMotion()) return;

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      touchMultiplier: 1.2,
      wheelMultiplier: 0.95,
    });

    window.__lenis = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    const ctx = gsap.context(() => {
      const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-animate], section"));
      const unique = Array.from(new Set(elements));
      for (const el of unique) {
        if (el.dataset.animate === "off") continue;
        animateSection(el);
      }
    });

    // Ensure ScrollTrigger measures after fonts/images settle.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    window.addEventListener("resize", refresh);
    setTimeout(refresh, 250);

    return () => {
      window.removeEventListener("load", refresh);
      window.removeEventListener("resize", refresh);
      ctx.revert();
      lenis.destroy();
      if (window.__lenis === lenis) delete window.__lenis;
    };
  }, []);

  return null;
}

