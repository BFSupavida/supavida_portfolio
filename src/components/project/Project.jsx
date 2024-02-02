import React from "react";
import { Sidebar } from "../sidebar/Sidebar";
import image1 from "../../assets/blog-1.svg"
import "./project.css"

export const Project = () => {
  return (
    <section className="blog container section" id="blog">
      <Sidebar />
      <h2 className="section__title flex-container" >Recent Works</h2>
      {/* project 1 */}
      <div className="blog__container grid ">
        <div className="blog__card">
          <div className="blog__thumb">
            {/* <a href="#">
              <span className="blog__category">Example</span>
            </a> */}
            <a href="#">
              <img src={image1} alt="" className="blog__img" />
            </a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">LunarFit Workout Web App</h3>
            <div className="blog__meta">
              <p >We are proud to present LunarFit Web App, 
                our innovative workout web app designed to elevate your fitness journey. 
                Join us for your health. Let's work out to the moon! 🚀💪</p>
              <span>09 February, 2023</span>
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
            <a href="#">
              <img src={image1} alt="" className="blog__img" />
            </a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">Tic Tac Toe by Bai</h3>
            <div className="blog__meta">
              <p >We are proud to present LunarFit Web App, 
                our innovative workout web app designed to elevate your fitness journey. 
                Join us for your health. Let's work out to the moon! 🚀💪</p>
              <span>05 January, 2024</span>
            </div>
          </div>
        </div>
      </div>
      {/* project 3 */}
      <div className="blog__container grid">
        <div className="blog__card">
          <div className="blog__thumb">
            {/* <a href="#">
              <span className="blog__category">Example</span>
            </a> */}
            <a href="#">
              <img src={image1} alt="" className="blog__img" />
            </a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">Tic Tac Toe by Bai</h3>
            <div className="blog__meta">
              <p >We are proud to present LunarFit Web App, 
                our innovative workout web app designed to elevate your fitness journey. 
                Join us for your health. Let's work out to the moon! 🚀💪</p>
              <span>05 January, 2024</span>
            </div>
          </div>
        </div>
      </div>
      <div className="work__container grid"></div>
    </section>
  );
};
