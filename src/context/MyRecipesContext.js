import createDataContext from "./createDataContext";

const recipesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_RECIPE":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999999),
          title: `Recipe ${state.length + 1}`,
        },
      ];
    case "DELETE_RECIPE":
      return state.filter((recipe) => recipe.id !== payload);
    default:
      return state;
  }
};

const addRecipe = (dispatch) => {
  return () => {
    dispatch({ type: "ADD_RECIPE" });
  };
};

const deleteRecipe = (dispatch) => {
  return (id) => {
    dispatch({ type: "DELETE_RECIPE", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  recipesReducer,
  { addRecipe, deleteRecipe },
  []
);
