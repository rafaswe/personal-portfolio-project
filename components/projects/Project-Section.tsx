import {
  Code,
  Database,
  Hotel,
  Layers,
  Monitor,
  Plane,
  Server,
  Smartphone,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { ProjectList } from "@/components/constant/content/projects";

const Projects = () => {
  const projects = ProjectList;


  return (
    <div className="min-h-full p-4 sm:p-8">
      <div className="mx-auto max-w-7xl">
        {/* Hero Section */}
        <div className="mb-12 text-center animate-rise">
          <div className="inline-flex items-center justify-center gap-3 bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-700/50 mb-8">
            <Code className="w-5 h-5 text-blue-400" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent ">
              Featured Projects
            </h1>
            <Code className="w-5 h-5 text-blue-400" />
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Showcasing modern web applications built with cutting-edge
            technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              style={{ animationDelay: `${index * 120}ms` }}
              className={`group relative overflow-hidden rounded-2xl ${project.bgColor} ${project.borderColor} border backdrop-blur-sm transition-transform duration-300 animate-rise hover:scale-[1.02]`}>
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-5`}
              />

              <div className="relative p-4 sm:p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                  {/* Project Info */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div
                        className={` rounded-xl ${
                          project?.id !== 1 ? "bg-gradient-to-r p-3" : ""
                        } ${project.gradient} text-white`}>
                        {project.icon}
                      </div>
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white">
                          {project.title}
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-400">
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
                          className="text-blue-400 hover:text-blue-300 transition-colors underline break-all text-sm sm:text-base">
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
                          <span
                            key={techIndex}
                            className="rounded-full border border-gray-600/50 bg-gray-700/50 px-3 py-1 text-sm font-medium text-gray-300 transition-transform duration-200 hover:scale-105">
                            {tech}
                          </span>
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
                          <div
                            key={respIndex}
                            style={{ animationDelay: `${respIndex * 100}ms` }}
                            className="flex gap-3 rounded-xl border border-gray-700/50 bg-gray-800/30 p-4 animate-rise">
                            <div className="w-2 h-2 bg-gradient-to-r from-white to-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-300 text-sm leading-relaxed">
                              {responsibility}
                            </p>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-[0.03]`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 animate-rise">
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
        </div>
      </div>
    </div>
  );
};

export default Projects;
