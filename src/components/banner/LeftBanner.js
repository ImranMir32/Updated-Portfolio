import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Resume from "../../assets/resume/Md. Imran Mir.pdf";
import "../banner/index.css";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Software Engineer.",
      "Full Stack Developer.",
      "Programming Trainer.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY PORTFOLIO</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Md.Imran Mir</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I always on the lookout for new and intriguing challenges. I have an
          insatiable passion for learning and expanding my skills, and I
          strongly believe that there is something to learn from everyone, no
          matter their level of experience. By studying people and their
          problem-solving approaches, I gain valuable insights that help me
          enhance my own skills. This addiction to growth drives me to work with
          like-minded individuals and develop innovative solutions to complex
          problems.
        </p>
        <div>
          <a href={Resume} download="Resume">
            <button className="download">Download Resume</button>
          </a>
        </div>
      </div>

      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;
