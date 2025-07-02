import {
  Disc2,
  Facebook,
  GitCompareArrows,
  Globe,
  Headset,
  Instagram,
  Mail,
} from "lucide-react";
import { ExperienceSectionType } from "./interface";

export const FAQ_HIGHEST_LIMIT = 3 as number;
export const menueProperties = [
  { id: 0, image: "file", altText: "File", link: "/" },
  { id: 1, image: "searchIcon", altText: "Achievements", link: "/search" },
  {
    id: 2,
    image: "merge",
    altText: "Combined projects(Office/partnership)",
    link: "/projects",
  },
  { id: 4, image: "github", altText: "Github preview", link: "/gitHub" },
  { id: 5, image: "blog", altText: "Blogs written by me", link: "/blogs" },
  { id: 6, image: "contact", altText: "contact information", link: "/contact" },
  { id: 7, image: "profile", altText: "profileInfo", link: "/about" },
  { id: 8, image: "settings", altText: "Settings section", link: "" },
];

export const PersonalInfoProperties = [
  { id: 0, image: "profile", altText: "profileInfo" },
  { id: 1, image: "settings", altText: "Settings section" },
];

export const MenuProperties = [
  { id: 0, icon: "JS", text: "home.js" },
  { id: 1, icon: "TS", text: "search.ts" },
  { id: 2, icon: "html", text: "about.html" },
  { id: 3, icon: "css", text: "contact.css" },
  { id: 4, icon: "tsx", text: "projects.tsx" },
  { id: 6, icon: "json", text: "blogs.json" },
  { id: 7, icon: "md", text: "gitHub.md" },
];
export const sideMenuProperties = [
  { id: 0, icon: "JS", text: "home.js", pageLink: "/" },
  { id: 1, icon: "TS", text: "search.ts", pageLink: "/search" },
  { id: 2, icon: "html", text: "about.html", pageLink: "/about" },
  { id: 3, icon: "css", text: "contact.css", pageLink: "/contact" },
  { id: 4, icon: "tsx", text: "projects.tsx", pageLink: "/projects" },
  { id: 6, icon: "json", text: "blogs.json", pageLink: "/blogs" },
  { id: 7, icon: "md", text: "gitHub.md", pageLink: "/gitHub" },
];

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

export const OnlinePresenceList = [
  {
    id: 0,
    imageURL: "/images/onlinePresence/diu.png",
    title: "DIU 10th Convocation 2023",
    description: `The convocation procession moved forward led by the Convocation Marshall of Daffodil International University, Professor Dr AKM Fazlul Haque. His Excellency Mr. Md. Abdul Hamid, the Honorable President of the People’s Republic of Bangladesh has delegated his privilege as the Honorable Chancellor of Daffodil International University to the Honorable Minister of Education, the Government of the People’s Republic of Bangladesh, Dr Dipu Moni, MP, to preside over the convocation ceremony and to confer the degrees upon the graduating students during the period from 10th January 2022 to 8th February 2023. The Honorable Education Minister declared the 10th Convocation Ceremony of Daffodil International University open. Dr Dipu Moni, MP, Honorable Minister, Ministry of Education, Government of the People’s Republic of Bangladesh addressed the distinguished gathering with her wise words. Dr Md. Sabur Khan, the Honorable Chairman of the Board of Trustees handed over a token of gratitude to Dr Dipu Moni, MP, Honorable Minister, Ministry of Education, Government of the People’s Republic of Bangladesh.`,
    url: "https://dsa.daffodilvarsity.edu.bd/newsletter/march-2023/",
    src: "E-Newsletter: March 2023, Daffodil International Univeristy",
  },
  {
    id: 1,
    imageURL: "/images/onlinePresence/businessStandared.jpg",
    title: "Daffodil International University holds 10th convocation",
    description: `Daffodil International University (DIU) held its 10th convocation on Thursday (9 February) at Shawdhinata Sommelon Kendro of the university at Daffodil Smart City, Birulia Savar, Dhaka.The event was delegated by President Abdul Hamid and Chancellor of Daffodil International University Dr Dipu Moni, education minister, presided over the convocation ceremony and conferred the degrees, said a press release. Professor Atul Khosla, Founder and Vice Chancellor of Shoolini University, Himachal Pradesh, India attended the convocation as the convocation speaker.`,
    url: "https://www.tbsnews.net/bangladesh/education/daffodil-international-university-holds-10th-convocation-582718",
    src: "The Business Standard",
  },
  {
    id: 2,
    imageURL: "/images/onlinePresence/timesBD.png",
    title: "DIU to hold 10th convocation Programme",
    description: `Daffodil International University (DIU) held its 10th convocation with colorful events on Thursday at Shawdhinata Sommelon Kendro of the university at Daffodil Smart City, Birulia Savar, a press release said Thursday. Delegated by Md. Abdul Hamid, President of the People's Republic of Bangladesh and chancellor of DIU, Dr. Dipu Moni M.P, Minister, Ministry of Education, Government of the People's Republic of Bangladesh presided over the convocation ceremony and conferred the degrees. Professor Atul Khosla, founder and VC of Shoolini University, Himachal Pradesh, India attended the convocation as the convocation Speaker. The programme was also addressed by Dr. Md. Sabur Khan, board of trustees and, professor Dr. M Lutfar Rahman, VC of the university. In the 10 th Convocation a total number 6164 students has been conferred upon graduation and post-graduation degrees and among them 12 best result oriented graduates will be awarded 'Gold Medal' in different categories. Dr. Dipu Moni, MP said, convocation ends your institutional education. Now it's time to use your acquired education for the welfare of the country and the society. At the welcome address DIU chairman, Dr. Md. Sabur Khan said, We are taking all efforts to develop the modern flagship university,remarkably different in its devotion to access and equity; to the quality of its teaching, learning,research and to meeting national and regional socio-economic needs. Convocation speaker professor Atul Khosla said, life doesn't go according to the plans you make for it. Each of you will go through highs and lows, the difficult and the easy, and, regrettably, there may occasionally be too many challenges and not enough smooth sailing.`,
    url: "https://thenewstimesbd.com/education/diu-to-hold-10th-convocation-on-feb-9/",
    src: "The news times bd",
  },
  {
    id: 3,
    imageURL: "/images/onlinePresence/dhakatribune.png",
    title: "Daffodil International University holds 10th convocation",
    description: `Daffodil International University (DIU) held its 10th convocation with a colourful event on February 9. The convocation was organized at the Shawdhinata Sommelon Kendro of the university at Daffodil Smart City, Birulia Savar, Dhaka. Delegated by Md Abdul Hamid, president of Bangladesh and chancellor of Daffodil International University, Dr Dipu Moni MP, minister, Ministry of Education, presided over the convocation ceremony and conferred the degrees, said a press release. Professor Atul Khosla, founder and vice chancellor of Shoolini University, Himachal Pradesh, India attended the convocation as the convocation speaker.`,
    url: "https://www.dhakatribune.com/bangladesh/education/304811/daffodil-international-university-holds-10th",
    src: "DhakaTribune",
  },
  {
    id: 4,
    imageURL: "/images/onlinePresence/prothomAlo.jpg",
    title: "ড্যাফোডিল ১০ম সমাবর্তন",
    description: `ড্যাফোডিল ইন্টারন্যাশনাল ইউনিভার্সিটির ১০ম সমাবর্তন গতকাল ড্যাফোডিল স্মার্ট সিটিতে... অনুষ্ঠিত হয়। দশম সমাবর্তনে ড্যাফোডিল ইন্টারন্যাশনাল ইউনিভার্সিটির ছয় হাজার ১৬৪ শিক্ষার্থীকে ডিগ্রি প্রদান করা হয়। ঢাকা বিশ্ববিদ্যালয়ের উপাচার্য অধ্যাপক ড. মো. আখতারুজ্জামান বলেন, বাংলাদেশের উন্নয়নের জন্য জ্ঞানভিত্তিক সমাজ গড়ে তুলতে হবে। এজন্য শিক্ষার্থীদের জ্ঞান অর্জনের পাশাপাশি তা প্রয়োগ করতে হবে। গতকাল বৃহস্পতিবার ড্যাফোডিল ইন্টারন্যাশনাল ইউনিভার্সিটির দশম সমাবর্তনে তিনি এ কথা বলেন। সাভারে বিশ্ববিদ্যালয়ের স্থায়ী ক্যাম্পাসে সমাবর্তনের আয়োজন করা হয়। অনুষ্ঠানে শিক্ষামন্ত্রী দীপু মনি সভাপতিত্ব করেন। সমাবর্তনে ৬ হাজার ১৬৪ জন শিক্ষার্থীকে ডিগ্রি প্রদান করা হয়।`,
    src: "প্রথম আলো",
    url: "",
  },

  {
    id: 5,
    imageURL: "/images/onlinePresence/3.jpeg",
    title: "ড্যাফোডিল ইউনিভার্সিটির গ্র্যাজুয়েট স্বর্ণপদক পেলেন রাফা",
    description: `ড্যাফোডিল ইন্টারন্যাশনাল ইউনিভার্সিটির (ডিআইইউ) ১২তম সমাবর্তনে গোল্ড মেডেল পেয়েছেন রিমা রহমান। পূর্ণাঙ্গ স্কলারশিপ প্রাপ্ত ছাত্রী 'গ্র্যাজুয়েট রিমা রহমান' শিক্ষাজীবনে অসাধারণ কৃতিত্বপূর্ণ ফলাফলের জন্য বিশ্ববিদ্যালয়ের শিক্ষার্থীদের মধ্যে থেকে নির্বাচিত হন। বিশ্ববিদ্যালয়ে পড়ার সময় রিমা ছিলেন বিশ্ববিদ্যালয়ের একাধিক ক্লাবের সক্রিয় সদস্য। বিশ্ববিদ্যালয়ে শিক্ষাজীবনে তার অসাধারণ কৃতিত্ব, নেতৃত্ব ও সামাজিক অবদান তাকে অন্যান্য শিক্ষার্থীদের থেকে অনন্য করে তোলে। গোল্ড মেডেল বিজয়ী রিমা রহমান বিশ্ববিদ্যালয়ের কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং বিভাগের শিক্ষার্থী ছিলেন। তিনি শিক্ষাজীবনে সর্বোচ্চ ফলাফল অর্জনের পাশাপাশি নেতৃত্ব, সৃজনশীলতা ও সমাজসেবায় গুরুত্বপূর্ণ অবদান রেখেছেন। এছাড়া সমাবর্তনে বিশ্ববিদ্যালয়ের বোর্ড অব ট্রাস্টিজের চেয়ারম্যান ড. সবুর খান, উপাচার্য অধ্যাপক ড. এম লুৎফর রহমান, কোষাধ্যক্ষ অধ্যাপক মো. কামরুল ইসলাম ও অন্যান্য শিক্ষকগণ উপস্থিত ছিলেন। এবারের সমাবর্তনে মোট ৮,৪০৪ জন শিক্ষার্থীকে ডিগ্রি প্রদান করা হয়। অনুষ্ঠানে বিভিন্ন বিভাগের শ্রেষ্ঠ শিক্ষার্থীদের গোল্ড মেডেল প্রদান করা হয়। সমাবর্তনে প্রধান অতিথি হিসেবে উপস্থিত ছিলেন শিক্ষামন্ত্রী দীপু মনি। ড্যাফোডিল ইন্টারন্যাশনাল ইউনিভার্সিটি শিক্ষার্থীদের উদ্ভাবন, গবেষণা ও সামাজিক দায়বদ্ধতায় উদ্বুদ্ধ করতে সবসময় কাজ করে যাচ্ছে বলে জানা`,
    url: "https://www.risingbd.com/%E0%A6%A1%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%AB%E0%A7%8B%E0%A6%A1%E0%A6%BF%E0%A6%B2-%E0%A6%87%E0%A6%89%E0%A6%A8%E0%A6%BF%E0%A6%AD%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%BF%E0%A6%9F%E0%A6%BF%E0%A6%B0-%E0%A6%97%E0%A7%8D%E0%A6%B0%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%9C%E0%A7%81%E0%A7%9F%E0%A7%87%E0%A6%9F-%E0%A6%B8%E0%A7%8D%E0%A6%AC%E0%A6%B0%E0%A7%8D%E0%A6%A3%E0%A6%AA%E0%A6%A6%E0%A6%95-%E0%A6%AA%E0%A7%87%E0%A6%B2%E0%A7%87%E0%A6%A8-%E0%A6%B0%E0%A6%BE%E0%A6%AB%E0%A6%BE/492979",
    src: "risingbd",
  },
  {
    id: 6,
    imageURL: "/images/onlinePresence/2.jpeg",
    title: "'গ্র্যাজুয়েট স্বর্ণপদক' পেলো মাহিয়া রহমান রাফা",
    description: `বিশ্ববিদ্যালয়গুলোর মধ্যে যাঁরা পেয়েছেন ভালো সিজিপিএ (গ্রেড পয়েন্ট অ্যাভারেজ) ও ইন, শুধু তাই নয়; একাডেমিক শিক্ষার পাশাপাশি নানান সহশিক্ষা (এক্সট্রা কারিকুলার অ্যাক্টিভিটিস) যাঁরা করেছেন, ঢাকা শহরের ড্যাফোডিল বিশ্ববিদ্যালয়ের একজন উদ্যমী ছাত্রী মাহিয়া রহমান রাফা পেয়েছেন ‘গ্র্যাজুয়েট গোল্ড’ সম্মাননায় ভূষিত করা হয়েছে। এই পদকটি ড্যাফোডিল ইন্টারন্যাশনাল ইউনিভার্সিটির শিক্ষার্থীদের মধ্যে থেকে দেওয়া হয়। ড্যাফোডিল ইন্টারন্যাশনাল ইউনিভার্সিটি (ডিআইইউ)-এর ১২তম সমাবর্তনে এই সম্মাননা দেওয়া হয়েছে। রাফা পূর্ণাঙ্গ স্কলারশিপে লেখাপড়া করেছেন। তার অনবদ্য একাডেমিক সিজিপিএ ও সহশিক্ষা কার্যক্রমের জন্য ড্যাফোডিল ইন্টারন্যাশনাল ইউনিভার্সিটির শিক্ষার্থীদের মধ্যে থেকে নির্বাচিত হয়েছেন মাহিয়া রহমান রাফা। বিশ্ববিদ্যালয়ে পড়াশোনার পাশাপাশি রাফা ডিআইইউ-এর নানা ক্লাবের সঙ্গে সম্পৃক্ত থেকেছেন বিভিন্ন সময়, বিশ্ববিদ্যালয়ের প্রতিনিধিত্ব করেছেন বিভিন্ন জাতীয় ও আন্তর্জাতিক অনুষ্ঠানে। রাফার সহপাঠীরা ও শিক্ষকরা বলেন যে, গ্র্যাজুয়েট গোল্ড পাওয়া তার প্রাপ্য। তারা বলেন, খুবই অনুপ্রেরণামূলক শিক্ষাজীবনের গল্প একজন শিক্ষার্থীর ‘গ্র্যাজুয়েট গোল্ড’ প্রাপ্তি অন্য শিক্ষার্থীদের অনুপ্রাণিত করবে। গ্র্যাজুয়েট গোল্ড সম্মাননায় ভূষিত হওয়ার অনুভূতি জানাতে গিয়ে রাফা বলেন, তারাই পাশে ছিলেন যাঁদের সহানুভূতি সবসময় পাশে পেয়েছেন পরিবার থেকে। সেই সাথে ড্যাফোডিলের প্রত্যেক শিক্ষক ও কর্মকর্তা ও তার সহপাঠীদের প্রতি কৃতজ্ঞতা প্রকাশ করেন তিনি। প্রসঙ্গত, ঢাকা আন্তর্জাতিক সম্মেলন সেন্টারে ড্যাফোডিল ইন্টারন্যাশনাল ইউনিভার্সিটির ১২তম সমাবর্তন অনুষ্ঠিত হয়। অনুষ্ঠানে সভাপতিত্ব করেন বিশ্ববিদ্যালয়ের আচার্য ও রাষ্ট্রপতি মো. সাহাবুদ্দিন। সমাবর্তনে শিক্ষামন্ত্রী দীপু মনি প্রধান অতিথি হিসেবে উপস্থিত ছিলেন। বিশেষ অতিথি ছিলেন অধ্যাপক ড. মুহম্মদ জাফর ইকবাল। সভাপতির বক্তব্য দেন বিশ্ববিদ্যালয়ের ট্রাস্টি বোর্ডের চেয়ারম্যান ড. সবুর খান। আরও বক্তব্য দেন বিশ্ববিদ্যালয়ের উপাচার্য অধ্যাপক ড. এম লুৎফর রহমান। এতে উপস্থিত ছিলেন বিশ্ববিদ্যালয়ের শিক্ষক, শিক্ষার্থী, অভিভাবকসহ বিশিষ্টজনেরা।`,
    url: "https://publicreaction.net/",
    src: "পাবলিক রিঅ্যাকশন",
  },
];

export const BlogsInfo = [
  {
    imageURL: "/images/blog1.gif",
    title:
      "Understanding Primitive and Reference Data Types’ Memory Allocation in JavaScript",
    shortDes:
      "Does a and b have the same memory address?Answer :No, a and b do not share the same memory address when you assign a primitive value like a number in JavaScript. Instead, they each hold their own copies of the value",
    watchCount: 12,
    likeCount: 1,
    commentCount: 0,
    link: "https://medium.com/@rahmanmahiya99/understanding-primitive-and-reference-data-types-memory-allocation-in-javascript-959f8ab2cd99",
  },
  {
    imageURL: "/images/blog2.gif",
    title: "Some effective learning resources for newbie CSE or SWE students.",
    shortDes:
      "Newbie students often don’t understand how, following what, they can upgrade their programming skills. Everyone says that everything can be found by searching on Google and YouTube....",
    watchCount: 16,
    likeCount: 1,
    commentCount: 0,
    link: "https://medium.com/@rahmanmahiya99/some-suggestions-for-newbie-cse-or-swe-students-e4a0ae871b83",
  },
];

export const ListOfTerminalMenu = [
  "PROBLEMS",
  "OUTPUT",
  "DEBUG CONSOLE",
  "TERMINAL",
  "GITLENS",
];

export const SkillIconList = [
  "/images/html.svg",
  "/images/css.svg",
  "images/bootstrap.svg",
  "images/tailwind.svg",
  "images/ant.svg",
  "images/js.svg",
  "images/typescript.svg",
  "images/es6.svg",
  "images/react.svg",
  "images/next.svg",
  "images/redux.svg",
  "images/zustand.svg",
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

export const LicenseCertificationSection = [
  {
    logo: "",
    name: "Agile mastery with SCRUM",
    organization: "TechnoNext",
    issueDate: "July 2023",
  },
  {
    logo: "",
    name: "Chancellor's Gold Medal",
    organization: "Daffodil International University-DIU",
    issueDate: "Feb 2023",
  },
  {
    logo: "",
    name: "Complete Web Development Course With Jhankar Mahbub",
    organization: "Programming Hero",
    issueDate: "December 2021",
    credentialID: "bbeb0920-6a68-41cb-a5c7-b6e2b68fcbca",
  },
  {
    logo: "",
    name: "Software Architecture",
    organization: "Coursera",
    issueDate: "August 2021",
    credentialID: "MWT5XV9QLPDS",
    certificateLink:
      "https://www.coursera.org/account/accomplishments/certificate/MWT5XV9QLPDS?trk=public_profile_see-credential",
  },
];

export const ImageGalleryList = [
  "/images/achievement/Taking Certificate.jpg",
  "/images/achievement/appreciation.jpeg",
  "/images/achievement/ICPC.jpeg",
  "/images/achievement/Enstern-centificate.jpeg",
  "/images/achievement/Estern-prize.jpeg",
  "/images/onlinePresence/0.jpeg",
  "/images/onlinePresence/1.png",
  "/images/onlinePresence/4.webp",
  "/images/onlinePresence/5.jpg",
  "/images/onlinePresence/6.jpg",
];

export const ContactInfo = [
  {
    label: "Email",
    value: "mahiyarahmanrafa@gmail.com",
    link: "mailto:mahiyarahmanrafa@gmail.com",
    icon: Mail,
  },
  {
    label: "Discord",
    value: "rafamahiya_20616",
    link: "https://discordapp.com/users/rafamahiya_20616",
    icon: Disc2,
  },
  {
    label: "WhatsApp",
    value: "Mahiya Rahman Rafa",
    link: "https://wa.me/1631907601",
    icons: Headset,
  },
  {
    label: "GitHub",
    value: "rafaswe",
    link: "https://github.com/rafaswe",
    icons: GitCompareArrows,
  },
];

export const GitHubInfo = {
  githubLink: "https://github.com/rafaswe",
  personalInfo: {
    imageUrl: "/images/personal.png",
    name: "Mahiya Rahman Rafa",
    userName: "rafaswe",
    tag: "A learner",
    followersCount: 4,
    followingCount: 4,
    address: "Nayanagar, Khilkhet",
    addressLink: "https://maps.app.goo.gl/91kS6KwVpTtX4nxt5",
    position: "Frontend Developer",
  },
  techStack: [
    { name: "JavaScript", color: "bg-yellow-500" },
    { name: "React", color: "bg-blue-500" },
    { name: "NextJS", color: "bg-green-500" },
    { name: "CSS5", color: "bg-blue-600" },
    { name: "TypeScript", color: "bg-orange-500" },
    { name: "Tailwind", color: "bg-blue-400" },
    { name: "Git", color: "bg-red-500" },
    { name: "Bootstrap", color: "bg-green-600" },
    { name: "Sass", color: "bg-gray-600" },
  ],
  links: [
    {
      label: "🔭 All of my projects are available at",
      link: "https://github.com/rafaswe",
      tag: "https://github.com/rafaswe",
    },
    {
      label: "📝 I regularly write articles on",
      link: "https://medium.com/@rahmanmahiya99",
      tag: "https://medium.com/@rahmanmahiya99",
    },
    {
      label: "💬 Ask me about",
      link: "#",
      tag: "Javascript, TypeScript, React, NextJS, Tailwind, Bootstrap",
    },
    {
      label: "📫 How to reach me",
      link: "mailto:mahiyarahmanrafa@gmail.com",
      tag: "mahiyarahmanrafa@gmail.com",
    },
    {
      label: "⚡ Know about my experiences",
      link: PDFLink,
      tag: "https://drive.google.com",
    },
  ],
  socialLinks: [
    {
      icon: Globe,
      label: "LinkedIn",
      value: "LinkedIn",
      link: "https://bd.linkedin.com/in/mahiya-rahman-rafa",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "Instagram",
      link: "https://www.instagram.com/mahiya_rahman_rafa/",
    },
    {
      icon: Facebook,
      label: "Facebook",
      value: "Facebook",
      link: "https://www.facebook.com/odhorajaman.sporshika",
    },
    ...ContactInfo,
  ],
};
