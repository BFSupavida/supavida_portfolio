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
          <img src="../../../public/assets/iconskills/icons8-css3.svg" alt="icon-css" />
          <p>CSS</p>
        </div>
        <div className="iconskills">
          <img src="../../../public/assets/iconskills/icons8-javascript-100.svg" alt="icon-javascript" />
          <p>JavaScript</p>
        </div>
        <div className="iconskills">
          <img src="../../../public/assets/iconskills/icons8-react.svg" alt="icon-react" />
          <p>React</p>
        </div>
        <div className="iconskills">
          <img src="../../../public/assets/iconskills/icons8-nodejs-100.svg" alt="icon-node" />
          <p>Node.js</p>
        </div>
        <div className="iconskills">
          <img src="../../../public/assets/iconskills/icons8-express-js.svg" alt="icon-expressjs" />
          <p>ExpressJS</p>
        </div>
        <div className="iconskills">
          <img src="../../../public/assets/iconskills/icons8-bootstrap.svg" alt="icon-boostrap" />
          <p>Boostrap</p>
        </div>
        <div className="iconskills">
          <img src="../../../public/assets/iconskills/icons8-tailwind-css.svg" alt="icon-html" />
          <p>Tailwind</p>
        </div>
        <div className="iconskills">
          <img src="../../../public/assets/iconskills/icons8-mongodb.svg" alt="icon-html" />
          <p>MongoDB</p>
        </div>
        <div className="iconskills">
          <img src="../../../public/assets/iconskills/icons8-github.svg" alt="icon-GitHub" />
          <p>GitHub</p>
        </div>
        <div className="iconskills">
          <img src="../../../public/assets/iconskills/icons8-figma.svg" alt="icon-Figma" />
          <p>Figma</p>
        </div>
        <div className="iconskills">
          <img src="../../../public/assets/iconskills/icons8-trello.svg" alt="icon-trello" />
          <p>Trello</p>
        </div>
        </div>

        <h2 className="bullet">Certification</h2>
        <div className="certification-container"><div className="iconskills">
          <img src="../../../public/assets/iconskills/comptia-logo.webp" alt="icon-trello" />
          <p>CompTIA ITF+</p>
        </div>
        <div className="iconskills">
          <img src="../../../public/assets/iconskills/icon-codecademy.png" alt="icon-trello" />
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
