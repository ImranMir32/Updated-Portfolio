import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2005 - 2023</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="MSc in Computer Science & Technology"
            subTitle="Ulster University (Sep 2025 - Oct 2026)"
            result="Currently Studying"
            des="Currently pursuing a Master's degree in Computer Science & Technology, focusing on advanced software engineering, modern computing systems, and applied technologies."
          />
          <ResumeCard
            title="B.Sc. In Computer Science & Engineering"
            subTitle="University of Information Technology & Sciences (2019-2023)"
            result="3.69/4"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Higher Secondary School Certificate"
            subTitle="Kadamtola Purbo Bashabo School & College (2016 - 2018)"
            result="4.25/5"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Secondary School Certificate"
            subTitle="Tajuddin Adarsha High School (2005 - 2015)"
            result="4.67/5"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>

    </motion.div>
  );
};

export default Education;
