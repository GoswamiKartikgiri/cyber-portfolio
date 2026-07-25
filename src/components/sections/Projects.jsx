import { useState } from "react";
import { motion } from "framer-motion";

import projects from "../../data/projects";

import ProjectCard from "../projects/ProjectCard";
import ProjectModal from "../projects/ProjectModal";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section
        id="projects"
        className="bg-[#050816] py-24 px-6 lg:px-16"
      >
        <div className="max-w-7xl mx-auto">

          {/* Heading */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <p className="text-cyan-400 uppercase tracking-[4px]">
              My Work
            </p>

            <h2 className="text-5xl lg:text-6xl font-bold mt-4">
              Featured Projects
            </h2>

            <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8 text-lg">
              Practical cybersecurity and automation projects demonstrating
              hands-on experience in Python development, networking,
              authentication, digital forensics, and security automation.
            </p>
          </motion.div>

          {/* Project Cards */}

          <div className="grid lg:grid-cols-3 gap-8 mt-16">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onView={setSelectedProject}
              />
            ))}
          </div>

          {/* Bottom Stats */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
          >

            <div className="bg-white/5 rounded-2xl border border-cyan-500/20 p-6 text-center">
              <h3 className="text-4xl font-bold text-cyan-400">
                {projects.length}+
              </h3>
              <p className="text-gray-400 mt-2">
                Projects Completed
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl border border-cyan-500/20 p-6 text-center">
              <h3 className="text-4xl font-bold text-cyan-400">
                75+
              </h3>
              <p className="text-gray-400 mt-2">
                Development Hours
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl border border-cyan-500/20 p-6 text-center">
              <h3 className="text-4xl font-bold text-cyan-400">
                15+
              </h3>
              <p className="text-gray-400 mt-2">
                Security Tools
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl border border-cyan-500/20 p-6 text-center">
              <h3 className="text-4xl font-bold text-cyan-400">
                100%
              </h3>
              <p className="text-gray-400 mt-2">
                Hands-on Projects
              </p>
            </div>

          </motion.div>

        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}

export default Projects;