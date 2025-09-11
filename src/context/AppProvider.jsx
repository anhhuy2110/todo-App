import React, { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {

  const [selectCategoryId, setSelectCategoryId] = useState();

  return (
    <AppContext.Provider value={{ selectCategoryId, setSelectCategoryId }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
