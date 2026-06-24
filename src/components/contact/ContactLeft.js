import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  const handleCopyMail3 = async () => {
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
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Md. Imran Mir</h3>
        <p className="text-lg font-normal text-gray-400">Software Engineer</p>
        <p className="text-base text-gray-400 tracking-wide">
          I'm a lifelong learner, driven by curiosity and a passion for
          innovatio.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">01866078547</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">imranmir6677@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon" onClick={handleCopyMail3}>
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
        </div>
      </div>
      <ToastContainer closeButton={false} />
    </div>
  );
};

export default ContactLeft;
