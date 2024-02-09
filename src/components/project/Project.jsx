import React from "react";
import { Sidebar } from "../sidebar/Sidebar";
import image1 from "../../assets/homepage_jsd6_finalproject.png"
import image2 from "../../assets/tictactoe_bybai.png"
import "./project.css"
import { Shapes } from "../home/Shapes";

export const Project = () => {
  return (
    <section className="blog container section" id="blog">
      <Sidebar />
      <h2 className="section__title flex-container" >Recent Works</h2>
      {/* project 1 */}
      <div className="blog__container">
        <div className="blog__card">
          <div className="blog__thumb">
            {/* <a href="#">
              <span className="blog__category">Example</span>
            </a> */}
            <a href="https://lunarfit-frontend.vercel.app/" target="_blank">
              <img src={image1} alt="" className="blog__img" />
            </a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">LunarFit Workout Web App</h3>
            <div className="blog__meta">
              <p >We are proud to present LunarFit Web App, 
                our innovative workout web app designed to elevate your fitness journey. 
                Join us for your health. Let's work out to the moon! 🚀💪</p>
                <p className="stack_use"> MongoDB, Express. js, React and Node. js </p>
              <span>09 February, 2024</span>
            </div>
          </div>
        </div>
      </div>
      {/* project 2 */}
      <div className="blog__container grid">
        <div className="blog__card">
          <div className="blog__thumb">
            {/* <a href="#">
              <span className="blog__category">Example</span>
            </a> */}
            <a href="https://tic-tac-toe-game-by-hzee1y67i-supavidas-projects.vercel.app/" target="_blank">
              <img src={image2} alt="" className="blog__img" />
            </a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">Tic Tac Toe by Bai</h3>
            <div className="blog__meta">
              <p >We are proud to present LunarFit Web App, 
                our innovative workout web app designed to elevate your fitness journey. 
                Join us for your health. Let's work out to the moon! 🚀💪</p>
                <p>HTML, CSS and JavaScript</p>
              <span>05 January, 2024</span>
            </div>
          </div>
        </div>
      </div>
      {/* <Shapes /> */}
      <div className="work__container grid"></div>
    </section>
  );
};
