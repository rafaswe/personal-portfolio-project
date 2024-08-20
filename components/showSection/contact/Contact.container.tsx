import ComponentLayout from "../ShowSectionComponent.layout";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo.component";

export const ContactContainer = () => {
  return (
    <ComponentLayout title="Reach Out Via Socials">
      <div className="w-full flex">
        <ContactInfo />
        <ContactForm />
      </div>
    </ComponentLayout>
  );
};
