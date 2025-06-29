import React from "react";
import "./about.css";

import Image from "../../../public/assets/avatar/avatar-1.svg";
import { Sidebar } from "../sidebar/Sidebar";
import { Shapes } from "../home/Shapes";

export const About = () => {
  return (
    <div>
      <Sidebar />
      <section className="about container section" id="about">
        <h2 className="section__title">About Me</h2>

        <div className="over-box">
          {/* <img src={Image} alt="" className="about__img" /> */}

          <div className="box">
            <div className="about__info">
              <p className="about__description">
                I am Supavida Itthirak (BaiFern), a dedicated Software Tester
                 based in Thailand. I am driven by a profound passion
                for crafting innovative products, with the ultimate goal of
                contributing to a better world through technology.
              </p>
              <h3 className="skills__name">Education</h3>
              <p className="university_name">Thammasat University</p>
              <p className="bachelor_name">
                Bachelor of Liberal Arts.
              </p>
              <p className="duration_education">Aug 2018 - May 2022</p>
              <p className="gpa">GPA : 3.34</p>
            </div>
          </div>
        </div>
      </section>
      {/* <Shapes /> */}
    </div>
  );
};
