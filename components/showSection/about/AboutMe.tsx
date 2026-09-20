import { CommentSection, Div, H2, P } from "@/components/common/elements";
import { EducationList, skillName } from "@/components/constant/enum";
import Image from "next/image";
import SideDesign from "../../common/SideDesign";
import ComponentLayout from "../ShowSectionComponent.layout";
import { CVTooltip } from "./CVTooltip";
import { ExperienceSection } from "./ExperienceSection";
import { PortfolioSection } from "./PortfolioSection";

const AboutMe = () => {
  return (
    <ComponentLayout
      title="About me"
      className="w-full h-full overflow-y-auto hidden-scrollbar  bg-secondary">
      <div className="relative">
        <div className="w-full lg:w-1/2 flex flex-col gap-2">
          <div className="break-words">
            <div>
              <P>
                <p className="flex flex-col pl-4 text-code-string">
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
          <Div>
            <div className="p-4">
              <PortfolioSection />
            </div>
          </Div>
        </div>
        <SideDesign />
        <CVTooltip />
      </div>
    </ComponentLayout>
  );
};

const SemiLayout = ({ title, children }) => {
  return (
    <div>
      <CommentSection title={title} className="ml-8" />
      <Div className="flex px-4 flex-col group gap-0.5">
        <H2 className="text-code-string">
          {title}
          {/* <AnimatedText text={title} /> */}
        </H2>
        {/* ...............................  */}
        <Div>{children}</Div>
      </Div>
    </div>
  );
};

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
  <div className="flex flex-wrap gap-1.5 ml-4">
    {skillName?.map((skill) => (
      <p
        key={skill?.id}
        className="w-fit font-medium text-sm px-4 py-2 rounded-md bg-surface-raised">
        {skill?.name}
      </p>
    ))}
  </div>
);

/**
 * A titled list inside one of the portfolio tabs.
 *
 * Defined at module scope rather than inside PortfolioSection: a component
 * declared during render is a new type on every render, so React throws the
 * previous subtree away and rebuilds it instead of updating it.
 */

export default AboutMe;
