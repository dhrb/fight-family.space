import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import burgerMenuIcon from "../assets/burgerIcon.png";
import closeIcon from "../assets/closeIcon.png";
import enIcon from "../assets/enIcon.png";
import uaIcon from "../assets/uaIcon.png";
import "./../Styles/Navbar.css";

function Navbar() {
  const { lang, switchLanguage, translate } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbarWrapper">
      <div className="navbarTop">
        <h1 className="navbarTitle">Fight Club</h1>
      </div>

      <div className={`navbarLinks ${menuOpen ? "open" : ""}`}>
        <NavLink
          exact="true"
          to="/"
          className={({ isActive }) =>
            `navbarLinkItem ${isActive ? "active" : ""}`
          }
          onClick={() => setMenuOpen(false)}
        >
          {translate("navbar.navbarHome")}
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `navbarLinkItem ${isActive ? "active" : ""}`
          }
          onClick={() => setMenuOpen(false)}
        >
          {translate("navbar.navbarAboutUs")}
        </NavLink>
        <NavLink
          to="/schedule"
          className={({ isActive }) =>
            `navbarLinkItem ${isActive ? "active" : ""}`
          }
          onClick={() => setMenuOpen(false)}
        >
          {translate("navbar.navbarSchedule")}
        </NavLink>
        <NavLink
          to="/gallery"
          className={({ isActive }) =>
            `navbarLinkItem ${isActive ? "active" : ""}`
          }
          onClick={() => setMenuOpen(false)}
        >
          {translate("navbar.navbarGallery")}
        </NavLink>
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            `navbarLinkItem ${isActive ? "active" : ""}`
          }
          onClick={() => setMenuOpen(false)}
        >
          {translate("navbar.navbarContacts")}
        </NavLink>
      </div>
      <button className="navbarBurger" onClick={toggleMenu}>
        <img src={menuOpen ? closeIcon : burgerMenuIcon} alt="menu" />
      </button>
      <img
        src={lang === "en" ? enIcon : uaIcon}
        onClick={() => switchLanguage()}
        className="navbarLangIcon"
      />
    </nav>
  );
}

export default Navbar;
