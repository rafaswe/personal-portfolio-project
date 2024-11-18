"use client";
import { CommentSection, Div, H2, P } from "@/components/common/elements";

import {
  downloadUrl,
  EducationList,
  ExperienceSectionList,
  PDFLink,
  skillName,
} from "@/components/constant/enum";
import { ExperienceSectionType } from "@/components/constant/interface";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import SideDesign from "../../common/SideDesign";
import ComponentLayout from "../ShowSectionComponent.layout";

const AboutMe = () => {
  return (
    <ComponentLayout
      title="About me"
      className="w-full h-[88vh] overflow-y-auto hidden-scrollbar  bg-secondary">
      <div className="relative">
        <div className="w-1/2 flex flex-col gap-2">
          <div className="break-words">
            <div>
              <P>
                <p className="flex flex-col pl-4 text-[#ecad93]">
                  B.Sc. Software Engineering graduate, passionate about
                  problem-solving and development. Specializing in React/Next.js
                  with a focus on front-end technologies.Currently contributing
                  as a React/Next.js developer while also sharing insights
                  through blogging to benefit the community.
                </p>
              </P>
            </div>
          </div>
          <SemiLayout title={"Experience"}>
            <ExperienceSection />
          </SemiLayout>

          <SemiLayout title={"Education"}>
            <EducationSection />
          </SemiLayout>
          <SemiLayout title={"Proficiency"}>
            <SkillSet />
          </SemiLayout>
        </div>
        <SideDesign />
        <CVTooltip />
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
    <div>
      <CommentSection title={title} className="ml-8" />
      <Div className="flex px-4 flex-col group gap-0.5">
        <H2 className="text-[#ecad93]">
          {title}
          {/* <AnimatedText text={title} /> */}
        </H2>
        {/* ...............................  */}
        <Div>{children}</Div>
      </Div>
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

const CVTooltip = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [settingTooltip, setSettingTooltip] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  //tooltip open.
  const hideTooltip = () => {
    setIsVisible(false);

    // Set a timeout to show the tooltip again after 10 seconds
    setTimeout(() => {
      setIsVisible(true);
    }, 5000);
  };

  //tooltip close
  const handleClickOutside = () => {
    // Your custom logic here
    setSettingTooltip(false);
  };

  //Install pdf
  const handleInstall = async () => {
    try {
      setIsDownloading(true);

      // Use the export URL format that works better with Google Drive
      window.open(downloadUrl);
    } catch (error) {
      alert("Failed to download CV. Please try again later.");
    } finally {
      setTimeout(() => {
        setIsDownloading(false);
      }, 1000); // Short delay to show loading state
    }
  };
  useOnClickOutside(ref, handleClickOutside);
  return (
    <div className="group">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="border transition-colors duration-300 ease-in-out  group-hover:bg-[#2d343a]  border-gray-700 bg-primary rounded-lg fixed bottom-8 right-2 w-[26.125rem] p-3">
            <div className="flex flex-col gap-4">
              <div className="flex relative  items-start gap-6">
                <div className="flex items-start gap-2">
                  <Image
                    src="/images/info.svg"
                    alt="info"
                    width={16}
                    height={16}
                    className="pt-0.5"
                  />
                  <p className="text-xs break-words">
                    {` Do you want to install the recommended 'Curriculum Vitae' pdf
                from this repository?`}
                  </p>
                </div>
                <div className="flex gap-1.5 pr-1">
                  <button
                    onClick={() => setSettingTooltip(true)}
                    title="More Action...">
                    <Image
                      src="/images/settings.svg"
                      alt="icon"
                      width={24}
                      height={24}
                    />
                  </button>
                  <button
                    onClick={hideTooltip}
                    title="Clear Notification (Delete)">
                    <Image
                      src="/images/cross.svg"
                      alt="icon"
                      width={18}
                      height={18}
                    />
                  </button>
                </div>
                {settingTooltip ? (
                  <div
                    className="absolute text-xs bg-secondary border-2 border-gray-600 rounded-lg right-8 top-4 w-fit p-1"
                    ref={ref}>
                    <button
                      className="px-2 py-0.5 rounded-md hover:bg-[#569CD6]"
                      onClick={() =>
                        setIsVisible(false)
                      }>{`Don't show again, for this repository `}</button>
                  </div>
                ) : null}
              </div>
              <div className="flex justify-end gap-2 text-sm font-medium items-center">
                <button
                  className="flex items-center gap-2 px-2 py-1 justify-center rounded-sm  transition-colors duration-300 ease-in-out  hover:bg-[#407fb3] bg-[#569CD6]"
                  onClick={handleInstall}
                  disabled={isDownloading}>
                  {isDownloading ? "Downloading..." : "Download"}
                  <div className="border-l-2 pl-1 border-white">
                    <Image
                      src={"/images/arrow.svg"}
                      alt="arrow"
                      width={12}
                      height={12}
                      className="rotate-90"
                    />
                  </div>
                </button>
                <Link
                  href={PDFLink}
                  className="px-2 py-1 hover:bg-secondary  transition-colors duration-300 ease-in-out  bg-[#3c454d] rounded-sm"
                  target="_blank">
                  Show Curriculum Vitae
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// education
const EducationSection = () => (
  <div className="flex flex-col gap-2">
    {EducationList?.map((education, index) => {
      const { logo, institutionName, certificateName, session, group, gpa } =
        education;
      return (
        <div
          key={index}
          className="ml-4 py-3 rounded flex items-center gap-3 border-b border-gray-500">
          <Image
            src={logo}
            alt="logo"
            width={50}
            height={50}
            className="w-12 h-12"
          />
          <div className="w-full">
            <div className="flex font-medium items-start w-full justify-between">
              <p>{institutionName}</p>
              <p className="text-sm">
                {session?.startYear} - {session?.endYear}
              </p>
            </div>
            <div className="text-sm flex items-center gap-2 font-medium">
              <p>{certificateName}</p>
              <p className="w-1 mt-1 rounded-full h-1 bg-white"></p>
              <p>{group}</p>
            </div>
            <p className="text-sm">
              {gpa?.acquire} out of {gpa?.outOff}
            </p>
          </div>
        </div>
      );
    })}
  </div>
);

const SkillSet = () => (
  <Div>
    <div className="flex flex-wrap gap-1.5 ml-4">
      {skillName?.map((skill) => (
        <p
          key={skill?.id}
          className="w-fit font-medium text-sm px-4 py-2 rounded-md bg-[#3c454d]">
          {skill?.name}
        </p>
      ))}
    </div>
  </Div>
);

export default AboutMe;
