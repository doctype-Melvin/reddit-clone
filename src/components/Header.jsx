import React from "react";
import "../styles/header.css";

export default function Header() {
  return (
    <section className="header__container">
      <div className="logo__container">
        <img className="logo" src="logo.png" />
        <span className="app__name">
          cloned<span className="red__character">i</span>t
        </span>
      </div>
      <div className="search__bar_container">
        <input className="search__bar" placeholder="Search" />
      </div>
    </section>
  );
}
