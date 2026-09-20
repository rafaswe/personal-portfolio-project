"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Expand, X } from "lucide-react";
import Image, { ImageProps, StaticImageData } from "next/image";
import { useState } from "react";

type EffectImageProps = ImageProps;

/**
 * Thumbnail that opens its own full-size view.
 *
 * Previously backed by `react-image-lightbox`, which peers on React 16/17 and
 * is unmaintained. The shadcn Dialog (Radix) replaces it and brings the things
 * the old lightbox never did here: focus trapping, Escape to close, restoring
 * focus to the trigger, and `aria-modal` semantics.
 */
const EffectImage = (props: EffectImageProps) => {
  const [open, setOpen] = useState(false);

  const imageUrl =
    typeof props.src === "string"
      ? props.src
      : (props.src as StaticImageData).src || "";

  const caption = typeof props.title === "string" ? props.title : "Image";

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className="group relative w-fit">
        <Image {...props} alt={props.alt ?? caption} />

        {/* Overlay is CSS-hover driven rather than React state, so it also
            appears on keyboard focus within the group. */}
        <div className="pointer-events-none absolute inset-x-0 top-0 flex h-8 items-center justify-end bg-primary/0 p-2 opacity-0 transition-opacity duration-200 group-hover:bg-primary/60 group-hover:opacity-100 group-focus-within:bg-primary/60 group-focus-within:opacity-100">
          <DialogTrigger asChild>
            <button
              type="button"
              aria-label={`Expand image: ${caption}`}
              className="pointer-events-auto rounded-sm p-0.5 transition-transform duration-200 hover:scale-110">
              <Expand size={16} aria-hidden="true" />
            </button>
          </DialogTrigger>
        </div>
      </div>

      <DialogContent
        showCloseButton={false}
        className="w-[calc(100vw-2rem)] max-w-5xl border-border bg-card p-3 sm:p-4">
        <DialogTitle className="pr-8 text-sm font-normal text-muted-foreground">
          {caption}
        </DialogTitle>

        <div className="relative max-h-[75vh] overflow-auto rounded-md">
          {/* eslint-disable-next-line @next/next/no-img-element -- the source is
              an arbitrary runtime URL shown at its natural size inside a
              scrollable dialog, so next/image's sizing model does not apply. */}
          <img
            src={imageUrl}
            alt={caption}
            className="mx-auto h-auto w-full object-contain"
          />
        </div>

        <DialogClose
          aria-label="Close image"
          className="absolute right-3 top-3 rounded-sm p-1 opacity-70 transition-opacity hover:opacity-100">
          <X size={18} aria-hidden="true" />
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default EffectImage;
