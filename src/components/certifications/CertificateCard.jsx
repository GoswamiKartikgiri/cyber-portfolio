import { motion } from "framer-motion";
import { FaAward, FaEye } from "react-icons/fa";

function CertificateCard({ certificate, onView }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.3 }}
      className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-7 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.18)] transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center gap-3 mb-5">
          <div className="bg-cyan-500/15 p-3 rounded-xl">
            <FaAward className="text-cyan-400 text-xl" />
          </div>

          <div>
            <h3 className="text-xl font-bold">
              {certificate.title}
            </h3>

            <p className="text-cyan-400 text-sm">
              {certificate.organization}
            </p>
          </div>
        </div>

        <div className="mb-5">
          <span className="inline-block bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs px-3 py-1 rounded-full">
            {certificate.level}
          </span>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {(certificate.skills || []).slice(0, 4).map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 rounded-full bg-[#0c1225] border border-cyan-500/10 text-sm text-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>

        <p className="text-gray-400 text-sm leading-6 line-clamp-3">
          {certificate.description}
        </p>
      </div>

      <button
        onClick={() => onView(certificate)}
        className="mt-8 w-full bg-cyan-400 hover:bg-cyan-300 text-black font-semibold py-3 rounded-xl flex justify-center items-center gap-3 transition"
      >
        <FaEye />
        View Certificate
      </button>
    </motion.div>
  );
}

export default CertificateCard;