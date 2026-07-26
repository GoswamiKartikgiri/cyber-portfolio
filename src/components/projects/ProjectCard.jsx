import { motion } from "framer-motion";
import {
  FaGithub,
  FaEye,
  FaCheckCircle,
  FaClock,
  FaLayerGroup,
  FaSignal,
  FaStar,
  FaCode,
} from "react-icons/fa";

function ProjectCard({ project, index, onView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
      }}
      whileHover={{
        y: -12,
      }}
      className="group overflow-hidden rounded-3xl bg-[#0B1220] border border-cyan-500/20 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,.25)] transition-all duration-500"
    >

      {/* ================= HEADER ================= */}

      <div className="relative h-56 overflow-hidden">

        {/* Gradient Background */}

        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-blue-600 to-[#050816]" />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        {/* Glow */}

        <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-cyan-300 blur-3xl opacity-20" />

        <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-blue-400 blur-3xl opacity-20" />

        {/* Badge */}

        <div className="absolute top-5 left-5">

          <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 text-xs tracking-widest text-cyan-300">

            PROJECT {String(index + 1).padStart(2, "0")}

          </span>

        </div>

        {/* Status */}

        <div className="absolute top-5 right-5">

          <span className="px-3 py-1 rounded-full bg-green-500 text-white text-xs flex items-center gap-2">

            <FaCheckCircle />

            {project.status}

          </span>

        </div>

        {/* Center Icon */}

        <div className="absolute inset-0 flex flex-col justify-center items-center">

          <div className="w-24 h-24 rounded-full bg-black/30 backdrop-blur-xl border border-white/10 flex items-center justify-center">

            <FaCode
              size={38}
              className="text-cyan-300"
            />

          </div>

          <p className="mt-5 text-cyan-200 tracking-widest text-sm uppercase">

            {project.category}

          </p>

        </div>

      </div>

      {/* ================= BODY ================= */}

      <div className="p-7">

        <h2 className="text-2xl font-bold">

          {project.title}

        </h2>

        <p className="mt-2 text-cyan-400 font-medium">

          {project.subtitle}

        </p>

        <p className="mt-5 text-gray-400 leading-7 line-clamp-4">

          {project.description}

        </p>

        {/* Highlight */}

        <div className="mt-6 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-5">

          <p className="text-cyan-300 font-semibold">

            Recruiter Highlight

          </p>

          <p className="mt-3 text-sm leading-7 text-gray-300">

            {project.highlight}

          </p>

        </div>

        {/* Stats */}

        <div className="grid grid-cols-2 gap-4 mt-6">

          <div className="rounded-xl bg-white/5 border border-cyan-500/10 p-4">

            <div className="flex items-center gap-2 text-cyan-300">

              <FaClock />

              <span className="text-sm">

                Duration

              </span>

            </div>

            <p className="mt-2 font-semibold">

              {project.duration}

            </p>

          </div>

          <div className="rounded-xl bg-white/5 border border-cyan-500/10 p-4">

            <div className="flex items-center gap-2 text-cyan-300">

              <FaSignal />

              <span className="text-sm">

                Level

              </span>

            </div>

            <p className="mt-2 font-semibold">

              {project.level}

            </p>

          </div>

        </div>

        {/* Difficulty */}

        <div className="mt-6">

          <div className="flex items-center gap-2 mb-3">

            <FaStar className="text-yellow-400" />

            <span className="font-semibold">

              Difficulty

            </span>

          </div>

          <p className="text-cyan-300">

            {project.difficulty}

          </p>

        </div>

        {/* Technologies */}

        <div className="flex flex-wrap gap-2 mt-6">

          {project.tech.slice(0,5).map((tech)=>(
            <span
              key={tech}
              className="px-3 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-sm"
            >
              {tech}
            </span>
          ))}

        </div>
                {/* Bottom Info */}

        <div className="mt-8 flex items-center justify-between">

          <div className="flex items-center gap-2 text-sm text-gray-400">

            <FaLayerGroup className="text-cyan-400" />

            <span>{project.category}</span>

          </div>

          <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm">

            {project.badge}

          </span>

        </div>

        {/* Divider */}

        <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent my-8"></div>

        {/* Buttons */}

        <div className="grid grid-cols-2 gap-4">

          <button
            onClick={() => onView(project)}
            className="group bg-cyan-400 hover:bg-cyan-300 text-black font-bold py-3 rounded-xl flex justify-center items-center gap-3 transition duration-300"
          >
            <FaEye />

            View Details

          </button>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold py-3 rounded-xl flex justify-center items-center gap-3 transition duration-300"
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