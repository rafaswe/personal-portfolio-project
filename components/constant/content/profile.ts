import { ExperienceSectionType } from "../interface";

// Content data. Extracted from the former components/constant/enum.ts,
// which held page copy rather than enums.

// Skills, experience, education and CV links.

export const skillName = [
  { id: 0, name: "HTML" },
  { id: 1, name: "CSS" },
  { id: 2, name: "Bootstrap" },
  { id: 3, name: "Tailwind" },
  { id: 4, name: "Antd" },
  { id: 5, name: "JavaScript" },
  { id: 6, name: "TypeScript" },
  { id: 7, name: "ES6" },
  { id: 8, name: "ReactJS" },
  { id: 9, name: "Next Js" },
  { id: 10, name: "Fundamental Java" },
];

export const SkillIconList = [
  "/images/html.svg",
  "/images/css.svg",
  "/images/bootstrap.svg",
  "/images/tailwind.svg",
  "/images/ant.svg",
  "/images/JS.svg",
  "/images/typescript.svg",
  "/images/es6.svg",
  "/images/react.svg",
  "/images/next.svg",
  "/images/redux.svg",
  "/images/zustand.svg",
];

export const ExperienceSectionList: ExperienceSectionType[] = [
  {
    componayInfo: {
      companyLogo: "/images/technoNextLogo.webp",
      companyName: "TechnoNext",
    },
    positionInfo: [
      {
        positionName: "Junior Software Engineer",
        joiningDate: "November 2023",
        leavingDate: "",
        address: "Dhaka, Bangladesh",
      },
      {
        positionName: "Software Developer Trainee",
        joiningDate: "May 2023",
        leavingDate: "October 2023",
        address: "Dhaka, Bangladesh",
      },
    ],
  },
];

export const PDFLink =
  "https://drive.google.com/file/d/1rH_FeO7I1HyICVfiioU7iiLZI1rVmDOW/view?usp=sharing&usp=embed_facebook";
export const fileId = "1rH_FeO7I1HyICVfiioU7iiLZI1rVmDOW";
export const downloadUrl = `https://drive.google.com/uc?export=download&confirm=t&id=${fileId}`;

export const EducationList = [
  {
    logo: "/images/daffodil.webp",
    institutionName: "Daffodil International University",
    certificateName: "Bachelor of Science",
    group: "Computer Software Engineering",
    gpa: {
      acquire: "4.00",
      outOff: "4.00",
    },
    session: {
      startYear: "2019",
      endYear: "2023",
    },
  },
  {
    logo: "/images/shamsul.webp",
    institutionName: "Shamsul Haque Khan School & College",
    certificateName: "Higher Secondary Certificate",
    group: "Science",
    gpa: {
      acquire: "5.00",
      outOff: "5.00",
    },
    session: {
      startYear: "2014",
      endYear: "2016",
    },
  },
  {
    logo: "/images/bright.webp",
    institutionName: "Bright School & College",
    certificateName: "Secondary School Certificate",
    group: "Science",
    gpa: {
      acquire: "5.00",
      outOff: "5.00",
    },
    session: {
      startYear: "2012",
      endYear: "2014",
    },
  },
];
