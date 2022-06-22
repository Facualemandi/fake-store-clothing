import React, { useState } from "react";

export const useActiveCatgory = () => {
  const [activeAll, setActiveAll] = useState(false);
  const [activShirt, setActivShirt] = useState(false);
  const [activeShoes, setActiveShoes] = useState(false);
  const [activeShockets, setActiveShockets] = useState(false);

  const handleAll = () => {
    if (!activeAll) {
      console.log("sdasa");
      setActiveAll(true);
    }
  };
  const handleShirt = () => {
    if (!activShirt) {
      setActiveAll(false);
      setActivShirt(true);
      setActiveShoes(false);
      setActiveShockets(false);
    }
  };
  const handleShoes = () => {
    if (!activeShoes) {
      setActiveAll(false);
      setActivShirt(false);
      setActiveShoes(true);
      setActiveShockets(false);
    }
  };
  const handleShockets = () => {
    if (!activeShockets) {
      setActiveAll(false);
      setActivShirt(false);
      setActiveShoes(false);
      setActiveShockets(true);
    }
  };

  return {
    activeAll,
    activShirt,
    activeShoes,
    activeShockets,
    handleAll,
    handleShirt,
    handleShoes,
    handleShockets,
  };
};
