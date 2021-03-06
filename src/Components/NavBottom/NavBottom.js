import React from "react";
import { NavLink } from "react-router-dom";
import { FcLike } from "react-icons/fc";
import { FcPaid } from "react-icons/fc";
import { FcOnlineSupport } from "react-icons/fc";
import "./NavBottom.css";

const NavBottom = ({ likeProduct }) => {
  return (
    <>
      <nav className="talkbubble">
        <NavLink to="/Likes" className="navlink_nav_bottom">
          <FcLike className="icon_like" />
          <p className="amount_product_like">{likeProduct.length}</p>
        </NavLink>

        <NavLink to={"/Cart"}>
          <section className="container_cart_all_product">
            <FcPaid className="icon_cart_all_products" />
          </section>
        </NavLink>

        <NavLink to={"/Support"}>
          <FcOnlineSupport className="icon_user" />
        </NavLink>
      </nav>

      <nav className="nav_desktop">
        <NavLink to="/Likes" className="navlink_nav_bottom">
          <section className="section_icon_like_desk">
            <FcLike className="icon_like" />
          </section>
          <p className="amount_product_like">{likeProduct.length}</p>
        </NavLink>

        <NavLink to={"/Cart"}>
          <section className="section_cart_all_product">
            <FcPaid className="icon_cart_desk" />
          </section>
        </NavLink>

        <NavLink to={"/Support"}>
          <section className="section_nav_desk">
            <FcOnlineSupport className="icon_user" />
          </section>
        </NavLink>
      </nav>
    </>
  );
};

export default NavBottom;
