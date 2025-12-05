"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { styles } from "@/lib/colors";

// Gallery data with real images
const galleries = [
  {
    title: "Arets trener 2025 - Unni Helland",
    date: "November 2025",
    images: [
      {
        id: 1,
        alt: "Unni Helland mottar prisen",
        src: "https://primary.jwwb.nl/public/h/s/f/temp-ftprvysvjpxdkslapovc/pasted-image-sun-jan-05-2025-11-37-04-gmt-0100-sentraleuropeisk-normaltid-high.png?enable-io=true&crop=3.7692%3A1&width=1920",
      },
      {
        id: 2,
        alt: "Unni Helland",
        src: "https://primary.jwwb.nl/public/h/s/f/temp-ftprvysvjpxdkslapovc/unni-high-ds14d9.jpg?enable-io=true&crop=0.3625%3A1&width=816",
      },
    ],
  },
  {
    title: "Trenerseminar 2025",
    date: "2025",
    images: [
      {
        id: 3,
        alt: "Miika Lahtonen og Aatu Kangasniemi",
        src: "https://primary.jwwb.nl/public/h/s/f/temp-ftprvysvjpxdkslapovc/miika-og-aatu-high.jpg?enable-io=true&width=1252",
      },
      {
        id: 4,
        alt: "Diskoskast demonstrasjon",
        src: "https://primary.jwwb.nl/public/h/s/f/temp-ftprvysvjpxdkslapovc/diskos-high.jpg?enable-io=true&width=1252",
      },
      {
        id: 5,
        alt: "Trenerseminar aktivitet",
        src: "https://primary.jwwb.nl/public/h/s/f/temp-ftprvysvjpxdkslapovc/image-high-mo6tne.png?enable-io=true&crop=0.7505%3A1&width=532",
      },
      {
        id: 6,
        alt: "Trenerseminar okter",
        src: "https://primary.jwwb.nl/public/h/s/f/temp-ftprvysvjpxdkslapovc/image-high-j4o3n9.png?enable-io=true&crop=0.7505%3A1&width=532",
      },
    ],
  },
  {
    title: "Styret i NFIF 2025-2027",
    date: "2025",
    images: [
      {
        id: 7,
        alt: "Styret i NFIF 2025-2027 - Gruppebilde",
        src: "https://primary.jwwb.nl/public/h/s/f/temp-ftprvysvjpxdkslapovc/friidrettstinget_2025_nof_02675-high.jpg?enable-io=true&width=1920",
      },
    ],
  },
];

// Lightbox component
function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: {
  images: { id: number; alt: string; src: string }[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 text-white hover:text-orange-400 transition-colors z-10"
      >
        <X className="w-8 h-8" />
      </button>

      <button
        onClick={onPrev}
        className="absolute left-4 p-2 text-white hover:text-orange-400 transition-colors z-10"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      <div className="max-w-5xl w-full mx-4 px-12">
        <div className="relative aspect-video">
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            fill
            className="object-contain"
          />
        </div>
        <p className="text-white text-center mt-4">
          {images[currentIndex].alt} ({currentIndex + 1} / {images.length})
        </p>
      </div>

      <button
        onClick={onNext}
        className="absolute right-4 p-2 text-white hover:text-orange-400 transition-colors z-10"
      >
        <ChevronRight className="w-8 h-8" />
      </button>
    </div>
  );
}

// Gallery section component
function GallerySection({
  gallery,
  galleryIndex,
  onImageClick,
}: {
  gallery: typeof galleries[0];
  galleryIndex: number;
  onImageClick: (galleryIndex: number, imageIndex: number) => void;
}) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-4">
        <h2 className="text-2xl font-bold" style={styles.primaryText}>
          {gallery.title}
        </h2>
        <span className="flex items-center gap-1 text-sm text-slate-500">
          <Calendar className="w-4 h-4" />
          {gallery.date}
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {gallery.images.map((image, imageIndex) => (
          <button
            key={image.id}
            onClick={() => onImageClick(galleryIndex, imageIndex)}
            className="relative aspect-square rounded-lg overflow-hidden hover:opacity-90 transition-opacity group"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function GalleriPage() {
  const [lightbox, setLightbox] = useState<{
    galleryIndex: number;
    imageIndex: number;
  } | null>(null);

  const openLightbox = (galleryIndex: number, imageIndex: number) => {
    setLightbox({ galleryIndex, imageIndex });
  };

  const closeLightbox = () => {
    setLightbox(null);
  };

  const goToPrev = () => {
    if (!lightbox) return;
    const images = galleries[lightbox.galleryIndex].images;
    const newIndex = (lightbox.imageIndex - 1 + images.length) % images.length;
    setLightbox({ ...lightbox, imageIndex: newIndex });
  };

  const goToNext = () => {
    if (!lightbox) return;
    const images = galleries[lightbox.galleryIndex].images;
    const newIndex = (lightbox.imageIndex + 1) % images.length;
    setLightbox({ ...lightbox, imageIndex: newIndex });
  };

  return (
    <>
      {/* Hero */}
      <section className="text-white py-12 md:py-16" style={styles.sectionBg}>
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium mb-6">
              Bildegalleri
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Galleri</h1>
            <p className="text-lg text-slate-300">
              Bilder fra arrangementer, seminarer og aktiviteter i
              trenerforeningen.
            </p>
          </div>
        </div>
      </section>

      {/* Galleries */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          {galleries.map((gallery, index) => (
            <GallerySection
              key={index}
              gallery={gallery}
              galleryIndex={index}
              onImageClick={openLightbox}
            />
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <Lightbox
          images={galleries[lightbox.galleryIndex].images}
          currentIndex={lightbox.imageIndex}
          onClose={closeLightbox}
          onPrev={goToPrev}
          onNext={goToNext}
        />
      )}
    </>
  );
}
