// Project portfolio entries.
//
// Extracted from components/projects/Project-Section.tsx so the component
// renders the data instead of also declaring it.
import { Hotel, Plane, Zap } from "lucide-react";
import Image from "next/image";

const FirsttripLogo = () => (
  <Image
    src={"/images/firsttripLogo.png"}
    alt="logo"
    priority
    width={56}
    height={56}
    className="rounded-lg"
  />
);
export const ProjectList = [
  {
    id: 1,
    title: "FirstTrip",
    subtitle: "Travel Platform",
    link: "https://firsttrip.com/",
    icon: <FirsttripLogo />,
    gradient: "from-green-500 to-emerald-500",
    bgColor: "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900",
    borderColor: "border-gray-600",
    tech: [
      "React",
      "NextJS",
      "TypeScript",
      "Redux",
      "Zustand",
      "Tailwind CSS",
      "SASS",
      "Bootstrap5",
    ],
    responsibilities: [
      "Revamped user interface (UI) across core modules to enhance user experience",
      "Utilized React, NextJS, JavaScript, TypeScript, Redux, Zustand for component development",
      "Designed aesthetically pleasing layouts using CSS3, SASS, Tailwind CSS, and Bootstrap5",
      "Integrated Modern AJAX for data management",
      "Worked on both Admin and B2C sections",
    ],
    features: [
      "Flight Ticket Booking",
      "Hotel Reservation",
      "Holiday Booking",
      "Hajj Management",
      "Admin Panel",
    ],
  },
  {
    id: 2,
    title: "Hotel Booking",
    subtitle: "Management System",
    icon: <Hotel className="w-8 h-8" />,
    gradient: "from-blue-500 to-cyan-500",
    bgColor: "bg-gray-800",
    borderColor: "border-blue-500/30",
    tech: ["React", "TypeScript", "Next.js", "PrimeReact"],
    responsibilities: [
      "Designed and implemented a responsive user interface using React",
      "Built reusable components using TypeScript and PrimeReact",
      "Managed client-side routing and authentication using Next.js",
    ],
    features: [
      "Meilisearch",
      "Vast Hotel List",
      "Direct Payment",
      "24/7 available helpline",
    ],
  },
  {
    id: 3,
    title: "Passenger Service",
    subtitle: "System",
    icon: <Plane className="w-8 h-8" />,
    gradient: "from-purple-500 to-pink-500",
    bgColor: "bg-transparent",
    borderColor: "border-purple-500/20",
    tech: ["React", "TypeScript", "Ant Design", "Microservices"],
    responsibilities: [
      "Developed a pricing module for a microservices-based Passenger Service System",
      "Implemented functionalities for airplane ticketing, inventory management, and flight booking",
      "Used React, TypeScript, and Ant Design for frontend development",
    ],
    features: [
      "Microservices",
      "Pricing Module",
      "Inventory Management",
      "Flight Booking",
    ],
  },
];
