import React, { useState } from 'react'
import { useProducts } from './useProducts';

export const useSearch = () => {
       const {products, shirts, shoes, jackets} = useProducts();
       const isShirts = shirts.filter((element) => element.name.includes("Remera"));
       const isShoes = shoes.filter((el) => el.name.includes("Zapatilla"));
       const isJackets = jackets.filter((el) => el.name.includes("Campera"));;

       const [changeValue, setChangeValue] = useState("");

    let setProduct = [];
    if (changeValue.length < 1) {
      setProduct = products;
    } else {
      setProduct = products.filter((el) =>
        el.name.toLowerCase().includes(changeValue.toLocaleLowerCase())
      );
    }

    let setShirt = [];
    if (changeValue.length < 1) {
        setShirt = isShirts;
    } else {
        setShirt = isShirts.filter((el) =>
        el.name.toLowerCase().includes(changeValue.toLocaleLowerCase())
      );
    }

    let setShoes = [];
    if (changeValue.length < 1) {
        setShoes = isShoes;
    } else {
        setShoes = isShoes.filter((el) =>
        el.name.toLowerCase().includes(changeValue.toLocaleLowerCase())
      );
    }
    let setJackets = [];
    if (changeValue.length < 1) {
        setJackets = isJackets;
    } else {
        setJackets = isJackets.filter((el) =>
        el.name.toLowerCase().includes(changeValue.toLocaleLowerCase())
      );
    }

    const onChangeValue = (e) => {
        setChangeValue(e.target.value);
      };
    
  return {
    setProduct,
    setShirt,
    setShoes,
    setJackets,
    onChangeValue,
    changeValue,

  }
}


