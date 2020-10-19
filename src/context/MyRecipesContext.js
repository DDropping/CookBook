import createDataContext from "./createDataContext";

const recipesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_RECIPE":
      return [...state, { title: `Recipe ${state.length + 1}` }];
    default:
      return state;
  }
};

const addRecipe = (dispatch) => {
  return () => {
    dispatch({ type: "ADD_RECIPE" });
  };
};

export const { Context, Provider } = createDataContext(
  recipesReducer,
  { addRecipe },
  []
);
