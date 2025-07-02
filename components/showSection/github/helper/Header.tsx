"use client";

import { motion } from "framer-motion";
import { Code } from "lucide-react";
import Link from "next/link";
const GitHubHeader = ({ itemVariants, gitHubInfo }) => {
  const { personalInfo, techStack, links, socialLinks } = gitHubInfo;

  return (
    <motion.div
      className="bg-gray-900 rounded-lg p-6 border border-gray-800"
      variants={itemVariants}>
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
          <p key={index}>
            {singleLink?.label}{" "}
            <Link
              href={singleLink?.link}
              target="_blank"
              className="text-blue-400 hover:underline">
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
              <motion.a
                key={index}
                href={singleValue.link}
                className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded flex items-center justify-center transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}>
                <Icon className="w-4 h-4 text-white" />
              </motion.a>
            );
          })}
        </div>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold mb-2">Languages and Tools:</h3>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              className={`w-8 h-8 ${tech.color} rounded flex items-center justify-center`}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}>
              <Code className="w-4 h-4 text-white" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default GitHubHeader;
