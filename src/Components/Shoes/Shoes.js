import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSearch } from "../../Hooks/useSearch";
import ShoesHeader from "../Images/ShoesHeader.png";
import NavBottom from "../NavBottom/NavBottom";
import NavCategories from "../NavCategories/NavCategories";
import { Search } from "../Search/Search";
import "./Shoes.css";
import { FcLike } from "react-icons/fc";
import ModalLike from "../ModalLike/ModalLike";
import { useProducts } from "../../Hooks/useProducts";
import NoFound from "../NoFound/NoFound";

const Shoes = ({ handleDescription, onLike, likeProduct, likeModal,  }) => {
  const { changeValue, onChangeValue, setShoes } = useSearch();
  const {loading} = useProducts()

  return (
    <>
      <header>
        <img alt="Zapatillas" src={ShoesHeader} className="shoe_header" />
      </header>

      <Search changeValue={changeValue} onChangeValue={onChangeValue} />
      <NavCategories />
      {likeModal && <ModalLike/>}
      <main className="main_shoes">
        {setShoes.map((element) => (
          <NavLink
            to={`/Description/${element.name}`}
            className="navlink_shoes"
            onClick={() => handleDescription(element)}
          >
            <section className="section_all_product">
              <img alt="Zapatillas" src={element.image} className="img_shoe" />
              <p>{element.name}</p>
              <span className="price">${element.price}</span>

              <FcLike
                className="no_like"
                onClick={(e) => onLike(element.id, element, e)}
              />
            </section>
          </NavLink>
        ))}
      </main>
      {setShoes.length === 0 && !loading && <NoFound />}
      

      <NavBottom  likeProduct={likeProduct}/>
    </>
  );
};

export default Shoes;
