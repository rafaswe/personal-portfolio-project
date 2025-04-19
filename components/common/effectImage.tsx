"use client";
import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface EffectImage extends ImageProps {}

const EffectImage = (props: EffectImage) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpended, setIsExpended] = useState(false);
  return (
    <div>
      <div
        className="relative w-fit cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <Image {...props} alt="EffectImage" />
        {isHovered ? (
          <div className="absolute flex justify-end p-2 top-0 h-8 w-full bg-primary opacity-50">
            <button onClick={() => setIsExpended(true)}>
              <Image
                src={"/images/expand.svg"}
                alt="Expend"
                width={16}
                height={16}
              />
            </button>
          </div>
        ) : null}
      </div>
      {isExpended ? (
        <ImageModal imageUrl={props?.src} setIsExpanded={setIsExpended} />
      ) : null}
    </div>
  );
};
const ImageModal = ({ imageUrl, setIsExpanded }) => {
  const [scale, setScale] = useState(1);

  const zoomIn = () => setScale((prev) => Math.min(prev + 0.2, 3));
  const zoomOut = () => setScale((prev) => Math.max(prev - 0.2, 0.5));
  const resetZoom = () => setScale(1);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4">
      <div className="relative w-full text-primary max-h-full overflow-auto hidden-scrollbar rounded-lg  p-2">
        <button
          onClick={() => setIsExpanded(false)}
          className="absolute top-2 right-2 z-10 bg-white px-2 py-1 rounded text-sm hover:bg-gray-200">
          Close
        </button>

        {/* Zoom Controls */}
        <div className="absolute bottom-2 flex flex-col right-2 z-50  gap-2">
          <button
            onClick={zoomOut}
            className="bg-white px-2 py-1 rounded text-sm hover:bg-gray-200">
            −
          </button>
          <button
            onClick={resetZoom}
            className="bg-white px-2 py-1 rounded text-sm hover:bg-gray-200">
            Reset
          </button>
          <button
            onClick={zoomIn}
            className="bg-white px-2 py-1 rounded text-sm hover:bg-gray-200">
            +
          </button>
        </div>

        <div className="flex justify-center items-center">
          <div
            className="transition-transform"
            style={{
              transform: `scale(${scale})`,
              transformOrigin: "center center",
            }}>
            <Image
              src={imageUrl}
              alt="Expanded Image"
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default EffectImage;
