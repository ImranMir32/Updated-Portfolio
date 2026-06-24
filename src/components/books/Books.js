import React from "react";
import Title from "../layouts/Title";
import {
  thesis_img2,
  thesis,
  teacher_img,
  cp_img,
  teacher_book,
  cp_book,
} from "../../assets/index";
import BooksCard from "./BooksCard";

const Books = () => {
  return (
    <section id="books" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title
          title="Short description about my Thesis and Project Books"
          des="Project and Research Books"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <BooksCard
          title="Thesis paper"
          des="A Transfer Learning Approach for Blood Cancer Detection (Thesis Paper)"
          src={thesis}
          imgFile={thesis_img2}
        />
        <BooksCard
          title="Project Book"
          des="Teacher Transport Management System a specialized transportation system"
          src={teacher_book}
          imgFile={teacher_img}
        />
        <BooksCard
          title="Project Book"
          des="CP Plus Plus is a learning-based website(An online learning platform)"
          src={cp_book}
          imgFile={cp_img}
        />
      </div>
    </section>
  );
};

export default Books;
