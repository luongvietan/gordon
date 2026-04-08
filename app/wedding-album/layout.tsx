import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Private album",
  robots: {
    index: false,
    follow: false,
    noimageindex: true,
    noarchive: true,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function WeddingAlbumLayout({ children }: { children: ReactNode }) {
  return children;
}
