import React from "react";
import "./Jackets.css";
import womenHeader from "../Images/WomenHeader.png";
import NavCategories from "../NavCategories/NavCategories";
import { Search } from "../Search/Search";
import { useSearch } from "../../Hooks/useSearch";
import { NavLink } from "react-router-dom";
import NavBottom from "../NavBottom/NavBottom";

const Jackets = ({ handleDescription }) => {
  const { changeValue, onChangeValue, setJackets } = useSearch();

  return (
    <>
      <header>
        <img alt="Remeras" src={womenHeader} className="img_shirts" />
      </header>

      <Search changeValue={changeValue} onChangeValue={onChangeValue} />
      <NavCategories />

      <main className="main_shockets">
        {setJackets.map((element) => (
          <NavLink to={`/Description/${element.name}`} className='navlink_shakets'>
            <section
              className="container_shockets"
              key={element.id}
              onClick={() => handleDescription(element)}
            >
              <img alt={element.name} src={element.image} />
              <p>{element.name}</p>
              <span className="price">${element.price}</span>
            </section>
          </NavLink>
        ))}
      </main>

      <NavBottom/>
    </>
  );
};

export default Jackets;
