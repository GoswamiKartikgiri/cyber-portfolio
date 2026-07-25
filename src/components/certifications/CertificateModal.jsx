import { motion, AnimatePresence } from "framer-motion";
import {
FaTimes,
FaCalendarAlt,
FaBuilding,
FaAward,
FaExternalLinkAlt,
FaCheckCircle,
FaImage,
} from "react-icons/fa";

function CertificateModal({ certificate, onClose }) {
return ( <AnimatePresence>
{certificate && (
<motion.div
className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] flex justify-center items-center p-4 lg:p-6"
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}
onClick={onClose}
>
<motion.div
initial={{
scale: 0.9,
opacity: 0,
}}
animate={{
scale: 1,
opacity: 1,
}}
exit={{
scale: 0.9,
opacity: 0,
}}
transition={{ duration: 0.3 }}
onClick={(e) => e.stopPropagation()}
className="bg-[#0B1120] border border-cyan-500/20 rounded-3xl w-full max-w-6xl max-h-[92vh] overflow-y-auto shadow-2xl"
>
{/* Header */}

```
        <div className="sticky top-0 z-10 bg-[#0B1120]/95 backdrop-blur-md flex justify-between items-center p-6 border-b border-cyan-500/20">

          <div>
            <h2 className="text-2xl lg:text-3xl font-bold">
              {certificate.title}
            </h2>

            <p className="text-cyan-400 mt-2">
              {certificate.organization}
            </p>
          </div>

          <button
            onClick={onClose}
            className="size-11 rounded-full bg-white/5 hover:bg-red-500/20 border border-cyan-500/10 hover:border-red-400/40 text-gray-300 hover:text-red-400 transition-all flex items-center justify-center text-xl"
            aria-label="Close certificate"
          >
            <FaTimes />
          </button>

        </div>

        <div className="grid lg:grid-cols-2 gap-8 p-6 lg:p-8">

          {/* Certificate Image */}

          <div className="lg:sticky lg:top-28 self-start">

            <div className="relative rounded-2xl overflow-hidden border border-cyan-500/20 bg-white shadow-2xl">

              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-auto object-contain max-h-[720px] bg-white"
                loading="eager"
                onError={(e) => {
                  console.error(
                    "Certificate image failed:",
                    certificate.image
                  );

                  e.currentTarget.style.display = "none";

                  const fallback = e.currentTarget.nextElementSibling;

                  if (fallback) {
                    fallback.style.display = "flex";
                  }
                }}
              />

              {/* Fallback if image fails */}

              <div
                style={{ display: "none" }}
                className="min-h-[420px] w-full items-center justify-center bg-[#0B1120] text-center p-8"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="size-16 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                    <FaImage className="text-cyan-400 text-3xl" />
                  </div>

                  <div>
                    <p className="text-white font-semibold text-lg">
                      Certificate image not found
                    </p>

                    <p className="text-gray-400 text-sm mt-2 break-all">
                      {certificate.image}
                    </p>
                  </div>
                </div>
              </div>

            </div>

            <p className="text-xs text-gray-500 mt-3 text-center break-all">
              {certificate.image}
            </p>

          </div>

          {/* Certificate Details */}

          <div className="min-w-0">

            {/* Meta Information */}

            <div className="space-y-4">

              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-cyan-500/10">
                <FaBuilding className="text-cyan-400 text-lg shrink-0" />

                <div>
                  <p className="text-sm text-gray-400">
                    Issuing Organization
                  </p>

                  <p className="font-medium">
                    {certificate.organization}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-cyan-500/10">
                <FaCalendarAlt className="text-cyan-400 text-lg shrink-0" />

                <div>
                  <p className="text-sm text-gray-400">
                    Completion Year
                  </p>

                  <p className="font-medium">
                    {certificate.date}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-cyan-500/10">
                <FaAward className="text-cyan-400 text-lg shrink-0" />

                <div>
                  <p className="text-sm text-gray-400">
                    Certification Type
                  </p>

                  <p className="font-medium">
                    {certificate.level}
                  </p>
                </div>
              </div>

            </div>

            {/* Skills */}

            <div className="mt-8">

              <h3 className="text-xl font-semibold mb-4">
                Skills Gained
              </h3>

              <div className="flex flex-wrap gap-3">

                {(certificate.skills || []).map((skill) => (

                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-200 text-sm"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

            {/* Description */}

            <div className="mt-8">

              <h3 className="text-xl font-semibold mb-4">
                Description
              </h3>

              <p className="text-gray-300 leading-8">
                {certificate.description}
              </p>

            </div>

            {/* Credential */}

            {certificate.credential && (

              <div className="mt-8 flex items-start gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                <FaCheckCircle className="text-green-400 text-lg mt-0.5 shrink-0" />

                <div>
                  <p className="text-sm text-green-300">
                    Credential ID
                  </p>

                  <p className="font-semibold text-white break-all">
                    {certificate.credential}
                  </p>
                </div>
              </div>

            )}

            {/* Verify Button */}

            {certificate.verify && (

              <a
                href={certificate.verify}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 bg-cyan-400 hover:bg-cyan-300 text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105"
              >
                <FaExternalLinkAlt />

                Verify Certificate
              </a>

            )}

          </div>

        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

);
}

export default CertificateModal;
