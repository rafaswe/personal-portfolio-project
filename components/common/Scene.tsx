"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const FloatingIcons: React.FC<{ icons: string[]; centralImage?: string }> = ({
  icons,
  centralImage,
}) => {
  const [positions, setPositions] = useState<{ x: number; y: number }[]>([]);

  // Circle parameters
  const radius = 200; // Radius of the circle
  const centerX = 50; // Center x position (percentage)
  const centerY = 50; // Center y position (percentage)

  useEffect(() => {
    const newPositions = icons.map((_, index) => {
      const angle = (index / icons.length) * 2 * Math.PI; // Calculate angle for each icon
      return {
        x: centerX + (radius * Math.cos(angle)) / 5, // Adjust for percentage
        y: centerY + (radius * Math.sin(angle)) / 5, // Adjust for percentage
      };
    });
    setPositions(newPositions);
  }, [icons]);

  return (
    <div
      style={{
        position: "relative",
        width: "40%",
        height: "500px",
        overflow: "hidden",
      }}
      className="mr-12">
      {/* Central image */}
      <motion.img
        src={centralImage}
        alt="Central Image"
        style={{
          position: "absolute",
          top: "57%", // Center vertically
          left: "56%", // Center horizontally
          transform: "translate(-50%, -50%)", // Adjust for image dimensions
          width: "250px", // Set your desired central image width
          height: "250px", // Set your desired central image height
          objectFit: "cover", // Ensure the image covers its bounds
        }}
        className="rounded-b-full"
      />

      {/* Floating icons */}
      {icons.map((icon, index) => (
        <motion.img
          key={index}
          src={icon}
          alt={`Floating Icon ${index}`}
          style={{
            position: "absolute",
            top: `${positions[index]?.y}%`,
            left: `${positions[index]?.x}%`,
            width: "50px", // Set your desired icon width
            height: "50px", // Set your desired icon height
            objectFit: "contain", // Ensure the icon fits within its bounds
          }}
          animate={{
            y: [0, 10, 0], // Up and down movement
          }}
          transition={{
            duration: 2, // Duration of the animation
            ease: "easeInOut",
            repeat: Infinity, // Repeat the animation
          }}
        />
      ))}
    </div>
  );
};

export default FloatingIcons;
