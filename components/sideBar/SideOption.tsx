"use client";
import { cn } from "@/functions/cn";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { menueProperties, PersonalInfoProperties } from "../constant/enum";

const SideOption = ({ className }: { className?: string }) => {
  const [menueSelectedId, setMenueSelectedId] = useState<number | null>(0);
  const [pISelectedId, setPISelectedId] = useState<number | null>(0); // PI= personal Information

  const handleMenueClick = (id: number) => {
    setMenueSelectedId(id);
    setPISelectedId(null);
  };
  const handlePersonalInfoClick = (id: number) => {
    setMenueSelectedId(null);
    setPISelectedId(id);
  };

  return (
    <div className={cn("flex flex-col w-18 justify-between", className)}>
      <div className="flex flex-col">
        {menueProperties?.map((btn) => (
          <button
            className={clsx("pr-3 pl-2.5 py-3 border-l-2 hover:bg-[#3b4252]", {
              "border-tertiary": menueSelectedId === btn.id,
              "border-transparent": menueSelectedId !== btn.id,
            })}
            key={btn.id}
            onClick={() => handleMenueClick(btn.id)}>
            <Image
              src={`/images/${btn.image}-${
                menueSelectedId === btn.id ? "selected" : "unselected"
              }.svg`}
              alt={btn.altText}
              width={24}
              height={24}
              className="h-6 w-6"
            />
          </button>
        ))}
      </div>
      <div className="flex flex-col">
        {PersonalInfoProperties?.map((btn) => (
          <button
            className="pr-3 pl-2.5 py-3 border-l-2 border-transparent hover:bg-[#3b4252]"
            key={btn.id}
            onClick={() => handlePersonalInfoClick(btn.id)}>
            <Image
              src={`/images/${btn.image}-${
                pISelectedId === btn.id ? "selected" : "unselected"
              }.svg`}
              alt={btn.altText}
              width={24}
              height={24}
              className="h-6 w-6"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default SideOption;
