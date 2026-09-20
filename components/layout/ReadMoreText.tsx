"use client";

import { useEffect, useRef, useState } from "react";

interface ReadMoreTextProps {
  text: string;
  maxLines?: number;
  url?: string;
}

/**
 * Clamped paragraph with a expand/collapse control.
 *
 * The toggles used to be `<span onClick>`, so they could not be reached or
 * activated by keyboard and were announced as plain text. They are buttons now.
 */
const ReadMoreText: React.FC<ReadMoreTextProps> = ({ text, maxLines = 2 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    const measure = () => {
      const lineHeight = parseFloat(getComputedStyle(element).lineHeight);
      setIsTruncated(element.scrollHeight > lineHeight * maxLines);
    };

    measure();

    // The old version measured once on mount, so a resize that changed the
    // wrap could leave the control showing (or missing) incorrectly.
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => observer.disconnect();
  }, [text, maxLines]);

  return (
    <div>
      <div
        ref={textRef}
        className={`relative ${!isExpanded ? "max-h-[4.3em] overflow-hidden" : ""}`}
        style={{ lineHeight: "1.5em" }}>
        {text}

        {!isExpanded && isTruncated && (
          <button
            type="button"
            onClick={() => setIsExpanded(true)}
            aria-expanded={false}
            className="absolute -bottom-[5px] right-0 cursor-pointer rounded-sm bg-secondary pl-0.5 text-sm text-tertiary">
            ...<span className="underline">Read More</span>
          </button>
        )}
      </div>

      {isExpanded && (
        <button
          type="button"
          onClick={() => setIsExpanded(false)}
          aria-expanded
          className="cursor-pointer rounded-sm text-sm text-tertiary underline">
          Read Less
        </button>
      )}
    </div>
  );
};

export default ReadMoreText;
