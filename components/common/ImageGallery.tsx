"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface ImageGalleryProps {
  images: string[];
  className?: string;
}

interface ImageItem {
  src: string;
  id: string;
  aspectRatio: number;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  className = "",
}) => {
  const [imageItems, setImageItems] = useState<ImageItem[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  // Generate random aspect ratios for masonry effect
  useEffect(() => {
    const items = images.map((src, index) => ({
      src,
      id: `img-${index}`,
      aspectRatio: Math.random() * 0.8 + 0.6, // Random aspect ratio between 0.6 and 1.4
    }));
    setImageItems(items);
  }, [images]);

  const handleImageLoad = (src: string) => {
    setLoadedImages((prev) => new Set(Array.from(prev).concat(src)));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: { duration: 0.2 },
    },
  };

  return (
    <>
      <motion.div
        className={`columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 space-y-4 ${className}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible">
        {imageItems.map((item) => (
          <motion.div
            key={item.id}
            className="break-inside-avoid p-2 bg-white border border-tertiary rounded-lg mb-4 group cursor-pointer"
            variants={itemVariants}
            whileHover={{
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 10,
              },
            }}
            onMouseEnter={() => setHoveredImage(item.src)}
            onMouseLeave={() => setHoveredImage(null)}
            onClick={() => setSelectedImage(item.src)}>
            <div className="relative overflow-hidden rounded-lg bg-gray-100 shadow-md transition-all duration-300 group-hover:shadow-xl">
              {/* Loading skeleton */}
              {!loadedImages.has(item.src) && (
                <div
                  className="w-full bg-gray-200 animate-pulse rounded-lg"
                  style={{ aspectRatio: 1 / item.aspectRatio }}
                />
              )}

              <Image
                src={item.src}
                alt={`Gallery image ${item.id}`}
                width={400}
                height={400 * item.aspectRatio}
                className={`w-full border-2 shadow-2xl rounded-lg h-auto object-cover transition-all duration-500 ${
                  loadedImages.has(item.src)
                    ? "opacity-100"
                    : "opacity-0 absolute inset-0"
                } ${hoveredImage === item.src ? "scale-105" : "scale-100"}`}
                onLoad={() => handleImageLoad(item.src)}
                priority={false}
                loading="lazy"
              />

              {/* Hover overlay */}
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />

              {/* Hover icon */}
              <motion.div
                className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <div className="w-8 h-8 bg-white bg-opacity-90 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <svg
                    className="w-4 h-4 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal for full-size image */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90 backdrop-blur-sm"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setSelectedImage(null)}>
            <motion.div
              className="relative max-w-4xl max-h-full"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}>
              <Image
                src={selectedImage}
                alt="Full size image"
                width={1200}
                height={800}
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                priority
              />

              {/* Close button */}
              <motion.button
                className="absolute top-4 right-4 w-10 h-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-200"
                onClick={() => setSelectedImage(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageGallery;
