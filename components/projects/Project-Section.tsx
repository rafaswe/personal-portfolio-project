"use client";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  Globe,
  Hotel,
  Layers,
  Monitor,
  Plane,
  Server,
  Smartphone,
  Zap,
} from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "FirstTrip",
      subtitle: "Travel Platform",
      link: "https://firsttrip.com/",
      icon: <Globe className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-gray-800",
      borderColor: "border-blue-500/30",
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
      gradient: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-700/50 mb-8">
            <Code className="w-5 h-5 text-blue-400" />
            <span className="text-gray-300 font-medium">Featured Projects</span>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            Development Portfolio
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Showcasing modern web applications built with cutting-edge
            technologies
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div variants={itemVariants} className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`relative overflow-hidden rounded-2xl ${project.bgColor} ${project.borderColor} border backdrop-blur-sm`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}>
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-5`}
              />

              <div className="relative p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Project Info */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white`}>
                        {project.icon}
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-white">
                          {project.title}
                        </h2>
                        <p className="text-xl text-gray-400">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>

                    {project.link && (
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-yellow-400" />
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 transition-colors underline">
                          {project.link}
                        </a>
                      </div>
                    )}

                    {/* Tech Stack */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <Layers className="w-5 h-5" />
                        Technologies
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm font-medium border border-gray-600/50"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}>
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <Database className="w-5 h-5" />
                        Key Features
                      </h3>
                      <div className="grid grid-cols-2 gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center gap-2 text-gray-300">
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <Monitor className="w-5 h-5" />
                      Key Responsibilities
                    </h3>
                    <div className="space-y-3">
                      {project.responsibilities.map(
                        (responsibility, respIndex) => (
                          <motion.div
                            key={respIndex}
                            className="flex gap-3 p-4 bg-gray-800/30 rounded-xl border border-gray-700/50"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: respIndex * 0.1 }}>
                            <div className="w-2 h-2 bg-gradient-to-r from-white to-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-300 text-sm leading-relaxed">
                              {responsibility}
                            </p>
                          </motion.div>
                        )
                      )}
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 pointer-events-none`}
                  animate={{
                    opacity: hoveredProject === project.id ? 0.03 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
            <Server className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">3</div>
            <div className="text-gray-400">Major Projects</div>
          </div>
          <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
            <Code className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">12+</div>
            <div className="text-gray-400">Technologies</div>
          </div>
          <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
            <Smartphone className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">100%</div>
            <div className="text-gray-400">Responsive</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;
