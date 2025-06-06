import React from "react";
import "./home.css";
import Me from "../../../public/assets/avatar/avatar-2.svg";
import { HeaderSocials } from "./HeaderSocials";
import { Shapes } from "./Shapes";
import { Sidebar } from "../sidebar/Sidebar";
import Resume from "../../../public/assets/resume/Supavida_Itthirak_Resume.pdf"

export const Home = () => {
  return (
    <>
      <Sidebar />
      <section className="home conainer" id="home">
        <div className="intro">
          {/* <img src={Me} alt="" className="home__img" /> */}
          <h1 className="home__name">Supavida Itthirak</h1>
          <span className="home__education">I'm a Software Tester</span>
          <p className="status">Open to work</p>
          <HeaderSocials />
          <a href={Resume} className="btn" target="_blank">
            My resume
          </a>
        </div>
        <Shapes />
      </section>
    </>
  );
};
