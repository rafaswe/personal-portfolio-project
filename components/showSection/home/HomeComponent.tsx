"use client";
import { SkillIconList } from "@/components/constant/enum";
import { motion } from "framer-motion";
import FloatingImages from "../../common/Scene";

const HomeComponent = () => {
  return (
    <div className="lg:px-4 h-full w-full relative">
      {/* Background text — large screens only */}
      <div className="hidden lg:flex lg:text-[110px] xl:text-[152px] font-bold h-full items-center lg:leading-[130px] xl:leading-[172px]">
        I transform <br /> visions into
        <br /> code.
      </div>

      {/* Overlay panel */}
      <div className="absolute overflow-hidden h-full w-full px-4 right-0 bg-secondary top-0 opacity-[95%]">
        <div className="h-full flex flex-col lg:flex-row lg:items-center lg:justify-between w-full">
          {/* Mobile/tablet: full height centered layout */}
          <div className="flex flex-col items-start justify-center flex-1 lg:flex-none lg:h-full pt-8 lg:pt-0">
            <p className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-bold leading-tight">
              Mahiya Rahman Rafa
            </p>
            <div className="flex flex-col gap-2 mt-2 lg:mt-0">
              <div className="relative w-fit overflow-hidden">
                <div className="flex gap-1">
                  <p></p>
                  <p className="text-2xl sm:text-3xl md:text-4xl">
                    Frontend Developer
                  </p>
                  <p>{"  "}</p>
                </div>
                <motion.div
                  className="absolute border-l-4 border-[#f9826c] h-full top-0 -right-1 bg-secondary"
                  initial={{ width: "100%" }}
                  animate={{
                    width: ["100%", "0%", "100%"],
                    transition: {
                      duration: 8,
                      ease: "easeInOut",
                      repeat: Infinity,
                    },
                  }}
                />
              </div>
              <motion.p
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 3, duration: 1 }}
                className="text-base sm:text-lg pl-1">
                ReactJs/Next Js Developer
              </motion.p>
            </div>
          </div>

          {/* Floating icons — scaled down on mobile/tablet */}

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
