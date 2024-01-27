import React from 'react'
import "./sidebar.css"
import Logo from "../../assets/logo.svg"

export const Sidebar = () => {
  return (
    <aside className='aside'>
        <a href="#home" className="navv__logo">
            {/* change logo here */}
            <img src={Logo} alt="logo" />
        </a>

        <nav className="nav">
            <div className="nav__menu">
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="#home" className="nav__link">
                            <i className="icon-home"></i>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#about" className="nav__link">
                            <i className="icon-user"></i>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#services" className="nav__link">
                            <i className="icon-briefcase"></i>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#resume" className="nav__link">
                        <i className="icon-graduation"></i>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#portfolio" className="nav__link">
                        <i className="icon-layers"></i>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#blog" className="nav__link">
                            <i className="icon-note"></i>
                        </a>
                    </li>

                </ul>
            </div>
        </nav>
        <div className="nav__footer">
            <span className="copyright">&copy; 2022 - 2023.</span>

        </div>

    </aside>
  )
}
