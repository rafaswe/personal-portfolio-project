"use client";
import { cn } from "@/functions/cn";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

const buttonProperties = [
  { id: 0, image: "file", altText: "File" },
  { id: 1, image: "searchIcon", altText: "Search in Scocial Media" },
  { id: 2, image: "github", altText: "Github preview" },
  { id: 3, image: "merge", altText: "Combined projects(Office/partnership)" },
  { id: 4, image: "code", altText: "Personal Code" },
  { id: 5, image: "github", altText: "Github preview" },
  { id: 6, image: "blog", altText: "Blogs written by me" },
  { id: 7, image: "contact", altText: "contact information" },
];

const SideOption = ({ className }: { className?: string }) => {
  const [selectedId, setSelectedId] = useState<number>(0);

  const handleClick = (id: number) => {
    setSelectedId(id);
  };

  return (
    <div className={cn(className)}>
      <div className="flex gap-y-4 flex-col">
        {buttonProperties.map((btn) => (
          <button
            className={clsx("pr-3 pl-2.5 py-2 border-l-4", {
              "border-tertiary": selectedId === btn.id,
              "border-transparent": selectedId !== btn.id,
            })}
            key={btn.id}
            onClick={() => handleClick(btn.id)}>
            <Image
              src={`/images/${btn.image}-${
                selectedId === btn.id ? "selected" : "unselected"
              }.svg`}
              alt={btn.altText}
              width={24}
              height={24}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default SideOption;
