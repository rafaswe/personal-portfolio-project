import React, { useEffect, useRef, useState } from "react";

interface ReadMoreTextProps {
  text: string;
  maxLines?: number;
  url?: string;
}

const ReadMoreText: React.FC<ReadMoreTextProps> = ({
  text,
  maxLines = 2,
  url,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = textRef.current;
    if (element) {
      const lineHeight = parseFloat(getComputedStyle(element).lineHeight);
      const maxHeight = lineHeight * maxLines;
      setIsTruncated(element.scrollHeight > maxHeight);
    }
  }, [text, maxLines]);

  return (
    <div>
      <div
        ref={textRef}
        className={`relative  ${
          !isExpanded ? "max-h-[4.3em] overflow-hidden" : ""
        }`}
        style={{
          lineHeight: "1.5em",
        }}>
        {text}

        {!isExpanded && isTruncated && (
          <span
            onClick={() => setIsExpanded(true)}
            className="absolute right-0 -bottom-[2px] bg-secondary text-sm pl-1.5  cursor-pointer">
            ...<span className="underline">Read More</span>
          </span>
        )}
      </div>

      {isExpanded && (
        <span
          onClick={() => setIsExpanded(false)}
          className="cursor-pointer text-sm underline">
          Read Less
        </span>
      )}
    </div>
  );
};

export default ReadMoreText;
