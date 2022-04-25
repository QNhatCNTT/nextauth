import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [expanded, setExpanded] = useState(true);
  const handleOnChangeExpanded = () => {
    setExpanded(!expanded);
  };
  return (
    <GlobalContext.Provider
      value={{
        expanded,
        handleOnChangeExpanded,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
