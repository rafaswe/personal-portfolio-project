"use client";
import { SkillIconList } from "@/components/constant/enum";
import { motion } from "framer-motion";
import FloatingImages from "../../common/Scene";
//I transform visions into code.

const HomeComponent = () => {
  return (
    <div className="px-4  h-full w-full  relative  ">
      <div className="text-[152px] font-bold h-full flex items-center leading-[172px]">
        I transform <br /> visions into
        <br /> code.
      </div>
      <div className="absolute overflow-hidden h-full w-full px-4 right-0 bg-secondary top-0 opacity-[95%]">
        <div className="h-full items-center justify-between w-full flex">
          <div className="h-full flex flex-col items-start justify-center">
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
                  animate={{
                    width: ["100%", "0%", "100%"], // Keyframes
                    transition: {
                      duration: 8, // Total duration for one complete cycle
                      ease: "easeInOut",
                      repeat: Infinity, // Repeat indefinitely
                    },
                  }}></motion.div>
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
          <FloatingImages
            icons={SkillIconList}
            centralImage="/images/personalPhoto.png"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
