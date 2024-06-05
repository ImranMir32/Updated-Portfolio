import React from "react";
import Title from "../layouts/Title";
import {
  problem_setter,
  problem_setter2,
  contest_col,
  contest_ruet,
  contest_victory,
  contest_black,
  problem_setter_img,
  problem_setter_img2,
  contest_col_img,
  contest_ruet_img,
  contest_victory_img,
  contest_black_img,
} from "../../assets/index";
import AchievementsCard from "./AchievementsCard";

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="My Achievements and Awards"
          des="Achievements and Awards"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <AchievementsCard
          title="Problem setter and judge"
          des="UITS - Summer Fest 23 Programming Contest, 2023"
          src={problem_setter}
          imgFile={problem_setter_img}
          live="https://www.hackerrank.com/contests/uits-sf23/challenges"
        />
        <AchievementsCard
          title="Problem setter and judge"
          des="UITS Victory Day Programming Contest, 2022 "
          src={problem_setter2}
          imgFile={problem_setter_img2}
          live="https://www.hackerrank.com/contests/victory-day-programming-contest-2022/challenges"
        />
        <AchievementsCard
          title="Programming Contest (IUPC)"
          des="UITS Collaboration Programming Contest (IUPC), 2022"
          src={contest_col}
          imgFile={contest_col_img}
          live="https://www.hackerrank.com/contests/uits-collaboration-programming-contest-2022-1667932690/leaderboard/2"
        />
        <AchievementsCard
          title="Programming Contest (IUPC)"
          des="Inter-University Programming Contest (IUPC), RUET, 2022"
          src={contest_ruet}
          imgFile={contest_ruet_img}
          live="https://algo.codemarshal.org/contests/ruet-2022/standings"
        />
        <AchievementsCard
          title="Programming Contest (Intra)"
          des="UITS Victory Day Programming Contest, 2021"
          src={contest_victory}
          imgFile={contest_victory_img}
          live="https://www.hackerrank.com/contests/uits2021/leaderboard"
        />
        <AchievementsCard
          title="Programming Contest (Intra)"
          des="UITS Intra Virtual Programming Contest, 2020  "
          src={contest_black}
          imgFile={contest_black_img}
          live="https://toph.co/contests/training/whkpnl2/standings"
        />
      </div>
    </section>
  );
};

export default Achievements;
