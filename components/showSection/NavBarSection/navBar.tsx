"use client";
import { MenuProperties } from "@/components/constant/enum";
import { cn } from "@/functions/cn";
import Image from "next/image";
import { useState } from "react";

const NavBar = () => {
  const [activeId, setActiveId] = useState(0);
  const handleClick = (id: number) => {
    setActiveId(id);
  };
  return (
    <div className="flex text-sm  bg-primary">
      {MenuProperties.map((menue, index) => (
        <button
          key={menue.id}
          className={cn(
            "flex gap-1.5 border border-transparent border-t-0 items-center w-fit px-6 py-1 rounded-sm",
            {
              "pl-2": index == 0,
            },
            {
              "bg-secondary border-transparent": menue.id === activeId,
              " border-secondary ": menue.id !== activeId,
            }
          )}
          onClick={() => handleClick(menue.id)}>
          <Image
            src={`/images/${menue.icon}.svg`}
            alt={menue.text}
            height={15}
            width={15}
            className="mt-1 w-[15px] h-[15px]"
          />
          <p>{menue.text}</p>
        </button>
      ))}
    </div>
  );
};

export default NavBar;
