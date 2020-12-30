import React,{createContext, useContext, useReducer} from 'react';
{/* This is the data layyer that we want to produce*/}

export const StateContext = createContext();

 {/* Now we are going to build a provider.*/}
export const StateProvider=({reducer, initialState, children}) => (
  <StateContext.Provider value={useReducer(reducer, initialState)} >
     {children}
  </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext)
