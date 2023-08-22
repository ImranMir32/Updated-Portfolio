import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2022 - 2023</p> */}
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Engineer Trainee"
            subTitle="Brain Station-23 - (2022 - 2022)"
            result="Dhaka"
            des="Brain Station-23 is a highly regarded Bangladeshi software development and IT consulting company, recognized for its expertise in digital solutions."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2021 - 2023</p> */}
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
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

export default Experience;
