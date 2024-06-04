import { React, useState, useEffect } from "react";
import { TbFileCertificate } from "react-icons/tb";
import { FaGlobe } from "react-icons/fa";
import "./courses.css";

const CoursesCard = ({ title, des, src, imgFile, gitHub, live }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={imgFile}
          alt="Certificate"
          onClick={handleOpenModal}
        />
        {isOpen && (
          <div className="modal">
            <div className="modal-content">
              <button
                className="model-button"
                type="button"
                onClick={handleCloseModal}
              >
                Close
              </button>
              <img
                src={imgFile}
                onClick={handleCloseModal}
                alt={"Certificate"}
                className="modal-image"
              />
            </div>
          </div>
        )}
      </div>
      <div className="w-full mt-5 flex flex-col  gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-normal">
              {title}
            </h3>
            <div className="flex gap-2">
              <a href={gitHub} target="_blank" rel="noreferrer">
                <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                  <TbFileCertificate />
                </span>
              </a>
              <a href={live} target="_blank" rel="noreferrer">
                <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                  <FaGlobe />
                </span>
              </a>
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
            {des}
          </p>
          <br></br>
          <div>
            <a href={src} download="Course Certificate">
              <button className="download">Download</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
