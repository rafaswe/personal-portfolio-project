"use client";

import useTerminalStore from "@/service/store/useTerminalStore";
import { motion } from "framer-motion";
import Image from "next/image";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { sideMenuProperties } from "../constant/enum";

const ListOfTerminalMenu = [
  "PROBLEMS",
  "OUTPUT",
  "DEBUG CONSOLE",
  "TERMINAL",
  "GITLENS",
];

const TerminalComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [hasError, setHasError] = useState(false);
  const { isTerminalClicked, toggleTerminal } = useTerminalStore();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  // Function to handle navigation based on input
  const handleNavigation = () => {
    const formattedInput = inputValue.trim().toLowerCase();

    const matchedItem = sideMenuProperties.find(({ text }) => {
      const normalizedText = text.split(".")[0].toLowerCase();
      return (
        formattedInput === text.toLowerCase() ||
        formattedInput === normalizedText
      );
    });

    if (matchedItem) {
      setHasError(false);
      //   toggleTerminal();
      router.push(matchedItem.pageLink); // Navigate to the page link
    } else {
      setHasError(true); // Show error if input doesn't match any item
    }
  };

  // Handle Enter key press in input
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleNavigation();
    }
  };

  return (
    <motion.div
      initial={{ y: "200%" }}
      animate={{
        y: isTerminalClicked ? "40%" : "200%",
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      onAnimationComplete={() => {
        if (isTerminalClicked && inputRef.current) {
          inputRef.current.focus();
        }
      }}
      className="absolute bottom-0 z-50 left-0 right-0 h-1/2 bg-primary border-r-2 border text-white shadow-lg">
      <div className="text-xs ">
        <div className="px-3 py-1.5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {ListOfTerminalMenu?.map((list, index) => (
              <p
                key={index}
                className={`${
                  list === "TERMINAL"
                    ? "opacity-100 border-b cursor-pointer"
                    : "opacity-50"
                } w-fit leading-6 border-blue-400`}>
                {list}
              </p>
            ))}
          </div>
          <button onClick={toggleTerminal}>
            <Image src="/images/cross.svg" width={14} height={14} alt="Cross" />
          </button>
        </div>
        <div className="px-3 py-1 text-xs bg-[#333b42] flex justify-between items-center">
          <p className="font-medium w-fit">TERMINAL</p>
          <div className="flex items-center gap-1.5">
            <div className="flex items-center gap-1">
              <Image src="/images/bash.svg" alt="Bash" width={12} height={12} />
              <p>bash</p>
            </div>
            <button onClick={toggleTerminal}>
              <Image
                src="/images/del.svg"
                alt="delete"
                width={14}
                height={16}
              />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="px-3 pt-2">
            <p className="font-medium">
              <span className="text-green-400">
                mahiyaRafa@Mahiya-Rahman-Rafa
              </span>{" "}
              <span className="text-pink-400">MINGW64</span>
              {"  "}
              <span className="text-yellow-300">/d/portfolio</span>
              {"  "}
              <span className="text-blue-300">(main)</span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 border-2 bg-[#333b42] rounded-full ml-1.5"></div>
              <Image
                src={"/images/doller.svg"}
                alt="doller"
                width={12}
                height={16}
              />
            </div>
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                setHasError(false); // Reset error on change
              }}
              onKeyDown={handleKeyDown}
              className="w-full h-4 bg-transparent outline-none"
            />
          </div>
          {hasError && (
            <p className="text-red-500 px-3">
              Invalid file name. Please try again.
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TerminalComponent;
