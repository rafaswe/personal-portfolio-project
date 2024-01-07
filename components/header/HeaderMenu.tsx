import { cn } from "@/functions/cn";
import Link from "next/link";

const HeaderMenu = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex gap-3 ", className)}>
      <Link href="/">File</Link>
      <Link href="/">Edit</Link>
      <Link href="/">Selection</Link>
      <Link href="/">View</Link>
      <Link href="/">Go</Link>
      <Link href="/">Run</Link>
      <Link href="/">Terminal</Link>
      <Link href="/">Help</Link>
    </div>
  );
};

export default HeaderMenu;
