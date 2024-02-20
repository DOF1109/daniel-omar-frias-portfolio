import React from "react";
import "./Navbar.css";
import logo from "../../assets/daniel-omar-frias.png";
import MenuIcon from "../Icons/MenuIcon";

const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <div className="nav__content">
          <img className="nav__logo" src={logo} alt="Daniel Omar Frias" />
          <ul className="nav__list">
            <li>
              <a href="" className="nav__item">
                Inicio
              </a>
            </li>
            <li>
              <a href="" className="nav__item">
                Habilidades
              </a>
            </li>
            <li>
              <a href="" className="nav__item">
                Experiencia
              </a>
            </li>
            <li>
              <a href="" className="nav__item">
                Contáctame
              </a>
            </li>

            <button className="nav__contact-btn" onClick={() => {}}>
              Contrátame
            </button>
          </ul>

          <button className="nav__menu-btn" onClick={() => {}}>
            <MenuIcon className="icon" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
