"use client";
import { cn } from "@/functions/cn";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menueProperties } from "../constant/enum";

const SideOption = ({ className }: { className?: string }) => {
  const sideMenu = menueProperties.slice(0, menueProperties.length - 2);
  const personalInfoProperties = menueProperties.slice(-2);
  const pathName = usePathname();

  return (
    <div className={cn("flex flex-col w-18 justify-between", className)}>
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
            key={singleProperty.id}>
            <Image
              src={`/images/${singleProperty.image}.svg`}
              alt={singleProperty.altText}
              width={24}
              height={24}
              className={
                pathName === singleProperty.link ? "opcaity-100" : "opacity-20"
              }
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
            key={singleProperty?.id}>
            <Image
              src={`/images/${singleProperty.image}.svg`}
              alt={singleProperty?.altText}
              width={24}
              height={24}
              className={
                pathName === singleProperty.link ? "opcaity-100" : "opacity-20"
              }
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideOption;
