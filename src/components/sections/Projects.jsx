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
        className="relative py-28 px-6 lg:px-16 bg-[#050816] overflow-hidden"
      >
        {/* Background Glow */}

        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-[140px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 blur-[150px] rounded-full"></div>

        <div className="relative max-w-7xl mx-auto">

          {/* Heading */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            className="text-center"
          >

            <p className="uppercase tracking-[5px] text-cyan-400">

              Portfolio

            </p>

            <h2 className="text-5xl lg:text-6xl font-bold mt-5">

              Featured Projects

            </h2>

            <p className="text-gray-400 mt-8 max-w-3xl mx-auto leading-8">

              A collection of practical cybersecurity and Python projects
              demonstrating real-world skills in network security,
              automation, authentication, and defensive security.

            </p>

          </motion.div>

          {/* Cards */}

          <div className="grid lg:grid-cols-3 gap-8 mt-20">

            {projects.map((project, index) => (

              <ProjectCard
                key={project.id}
                index={index}
                project={project}
                onView={setSelectedProject}
              />

            ))}

          </div>

          {/* Statistics */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: .25 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-24"
          >

            <div className="bg-white/5 border border-cyan-500/20 rounded-2xl p-7 text-center">

              <h3 className="text-4xl font-bold text-cyan-400">

                {projects.length}+

              </h3>

              <p className="text-gray-400 mt-3">

                Featured Projects

              </p>

            </div>

            <div className="bg-white/5 border border-cyan-500/20 rounded-2xl p-7 text-center">

              <h3 className="text-4xl font-bold text-cyan-400">

                75+

              </h3>

              <p className="text-gray-400 mt-3">

                Development Hours

              </p>

            </div>

            <div className="bg-white/5 border border-cyan-500/20 rounded-2xl p-7 text-center">

              <h3 className="text-4xl font-bold text-cyan-400">

                15+

              </h3>

              <p className="text-gray-400 mt-3">

                Security Tools

              </p>

            </div>

            <div className="bg-white/5 border border-cyan-500/20 rounded-2xl p-7 text-center">

              <h3 className="text-4xl font-bold text-cyan-400">

                100%

              </h3>

              <p className="text-gray-400 mt-3">

                Hands-on Learning

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