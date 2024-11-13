"use client";
import { cn } from "@/functions/cn";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { sideMenuProperties } from "../constant/enum";

const SideMenu = ({ className }: { className?: string }) => {
  const [isOpen, setIsOpen] = useState(true);
  const pathName = usePathname();

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={cn("text-[#efefef] py-2 text-sm", className)}>
      <h1 className="font-bold">EXPLORER</h1>
      <div className="w-full">
        <button
          onClick={toggleDropdown}
          className="my-2 pl-4  w-full flex items-center gap-1">
          <Image
            src="/images/arrow.svg"
            alt="down Arrow"
            height={12}
            width={12}
            className={clsx("mt-0.5 transform transition-transform", {
              "rotate-90": isOpen,
              "rotate-0": !isOpen,
            })}
          />
          <p>PORTFOLIO</p>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="overflow-hidden"
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{ duration: 0.3 }}>
              <div className="flex flex-col ">
                {sideMenuProperties.map((menue) => (
                  <Link
                    href={menue?.pageLink}
                    key={menue.id}
                    className={`flex gap-2.5 pl-4  py-0.5 items-cente w-full hover:bg-[#24292e] rounded-sm ${
                      pathName === menue?.pageLink && "bg-[#24292e]"
                    }`}>
                    <Image
                      src={`/images/${menue.icon}.svg`}
                      alt={menue.text}
                      height={15}
                      width={15}
                      className="mt-1 w-[15px] h-[15px]"
                    />
                    <p>{menue.text}</p>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SideMenu;
