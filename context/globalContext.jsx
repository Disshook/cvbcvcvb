// MyContext.js
import React, { createContext, useContext, useState } from "react";

// Create the context
const LoadingContext = createContext();

// Create a provider component
export const MyProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const setLoading = (value) => {
    setIsLoading(value);
  };

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

// Create a custom hook to use the context
export const useMyContext = () => {
  return useContext(LoadingContext);
};
