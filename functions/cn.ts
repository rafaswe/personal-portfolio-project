import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const tm = (...inputs: string[]) => {
  return twMerge(twMerge(inputs));
};

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
