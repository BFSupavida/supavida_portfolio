import React from "react";
import { Sidebar } from "../sidebar/Sidebar";

export const Project = () => {
  return (
    <section className="work container section" id="work">
        <Sidebar />
      <h2 className="section__title">Recent Works</h2>
      <div className="work__filters">
        <span className="work__item">All</span>
        <span className="work__item"></span>
        <span className="work__item"></span>
        <span className="work__item"></span>
        <span className="work__item"></span>
      </div>

      <div className="work__container grid"></div>
    </section>
  );
};
