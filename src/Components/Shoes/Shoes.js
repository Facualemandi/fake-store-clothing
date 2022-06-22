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

const Shoes = ({ handleDescription, onLike, likeProduct, likeModal }) => {
  const { changeValue, onChangeValue, setShoes } = useSearch();
  const { loading } = useProducts();

  return (
    <>
      <header>
        <img alt="Zapatillas" src={ShoesHeader} className="shoe_header" />
      </header>

      <Search changeValue={changeValue} onChangeValue={onChangeValue} />
      {likeModal && <ModalLike />}
      <main className="main_movile">
        <NavCategories />
        <section className="main_products">
          {setShoes.map((element) => (
            <NavLink
              to={`/Description/${element.name}`}
              className="navlink_shoes"
              onClick={() => handleDescription(element)}
            >
              <section className="section_all_product">
                <img
                  alt="Zapatillas"
                  src={element.image}
                  className="img_shoe"
                />
                <p>{element.name}</p>
                <span className="price">${element.price}</span>

                <FcLike
                  className="no_like"
                  onClick={(e) => onLike(element.id, element, e)}
                />
              </section>
            </NavLink>
          ))}
        </section>
        <NavBottom likeProduct={likeProduct} />
      </main>
      {setShoes.length === 0 && !loading && <NoFound />}

      <main className="main_desktop">
        <section>
          <NavBottom likeProduct={likeProduct} />
          <section className="name_sections_desktop">
            <p>Likes</p>
            <p>Carrito</p>
            <p>Soporte</p>
          </section>
        

          <section>
            <NavCategories />
          </section>
        </section>

        <section className="section_desktop_all">
          {setShoes.map((el) => (
            <>
              <NavLink
                to={`/Description/${el.name}`}
                onClick={() => handleDescription(el)}
                className="navlink_all"
                key={el.id}
              >
                <section className="section_all_product">
                  <img alt={el.name} src={el.image} />
                  <p>{el.name}</p>
                  <span className="price">${el.price}</span>

                  <FcLike
                    className="no_like"
                    onClick={(e) => onLike(el.id, el, e)}
                  />
                </section>
              </NavLink>
            </>
          ))}
        </section>
      </main>
    </>
  );
};

export default Shoes;
