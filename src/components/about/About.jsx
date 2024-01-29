import React from 'react'
import "./about.css"

import Image from "../../assets/avatar-2.svg"
import { Sidebar } from '../sidebar/Sidebar'

export const About = () => {
  return (
    <>
    <Sidebar />
    <section className="about container section" id='about'>
      
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I am Supavida Itthirak (BaiFern), a dedicated full-stack web developer based in Thailand. 
              I am driven by a profound passion for crafting innovative products, with the ultimate goal of contributing to a better world through technology.
              {/* maybe dont use */}
              {/* <a href="" className="btn"></a> */}
            </p>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Education</h3>
                <h4>Thammasat University</h4>
                <h5>Bachelor of Liberal Arts. (Russian Language)</h5>
                <h6>Aug 2018 - May 2022</h6>
                <p>GPA : 3.34</p>
              </div>
              <div className="skill__bar">
                <span className='skills__percentage'></span>
              </div>
            </div>

           


          </div>
        </div>
      </div>
    </section>
    </>
  )
}
