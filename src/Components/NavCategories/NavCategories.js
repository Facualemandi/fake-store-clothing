import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavCategories.css";
import Shoes from "../Images/ShoesNav.png";
import shirt from "../Images/RopaMen.png";
import jacket from "../Images/CamperaNav.png";
import all from '../Images/all.png'

const NavCategories = () => {
  return (
    <>
      <nav className="container_nav">
        <NavLink to={"/"} className="nav_link">
          <section className="container_shoe">
            <img alt="Zapatilla" src={all} className="shoe" />
          </section>
          <p>Todo</p>
        </NavLink>

        <NavLink to={"/Remeras"} className="nav_link">
          <section className="container_shoe">
            <img alt="Remera" src={shirt} className="shoe" />
          </section>
          <p>Remeras</p>
        </NavLink>

        <NavLink to={"/Zapatillas"} className="nav_link">
          <section className="container_shoe">
            <img alt="Camperas" src={Shoes} className="shoe" />
          </section>
          <p>Zapatillas</p>
        </NavLink>

        <NavLink to={"/Camperas"} className="nav_link">
          <section className="container_shoe">
            <img alt="Campera" src={jacket} className="shoe" />
          </section>
          <p>Camperas</p>
        </NavLink>
      </nav>

      <nav className="container_nav_desktop">
        <NavLink to={"/"} className={`nav_link`}>
          <section className="all_categ_desk">
            <p>Todo los productos</p>
          </section>
        </NavLink>

        <NavLink to={"/Remeras"} className={`nav_link`}>
          <section>
            <section className="container_shoe">
              <img alt="Remera" src={shirt} className="shoe" />
            </section>
            <p>Remeras</p>
          </section>
        </NavLink>

        <NavLink to={"/Zapatillas"} className="nav_link">
          <section>
            <section className="container_shoe">
              <img alt="Camperas" src={Shoes} className="shoe" />
            </section>
            <p>Zapatillas</p>
          </section>
        </NavLink>

        <NavLink to={"/Camperas"} className="nav_link">
          <section>
            <section className="container_shoe">
              <img alt="Campera" src={jacket} className="shoe" />
            </section>
            <p>Camperas</p>
          </section>
        </NavLink>
      </nav>
    </>
  );
};

export default NavCategories;
