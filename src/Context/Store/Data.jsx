import { createContext, useState } from "react";

export const CreateStore = createContext();

import React from "react";

const DataProvider = ({ children }) => {
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <CreateStore.Provider value={{ toggleNav, setToggleNav }}>
      {children}
    </CreateStore.Provider>
  );
};

export default DataProvider;
