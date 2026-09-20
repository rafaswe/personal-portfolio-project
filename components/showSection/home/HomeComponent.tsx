import { SkillIconList } from "@/components/constant/enum";
import FloatingImages from "../../common/Scene";

/**
 * Hero. A server component now: every animation here is a one-shot CSS reveal,
 * so nothing on this screen needs to ship JavaScript except the icon ring,
 * which measures the viewport to size its radius.
 */
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
            <h1 className="text-[clamp(1.9rem,7vw,3.5rem)] font-bold leading-tight animate-rise">
              Mahiya Rahman Rafa
            </h1>

            <div className="mt-2 flex flex-col gap-2 lg:mt-0">
              <div className="relative w-fit overflow-hidden">
                <p className="text-[clamp(1.25rem,4.5vw,2.25rem)]">
                  Frontend Developer
                </p>
                {/* One-pass typing reveal. */}
                <div
                  aria-hidden="true"
                  className="absolute -right-1 top-0 h-full border-l-4 border-tertiary bg-secondary animate-wipe"
                />
              </div>

              <p
                style={{ animationDelay: "1.8s" }}
                className="pl-1 text-base animate-rise sm:text-lg">
                ReactJs/Next Js Developer
              </p>
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
