"use client";

import useTerminalStore from "@/service/store/useTerminalStore";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ListOfTerminalMenu, sideMenuProperties } from "../constant/enum";

const TerminalComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [hasError, setHasError] = useState(false);
  const { isTerminalClicked, toggleTerminal } = useTerminalStore();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  // Escape closes the panel from anywhere, matching the editor it imitates.
  useEffect(() => {
    if (!isTerminalClicked) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") toggleTerminal();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isTerminalClicked, toggleTerminal]);

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
      setInputValue("");
      router.push(matchedItem.pageLink);
    } else {
      setHasError(true);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleNavigation();
  };

  const hint = sideMenuProperties.map(({ text }) => text.split(".")[0]).join(", ");

  return (
    <motion.section
      aria-label="Terminal"
      // `inert` keeps the hidden panel out of the tab order and the
      // accessibility tree; previously it stayed focusable off-screen.
      inert={!isTerminalClicked}
      aria-hidden={!isTerminalClicked}
      initial={{ y: "200%" }}
      animate={{ y: isTerminalClicked ? "40%" : "200%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      onAnimationComplete={() => {
        if (isTerminalClicked) inputRef.current?.focus();
      }}
      className="absolute bottom-0 left-0 right-0 z-50 h-1/2 border border-border bg-primary text-white shadow-lg">
      <div className="text-xs">
        <div className="flex items-center justify-between px-3 py-1.5">
          <div className="flex items-center gap-2.5 overflow-x-auto hidden-scrollbar">
            {ListOfTerminalMenu?.map((list, index) => (
              <p
                key={index}
                className={`${
                  list === "TERMINAL"
                    ? "border-b opacity-100"
                    : "opacity-50"
                } w-fit shrink-0 whitespace-nowrap leading-6 border-blue-400`}>
                {list}
              </p>
            ))}
          </div>
          <button
            type="button"
            onClick={toggleTerminal}
            aria-label="Close terminal"
            className="grid size-6 shrink-0 place-items-center rounded-sm transition-colors hover:bg-surface-hover">
            <X size={14} aria-hidden="true" />
          </button>
        </div>

        <div className="flex items-center justify-between bg-surface-terminal px-3 py-1 text-xs">
          <p className="w-fit font-medium">TERMINAL</p>
          <div className="flex items-center gap-1.5">
            <div className="flex items-center gap-1">
              <Image src="/images/bash.svg" alt="" aria-hidden="true" width={12} height={12} />
              <p>bash</p>
            </div>
            <button
              type="button"
              onClick={toggleTerminal}
              aria-label="Kill terminal"
              className="grid size-6 place-items-center rounded-sm transition-colors hover:bg-surface-hover">
              <Image src="/images/del.svg" alt="" aria-hidden="true" width={14} height={16} />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <div className="px-3 pt-2">
            <p className="font-medium break-all">
              <span className="text-terminal-success">
                mahiyaRafa@Mahiya-Rahman-Rafa
              </span>{" "}
              <span className="text-pink-400">MINGW64</span>
              {"  "}
              <span className="text-yellow-300">/d/portfolio</span>
              {"  "}
              <span className="text-blue-300">(main)</span>
            </p>
          </div>

          <div className="flex items-center gap-2 px-1">
            <div className="flex items-center gap-1">
              <div className="ml-1.5 h-2 w-2 rounded-full border-2 bg-surface-terminal" />
              <Image src="/images/doller.svg" alt="" aria-hidden="true" width={12} height={16} />
            </div>
            <label htmlFor="terminal-input" className="sr-only">
              Type a page name to navigate. Available: {hint}
            </label>
            <input
              id="terminal-input"
              ref={inputRef}
              type="text"
              value={inputValue}
              autoComplete="off"
              spellCheck={false}
              placeholder={`try: ${sideMenuProperties[0]?.text.split(".")[0] ?? "about"}`}
              aria-invalid={hasError}
              aria-describedby={hasError ? "terminal-error" : undefined}
              onChange={(e) => {
                setInputValue(e.target.value);
                setHasError(false);
              }}
              onKeyDown={handleKeyDown}
              className="h-6 w-full bg-transparent outline-none placeholder:text-gray-600"
            />
          </div>

          {hasError && (
            <p id="terminal-error" role="alert" className="px-3 text-red-500">
              Invalid file name. Try one of: {hint}
            </p>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default TerminalComponent;
