"use client";

// Client: dismissible notification with a download action and a click-outside
// handler.
import { downloadUrl, PDFLink } from "@/components/constant/enum";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";

export const CVTooltip = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [settingTooltip, setSettingTooltip] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const ref = useRef<HTMLDivElement>(null!);

  //tooltip open.
  const hideTooltip = () => {
    setIsVisible(false);

    // Set a timeout to show the tooltip again after 10 seconds
    setTimeout(() => {
      setIsVisible(true);
    }, 5000);
  };

  //tooltip close
  const handleClickOutside = () => {
    // Your custom logic here
    setSettingTooltip(false);
  };

  //Install pdf
  const handleInstall = async () => {
    try {
      setIsDownloading(true);

      // Use the export URL format that works better with Google Drive
      window.open(downloadUrl);
    } catch (error) {
      alert("Failed to download CV. Please try again later.");
    } finally {
      setTimeout(() => {
        setIsDownloading(false);
      }, 1000); // Short delay to show loading state
    }
  };
  useOnClickOutside(ref, handleClickOutside);
  return (
    <div className="group">
      {isVisible && (
          // Entry animation is a CSS keyframe. framer-motion's AnimatePresence
          // was here only to animate the dismissal; the notification now
          // disappears immediately when dismissed, which is what the close
          // button already implied.
          <div className="fixed bottom-8 left-2 right-2 z-40 w-auto max-w-[calc(100vw-1rem)] rounded-lg border border-gray-700 bg-primary p-3 transition-colors duration-300 ease-in-out animate-rise group-hover:bg-surface-muted sm:left-auto sm:w-[26.125rem]">
            <div className="flex flex-col gap-4">
              <div className="flex relative  items-start gap-6">
                <div className="flex items-start gap-2">
                  <Image
                    src="/images/info.svg"
                    alt="info"
                    width={16}
                    height={16}
                    className="pt-0.5"
                  />
                  <p className="text-xs break-words">
                    {` Do you want to install the recommended 'Curriculum Vitae' pdf
                from this repository?`}
                  </p>
                </div>
                <div className="flex gap-1.5 pr-1">
                  <button
                    type="button"
                    onClick={() => setSettingTooltip(true)}
                    aria-label="More actions"
                    className="grid size-6 place-items-center rounded-sm transition-colors hover:bg-surface-hover">
                    <Image
                      src="/images/settings.svg"
                      alt="icon"
                      width={24}
                      height={24}
                    />
                  </button>
                  <button
                    type="button"
                    onClick={hideTooltip}
                    aria-label="Clear notification"
                    className="grid size-6 place-items-center rounded-sm transition-colors hover:bg-surface-hover">
                    <Image
                      src="/images/cross.svg"
                      alt="icon"
                      width={18}
                      height={18}
                    />
                  </button>
                </div>
                {settingTooltip ? (
                  <div
                    className="absolute text-xs bg-secondary border-2 border-gray-600 rounded-lg right-8 top-4 w-fit p-1"
                    ref={ref}>
                    <button
                      className="px-2 py-0.5 rounded-md hover:bg-code-tag"
                      onClick={() =>
                        setIsVisible(false)
                      }>{`Don't show again, for this repository `}</button>
                  </div>
                ) : null}
              </div>
              <div className="flex justify-end gap-2 text-sm font-medium items-center">
                <button
                  className="flex items-center gap-2 px-2 py-1 justify-center rounded-sm  transition-colors duration-300 ease-in-out  hover:bg-code-tag-hover bg-code-tag"
                  onClick={handleInstall}
                  disabled={isDownloading}>
                  {isDownloading ? "Downloading..." : "Download"}
                  <div className="border-l-2 pl-1 border-white">
                    <Image
                      src={"/images/arrow.svg"}
                      alt="arrow"
                      width={12}
                      height={12}
                      className="rotate-90"
                    />
                  </div>
                </button>
                <Link
                  href={PDFLink}
                  className="px-2 py-1 hover:bg-secondary  transition-colors duration-300 ease-in-out  bg-surface-raised rounded-sm"
                  target="_blank">
                  Show Curriculum Vitae
                </Link>
              </div>
            </div>
          </div>
        )}
    </div>
  );
};

// education
