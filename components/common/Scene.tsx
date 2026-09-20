"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Ring of skill icons orbiting a portrait.
 *
 * The previous version positioned icons with `centre + (radius * cos) / 5` in
 * percentage units, which collapsed the ring to a ~±4% spread and stacked every
 * icon on top of the portrait. Positions are now a plain polar layout in
 * percent, with the radius tightening on narrow screens.
 *
 * Centring lives on a static wrapper rather than on the animated element:
 * framer-motion owns `transform` on anything it animates, so a `translate(-50%)`
 * set there is overwritten the moment a scale or y animation starts.
 */
const FloatingIcons: React.FC<{ icons: string[]; centralImage?: string }> = ({
  icons,
  centralImage,
}) => {
  const [radius, setRadius] = useState(42);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setRadius(w < 640 ? 40 : w < 1024 ? 43 : 45);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="relative mx-auto w-full lg:mr-12 lg:w-2/5"
      style={{
        height: "clamp(260px, 42vw, 500px)",
        maxWidth: "clamp(260px, 50vw, 500px)",
      }}>
      {/* Portrait */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.img
          src={centralImage}
          alt=""
          className="rounded-b-full object-cover"
          style={{
            width: "clamp(96px, 19vw, 230px)",
            height: "clamp(96px, 19vw, 230px)",
          }}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </div>

      {/* Orbiting icons */}
      {icons.map((icon, index) => {
        // Start at the top of the ring rather than at 3 o'clock.
        const angle = (index / icons.length) * 2 * Math.PI - Math.PI / 2;
        const x = 50 + radius * Math.cos(angle);
        const y = 50 + radius * Math.sin(angle);

        return (
          <div
            key={icon}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ top: `${y}%`, left: `${x}%` }}>
            <motion.img
              src={icon}
              alt=""
              className="object-contain"
              style={{
                width: "clamp(24px, 3.6vw, 46px)",
                height: "clamp(24px, 3.6vw, 46px)",
              }}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
              transition={{
                opacity: { duration: 0.4, delay: index * 0.05 },
                scale: { duration: 0.4, delay: index * 0.05 },
                y: {
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: index * 0.15,
                },
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default FloatingIcons;
