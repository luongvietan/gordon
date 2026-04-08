"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  imagePaths: string[];
};

export function AlbumGallery({ imagePaths }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const count = imagePaths.length;

  const close = useCallback(() => setLightboxIndex(null), []);

  const goPrev = useCallback(() => {
    setLightboxIndex((i) => {
      if (i === null || count < 2) return i;
      return (i - 1 + count) % count;
    });
  }, [count]);

  const goNext = useCallback(() => {
    setLightboxIndex((i) => {
      if (i === null || count < 2) return i;
      return (i + 1) % count;
    });
  }, [count]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, close, goPrev, goNext]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [lightboxIndex]);

  return (
    <div className="flex min-h-screen flex-col bg-[#0f0f0f]">
      <header className="sticky top-0 z-10 border-b border-white/10 bg-[#0f0f0f]/90 px-4 py-4 text-center backdrop-blur-md">
        <p className="text-xs font-medium tracking-wide text-white/50">
          Wedding Album
        </p>
      </header>
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-3 py-10 pb-24 sm:gap-8 sm:px-6">
        {imagePaths.map((src, index) => (
          <ScrollRevealImage
            key={src}
            src={src}
            index={index}
            onOpen={() => setLightboxIndex(index)}
          />
        ))}
      </main>

      {lightboxIndex !== null && (
        <Lightbox
          src={imagePaths[lightboxIndex]!}
          onClose={close}
          onPrev={goPrev}
          onNext={goNext}
          canNavigate={count > 1}
        />
      )}
    </div>
  );
}

function Lightbox({
  src,
  onClose,
  onPrev,
  onNext,
  canNavigate,
}: {
  src: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  canNavigate: boolean;
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/93 p-3 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Show image"
      onClick={onClose}
    >
      {canNavigate && (
        <>
          <button
            type="button"
            className="absolute left-2 top-1/2 z-[110] -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition hover:bg-white/20 sm:left-4 sm:p-4"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
          >
            <ChevronLeft className="h-8 w-8 sm:h-10 sm:w-10" strokeWidth={1.75} />
          </button>
          <button
            type="button"
            className="absolute right-2 top-1/2 z-[110] -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition hover:bg-white/20 sm:right-4 sm:p-4"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
          >
            <ChevronRight className="h-8 w-8 sm:h-10 sm:w-10" strokeWidth={1.75} />
          </button>
        </>
      )}

      <div
        className="relative h-[min(88dvh,calc(100vh-6rem))] w-full max-w-[min(100vw-1.5rem,1600px)]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt=""
          fill
          className="object-contain"
          sizes="100vw"
          priority
          draggable={false}
        />
      </div>

      <p className="pointer-events-none absolute bottom-3 left-0 right-0 text-center text-xs text-white/45 sm:bottom-5">
        ← → next image · Esc or click dark area around image to close
      </p>
    </div>
  );
}

function ScrollRevealImage({
  src,
  index,
  onOpen,
}: {
  src: string;
  index: number;
  onOpen: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(index === 0);

  useEffect(() => {
    if (index === 0) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setVisible(true);
      },
      { rootMargin: "120px 0px", threshold: 0.05 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className={`relative w-full overflow-hidden rounded-sm shadow-lg transition-[opacity,transform] duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <button
        type="button"
        className="group relative w-full cursor-zoom-in text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
        onClick={onOpen}
        aria-label={`Zoom image ${index + 1}`}
      >
        <div className="relative w-full">
          <Image
            src={src}
            alt=""
            width={2000}
            height={3000}
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="h-auto w-full object-contain transition group-hover:brightness-95"
            loading={index === 0 ? "eager" : "lazy"}
            priority={index === 0}
            draggable={false}
          />
        </div>
      </button>
    </div>
  );
}
