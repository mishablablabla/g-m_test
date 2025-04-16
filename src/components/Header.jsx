import React from "react";
import "./Header.scss";

const Header = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="header" id="hero">
      <div className="header__logo">
        <img src="/assets/logo.png" alt="Логотип магазину велосипедів" />
      </div>
      <nav className="header__nav">
        <ul>
          <li>
            <a onClick={() => scrollToSection("heroId")}>Головна</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("features")}>Характеристики</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("order")}>Замовити</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
