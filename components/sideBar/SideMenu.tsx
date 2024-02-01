"use client";
import { cn } from "@/functions/cn";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { sideMenuProperties } from "../constant/enum";

const SideMenu = ({ className }: { className?: string }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };
  const handleClick = (id: number) => {};
  return (
    <div className={cn("text-[#efefef] py-2 pl-4 text-sm", className)}>
      <h1 className="font-bold">EXPLORER</h1>
      <div>
        <button
          onClick={toggleDropdown}
          className="my-2 flex items-center gap-1">
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
                  <button
                    key={menue.id}
                    className="flex gap-2.5 py-0.5 items-cente w-full hover:bg-[#24292e] rounded-sm"
                    onClick={() => handleClick(menue.id)}>
                    <Image
                      src={`/images/${menue.icon}.svg`}
                      alt={menue.text}
                      height={15}
                      width={15}
                      className="mt-1"
                    />
                    <p>{menue.text}</p>
                  </button>
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
