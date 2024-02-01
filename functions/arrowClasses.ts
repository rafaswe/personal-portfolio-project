import clsx from "clsx";

export const getArrowClasses = (conditionValue: boolean) => {
  const arrowClasses = clsx("w-4 h-4 transform transition-transform", {
    "rotate-180": !conditionValue,
    "rotate-90": conditionValue,
  });

  return arrowClasses;
};
