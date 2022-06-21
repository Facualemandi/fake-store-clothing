import React from "react";
import "./Support.css";

const initialForm = {
  name: "",
  email: "",
};

export const Support = () => {
  return (
    <>
      <main className="main_suport">
        <h1>Que problema tuviste?</h1>
        <form className="section_support">
          <section>
            <label for="nombre">Nombre</label>
            <input id="nombre" type={"text"} placeholder="Nombre" />
          </section>
          <section>
            <label for="nombre">Apellido</label>
            <input id="nombre" type={"text"} placeholder="Apellido" />
          </section>
          <section>
            <label for="nombre">Telefono - (para contactarte)</label>
            <input id="nombre" type={"number"} placeholder="Telefono" />
          </section>
          <section>
            <label for="nombre">Contanos cual fue tu problema</label>
            <textarea rows="10"></textarea>
          </section>

          <section>
            <input id="nombre" type={"submit"} />
          </section>
        </form>
      </main>
    </>
  );
};
