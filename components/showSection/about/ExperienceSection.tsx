"use client";

// Client because the durations are measured against "now". Rendered on the
// server they would be frozen at build time and read as stale.
import { ExperienceSectionList } from "@/components/constant/enum";
import { ExperienceSectionType } from "@/components/constant/interface";
import Image from "next/image";
import { useMemo, useSyncExternalStore } from "react";

export const ExperienceSection = () => {
  // Marks the first client render so durations that depend on "now" are not
  // computed during SSR, where they would mismatch the client. `useSyncExternalStore`
  // expresses this without a synchronous setState inside an effect.
  const isClient = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
  const formatExperience = (months: number): string => {
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    return `${years > 0 ? `${years} year${years > 1 ? "s" : ""}` : ""}${
      remainingMonths > 0
        ? ` ${remainingMonths} month${remainingMonths > 1 ? "s" : ""}`
        : ""
    }`.trim();
  };

  const calculateExperience = (
    joiningDate: string,
    leavingDate?: string,
  ): number => {
    const startDate = new Date(joiningDate);
    const endDate =
      leavingDate && leavingDate !== "current"
        ? new Date(leavingDate)
        : new Date();

    const totalMonths =
      (endDate.getFullYear() - startDate.getFullYear()) * 12 +
      endDate.getMonth() -
      startDate.getMonth();

    return totalMonths >= 0 ? totalMonths : 0;
  };

  const modifiedExperienceList: ExperienceSectionType[] = useMemo(() => {
    return ExperienceSectionList.map((experience) => {
      let totalExperienceInMonths = 0;

      const updatedPositions = experience.positionInfo.map((position) => {
        const { joiningDate, leavingDate } = position;
        const experienceInMonths = calculateExperience(
          joiningDate,
          leavingDate,
        );

        if (!leavingDate) {
          position.leavingDate = "current";
        }

        position.experience = formatExperience(experienceInMonths);
        totalExperienceInMonths += experienceInMonths;

        return position;
      });

      experience.componayInfo.totalExperience = formatExperience(
        totalExperienceInMonths,
      );
      experience.positionInfo = updatedPositions;

      return experience;
    });
  }, []);
  if (!isClient) {
    return null; // or return a loading skeleton
  }
  return (
    <div className="flex flex-col gap-2 ml-4">
      {modifiedExperienceList?.map((singleExperience, index) => {
        const { componayInfo, positionInfo } = singleExperience;
        return (
          <div
            key={index}
            className={`flex flex-col  border-gray-500 pb-4 gap-3 border  p-3 pr-4 rounded-md shadow-2xl  ${
              index === modifiedExperienceList?.length - 1 ? "" : "border-b"
            }`}>
            {/* Company Info section  */}
            <div className="flex">
              <div className="w-14 shadow shadow-white">
                <Image
                  src={componayInfo?.companyLogo}
                  alt="logo"
                  width={24}
                  height={24}
                  className="w-full"
                />
              </div>
              <div className="flex pl-4 flex-col">
                <p className="text-xl">{componayInfo?.companyName}</p>
                <p>{componayInfo?.totalExperience}</p>
              </div>
            </div>

            {/* position Info  */}
            <div className="">
              {positionInfo?.map((position, index) => (
                <div key={index} className="flex">
                  <div className="w-14 flex flex-col  justify-center items-center">
                    <div className="w-3 h-3 rounded-full bg-white border-4 shadow shadow-tertiary border-tertiary"></div>
                    <div className="h-full flex-1 bg-tertiary w-[1px]"></div>
                  </div>
                  <div className="pl-4 flex flex-col gap-2">
                    <p className="leading-none text-md font-medium">
                      {position?.positionName}
                    </p>
                    <div
                      className={`flex flex-col gap-1 ${
                        index === positionInfo.length - 1 ? "" : "pb-4"
                      }`}>
                      <p className="leading-none flex flex-wrap items-center gap-x-2 gap-y-1  text-sm">
                        <span>
                          {position?.joiningDate} - {position?.leavingDate}
                        </span>
                        <span className="w-1 h-1 bg-white rounded-full mt-1"></span>
                        <span>{position?.experience}</span>
                      </p>
                      <p className="text-sm">{position?.address}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
