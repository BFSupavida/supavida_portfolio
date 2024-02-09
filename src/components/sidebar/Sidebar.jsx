import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import LightLogo from "../../assets/Bai_Logo.png";

import {
  RiHome2Line,
  RiUser3Line,
  RiStackLine,
  RiChat3Line,
  RiFileList3Line,
  RiMenu2Line,
} from "react-icons/ri";

export const Sidebar = (props) => {
  const [toggle, showMenu] = useState(false);

  return (
    <>
      <div className="box-sidebar">
        <aside className={toggle ? "aside show-menu" : "aside"}>
          <a href={"/"} className="nav__logo">
            <img className="logo-1" src={LightLogo} alt="logo" />
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
                  <a href={"/about"} className="nav__link">
                    <RiUser3Line />
                  </a>
                </li>

                <li className="nav__item">
                  <a href={"/skills"} className="nav__link">
                    <RiFileList3Line />
                  </a>
                </li>

                <li className="nav__item">
                  <a href={"/project"} className="nav__link">
                    <RiStackLine />
                  </a>
                </li>

                <li className="nav__item">
                  <a href={"/contact"} className="nav__link">
                    <RiChat3Line />
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="nav__footer">
            <span className="copyright">&copy; 2024</span>
          </div>
        </aside>
      </div>

      <div
        className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"}
        onClick={() => showMenu(!toggle)}
      >
        <RiMenu2Line />
      </div>
    </>
  );
};
