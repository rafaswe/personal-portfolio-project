"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image, { ImageProps, StaticImageData } from "next/image";
import { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

interface EffectImageProps extends ImageProps {}

const preloadImage = (src: string) =>
  new Promise<void>((resolve, reject) => {
    const img = new window.Image();
    img.src = src;
    img.onload = () => resolve();
    img.onerror = () => reject();
  });

const EffectImage = (props: EffectImageProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const imageUrl =
    typeof props.src === "string"
      ? props.src
      : (props.src as StaticImageData).src || "";

  const openLightbox = async () => {
    setIsLoading(true);
    try {
      await preloadImage(imageUrl);
    } catch {
      // ignore errors, still open lightbox
    }
    setIsLoading(false);
    setIsExpanded(true);
  };

  return (
    <div className="relative w-fit">
      <motion.div
        className="cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.1 }}>
        <Image {...props} alt="EffectImage" />
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            className="absolute flex justify-end p-2 top-0 h-8 w-full bg-primary">
            <button onClick={openLightbox} disabled={isLoading}>
              <Image
                src="/images/expand.svg"
                alt="Expand"
                width={16}
                height={16}
              />
            </button>
          </motion.div>
        )}
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.25 }}>
            <Lightbox
              mainSrc={imageUrl}
              onCloseRequest={() => setIsExpanded(false)}
              enableZoom={true}
              imageTitle={props.title || "Image"}
              reactModalStyle={{
                content: {
                  inset: "0px",
                  padding: "1rem",
                  backgroundColor: "rgba(0,0,0,0.85)",
                  overflow: "auto",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                },
                overlay: {
                  zIndex: 50,
                },
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EffectImage;
