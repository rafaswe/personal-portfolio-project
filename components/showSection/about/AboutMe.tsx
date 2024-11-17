"use client";
import { ExperienceSectionList, skillName } from "@/components/constant/enum";
import { ExperienceSectionType } from "@/components/constant/interface";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import SideDesign from "../../common/SideDesign";
import ComponentLayout from "../ShowSectionComponent.layout";

const AboutMe = () => {
  return (
    <ComponentLayout
      title="About me"
      className="w-full h-[82vh] overflow-y-auto hidden-scrollbar  bg-secondary">
      <div className="relative">
        <div className="w-1/2 flex flex-col gap-4">
          <div className="break-words">
            <div>
              <p className="text-[#569CD6]">{`<p>`}</p>
              <p className="flex flex-col pl-4 text-[#ecad93]">
                <span>
                  B.Sc. Software Engineering graduate, passionate about
                  problem-solving and development.{" "}
                </span>
                <span>
                  {" "}
                  Specializing in React/Next.js with a focus on front-end
                  technologies.Currently contributing as a
                </span>{" "}
                <span>
                  React/Next.js developer while also sharing insights through
                  blogging to benefit the community.
                </span>
              </p>
              <p className="text-[#569CD6] font-medium">{`<p>`}</p>
            </div>
          </div>
          <SemiLayout title={"Experience"}>
            <ExperienceSection />
          </SemiLayout>
          <div className="pl-12">
            <ul>
              {skillName.map((skill) => (
                <li key={skill.id} className="list-disc">
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <SideDesign />
        <Link
          href="https://drive.google.com/file/d/1rH_FeO7I1HyICVfiioU7iiLZI1rVmDOW/view?usp=sharing&usp=embed_facebook"
          target="_blank"
          className="fixed bottom-12  font-medium rounded-lg px-3 py-1.5 border border-tertiary bg-transparent transition-all duration-300 ease-in-out hover:bg-tertiary hover:scale-105 transform-gpu flex items-center gap-2 right-4">
          <Image
            src={"/images/downArrow.svg"}
            alt="arrow"
            width={20}
            height={10}
          />
          <p>Download CV</p>
        </Link>
      </div>
    </ComponentLayout>
  );
};
const AnimatedText = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const [isReverse, setIsReverse] = useState(false);

  useEffect(() => {
    let currentIndex = isReverse ? text.length : 0;

    const animationInterval = setInterval(() => {
      if (!isReverse) {
        // Forward animation
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          setIsReverse(true);
          currentIndex = text.length;
        }
      } else {
        // Reverse animation
        if (currentIndex >= 0) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex--;
        } else {
          setIsReverse(false);
          currentIndex = 0;
        }
      }
    }, 300); // Adjust timing here (100ms = 0.1s per letter)

    return () => clearInterval(animationInterval);
  }, [text, isReverse]);

  return (
    <span className="inline-block">
      {displayText}
      <span className="animate-pulse">💼</span>
    </span>
  );
};

const SemiLayout = ({ title, children }) => {
  return (
    <div className="flex px-4 py-3   flex-col group gap-4">
      <p className="text-2xl leading-none pb-2 border-b  border-tertiary">
        <AnimatedText text={title} />
      </p>
      {children}
    </div>
  );
};

const ExperienceSection = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
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
    leavingDate?: string
  ): number => {
    const startDate = new Date(joiningDate);
    const endDate = leavingDate ? new Date(leavingDate) : new Date(Date.now());
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
          leavingDate
        );

        if (!leavingDate) {
          position.leavingDate = "current";
        }

        position.experience = formatExperience(experienceInMonths);
        totalExperienceInMonths += experienceInMonths;

        return position;
      });

      experience.componayInfo.totalExperience = formatExperience(
        totalExperienceInMonths
      );
      experience.positionInfo = updatedPositions;

      return experience;
    });
  }, []);
  if (!isClient) {
    return null; // or return a loading skeleton
  }
  return (
    <div className="flex flex-col gap-2">
      {modifiedExperienceList?.map((singleExperience, index) => {
        const { componayInfo, positionInfo } = singleExperience;
        return (
          <div
            key={index}
            className={`flex flex-col  border-gray-500 pb-4 gap-3 ${
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
                      <p className="leading-none flex items-center gap-2  text-sm">
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

export default AboutMe;
