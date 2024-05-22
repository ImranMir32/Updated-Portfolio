import React from "react";
import Title from "../layouts/Title";
import {
  contactHub,
  url,
  hotChili,
  teacherGo,
  i_blogify,
  cp,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY Projects AND let me know your feedback"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="ContactHub"
          des="ContactHub is an intuitive web app for secure user authentication and efficient contact 
          organization, offering account creation, login, and robust contact management features."
          src={contactHub}
          gitHub="https://github.com/ImranMir32/ContactHub-Frontend"
          live="https://singular-snickerdoodle-a4c86f.netlify.app/"
        />
        <ProjectsCard
          title="I-Blogify"
          des="I-Blogify is a user-centric blogging application leveraging Node.js and Express.js for robust 
          server-side functionality. With user authentication and authorization mechanisms powered by JWT token."
          src={i_blogify}
          gitHub="https://github.com/ImranMir32/I-Blogify"
          live="https://i-blogify.onrender.com"
        />
        <ProjectsCard
          title="Hot Chili"
          des="Hot Chili is a recipe search web app with admin login for recipe modification and 
          customer features, including recipe viewing, favoriting, and user authentication
          with persistent favorites."
          src={hotChili}
        />
        <ProjectsCard
          title="URL-Shortener"
          des="URL shortener take a long URL and convert it into a shorter, more manageable link.
           These shortened links are easier to share, remember, and use, especially on platforms 
           with character limitations like social media."
          src={url}
          gitHub="https://github.com/ImranMir32/URL-Shortener"
          live="https://magenta-pony-258013.netlify.app/"
        />
        <ProjectsCard
          title="Teacher-Go"
          des="Teacher-Go is a specialized transportation system enabling educators to easily reserve 
          seats, ensuring a hassle-free commute for teachers within educational institutions. Simplifying
          travel, it lets teachers focus on their core mission of teaching."
          src={teacherGo}
          gitHub="https://github.com/ImranMir32/Teacher-Go-Front-end"
          // live="Not found"
        />

        <ProjectsCard
          title="CP++"
          des="CP++ is a learning-based website where people can learn competitive programming from scratch 
          to advance. We have divided the learning process into three stages such as beginner, intermediate 
          and advanced"
          src={cp}
          gitHub="https://github.com/ImranMir32/CP-Plus-Front-End"
          // live="Not found"
        />
      </div>
    </section>
  );
};

export default Projects;
