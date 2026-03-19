import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { achievements } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const AchievementCard = ({ index, title, description, icon, date }) => (
  <motion.div
    variants={fadeIn("left", "spring", index * 0.2, 0.75)}
    className="flex gap-5 bg-[#1d1836] rounded-2xl p-6 border border-[#ffffff11] hover:border-[#915EFF55] transition-all duration-300 group"
  >
    {/* Icon box */}
    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#915EFF22] flex items-center justify-center text-3xl group-hover:bg-[#915EFF33] transition-all duration-300">
      {icon}
    </div>

    {/* Content */}
    <div className="flex-1">
      <div className="flex justify-between items-start gap-3 flex-wrap">
        <h3 className="text-white font-bold text-[16px] leading-snug group-hover:text-[#915EFF] transition-colors duration-300">
          {title}
        </h3>
        <span className="text-secondary text-[12px] bg-[#ffffff0a] px-3 py-1 rounded-full flex-shrink-0">
          {date}
        </span>
      </div>
      <p className="text-white-100 text-[14px] mt-2 leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const Achievements = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>What I am proud of</p>
        <h2 className={`${styles.sectionHeadText}`}>Achievements.</h2>
      </motion.div>

      <div className="mt-12 flex flex-col gap-5">
        {achievements.map((item, index) => (
          <AchievementCard key={`achievement-${index}`} index={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Achievements, "achievements");