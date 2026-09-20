"use client";
import { useEffect, useState } from "react";

/**
 * Ring of skill icons orbiting a portrait.
 *
 * Positions are a polar layout in percent, with the radius tightening on narrow
 * screens. The float and entry animations are CSS keyframes: framer-motion was
 * the only reason several of these trees shipped JavaScript, and nothing here
 * needs physics or gesture handling.
 *
 * Centring stays on a static wrapper so the animation's own transform cannot
 * overwrite it.
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
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* eslint-disable-next-line @next/next/no-img-element -- decorative,
            sized purely with clamp() so next/image's layout model adds nothing. */}
        <img
          src={centralImage}
          alt=""
          className="rounded-b-full object-cover animate-pop"
          style={{
            width: "clamp(96px, 19vw, 230px)",
            height: "clamp(96px, 19vw, 230px)",
          }}
        />
      </div>

      {icons.map((icon, index) => {
        // Start at the top of the ring rather than at 3 o'clock.
        const angle = (index / icons.length) * 2 * Math.PI - Math.PI / 2;
        const x = 50 + radius * Math.cos(angle);
        const y = 50 + radius * Math.sin(angle);

        return (
          <div
            key={icon}
            className="absolute -translate-x-1/2 -translate-y-1/2 animate-pop"
            style={{
              top: `${y}%`,
              left: `${x}%`,
              animationDelay: `${index * 50}ms`,
            }}>
            {/* eslint-disable-next-line @next/next/no-img-element -- as above. */}
            <img
              src={icon}
              alt=""
              className="object-contain animate-float"
              style={{
                width: "clamp(24px, 3.6vw, 46px)",
                height: "clamp(24px, 3.6vw, 46px)",
                animationDelay: `${index * 150}ms`,
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default FloatingIcons;
