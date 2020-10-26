import createDataContext from "./createDataContext";

import cookbookApi from "../api/cookbookApi";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await cookbookApi.post("/api/auth/signup", {
        email,
        password,
      });
      console.log(response.data);
    } catch (err) {
      dispatch({ type: "add_error", payload: "Something went wrong" });
      console.log(err.message);
    }
  };
};

const signin = (dispatch) => {
  return async ({ email, password }) => {
    try {
      console.log(email);
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin },
  {
    isAuthenticated: false,
    user: null,
    errorMessage: "",
  }
);
