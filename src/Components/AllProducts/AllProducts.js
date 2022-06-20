import React  from "react";
import allProduct from "../Images/AllProducts.png";
import NavCategories from "../NavCategories/NavCategories";
import { Search } from "../Search/Search";
import "./AllProducts.css";
import Loader from "../../Loader/Loader";
import { useProducts } from "../../Hooks/useProducts";
import { NavLink } from "react-router-dom";
import { FcLikePlaceholder } from "react-icons/fc";
import NavBottom from "../NavBottom/NavBottom";

const AllProducts = ({
  handleDescription,
  onChangeValue,
  changeValue,
  setProduct,
}) => {
  const { loading } = useProducts();

  const onLike = (name, e) => {
    console.log(name);
  };

  return (
    <>
      <header>
        <img alt="Tecnología" src={allProduct} className="img_all" />
      </header>

      <Search onChangeValue={onChangeValue} changeValue={changeValue} />
      <NavCategories />

      {loading && <Loader />}
      <main className="main_products">
        {setProduct.map((el) => (
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
              <FcLikePlaceholder
                className="no_like"
                onClick={() => onLike(el.name)}
              />
            </section>
          </NavLink>
        ))}
      </main>

      <NavBottom />
    </>
  );
};

export default AllProducts;
