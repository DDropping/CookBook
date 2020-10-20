import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { Provider } from "./src/context/MyRecipesContext";
import IndexScreen from "./src/screens/IndexScreen";
import RecipeScreen from "./src/screens/RecipeScreen";
import CreateRecipeScreen from "./src/screens/CreateRecipeScreen";

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Recipe: RecipeScreen,
    CreateRecipe: CreateRecipeScreen,
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "CookBook",
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
