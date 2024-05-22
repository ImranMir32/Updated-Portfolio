import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Champion"
            subTitle="UITS CSE Day Programming Contest, 2021"
            result="Success"
          />
          <ResumeCard
            title="Champion"
            subTitle="Intra University Programming Contest-2022, UITS"
            result="Success"
          />
          <ResumeCard
            title="1st Runner Up"
            subTitle="UITS Intra Virtual Fest Programming Contest 2020"
            result="Success"
          />
          <ResumeCard
            title="1st Runner Up"
            subTitle="UITS Intra University Programming Contest, 2022"
            result="Success"
          />
          <ResumeCard
            title="4th Position"
            subTitle="UITS Victory Day Programming Contest, 2021"
            result="Success"
          />
        </div>
      </div>
      <div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="12th Position"
            subTitle="UITS Collaboration Programming Contest (IUPC), 2022"
            result="Success"
          />
          <ResumeCard
            title="8th Position"
            subTitle="Ahmed Zubayer Inter University Programming Contest , IUPC-2022"
            result="Success"
          />
          <ResumeCard
            title="21th Position"
            subTitle="Ahmed Zubayer Inter University Programming Contest , IUPC-2023"
            result="Success"
          />
          <ResumeCard
            title="63th Position"
            subTitle="Inter University Programming Contest (IUPC), RUET-2022"
            result="Success"
          />
          <ResumeCard
            title="Best Problem Setter"
            subTitle="UITS Victory Day Programming Contest, 2022"
            result="Success"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
