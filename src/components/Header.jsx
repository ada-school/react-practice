import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <h1 className="tittle">lista de pokemons</h1>
        <ul className="navigate">
          <li>
            <a href="/equipo-rocket">erronea </a>
          </li>
          <li>
            <a href="/">inicio</a>
          </li>

          <li>
            <a href="/about">sobre nosotros</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
