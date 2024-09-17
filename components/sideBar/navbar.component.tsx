"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sideMenuProperties } from "../constant/enum";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <div className="flex items-center text-sm  bg-primary">
      {sideMenuProperties.map((menubar, index) => (
        <Link
          href={menubar?.pageLink}
          key={menubar.id}
          className={`flex gap-2.5 py-0.5 w-fit items-center px-4 border-l border-secondary ${
            pathName === menubar?.pageLink ? "bg-secondary" : "bg-primary"
          }`}>
          <Image
            src={`/images/${menubar.icon}.svg`}
            alt={menubar.text}
            height={15}
            width={15}
            className="mt-1"
          />
          <p>{menubar.text}</p>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
