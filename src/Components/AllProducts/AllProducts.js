import React, { useEffect, useState } from "react";
import allProduct from "../Images/AllProducts.png";
import NavCategories from "../NavCategories/NavCategories";
import { Search } from "../Search/Search";
import "./AllProducts.css";
import Loader from "../../Loader/Loader";
import { useProducts } from "../../Hooks/useProducts";
import { NavLink } from "react-router-dom";
import { FcLike } from "react-icons/fc";
import NavBottom from "../NavBottom/NavBottom";
import NoFound from "../NoFound/NoFound";
import ModalLike from "../ModalLike/ModalLike";

const AllProducts = ({
  handleDescription,
  onChangeValue,
  changeValue,
  setProduct,
  onLike,
  likeProduct,
  likeModal,
}) => {
  const { loading } = useProducts();

  return (
    <>
      <header>
        <img alt="Tecnología" src={allProduct} className="img_all" />
      </header>

      <Search onChangeValue={onChangeValue} changeValue={changeValue} />

      {loading && <Loader />}

      {likeModal && <ModalLike />}

      <main className="main_movile">
        <NavCategories />
        <section className="main_products">
          {setProduct.map((el) => (
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

        <NavBottom likeProduct={likeProduct} />
      </main>
      {setProduct.length === 0 && !loading && <NoFound />}

      {/* ////////////////////////////////////////*/}

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
          {setProduct.map((el) => (
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

export default AllProducts;
