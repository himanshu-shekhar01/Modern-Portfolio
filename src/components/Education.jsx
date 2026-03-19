import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { education } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const EducationCard = ({ index, degree, institution, duration, grade, description, iconBg }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 0.75)}
    className="relative flex gap-6 mb-10"
  >
    {/* Timeline dot + vertical line */}
    <div className="flex flex-col items-center">
      <div
        className="w-5 h-5 rounded-full border-4 border-[#915EFF] mt-1 flex-shrink-0 z-10"
        style={{ background: iconBg }}
      />
      <div className="w-[2px] flex-1 bg-gradient-to-b from-[#915EFF] to-transparent mt-1" />
    </div>

    {/* Card body */}
    <div className="bg-[#1d1836] rounded-2xl p-6 flex-1 border border-[#915EFF22] hover:border-[#915EFF66] transition-all duration-300 shadow-lg">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
        <div>
          <h3 className="text-white font-bold text-[20px] leading-snug">{degree}</h3>
          <p className="text-[#915EFF] font-semibold text-[16px] mt-1">{institution}</p>
        </div>
        <div className="sm:text-right flex-shrink-0">
          <span className="inline-block bg-[#915EFF22] text-[#915EFF] text-[13px] font-medium px-3 py-1 rounded-full">
            {duration}
          </span>
          <p className="text-secondary text-[13px] mt-1">{grade}</p>
        </div>
      </div>
      <p className="text-white-100 text-[14px] leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My academic background
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Education.
        </h2>
      </motion.div>

      <div className="mt-12 max-w-4xl mx-auto">
        {education.map((edu, index) => (
          <EducationCard key={`education-${index}`} index={index} {...edu} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
