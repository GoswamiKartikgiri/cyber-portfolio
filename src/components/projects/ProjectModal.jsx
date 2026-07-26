import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FaTimes,
  FaGithub,
  FaCheckCircle,
  FaClock,
  FaSignal,
  FaLayerGroup,
  FaStar,
  FaCode,
  FaShieldAlt,
} from "react-icons/fa";

function ProjectModal({ project, onClose }) {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!project) return null;

  return (
    <>
      <AnimatePresence>

        <motion.div
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >

          <motion.div
            initial={{ scale: .92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: .92, opacity: 0 }}
            transition={{ duration: .3 }}
            className="w-full max-w-6xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#08111f] border border-cyan-500/20 shadow-[0_0_50px_rgba(34,211,238,.15)]"
          >

            {/* Header */}

            <div className="relative overflow-hidden">

              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-[#050816]" />

              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.15) 1px,transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              />

              <div className="relative p-8">

                <div className="flex justify-between items-start">

                  <div>

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/30 border border-white/10 mb-5">

                      <FaShieldAlt className="text-cyan-300" />

                      <span className="text-cyan-300 text-sm">

                        Cyber Security Project

                      </span>

                    </div>

                    <h2 className="text-4xl font-bold">

                      {project.title}

                    </h2>

                    <p className="text-cyan-300 mt-3 text-lg">

                      {project.subtitle}

                    </p>

                  </div>

                  <button
                    onClick={onClose}
                    className="text-3xl hover:text-red-400 transition"
                  >
                    <FaTimes />
                  </button>

                </div>

              </div>

            </div>

            {/* Body */}

            <div className="p-8">

              {/* Overview */}

              <div className="rounded-2xl bg-cyan-500/10 border border-cyan-500/20 p-6">

                <h3 className="text-2xl font-bold mb-4">

                  Project Overview

                </h3>

                <p className="text-gray-300 leading-8">

                  {project.description}

                </p>

              </div>

              {/* Recruiter Highlight */}

              <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-white/5 p-6">

                <h3 className="text-2xl font-bold mb-4">

                  Recruiter Highlight

                </h3>

                <p className="leading-8 text-gray-300">

                  {project.highlight}

                </p>

              </div>

              {/* Information */}

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">

                <div className="rounded-2xl bg-white/5 border border-cyan-500/20 p-5">

                  <FaClock className="text-cyan-400 text-2xl" />

                  <h4 className="mt-3 font-semibold">

                    Duration

                  </h4>

                  <p className="text-gray-400 mt-2">

                    {project.duration}

                  </p>

                </div>

                <div className="rounded-2xl bg-white/5 border border-cyan-500/20 p-5">

                  <FaSignal className="text-cyan-400 text-2xl" />

                  <h4 className="mt-3 font-semibold">

                    Level

                  </h4>

                  <p className="text-gray-400 mt-2">

                    {project.level}

                  </p>

                </div>

                <div className="rounded-2xl bg-white/5 border border-cyan-500/20 p-5">

                  <FaLayerGroup className="text-cyan-400 text-2xl" />

                  <h4 className="mt-3 font-semibold">

                    Category

                  </h4>

                  <p className="text-gray-400 mt-2">

                    {project.category}

                  </p>

                </div>

                <div className="rounded-2xl bg-white/5 border border-cyan-500/20 p-5">

                  <FaStar className="text-yellow-400 text-2xl" />

                  <h4 className="mt-3 font-semibold">

                    Difficulty

                  </h4>

                  <p className="text-gray-400 mt-2">

                    {project.difficulty}

                  </p>

                </div>

              </div>

              {/* Technologies */}

              <h3 className="text-2xl font-bold mt-12 mb-6">

                Technologies Used

              </h3>

              <div className="flex flex-wrap gap-3">

                {project.tech.map((tech) => (

                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20"
                  >
                    {tech}
                  </span>

                ))}

              </div>

              {/* Features */}

              <h3 className="text-2xl font-bold mt-12 mb-6">

                Key Features

              </h3>

              <div className="grid md:grid-cols-2 gap-4">

                {project.features.map((feature) => (

                  <div
                    key={feature}
                    className="flex items-center gap-3 rounded-xl bg-white/5 border border-cyan-500/10 p-4"
                  >

                    <FaCheckCircle className="text-cyan-400" />

                    <span>{feature}</span>

                  </div>

                ))}

              </div>
                            {/* Screenshots */}

              {project.screenshots && project.screenshots.length > 0 && (
                <>
                  <h3 className="text-2xl font-bold mt-12 mb-6">
                    Project Screenshots
                  </h3>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {project.screenshots.map((image, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.03 }}
                        className="overflow-hidden rounded-2xl border border-cyan-500/20 bg-white/5 cursor-pointer"
                        onClick={() => setSelectedImage(image)}
                      >
                        <img
                          src={image}
                          alt={`Screenshot ${index + 1}`}
                          className="w-full h-56 object-cover hover:scale-110 transition duration-500"
                        />
                      </motion.div>
                    ))}

                  </div>
                </>
              )}

              {/* Bottom Buttons */}

              <div className="flex flex-wrap gap-4 mt-12">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-400 hover:bg-cyan-300 text-black font-bold px-7 py-4 rounded-xl flex items-center gap-3 transition"
                >
                  <FaGithub />

                  View Source Code

                </a>

                <button
                  onClick={onClose}
                  className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold px-7 py-4 rounded-xl transition"
                >
                  Close
                </button>

              </div>

            </div>

          </motion.div>

        </motion.div>

      </AnimatePresence>

      {/* Full Screen Image Viewer */}

      <AnimatePresence>

        {selectedImage && (

          <motion.div
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >

            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-8 right-8 text-4xl text-white hover:text-red-400"
            >
              <FaTimes />
            </button>

            <motion.img
              src={selectedImage}
              alt="Screenshot"
              initial={{ scale: .85 }}
              animate={{ scale: 1 }}
              exit={{ scale: .85 }}
              transition={{ duration: .25 }}
              className="max-w-[95vw] max-h-[92vh] rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

          </motion.div>

        )}

      </AnimatePresence>

    </>
  );
}

export default ProjectModal;