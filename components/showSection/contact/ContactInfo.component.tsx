import Link from "next/link";

const ContactInfo = () => {
  return (
    <div className="w-1/2 text-xl">
      <p>
        <span className="text-tertiary">.socials </span>
        <span>{"{ "} </span>
      </p>
      <InfoDetails
        title="Email"
        link="mailto:mahiyarahmanrafa@gmail.com"
        linkTitle="mahiyarahmanrafa@gmail.com"
      />

      <InfoDetails
        title="Skype"
        link="https://join.skype.com/invite/rRNY8afs4x7B"
        linkTitle="mahiyarahman1997"
      />
      <InfoDetails
        title="Github"
        link="https://github.com/rafaswe"
        linkTitle="rafaswe"
      />
    </div>
  );
};

const InfoDetails = ({
  title,
  link,
  linkTitle,
}: {
  title: string;
  link: string;
  linkTitle: string;
}) => {
  return (
    <div className="flex">
      <span className="w-8"></span>
      <span>
        {title} :{" "}
        <Link
          href={link}
          className="text-tertiary font-medium hover:underline hover:cursor-pointer">
          {linkTitle}
        </Link>
        <span> ;</span>
      </span>
    </div>
  );
};

export default ContactInfo;
