import React from "react";
import "./Shirt.css";
import theShirts from "../Images/MenHeader.png";
import NavCategories from "../NavCategories/NavCategories";
import { Search } from "../Search/Search";
import { useSearch } from "../../Hooks/useSearch";
import { NavLink } from "react-router-dom";
import NavBottom from "../NavBottom/NavBottom";

const Shirt = ({ handleDescription }) => {
  const { changeValue, onChangeValue, setShirt } = useSearch();

  return (
    <>
      <header>
        <img alt="Remeras" src={theShirts} className="img_shirts" />
      </header>

      <Search changeValue={changeValue} onChangeValue={onChangeValue} />
      <NavCategories />
      <main className="main_shirts">
        {setShirt.map((element) => (
          <NavLink
            to={`/Description/${element.name}`}
            className="navlink_shirt"
          >
            <section
              className="container_shirt"
              onClick={() => handleDescription(element)}
              key={element.id}
            >
              <img alt={element.name} src={element.image} />
              <p>{element.name}</p>
              <span className="price">${element.price}</span>
            </section>
          </NavLink>
        ))}
      </main>

      <NavBottom />
    </>
  );
};

export default Shirt;
