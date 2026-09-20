"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ZoomIn } from "lucide-react";
import Image from "next/image";
import React, { useMemo, useState } from "react";

interface ImageGalleryProps {
  images: string[];
  className?: string;
}

/**
 * Deterministic stand-in for the previous `Math.random()` aspect ratios.
 *
 * The random version produced a different masonry layout on every mount, so the
 * grid visibly reshuffled on each navigation. This keeps the varied look while
 * staying stable for a given image.
 */
const RATIOS = [0.72, 1.0, 1.28, 0.86, 1.12, 0.66, 1.34, 0.94];
const ratioFor = (index: number) => RATIOS[index % RATIOS.length];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 120, damping: 14 },
  },
};

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  className = "",
}) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  const imageItems = useMemo(
    () =>
      images.map((src, index) => ({
        src,
        id: `img-${index}`,
        aspectRatio: ratioFor(index),
      })),
    [images]
  );

  const handleImageLoad = (src: string) =>
    setLoadedImages((prev) => new Set(prev).add(src));

  return (
    <motion.ul
      className={cn(
        "columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3 xl:columns-4",
        className
      )}
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      {imageItems.map((item, index) => (
        <motion.li
          key={item.id}
          className="mb-4 break-inside-avoid"
          variants={itemVariants}>
          <Dialog>
            <DialogTrigger asChild>
              <button
                type="button"
                aria-label={`View image ${index + 1} of ${imageItems.length} full size`}
                className="group block w-full cursor-pointer rounded-lg border border-tertiary bg-white p-2 text-left transition-shadow duration-300 hover:shadow-xl">
                <div className="relative overflow-hidden rounded-lg bg-gray-100">
                  {!loadedImages.has(item.src) && (
                    <div
                      className="w-full animate-pulse rounded-lg bg-gray-200"
                      style={{ aspectRatio: 1 / item.aspectRatio }}
                    />
                  )}

                  <Image
                    src={item.src}
                    alt=""
                    width={400}
                    height={Math.round(400 * item.aspectRatio)}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className={cn(
                      "h-auto w-full rounded-lg object-cover transition-all duration-500 group-hover:scale-105",
                      loadedImages.has(item.src)
                        ? "opacity-100"
                        : "absolute inset-0 opacity-0"
                    )}
                    onLoad={() => handleImageLoad(item.src)}
                    loading="lazy"
                  />

                  {/* `bg-opacity-*` was removed in Tailwind v4, so the old
                      `bg-black bg-opacity-20` painted solid black on hover.
                      Slash opacity is the v4 equivalent. */}
                  <div className="pointer-events-none absolute inset-0 rounded-lg bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />

                  <div className="pointer-events-none absolute right-3 top-3 scale-90 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                    <div className="flex size-8 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm">
                      <ZoomIn className="size-4 text-gray-700" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </button>
            </DialogTrigger>

            <DialogContent className="w-[calc(100vw-2rem)] max-w-5xl border-border bg-card p-3 sm:p-4">
              <DialogTitle className="sr-only">
                Image {index + 1} of {imageItems.length}
              </DialogTitle>
              <Image
                src={item.src}
                alt={`Gallery image ${index + 1}`}
                width={1200}
                height={800}
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="mx-auto h-auto max-h-[80vh] w-full rounded-lg object-contain"
                priority
              />
            </DialogContent>
          </Dialog>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default ImageGallery;
