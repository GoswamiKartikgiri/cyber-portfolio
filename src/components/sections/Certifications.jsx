import { useState } from "react";
import { motion } from "framer-motion";
import certifications from "../../data/certificates";

import CertificateCard from "../certifications/CertificateCard";
import CertificateModal from "../certifications/CertificateModal";

function Certifications() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <>
      <section
        id="certifications"
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
              Professional Development
            </p>

            <h2 className="text-5xl lg:text-6xl font-bold mt-4">
              Certifications
            </h2>

            <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8 text-lg">
              A collection of industry certifications, cybersecurity job
              simulations, virtual internships, and hands-on learning programs
              demonstrating continuous professional growth.
            </p>
          </motion.div>

          {/* Cards */}

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">

            {certifications.map((certificate) => (

              <CertificateCard
                key={certificate.id}
                certificate={certificate}
                onView={setSelectedCertificate}
              />

            ))}

          </div>

          {/* Bottom Stats */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
          >

            <div className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6 text-center">
              <h3 className="text-4xl font-bold text-cyan-400">
                {certifications.length}
              </h3>

              <p className="text-gray-400 mt-2">
                Certifications
              </p>
            </div>

            <div className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6 text-center">
              <h3 className="text-4xl font-bold text-cyan-400">
                6+
              </h3>

              <p className="text-gray-400 mt-2">
                Organizations
              </p>
            </div>

            <div className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6 text-center">
              <h3 className="text-4xl font-bold text-cyan-400">
                2025
              </h3>

              <p className="text-gray-400 mt-2">
                Primary Completion Year
              </p>
            </div>

            <div className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6 text-center">
              <h3 className="text-4xl font-bold text-cyan-400">
                100%
              </h3>

              <p className="text-gray-400 mt-2">
                Practical Learning
              </p>
            </div>

          </motion.div>

        </div>
      </section>

      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </>
  );
}

export default Certifications;