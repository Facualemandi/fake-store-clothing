import React from "react";
import { NavLink } from "react-router-dom";
import { FcLike } from "react-icons/fc";
import { FcPaid } from "react-icons/fc";
import { FcOnlineSupport } from "react-icons/fc";

const NavBottom = () => {
  return (
    <>
      <nav className="talkbubble">
        <NavLink to="/Likes">
          <FcLike className="icon_like" />
        </NavLink>
        <NavLink to={"/Cart"}>
          <section className="container_cart_all_product">
            <FcPaid className="icon_cart_all_products" />
          </section>
        </NavLink>
        <FcOnlineSupport className="icon_user" />
      </nav>
    </>
  );
};

export default NavBottom;
