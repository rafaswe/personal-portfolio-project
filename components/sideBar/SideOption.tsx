"use client";
import { cn } from "@/functions/cn";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { menueProperties } from "../constant/enum";

const SideOption = ({ className }: { className?: string }) => {
  const [menueSelectedId, setMenueSelectedId] = useState<number | null>(0);
  const [pISelectedId, setPISelectedId] = useState<number | null>(0);

  const sideMenu = menueProperties.slice(0, menueProperties.length - 2);
  const personalInfoProperties = menueProperties.slice(-2);
  const pathName = usePathname();

  const handleMenueClick = (id: number) => {
    setMenueSelectedId(id);
    setPISelectedId(null);
  };
  const handlePersonalInfoClick = (id: number) => {
    setMenueSelectedId(null);
    setPISelectedId(id);
  };

  return (
    <div className={cn("flex flex-col justify-between", className)}>
      <div className="flex flex-col">
        {sideMenu?.map((singleProperty) => (
          <Link
            href={singleProperty.link}
            className={clsx(
              "pr-3 pl-2.5 py-3 border-l-2 hover:bg-[#3b4252]",
              {
                "border-tertiary": pathName === singleProperty.link,
                "border-transparent": pathName !== singleProperty.link,
              },
              { "cursor-not-allowed": !singleProperty?.link }
            )}
            key={singleProperty.id}
            onClick={() => handleMenueClick(singleProperty.id)}>
            <Image
              src={`/images/${singleProperty.image}-${
                menueSelectedId === singleProperty.id
                  ? "selected"
                  : "unselected"
              }.svg`}
              alt={singleProperty.altText}
              width={24}
              height={24}
            />
          </Link>
        ))}
      </div>
      <div className="flex flex-col">
        {personalInfoProperties?.map((singleProperty) => (
          <Link
            href={singleProperty?.link}
            className={clsx(
              "pr-3 pl-2.5 py-3 border-l-2 hover:bg-[#3b4252]",
              {
                "border-tertiary": pathName === singleProperty.link,
                "border-transparent": pathName !== singleProperty.link,
              },
              { "cursor-not-allowed": !singleProperty?.link }
            )}
            key={singleProperty?.id}
            onClick={() => handlePersonalInfoClick(singleProperty?.id)}>
            <Image
              src={`/images/${singleProperty.image}-${
                pISelectedId === singleProperty.id ? "selected" : "unselected"
              }.svg`}
              alt={singleProperty?.altText}
              width={24}
              height={24}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideOption;
