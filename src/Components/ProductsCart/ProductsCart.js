import React from "react";
import "./ProductsCart.css";
import { FcLeft } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import { FcFullTrash } from "react-icons/fc";


const ProductsCart = ({ cart, setCart }) => {
  console.log(cart);

  const onDelete = (name) => {
    const isDelete = cart.findIndex((el) => el.name === name);
    const newObj = [...cart];
    newObj.splice(isDelete, 1);

    return setCart(newObj);
  };

  return (
    <>
      {cart.length >= 1 && (
        <section className="section_left_cart">
          <NavLink to={"/"}>
            <FcLeft className="icon_left_cart" />
          </NavLink>
        </section>
      )}

      {cart.length === 0 && (
        <section className="empy_cart">
          <section className="section_empy">
            <p>Ups...</p>
            <p>Parece que no tienes productos agregados al carrito.</p>
            <section className="section_left_cart">
              <NavLink to={"/"}>
                <FcLeft className="icon_left_cart" />
              </NavLink>
            </section>
          </section>
        </section>
      )}
      <main className="main_product_cart">
        {cart.map((el) => (
          <>
            <section className="container_product">
              <img alt={el.name} src={el.image} />
              <p className="name_cart">{el.name}</p>
              <p className="price_cart">
                Precio: <b>${el.price}</b>
              </p>
              <p className="amount_cart">
                {" "}
                Cantidad: <b>x{el.amount}</b>
              </p>

              <p className="price_total">
                {" "}
                Total: <b>${(el.amount * el.price).toFixed(3)}</b>
              </p>
              <FcFullTrash
                className="icon_delete"
                onClick={() => onDelete(el.name)}
              />
            </section>
          </>
        ))}
      </main>
    </>
  );
};

export default ProductsCart;

// Math.trunc(x)
