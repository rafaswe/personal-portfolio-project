"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const FloatingIcons: React.FC<{ icons: string[]; centralImage?: string }> = ({
  icons,
  centralImage,
}) => {
  const [positions, setPositions] = useState<{ x: number; y: number }[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const centerX = 50;
  const centerY = 50;

  useEffect(() => {
    const updatePositions = () => {
      const isMobile = window.innerWidth < 768;
      const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

      // Tighter radius on smaller screens
      const radius = isMobile ? 130 : isTablet ? 160 : 200;

      const newPositions = icons.map((_, index) => {
        const angle = (index / icons.length) * 2 * Math.PI;
        return {
          x: centerX + (radius * Math.cos(angle)) / 5,
          y: centerY + (radius * Math.sin(angle)) / 5,
        };
      });
      setPositions(newPositions);
    };

    updatePositions();
    window.addEventListener("resize", updatePositions);
    return () => window.removeEventListener("resize", updatePositions);
  }, [icons]);

  return (
    <div
      ref={containerRef}
      className="relative w-full lg:w-2/5 lg:mr-12"
      style={{
        height: "clamp(240px, 40vw, 500px)",
        maxWidth: "clamp(240px, 50vw, 500px)",
        margin: "0 auto",
      }}>
      {/* Central image */}
      <motion.img
        src={centralImage}
        alt="Central Image"
        className="absolute rounded-b-full object-cover"
        style={{
          top: "57%",
          left: "56%",
          transform: "translate(-50%, -50%)",
          width: "clamp(100px, 20vw, 250px)",
          height: "clamp(100px, 20vw, 250px)",
        }}
      />

      {/* Floating icons */}
      {icons.map((icon, index) => (
        <motion.img
          key={index}
          src={icon}
          alt={`Floating Icon ${index}`}
          className="absolute object-contain"
          style={{
            top: `${positions[index]?.y ?? 50}%`,
            left: `${positions[index]?.x ?? 50}%`,
            width: "clamp(28px, 4vw, 50px)",
            height: "clamp(28px, 4vw, 50px)",
          }}
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            delay: index * 0.1,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingIcons;
