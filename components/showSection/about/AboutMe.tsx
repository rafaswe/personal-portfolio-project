import { skillName } from "@/components/constant/enum";
import ComponentLayout from "../ShowSectionComponent.layout";

const AboutMe = () => {
  return (
    <ComponentLayout title="About me" className="w-full">
      <div className="flex flex-col gap-4">
        <div className="font-medium">
          <p>{`Hello, I'm Mahiya Rahman Rafa, a frontend Developer enamored with
      JavaScript. `}</p>
          <p>
            I thrive on challenges and enjoy crafting solutions. Keeping abreast
            of the latest technologies
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
    </ComponentLayout>
  );
};

export default AboutMe;
