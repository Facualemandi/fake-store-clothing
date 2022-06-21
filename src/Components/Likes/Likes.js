import React from "react";
import "./Likes.css";
import { RiDislikeFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { FcLeft } from "react-icons/fc";

const Likes = ({ likeProduct }) => {
  return (
    <>
      {likeProduct.length === 0 && (
        <section className="container_nolike">
          <section className="section_nolike_products">
            <RiDislikeFill className="nolike" />
            <p>
              Parece que no has agregado ningún producto a tu lista de favoritos
            </p>
          </section>
        </section>
      )}

      {likeProduct.length > 0 && (
        <>
          <section className="section_left_like">
              <NavLink to={"/"}>
                <FcLeft className="icon_left_cart" />
              </NavLink>
          <p className="favorite_products_p">Productos favoritos</p>
            </section>
            
          <main className="main_likes">
            {likeProduct.map((like) => (
              <section className="container_product">
                <img alt={like.name} src={like.image} />
                <p className="name_cart">{like.name}</p>
                <p className="price_cart">
                  Precio: <b>${like.price}</b>
                </p>
              </section>
            ))}
          </main>
        </>
      )}
    </>
  );
};

export default Likes;
