import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { certificates } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const CertificateCard = ({ index, title, issuer, date, credentialLink, color }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.75)}
    className="bg-[#1d1836] p-6 rounded-2xl border border-[#ffffff11] hover:border-[#915EFF55] transition-all duration-300 group cursor-pointer"
    onClick={() => window.open(credentialLink, "_blank")}
  >
    {/* Colored top accent bar */}
    <div
      className="w-full h-[3px] rounded-full mb-5"
      style={{ background: color }}
    />

    {/* Icon */}
    <div
      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
      style={{ background: `${color}22` }}
    >
      🎓
    </div>

    <h3 className="text-white font-bold text-[16px] leading-snug mb-2 group-hover:text-[#915EFF] transition-colors duration-300">
      {title}
    </h3>

    <p className="text-secondary text-[14px] mb-4">{issuer}</p>

    <div className="flex items-center justify-between mt-auto">
      <span
        className="text-[13px] font-medium px-3 py-1 rounded-full"
        style={{ background: `${color}22`, color: color }}
      >
        {date}
      </span>
      <span className="text-[#915EFF] text-[13px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        View →
      </span>
    </div>
  </motion.div>
);

const Certificates = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>What I have earned</p>
        <h2 className={`${styles.sectionHeadText}`}>Certificates.</h2>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {certificates.map((cert, index) => (
          <CertificateCard key={`certificate-${index}`} index={index} {...cert} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certificates, "certificates");