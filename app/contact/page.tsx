import { ContactContainer } from "@/components/showSection/contact/Contact.container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Mahiya Rahman Rafa by email, Discord, WhatsApp or GitHub.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Mahiya Rahman Rafa",
    description: "Get in touch with Mahiya Rahman Rafa by email, Discord, WhatsApp or GitHub.",
    url: "/contact",
  },
};

const ContactPage = () => {
  return <ContactContainer />;
};

export default ContactPage;
