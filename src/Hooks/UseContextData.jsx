import React, { useContext } from "react";
import { CreateStore } from "../Context/Store/Data";

const UseContextData = () => {
  const { toggleNav, setToggleNav } = useContext(CreateStore);
  return { toggleNav, setToggleNav };
};

export default UseContextData;
