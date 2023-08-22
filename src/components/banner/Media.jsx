import React from "react";
import { FaGithub, FaLinkedinIn, FaReact, FaNodeJs } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { TbBrandJavascript } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Media = () => {
  const handleCopyMail = async () => {
    try {
      await navigator.clipboard.writeText(`imranmir6677@gmail.com`);
      toast.success("Mail copied to clipboard", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      console.error("Failed to copy mail: ", error);
    }
  };

  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon" onClick={handleCopyMail}>
            <FiMail />
          </span>

          <a
            href="https://www.linkedin.com/in/md-imran-mir-972997206/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>

          <a
            href="https://github.com/ImranMir32"
            target="_blank"
            rel="noreferrer"
          >
            <span className="bannerIcon">
              <FaGithub />
            </span>
          </a>

          <ToastContainer closeButton={false} />
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <a
            href="https://www.javascript.com/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="bannerIcon">
              <TbBrandJavascript />
            </span>
          </a>

          <a href="https://react.dev/" target="_blank" rel="noreferrer">
            <span className="bannerIcon">
              <FaReact />
            </span>
          </a>

          <a href="https://nodejs.org/en/docs" target="_blank" rel="noreferrer">
            <span className="bannerIcon">
              <FaNodeJs />
            </span>
          </a>

          <a
            href="https://www.mongodb.com/docs/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="bannerIcon">
              <SiMongodb />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Media;
