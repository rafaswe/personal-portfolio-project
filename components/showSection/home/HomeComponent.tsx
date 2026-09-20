"use client";
import { SkillIconList } from "@/components/constant/enum";
import { motion } from "framer-motion";
import FloatingImages from "../../common/Scene";

const HomeComponent = () => {
  return (
    <div className="relative h-full w-full lg:px-4">
      {/* Oversized background wordmark — large screens only. */}
      <div
        aria-hidden="true"
        className="hidden h-full items-center font-bold lg:flex lg:text-[110px] lg:leading-[130px] xl:text-[152px] xl:leading-[172px]">
        I transform <br /> visions into
        <br /> code.
      </div>

      <div className="absolute right-0 top-0 h-full w-full overflow-y-auto overflow-x-hidden hidden-scrollbar bg-secondary px-4 opacity-[95%]">
        <div className="flex min-h-full w-full flex-col justify-center gap-4 py-6 lg:flex-row lg:items-center lg:justify-between lg:gap-4 lg:py-0">
          <div className="flex flex-col items-start justify-center lg:h-full lg:flex-1">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-[clamp(1.9rem,7vw,3.5rem)] font-bold leading-tight">
              Mahiya Rahman Rafa
            </motion.h1>

            <div className="mt-2 flex flex-col gap-2 lg:mt-0">
              <div className="relative w-fit overflow-hidden">
                <p className="text-[clamp(1.25rem,4.5vw,2.25rem)]">
                  Frontend Developer
                </p>
                {/* One-pass typing reveal. This used to loop every 8s, which
                    meant the job title spent much of its time hidden behind
                    the wipe. */}
                <motion.div
                  aria-hidden="true"
                  className="absolute -right-1 top-0 h-full border-l-4 border-tertiary bg-secondary"
                  initial={{ width: "100%" }}
                  animate={{ width: "0%" }}
                  transition={{ duration: 1.6, ease: "easeInOut", delay: 0.3 }}
                />
              </div>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.6 }}
                className="pl-1 text-base sm:text-lg">
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
