import React from "react";
import "./Description.css";
import { VscChevronLeft } from "react-icons/vsc";
import { BsCart3 } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { MdAdd } from "react-icons/md";
import { FiMinus } from "react-icons/fi";
import ModalAddCart from "../ModalAddCart/ModalAddCart";
import UpdateAmount from "../UpdateAmount/UpdateAmount";

const Description = ({
  isProductCart,
  onAmount,
  deleteCount,
  addCount,
  count,
  modal,
  cart,
  updateNewAmount
}) => {
  const { name, image, price, description, composicion, marca, material, id } =
    isProductCart;

  return (
    <>
      {modal && <ModalAddCart />}
    

      <header className="header_description">
        <NavLink to={"/"}>
          <VscChevronLeft className="icon_left" />
        </NavLink>

        <p>Product</p>
        <NavLink to={"/Cart"} className="navlink_cart">
          <p>{cart.length}</p>
          <BsCart3 className="icon_cart" />
        </NavLink>
      </header>

      <main className="main_description">
        <section>
          <img alt={name} src={image} />
        </section>

        <section className="description_name_price">
          <p>{name}</p>
          <span>${price}</span>
        </section>

        <section>
          <p className="description_product">{description}</p>
        </section>

        <section className="description_item">
          <p>
            Composicion: <b>{composicion}</b>
          </p>
          <p>
            Marca: <b>{marca}</b>
          </p>
          <p>
            Material: <b>{material}</b>
          </p>
        </section>

        <section className="section_btn">
          <section className="section_add">
            <FiMinus onClick={deleteCount}  className='minus'/>
            <span className="count_description"> {count} </span>
            <MdAdd onClick={addCount} className='add'/>
          </section>

          <section className="section_add_cart">
            <button className="btn_add" onClick={() => onAmount(id)}>
             Agregar al carrito
            </button>
          </section>
        </section>

        {updateNewAmount && <UpdateAmount/>}
      </main>

       
    </>
  );
};

export default Description;
