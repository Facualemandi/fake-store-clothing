import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Support.css";
import { FcLeft } from "react-icons/fc";

const initialForm = {
  name: "",
  surname: "",
  phone: "",
  text: "",
};

export const Support = () => {
  const [form, setForm] = useState(initialForm);

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm(initialForm);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <main className="main_suport">
        <NavLink to={"/"}>
          <FcLeft className="icon_left_cart" />
        </NavLink>
        <h1>Que problema tuviste?</h1>

        <form className="section_support" onSubmit={handleSubmit}>
          <section>
            <label for="nombre">Nombre</label>
            <input
              id="nombre"
              type={"text"}
              name="name"
              placeholder="Nombre"
              onChange={handleChange}
              value={form.name}
            />
          </section>
          <section>
            <label for="apeliido">Apellido</label>
            <input
              id="apeliido"
              type={"text"}
              placeholder="Apellido"
              name="surname"
              onChange={handleChange}
              value={form.surname}
            />
          </section>
          <section>
            <label for="numero">Telefono - (para contactarte)</label>
            <input
              id="numero"
              type={"number"}
              placeholder="Telefono"
              onChange={handleChange}
              value={form.phone}
              name="phone"
            />
          </section>
          <section>
            <label for="texto">Contanos cual fue tu problema</label>
            <textarea
              id="texto"
              rows="10"
              value={form.text}
              onChange={handleChange}
              name="text"
            ></textarea>
          </section>

          <section>
            <input type={"submit"} className="inp_submit" />
          </section>
        </form>
      </main>
    </>
  );
};
