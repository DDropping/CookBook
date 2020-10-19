import React, { useReducer } from "react";

const CookBookContext = React.createContext();

const recipesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_RECIPE":
      return [...state, { title: `Recipe ${state.length + 1}` }];
    default:
      return state;
  }
};

export const CookBookProvider = ({ children }) => {
  const [state, dispatch] = useReducer(recipesReducer, []);

  const addRecipe = () => {
    dispatch({ type: "ADD_RECIPE" });
  };

  return (
    <CookBookContext.Provider value={{ data: state, addRecipe }}>
      {children}
    </CookBookContext.Provider>
  );
};

export default CookBookContext;
