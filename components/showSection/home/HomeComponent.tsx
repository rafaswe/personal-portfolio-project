"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import SideDesign from "./SideDesign";
//I transform visions into code.

const HomeComponent = () => {
  const controls = useAnimation();

  const handleAnimation = async () => {
    await controls.start({ width: 0, transition: { duration: 4 } }); // Increase duration to slow down the animation
    await controls.start({ width: "100%", transition: { duration: 4 } }); // Increase duration to slow down the animation
    handleAnimation();
  };

  useEffect(() => {
    handleAnimation();
  }, [controls]);

  return (
    <div className="px-4  h-full  relative  ">
      <div className="text-[152px] font-bold h-full flex items-center leading-[172px]">
        I transform <br /> visions into
        <br /> code.
      </div>
      <div className="absolute overflow-hidden h-full w-full px-4 right-0 bg-secondary top-0 opacity-[95%]">
        <div className="h-full items-center justify-between w-full flex">
          <div className="flex-1 h-full flex flex-col items-start justify-center">
            <p className="text-[56px] font-bold ">Mahiya Rahman Rafa</p>
            <div className="flex flex-col gap-2">
              <div className="relative w-fit overflow-hidden">
                <div className="flex gap-1">
                  <p></p>
                  <p className=" text-4xl">Frontend Developer</p>
                  <p>{"  "}</p>
                </div>
                <motion.div
                  className="absolute border-l-4 border-[#f9826c] h-full top-0 -right-1 bg-secondary"
                  initial={{ width: "100%" }}
                  animate={controls}></motion.div>
              </div>
              <motion.p
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 3, duration: 1 }}
                className="text-lg pl-1">
                ReactJs/Next Js Developer
              </motion.p>
            </div>
          </div>
          <SideDesign />
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
