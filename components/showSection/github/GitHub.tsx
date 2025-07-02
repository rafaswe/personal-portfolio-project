"use client";
import { GitHubInfo } from "@/components/constant/enum";
import { GitPersonalInfo } from "@/components/constant/type";
import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  ChevronDown,
  GitFork,
  MapPin,
  Shield,
  Star,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import GitHubHeader from "./helper/Header";

const GitHubProfile = () => {
  const [selectedYear, setSelectedYear] = useState("2025");
  const { personalInfo, githubLink } = GitHubInfo;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const repositories = [
    {
      name: "c-project",
      description: "A comprehensive C programming project",
      language: "C",
      languageColor: "bg-gray-600",
      stars: 12,
      forks: 5,
      isPublic: true,
    },
    {
      name: "Data-structure",
      description: "Implementation of various data structures",
      language: "JavaScript",
      languageColor: "bg-yellow-500",
      stars: 8,
      forks: 3,
      isPublic: true,
    },
    {
      name: "IPI_51_ZIDX_CapstonProject",
      description: "Capstone project for IPI program",
      language: "Python",
      languageColor: "bg-blue-600",
      stars: 15,
      forks: 7,
      isPublic: true,
    },
    {
      name: "Algorithm",
      description: "Collection of algorithm implementations",
      language: "Python",
      languageColor: "bg-blue-600",
      stars: 22,
      forks: 9,
      isPublic: true,
    },
    {
      name: "Url-solve",
      description: "URL processing and solving utilities",
      language: "JavaScript",
      languageColor: "bg-yellow-500",
      stars: 6,
      forks: 2,
      isPublic: true,
    },
    {
      name: "GUI-applications-basic",
      description: "Basic GUI applications using various frameworks",
      language: "Python",
      languageColor: "bg-blue-600",
      stars: 11,
      forks: 4,
      isPublic: true,
    },
  ];

  const generateContributionData = () => {
    const data: any = [];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    for (let month = 0; month < 12; month++) {
      for (let week = 0; week < 4; week++) {
        for (let day = 0; day < 7; day++) {
          const contributions = Math.floor(Math.random() * 5);
          data.push({
            month: months[month],
            week,
            day,
            contributions,
            intensity:
              contributions === 0
                ? 0
                : contributions <= 1
                ? 1
                : contributions <= 2
                ? 2
                : contributions <= 3
                ? 3
                : 4,
          });
        }
      }
    }
    return data;
  };

  const contributionData = generateContributionData();

  const getContributionColor = (intensity) => {
    const colors = {
      0: "bg-white",
      1: "bg-gray-400",
    };
    return colors[intensity] || "bg-gray-800";
  };

  return (
    <div className="h-full">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible">
        {/* Header Section */}
        <motion.div
          className="flex flex-col lg:flex-row gap-6 mb-8"
          variants={itemVariants}>
          {/* Profile Card */}
          <ProfileCard githubLink={githubLink} personalInfo={personalInfo} />

          {/* Main Content */}
          <div className="flex-1 space-y-6">
            {/* Intro Section */}
            <GitHubHeader itemVariants={itemVariants} gitHubInfo={GitHubInfo} />

            {/* GitHub Stats */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={itemVariants}>
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                <h3 className="font-semibold mb-4">
                  {`Mahiya Rahman Rafa's GitHub Stats`}
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Total Stars Earned:</span>
                    <span>0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Total Commits (2025):</span>
                    <span>61</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Total PRs:</span>
                    <span>26</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Total Issues:</span>
                    <span>0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">
                      Contributed to (last year):
                    </span>
                    <span>0</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">359</div>
                  <div className="text-gray-400 text-sm mb-4">
                    Total Contributions
                  </div>
                  <div className="text-gray-500 text-xs">
                    Apr 23, 2019 - Present
                  </div>

                  <div className="mt-6 flex items-center justify-center">
                    <div className="w-16 h-16 border-4 border-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-xl font-bold text-orange-500">
                        1
                      </span>
                    </div>
                  </div>
                  <div className="text-orange-500 font-semibold mt-2">
                    Current Streak
                  </div>
                  <div className="text-xs text-gray-500">Apr 30</div>

                  <div className="mt-4 text-right">
                    <div className="text-2xl font-bold">7</div>
                    <div className="text-gray-400 text-sm">Longest Streak</div>
                    <div className="text-xs text-gray-500">
                      Dec 11, 2021 - Dec 17, 2021
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Popular Repositories */}
        <motion.div className="mb-8" variants={itemVariants}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Popular repositories</h2>
            <button className="text-blue-400 hover:underline text-sm">
              Customize your pins
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {repositories.map((repo, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 rounded-lg p-4 border border-gray-800 hover:border-gray-700 transition-colors"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-blue-400 hover:underline cursor-pointer">
                    {repo.name}
                  </h3>
                  <span className="text-xs bg-gray-800 px-2 py-1 rounded border border-gray-700">
                    {repo.isPublic ? "Public" : "Private"}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-3">{repo.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <div
                      className={`w-3 h-3 rounded-full ${repo.languageColor}`}></div>
                    <span>{repo.language}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    <span>{repo.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="w-4 h-4" />
                    <span>{repo.forks}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contribution Graph */}
        <motion.div className="mb-8" variants={itemVariants}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">
              63 contributions in the last year
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">
                Contribution settings
              </span>
              <div className="relative">
                <select
                  className="bg-gray-800 border border-gray-700 rounded px-3 py-1 text-sm appearance-none pr-8"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}>
                  <option value="2025">2025</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
            <div className="flex justify-between text-xs text-gray-400 mb-2">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
              <span>Aug</span>
              <span>Sep</span>
              <span>Oct</span>
              <span>Nov</span>
              <span>Dec</span>
            </div>

            <div className=" flex flex-wrap gap-1 mb-2">
              {contributionData.map((day, index) => (
                <motion.div
                  key={index}
                  className={`w-3 h-3  rounded-sm ${getContributionColor(
                    day.intensity
                  )}`}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.1 }}
                  title={`${day.contributions} contributions`}
                />
              ))}
            </div>

            <div className="flex items-center justify-between text-xs text-gray-400">
              <span>Learn how we count contributions.</span>
              <div className="flex items-center gap-1">
                <span>Less</span>
                <div className="flex gap-1">
                  <div className="w-3 h-3 bg-gray-800 rounded-sm"></div>
                  <div className="w-3 h-3 bg-green-900 rounded-sm"></div>
                  <div className="w-3 h-3 bg-green-700 rounded-sm"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-sm"></div>
                </div>
                <span>More</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contribution Activity */}
        <motion.div variants={itemVariants}>
          <h2 className="text-lg font-semibold mb-4">Contribution activity</h2>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
            <div className="text-sm text-gray-400 mb-4">June 2025</div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center">
                <BookOpen className="w-3 h-3" />
              </div>
              <div>
                <div className="font-semibold">
                  Created 5 commits in 1 repository
                </div>
                <div className="text-sm text-gray-400">
                  <a href="#" className="text-blue-400 hover:underline">
                    rafaswe/personal-portfolio-project
                  </a>{" "}
                  5 commits
                </div>
              </div>
            </div>
            <div className="w-full bg-gray-800 h-2 rounded-full">
              <div
                className="bg-green-500 h-2 rounded-full"
                style={{ width: "75%" }}></div>
            </div>
            <div className="text-center mt-4">
              <button className="text-blue-400 hover:underline text-sm">
                Show more activity
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

//Profile portion
const ProfileCard = ({
  githubLink,
  personalInfo,
}: {
  githubLink: string;
  personalInfo: GitPersonalInfo;
}) => {
  const {
    imageUrl,
    name,
    followersCount,
    followingCount,
    userName,
    tag,
    address,
    addressLink,
  } = personalInfo;
  return (
    <div className="bg-gray-900 rounded-lg p-6 lg:w-80 border border-gray-800">
      <div className="flex flex-col items-center text-center">
        {/* //Image section  */}
        <motion.div
          className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-gray-700"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}>
          <Image
            src={imageUrl}
            alt="Profile"
            className="w-full h-full object-cover"
            width={128}
            height={128}
            priority
          />
        </motion.div>
        <h1 className="text-2xl font-bold">{name}</h1>
        <Link href={githubLink} target="_blank" className="text-gray-400 my-2">
          {userName}
        </Link>
        <p className="text-sm text-gray-500 mb-4">{tag}</p>
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
          <span className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {followersCount} followers
          </span>
          <span className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {followingCount} following
          </span>
        </div>
        <Link
          href={addressLink}
          target="_blank"
          className="flex items-center gap-1 text-sm text-gray-400 mb-4">
          <MapPin className="w-4 h-4" />
          <span>{address}</span>
        </Link>

        <div className="flex gap-2 mb-4">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <Award className="w-4 h-4" />
          </div>
          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
            <Shield className="w-4 h-4" />
          </div>
        </div>
        <Link
          href={githubLink}
          target="_blank"
          className="w-full bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition-colors">
          Show profile
        </Link>
      </div>
    </div>
  );
};

export default GitHubProfile;
