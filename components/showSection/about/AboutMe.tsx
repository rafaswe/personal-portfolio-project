import { skillName } from "@/components/constant/enum";
import dynamic from "next/dynamic";
import FloatingImages from "../../common/Scene";
import ComponentLayout from "../ShowSectionComponent.layout";
const Scene = dynamic(() => import("../../common/Scene"), { ssr: false });
const AboutMe = () => {
  return (
    <ComponentLayout title="About me" className="w-full h-full bg-secondary">
      <div className="flex h-full">
        <div className="flex flex-col flex-1 gap-4">
          <div className="font-medium">
            <p>{`Hello, I'm Mahiya Rahman Rafa, a frontend Developer enamored with
      JavaScript. `}</p>
            <p>
              I thrive on challenges and enjoy crafting solutions. Keeping
              abreast of the latest technologies
            </p>

            <p>and tools is not just a hobby but a passion of mine.</p>
          </div>
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
        <FloatingImages
          icons={[
            "/images/html.svg",
            "/images/css.svg",
            "images/bootstrap.svg",
            "images/tailwind.svg",
            "images/ant.svg",
            "images/js.svg",
            "images/typescript.svg",
            "images/es6.svg",
            "images/react.svg",
            "images/next.svg",
            "images/redux.svg",
            "images/zustand.svg",
          ]}
          centralImage="/images/personalPhoto.png"
        />
      </div>
    </ComponentLayout>
  );
};

export default AboutMe;
