import ComponentLayout from "../ShowSectionComponent.layout";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo.component";

export const ContactContainer = () => {
  return (
    <div className="flex items-start ">
      <ComponentLayout title="Reach Out Via Socials" className="w-1/2 pr-0">
        <ContactInfo />
      </ComponentLayout>
      <ComponentLayout
        title="Or Fill Out The Form"
        className="w-1/2 pr-0 border-l-2 border-tertiary">
        <ContactForm />
      </ComponentLayout>
    </div>
  );
};
