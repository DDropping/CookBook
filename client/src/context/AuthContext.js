import createDataContext from "./createDataContext";
import AsyncStorage from "@react-native-community/async-storage";

import { navigate } from "../navigationRef";
import cookbookApi from "../api/cookbookApi";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return {
        ...state,
        errorMessage: action.payload,
      };
    case "signin":
      return {
        ...state,
        token: action.payload,
        errorMessage: "",
      };
    case "signout":
      return {
        ...state,
        token: null,
        user: null,
      };
    case "clear_error_message":
      return {
        ...state,
        errorMessage: "",
      };
    default:
      return state;
  }
};

const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "signin", payload: token });
    navigate("mainFlow");
  } else {
    navigate("Signin");
  }
};

const signup = (dispatch) => async ({ email, password }) => {
  try {
    //create new user and return token
    const response = await cookbookApi.post("/api/auth/signup", {
      email,
      password,
    });
    //store token in async storage
    await AsyncStorage.setItem("token", response.data.token);
    //store token in context
    dispatch({ type: "signin", payload: response.data.token });
    //navigate to main flow
    navigate("mainFlow");
  } catch (err) {
    dispatch({ type: "add_error", payload: "Something went wrong" });
    console.log(err.message);
  }
};

const signin = (dispatch) => async ({ email, password }) => {
  try {
    //create new user and return token
    const response = await cookbookApi.post("/api/auth/signin", {
      email,
      password,
    });
    //store token in async storage
    await AsyncStorage.setItem("token", response.data.token);
    //store token in context
    dispatch({ type: "signin", payload: response.data.token });
    //navigate to main flow
    navigate("mainFlow");
  } catch (err) {
    dispatch({ type: "add_error", payload: "Something went wrong" });
    console.log(err.message);
  }
};

const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem("token");
  dispatch({ type: "signout" });
  navigate("loginFlow");
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "clear_error_message" });
};

export const { Provider, Context } = createDataContext(
  authReducer,
  {
    signup,
    signin,
    clearErrorMessage,
    tryLocalSignin,
  },
  {
    token: null,
    user: null,
    errorMessage: "",
  }
);
