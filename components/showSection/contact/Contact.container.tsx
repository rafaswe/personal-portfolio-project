import ContactForm from "./ContactBody";

export const ContactContainer = () => {
  return (
    <div className="w-full h-full overflow-y-auto hidden-scrollbar bg-secondary">
      <ContactForm />
    </div>
  );
};
