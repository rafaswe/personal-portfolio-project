import ComponentLayout from "../ShowSectionComponent.layout";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo.component";

export const ContactContainer = () => {
  return (
    <ComponentLayout title="Reach Out Via Socials" className="flex flex-wrap">
      <ContactInfo />
      <ContactForm />
    </ComponentLayout>
  );
};
