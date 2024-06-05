import React from "react";
import Title from "../layouts/Title";
import {
  activity,
  activity_img,
  activity2,
  activity_img2,
} from "../../assets/index";
import ActivitiesCard from "./activitiesCard";

const Activities = () => {
  return (
    <section
      id="activities"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="My Co-curricular Activities"
          des="Co-curricular Activities"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ActivitiesCard
          title="Seminar on International Fire Safety & Security Expo 2020"
          src={activity2}
          imgFile={activity_img2}
        />
        <ActivitiesCard
          title="Volunteer and Organizer of Inter Virtual Fest 2020"
          src={activity}
          imgFile={activity_img}
        />
      </div>
    </section>
  );
};

export default Activities;
