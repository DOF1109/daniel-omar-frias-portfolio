import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <div className="nav__content">
          <img
            className="nav__logo"
            src="../../assets/daniel-omar-frias.png"
            alt="Logo"
          />
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
        </div>
      </nav>
    </>
  );
};

export default Navbar;
