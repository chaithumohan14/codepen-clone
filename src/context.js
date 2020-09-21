import React, { createContext, useContext, useReducer } from "react";

const RawStore = createContext();

export const Provider = ({ initialState, reducer, children }) => (
  <RawStore.Provider value={useReducer(reducer, initialState)}>
    {children}
  </RawStore.Provider>
);

export const Store = () => useContext(RawStore);
