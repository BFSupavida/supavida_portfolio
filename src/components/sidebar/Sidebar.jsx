import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../../assets/logo.svg";
import LightLogo from "../../assets/light-logo.svg";

import {
  RiHome2Line,
  RiUser3Line,
  RiStackLine,
  RiChat3Line,
  RiFileList3Line,
  RiMoonLine,
  RiSunLine,
  RiMenu2Line,
} from "react-icons/ri";

export const Sidebar = (props) => {
  const [toggle, showMenu] = useState(false);

  return (
    <>
      <aside className={toggle ? "aside show-menu" : "aside"}>
        <a href="#home" className="nav__logo">
          <img src={props.theme === "light" ? LightLogo : Logo} alt="logo" />
        </a>

        <nav className="nav">
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href={"/"} className="nav__link">
                  <RiHome2Line />
                </a>
              </li>

              <li className="nav__item">
                <a href={'/about'} className="nav__link">
                  <RiUser3Line />
                </a>
              </li>

              <li className="nav__item">
                <a href="#services" className="nav__link">
                  <RiFileList3Line />
                </a>
              </li>

              <li className="nav__item">
                <a href={"/project"} className="nav__link">
                  <RiStackLine />
                </a>
              </li>

              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <RiChat3Line />
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="nav__footer">
        <span className="copyright">&copy; 2024</span>
          <button
            onClick={() => {
              props.switchTheme();
              showMenu(!toggle);
            }}
            className="nav__link footer__button"
          >
            {props.theme === "light" ? <RiMoonLine /> : <RiSunLine />}
          </button>
        </div>
      </aside>

      <div
        className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"}
        onClick={() => showMenu(!toggle)}
      >
        <RiMenu2Line />
      </div>
    </>
  );
};
