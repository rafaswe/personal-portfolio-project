import Image from "next/image";
import Link from "next/link";
const GitHubHeader = ({ gitHubInfo }) => {
  const { personalInfo, techStack, links, socialLinks } = gitHubInfo;

  return (
    <div className="rounded-lg border border-gray-800 bg-gray-900 p-4 animate-rise sm:p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
          <span className="text-2xl">🐱</span>
        </div>
        <div>
          <h2 className="text-xl font-bold">
            {`Hi 👋, I'm ${personalInfo?.name}`}
          </h2>
          <p className="text-gray-400">I am a {personalInfo?.position}</p>
        </div>
      </div>

      <div className="space-y-2 text-sm">
        {links?.map((singleLink, index) => (
          <p key={index} className="break-words">
            {singleLink?.label}{" "}
            <Link
              href={singleLink?.link}
              target="_blank"
              className="text-blue-400 hover:underline break-all">
              {singleLink?.tag}
            </Link>
          </p>
        ))}
      </div>

      <div className="mt-4">
        <h3 className="font-semibold mb-2">Connect with me:</h3>
        <div className="flex gap-2">
          {socialLinks.map((singleValue, index) => {
            const { icon } = singleValue;
            const Icon = icon;
            if (!Icon) return null; // Prevents undefined icon render error
            return (
              <a
                key={index}
                href={singleValue.link}
                target="_blank"
                rel="noreferrer"
                aria-label={singleValue.name ?? "Social link"}
                className="flex h-8 w-8 items-center justify-center rounded bg-gray-800 transition-all duration-200 hover:scale-110 hover:bg-gray-700 active:scale-95">
                <Icon className="h-4 w-4 text-white" />
              </a>
            );
          })}
        </div>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold mb-2">Languages and Tools:</h3>
        <div className="flex flex-wrap gap-3">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className={`h-8 w-8 ${tech.color} flex items-center justify-center rounded transition-transform duration-200 hover:scale-110`}
              title={tech?.name}>
              <Image
                src={tech?.logo}
                alt={tech?.name}
                width={36}
                height={36}
                className="w-8 h-8"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GitHubHeader;
