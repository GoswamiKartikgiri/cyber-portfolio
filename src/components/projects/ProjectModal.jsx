import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FaTimes,
  FaGithub,
  FaCheckCircle,
} from "react-icons/fa";

function ProjectModal({ project, onClose }) {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!project) return null;

  return (
    <>
      {/* Project Modal */}
      <AnimatePresence>
        <motion.div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="bg-[#0B1120] rounded-3xl border border-cyan-500/20 w-full max-w-6xl max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-cyan-500/20">
              <div>
                <h2 className="text-3xl font-bold">{project.title}</h2>
                <p className="text-cyan-400 mt-2">{project.subtitle}</p>
              </div>

              <button
                onClick={onClose}
                className="text-2xl hover:text-red-400"
              >
                <FaTimes />
              </button>
            </div>

            <div className="p-8">
              {/* Main Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-2xl mb-8"
              />

              {/* Description */}
              <h3 className="text-2xl font-bold mb-4">
                About Project
              </h3>

              <p className="text-gray-400 leading-8">
                {project.description}
              </p>

              {/* Technologies */}
              <h3 className="text-2xl font-bold mt-10 mb-4">
                Technologies
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
              <h3 className="text-2xl font-bold mt-10 mb-4">
                Features
              </h3>

              <div className="space-y-3">
                {project.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <FaCheckCircle className="text-cyan-400" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Screenshots */}
              {project.screenshots &&
                project.screenshots.length > 0 && (
                  <>
                    <h3 className="text-2xl font-bold mt-10 mb-6">
                      Screenshots
                    </h3>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {project.screenshots.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`Screenshot ${index + 1}`}
                          onClick={() => setSelectedImage(image)}
                          className="rounded-2xl border border-cyan-500/20 cursor-pointer hover:scale-105 transition duration-300"
                        />
                      ))}
                    </div>
                  </>
                )}

              {/* GitHub */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-3 bg-cyan-400 hover:bg-cyan-300 text-black font-semibold px-6 py-3 rounded-xl"
              >
                <FaGithub />
                View Source Code
              </a>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Fullscreen Screenshot Viewer */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white text-4xl hover:text-red-400"
            >
              <FaTimes />
            </button>

            <motion.img
              src={selectedImage}
              alt="Screenshot"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.25 }}
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