import React from 'react'
import "./home.css"
import Me from "../../assets/avatar-1.svg"
import { HeaderSocials } from './HeaderSocials'
import { ScrollDown } from './ScrollDown'
import { Shapes } from './Shapes'


export const Home = () => {
  return (
    <section className="home conainer" id='home'>
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Supavida Itthirak</h1>
        <span className="home__education">I'm a Full-stack developer</span>
        <p className='status'>Open to work</p>
        <HeaderSocials />
        <a href="#contact" className="btn">Hire Me!</a>
        <ScrollDown />

      </div>

      <Shapes />
    </section>
  )
}
