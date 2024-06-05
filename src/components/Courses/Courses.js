import React from "react";
import Title from "../layouts/Title";
import {
  c,
  c_img,
  js_c,
  p_c,
  sql_c,
  js_img,
  sql_img,
  p_img,
} from "../../assets/index";
import ProjectsCard from "./CoursesCard";

const Courses = () => {
  return (
    <section
      id="courses"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Short description about my online Courses and Certificates"
          des="Courses and Certificates"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="FUNDAMENTALS OF C PROGRAMMING"
          des="Sololearn (An online learning platform)"
          src={c}
          imgFile={c_img}
          gitHub="https://www.sololearn.com/certificates/CT-DGBCNYLV"
          live="https://www.sololearn.com/"
        />
        <ProjectsCard
          title="JavaScript (Intermediate) Certificate"
          des="Hackerrank (An online learning platform)"
          src={js_c}
          imgFile={js_img}
          gitHub="https://www.hackerrank.com/certificates/c2ce846ed2a6"
          live="https://www.hackerrank.com/"
        />
        <ProjectsCard
          title="SQL (Intermediate) Certificate"
          des="Hackerrank (An online learning platform)"
          src={sql_c}
          imgFile={sql_img}
          gitHub="https://www.hackerrank.com/certificates/3dfcb88fb5bf"
          live="https://www.hackerrank.com/"
        />
        <ProjectsCard
          title="Problem Solving (Intermediate)"
          des="Hackerrank (An online learning platform)"
          src={p_c}
          imgFile={p_img}
          gitHub="https://www.hackerrank.com/certificates/3c026efa38b5"
          live="https://www.hackerrank.com/"
        />
      </div>
    </section>
  );
};

export default Courses;
