import { createContext, useState } from "react";

export const ConversionContext = createContext();

export const ConversionProvider = ({ children }) => {
  const [conversionData, setConversionData] = useState(null);

  return (
    <ConversionContext.Provider value={{ conversionData, setConversionData }}>
      {children}
    </ConversionContext.Provider>
  );
};