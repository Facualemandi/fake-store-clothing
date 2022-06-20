import React from "react";
import { NavLink } from "react-router-dom";
import "./NavCategories.css";
import Shoes from "../Images/ShoesNav.png";
import shirt from "../Images/RopaMen.png";
import jacket from '../Images/CamperaNav.png'



const NavCategories = () => {
  return (
    <>
      <nav className="container_nav">

        <NavLink to={"/"} className="nav_link">
          <section className="container_shoe">
            <img alt="Zapatilla" src={Shoes} className="shoe" />
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
    </>
  );
};

export default NavCategories;
