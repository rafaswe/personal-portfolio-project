"use client";

// Client: the tab group tracks which panel is open.
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award, Code, Languages, ScrollText } from "lucide-react";
import { useState } from "react";

const ContentSection = ({
  title,
  items,
  className = "",
}: {
  title: string;
  items: { key: string | number; content: React.ReactNode }[];
  className?: string;
}) => (
  <div className={`flex h-full flex-col space-y-2 ${className}`}>
    <h3 className="text-xl font-semibold text-blue-400">{title}</h3>
    <div className="flex-1 space-y-2">
      {items.map((item) => (
        <div
          key={item.key}
          className="cursor-pointer rounded-lg bg-gray-800 p-2 transition-all hover:bg-gray-700">
          {item.content}
        </div>
      ))}
    </div>
  </div>
);

export const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState("thesis");

  const thesisContent = (
    <div className="space-y-2 h-full animate-fadeIn">
      <h2 className="text-2xl font-bold text-blue-400 ">
        Automated Invigilation System
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all">
          <h3 className="text-lg font-semibold mb-2">Technology Stack</h3>
          <p className="text-gray-300">YOLOv7 Deep Learning Algorithm</p>
        </div>
        <div className="p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all">
          <h3 className="text-lg font-semibold mb-2">Dataset</h3>
          <p className="text-gray-300">27,000 training images</p>
        </div>
        <div className="p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all col-span-full">
          <h3 className="text-lg font-semibold mb-2">Key Features</h3>
          <ul className="list-disc list-inside text-gray-300">
            <li>Head movement detection</li>
            <li>Neck movement tracking</li>
            <li>Suspicious note passing detection</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const honorsContent = (
    <ContentSection
      title="Honors & Awards"
      items={[
        {
          key: "gold-medalist",
          content: (
            <div className="flex items-start gap-4">
              <Award className="text-yellow-400 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">{`Chancellor's Gold Medalist`}</h4>
                <p className="text-gray-400">Highest academic achievement</p>
              </div>
            </div>
          ),
        },
        {
          key: "dept-award",
          content: (
            <div className="flex items-start gap-4">
              <Award className="text-blue-400 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">
                  Best Departmental Result Award
                </h4>
                <p className="text-gray-400">
                  Outstanding departmental performance
                </p>
              </div>
            </div>
          ),
        },
        {
          key: "fee-waiver",
          content: (
            <div className="flex items-start gap-4">
              <Award className="text-purple-400 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">100% Tuition Fee Waiver</h4>
                <p className="text-gray-400">
                  For exceptional academic results
                </p>
              </div>
            </div>
          ),
        },
      ]}
    />
  );

  const certificationsContent = (
    <ContentSection
      title="Certifications"
      items={[
        {
          key: "pmi",
          content: (
            <div className="flex items-center gap-4">
              <ScrollText className="text-green-400" />
              <div>
                <h4 className="font-semibold">PMI Kick-Off Certification</h4>
                <p className="text-gray-400">Project Management Institute</p>
              </div>
            </div>
          ),
        },
        {
          key: "agile",
          content: (
            <div className="flex items-center gap-4">
              <ScrollText className="text-blue-400" />
              <div>
                <h4 className="font-semibold">Agile Mastery with Scrum</h4>
                <p className="text-gray-400">
                  Professional Scrum certification
                </p>
              </div>
            </div>
          ),
        },
        {
          key: "computer-arch",
          content: (
            <div className="flex items-center gap-4">
              <ScrollText className="text-purple-400" />
              <div>
                <h4 className="font-semibold">Computer Architecture</h4>
                <p className="text-gray-400">
                  University of Alberta via Coursera
                </p>
              </div>
            </div>
          ),
        },
      ]}
    />
  );

  const languagesContent = (
    <ContentSection
      title="Languages"
      items={[
        {
          key: "bangla",
          content: (
            <div className="flex items-center gap-4">
              <div className="w-16 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                <span className="text-2xl font-bold">বাং</span>
              </div>
              <div>
                <h4 className="font-semibold">Bangla</h4>
                <p className="text-gray-400">Native Language</p>
              </div>
            </div>
          ),
        },
        {
          key: "english",
          content: (
            <div className="flex items-center gap-4">
              <div className="w-16 h-10 rounded-full bg-green-500 flex items-center justify-center">
                <span className="text-2xl font-bold">En</span>
              </div>
              <div>
                <h4 className="font-semibold">English</h4>
                <p className="text-gray-400">Speaking, Reading, Writing</p>
              </div>
            </div>
          ),
        },
        {
          key: "hindi",
          content: (
            <div className="flex items-center gap-4">
              <div className="w-16 h-10 rounded-full bg-purple-500 flex items-center justify-center">
                <span className="text-2xl font-bold">हि</span>
              </div>
              <div>
                <h4 className="font-semibold">Hindi</h4>
                <p className="text-gray-400">Listening</p>
              </div>
            </div>
          ),
        },
      ]}
    />
  );

  const TABS = [
    { id: "thesis", icon: Code, label: "Thesis", content: thesisContent },
    { id: "honors", icon: Award, label: "Honors", content: honorsContent },
    {
      id: "certifications",
      icon: ScrollText,
      label: "Certifications",
      content: certificationsContent,
    },
    {
      id: "languages",
      icon: Languages,
      label: "Languages",
      content: languagesContent,
    },
  ];

  return (
    <div className="min-h-[370px] rounded-lg bg-gray-900 p-4 text-white shadow-2xl sm:p-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="gap-0">
        <TabsList className="h-auto w-full flex-wrap justify-start gap-2 rounded-none bg-transparent p-0 pb-2 group-data-[orientation=horizontal]/tabs:h-auto">
          {TABS.map(({ id, icon: Icon, label }) => (
            <TabsTrigger
              key={id}
              value={id}
              className="flex-none shrink-0 gap-2 rounded-lg border-0 px-3 py-2 text-gray-300 shadow-none transition-all hover:bg-gray-700 data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=active]:shadow-none dark:data-[state=active]:border-transparent dark:data-[state=active]:bg-blue-500 dark:data-[state=active]:text-white sm:px-4">
              <Icon size={18} aria-hidden="true" />
              <span>{label}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {TABS.map(({ id, content }) => (
          <TabsContent
            key={id}
            value={id}
            className="h-full flex-1 rounded-lg bg-gray-800 p-3 animate-fade-in focus-visible:outline-none sm:p-4">
            {content}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};
