import React from "react";
import "./Shirt.css";
import theShirts from "../Images/MenHeader.png";
import NavCategories from "../NavCategories/NavCategories";
import { Search } from "../Search/Search";
import { useSearch } from "../../Hooks/useSearch";
import { NavLink } from "react-router-dom";
import NavBottom from "../NavBottom/NavBottom";
import { FcLike } from "react-icons/fc";
import ModalLike from "../ModalLike/ModalLike";
import { useProducts } from "../../Hooks/useProducts";
import NoFound from "../NoFound/NoFound";

const Shirt = ({ handleDescription, onLike, likeProduct, likeModal}) => {
  const { changeValue, onChangeValue, setShirt } = useSearch();
  const {loading} = useProducts()
  

  return (
    <>
      <header>
        <img alt="Remeras" src={theShirts} className="img_shirts" />
      </header>

      <Search changeValue={changeValue} onChangeValue={onChangeValue} />
      <NavCategories />
      {likeModal && <ModalLike/>}
      <main className="main_shirts">
        {setShirt.map((element) => (
          <NavLink
            to={`/Description/${element.name}`}
            className="navlink_shirt"
            key={element.id}
            onClick={() => handleDescription(element)}
          >
            <section className="section_all_product">
              <img alt={element.name} src={element.image} />
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

      {setShirt.length === 0 && !loading && <NoFound />}
      
      <NavBottom likeProduct={likeProduct} />
    </>
  );
};

export default Shirt;
