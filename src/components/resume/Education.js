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
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2022 - 2023</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Engineer Trainee"
            subTitle="Brain Station-23 - (2022 - 2022)"
            result="Dhaka"
            des="Brain Station-23 is a highly regarded Bangladeshi software development and IT consulting company, recognized for its expertise in digital solutions."
          />
          <ResumeCard
            title="Programming Instructor and Mentor"
            subTitle="UITS - (2021 - 2023)"
            result="Dhaka"
            des="University of Information Technology and Sciences (UITS), the first IT-based private University in Bangladesh."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
