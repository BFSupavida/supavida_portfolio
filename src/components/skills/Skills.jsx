import React from "react";
import { Sidebar } from "../sidebar/Sidebar";
import "./skills.css"
import img_html from "../../../public/assets/iconskills/icons8-html.svg"
import img_css from "../../../public/assets/iconskills/icons8-css3.svg";
import img_javascript from "../../../public/assets/iconskills/icons8-javascript-100.svg";
import img_react from "../../../public/assets/iconskills/icons8-react.svg";
import img_node from "../../../public/assets/iconskills/icons8-nodejs-100.svg";
import img_express from "../../../public/assets/iconskills/icons8-express-js.svg";
import img_boostrap from "../../../public/assets/iconskills/icons8-bootstrap.svg";
import img_tailwind from "../../../public/assets/iconskills/icons8-tailwind-css.svg";
import img_mongo from "../../../public/assets/iconskills/icons8-mongodb.svg";
import img_github from "../../../public/assets/iconskills/icons8-github.svg";
import img_figma from "../../../public/assets/iconskills/icons8-figma.svg";
import img_trello from "../../../public/assets/iconskills/icons8-trello.svg";
import img_comptia from "../../../public/assets/iconskills/comptia-logo.webp"
import img_codecademy from "../../../public/assets/iconskills/icon-codecademy.png"  

export const Skills = () => {
  return (
    <div>
      <section className="Skills container section">
        <Sidebar />
        <h2 className="section__title flex-container">Skills</h2>
        <div className="sum_iconskills">
          <div className="iconskills">
          <img src={img_html} alt="icon-html" />
          <p>HTML</p>
        </div>
        <div className="iconskills">
          <img src={img_css} alt="icon-css" />
          <p>CSS</p>
        </div>
        <div className="iconskills">
          <img src={img_javascript} alt="icon-javascript" />
          <p>JavaScript</p>
        </div>
        <div className="iconskills">
          <img src={img_react} alt="icon-react" />
          <p>React</p>
        </div>
        <div className="iconskills">
          <img src={img_node} alt="icon-node" />
          <p>Node.js</p>
        </div>
        <div className="iconskills">
          <img src={img_express} alt="icon-expressjs" />
          <p>ExpressJS</p>
        </div>
        <div className="iconskills">
          <img src={img_boostrap} alt="icon-boostrap" />
          <p>Boostrap</p>
        </div>
        <div className="iconskills">
          <img src={img_tailwind} alt="icon-html" />
          <p>Tailwind</p>
        </div>
        <div className="iconskills">
          <img src={img_mongo} alt="icon-html" />
          <p>MongoDB</p>
        </div>
        <div className="iconskills">
          <img src={img_github} alt="icon-GitHub" />
          <p>GitHub</p>
        </div>
        <div className="iconskills">
          <img src={img_figma} alt="icon-Figma" />
          <p>Figma</p>
        </div>
        <div className="iconskills">
          <img src={img_trello} alt="icon-trello" />
          <p>Trello</p>
        </div>
        </div>

        <h2 className="bullet">Certification</h2>
        <div className="certification-container"><div className="iconskills">
          <img src={img_comptia} alt="icon-trello" />
          <p>CompTIA ITF+</p>
        </div>
        <div className="iconskills">
          <img src={img_codecademy} alt="icon-trello" />
          <p>Learn HTML Course</p>
        </div></div>
        <h2 className="bullet">Languages</h2>
        <div className="certification-container">
          <p className="langusgesskills">Thai (Native)</p>
          <p className="langusgesskills">English (TOEIC : 625)</p>
        </div>
        
      </section>
    </div>
  );
};
