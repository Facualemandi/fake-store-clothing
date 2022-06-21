import React from "react";
import "./ModalLike.css";
import { FcLike } from "react-icons/fc";

const ModalLike = () => {
  return (
    <>
      <section className="modal_like">
        <section className="section_modal">
          <FcLike className="icon_check" />
          <p>Producto Agregado a favoritos</p>
        </section>
      </section>
    </>
  );
};

export default ModalLike;
