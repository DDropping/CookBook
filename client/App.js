import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import { Provider } from "./src/context/MyRecipesContext";
import IndexScreen from "./src/screens/IndexScreen";
import RecipeScreen from "./src/screens/RecipeScreen";
import CreateRecipeScreen from "./src/screens/CreateRecipeScreen";
import EditRecipeScreen from "./src/screens/EditRecipeScreen";
import BrowseRecipesScreen from "./src/screens/BrowseRecipesScreen";
import MyRecipeListScreen from "./src/screens/MyRecipeListScreen";
import MyRecipeScreen from "./src/screens/MyRecipeScreen";
import SavedRecipesScreen from "./src/screens/SavedRecipesScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signin: SigninScreen,
    Signup: SignupScreen,
  }),
  mainFlow: createBottomTabNavigator({
    BrowseRecipesFlow: createStackNavigator({
      BrowseRecipes: BrowseRecipesScreen,
      Recipe: RecipeScreen,
    }),
    MyRecipesFlow: createStackNavigator({
      MyRecipeList: MyRecipeListScreen,
      MyRecipe: MyRecipeScreen,
      CreateRecipe: CreateRecipeScreen,
      EditRecipe: EditRecipeScreen,
    }),
    SavedRecipesFlow: createStackNavigator({
      SavedRecipes: SavedRecipesScreen,
      Recipe: RecipeScreen,
    }),
  }),
});

// const navigator = createStackNavigator(
//   {
//     Index: IndexScreen,
//     Recipe: RecipeScreen,
//     CreateRecipe: CreateRecipeScreen,
//     EditRecipe: EditRecipeScreen,
//     BrowseRecipes: BrowseRecipesScreen,
//     MyRecipes: MyRecipeListScreen,
//     SavedRecipes: SavedRecipesScreen,
//     Signin: SigninScreen,
//     Signup: SignupScreen,
//   },
//   {
//     initialRouteName: "Index",
//     defaultNavigationOptions: {
//       title: "CookBook",
//     },
//   }
// );

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};

//export default createAppContainer(switchNavigator);
