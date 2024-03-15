import React from "react";
import "../../styles/variables.css";
import "./Navbar.css";
import logo from "../../assets/daniel-omar-frias.png";
import MenuIcon from "../Icons/MenuIcon";
import { useState } from "react";
import MobileNavbar from "../MobileNavar/MobileNavbar";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNavbar isOpen={openMenu} toggleMenu={toggleMenu} />

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

          <button className="nav__menu-btn" onClick={toggleMenu}>
            <MenuIcon className="icon" />
            {openMenu ? "close" : "menu"}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
