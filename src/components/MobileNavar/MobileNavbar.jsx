import "./MobileNavbar.css";
import "../../styles/variables.css";
import logo from "../../assets/daniel-omar-frias.png";

const MobileNavbar = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu__container">
          <img className="logo" src={logo} alt="Daniel Omar Frias" />
          <ul>
            <li>
              <a href="" className="mobile-menu__item">
                Inicio
              </a>
            </li>
            <li>
              <a href="" className="mobile-menu__item">
                Habilidades
              </a>
            </li>
            <li>
              <a href="" className="mobile-menu__item">
                Experiencia
              </a>
            </li>
            <li>
              <a href="" className="mobile-menu__item">
                Contáctame
              </a>
            </li>

            <button className="mobile-menu__contact-btn" onClick={() => {}}>
              Contrátame
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
