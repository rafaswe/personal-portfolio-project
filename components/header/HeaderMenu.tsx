"use client";
import { cn } from "@/functions/cn";
import useTerminalStore from "@/service/store/useTerminalStore";
import Link from "next/link";

const HeaderMenu = ({ className }: { className?: string }) => {
  const { toggleTerminal } = useTerminalStore();
  return (
    <div className={cn("flex gap-3 ", className)}>
      <Link href="/">File</Link>
      <Link href="/">Edit</Link>
      <Link href="/">Selection</Link>
      <Link href="/">View</Link>
      <Link href="/">Go</Link>
      <Link href="/">Run</Link>
      <button onClick={toggleTerminal}>Terminal</button>
      <Link href="/">Help</Link>
    </div>
  );
};

export default HeaderMenu;
