import React, { useState } from "react";

export const useActiveCatgory = () => {

  const [activeAll, setActiveAll] = useState(false);

  const handleAll = () => {
    if (!activeAll) {
      setActiveAll(true);
      console.log('asd')
    }
  };

  return {
    handleAll,
  };
};
