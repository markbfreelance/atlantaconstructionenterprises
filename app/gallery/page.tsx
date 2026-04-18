import type { Metadata } from "next";
import GalleryHero from "./_components/GalleryHero";
import GalleryGrid from "./_components/GalleryGrid";

export const metadata: Metadata = {
  title: "Our Work Gallery | Atlanta Construction Enterprises",
  description:
    "Browse our portfolio of completed residential and commercial construction projects in the Atlanta area.",
};

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <GalleryGrid />
    </>
  );
}
