import { motion } from "framer-motion";
import {
  FaGithub,
  FaEye,
  FaCheckCircle,
  FaRobot,
} from "react-icons/fa";

function ProjectCard({ project, index, onView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
      }}
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      className="bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-cyan-500/20 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)] transition-all duration-300"
    >
      {/* Image */}

      <div className="relative overflow-hidden">

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-56 object-cover transition duration-500 hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent"></div>

        <span className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-cyan-400 px-3 py-1 rounded-full text-xs">
          PROJECT {String(index + 1).padStart(2, "0")}
        </span>

        {project.featured && (
          <span className="absolute bottom-4 left-4 bg-cyan-400 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2">
            <FaRobot />
            Flagship
          </span>
        )}

        <span className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs flex items-center gap-2">
          <FaCheckCircle />
          {project.status}
        </span>

      </div>

      {/* Content */}

      <div className="p-7">

        <h3 className="text-2xl font-bold">
          {project.title}
        </h3>

        <p className="text-cyan-400 mt-2 font-medium">
          {project.subtitle}
        </p>

        <p className="text-gray-400 mt-5 leading-7 line-clamp-3">
          {project.description}
        </p>

        <div className="mt-6 bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-4">
          <p className="text-cyan-300 font-semibold text-sm">
            Recruiter Highlight
          </p>

          <p className="text-gray-300 text-sm mt-2 line-clamp-3">
            {project.highlight}
          </p>
        </div>

        {/* Tech */}

        <div className="flex flex-wrap gap-2 mt-6">

          {project.tech.slice(0, 4).map((tech) => (

            <span
              key={tech}
              className="px-3 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-sm"
            >
              {tech}
            </span>

          ))}

        </div>

        {/* Buttons */}

        <div className="grid grid-cols-2 gap-3 mt-8">

          <button
            onClick={() => onView(project)}
            className="bg-cyan-400 hover:bg-cyan-300 text-black font-semibold py-3 rounded-xl flex justify-center items-center gap-2 transition"
          >
            <FaEye />
            View
          </button>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-semibold py-3 rounded-xl flex justify-center items-center gap-2 transition"
          >
            <FaGithub />
            GitHub
          </a>

        </div>

      </div>

    </motion.div>
  );
}

export default ProjectCard;