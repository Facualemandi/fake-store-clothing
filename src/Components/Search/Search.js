import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import "./Search.css";

export const Search = ({ changeValue, onChangeValue }) => {

  return (
    <>
      <main className="main_search">
        <section className="section_search">
          <input
            placeholder="Buscá por marca, productos, etc..."
            onChange={onChangeValue}
            value={changeValue}
          />
          <FiSearch className="icon_search" />
        </section>
      </main>
    </>
  );
};
