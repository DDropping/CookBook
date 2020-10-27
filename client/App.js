import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import { Provider as RecipeProvider } from "./src/context/MyRecipesContext";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { setNavigator } from "./src/navigationRef";
import SplashScreen from "./src/screens/SplashScreen";
import IndexScreen from "./src/screens/IndexScreen";
import AccountScreen from "./src/screens/AccountScreen";
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
  splash: SplashScreen,
  loginFlow: createStackNavigator({
    Signin: SigninScreen,
    Signup: SignupScreen,
  }),
  mainFlow: createBottomTabNavigator({
    BrowseRecipesFlow: createStackNavigator({
      BrowseRecipes: BrowseRecipesScreen,
      Recipe: RecipeScreen,
      account: AccountScreen,
    }),
    MyRecipesFlow: createStackNavigator({
      MyRecipeList: MyRecipeListScreen,
      MyRecipe: MyRecipeScreen,
      CreateRecipe: CreateRecipeScreen,
      EditRecipe: EditRecipeScreen,
      account: AccountScreen,
    }),
    SavedRecipesFlow: createStackNavigator({
      SavedRecipes: SavedRecipesScreen,
      Recipe: RecipeScreen,
      account: AccountScreen,
    }),
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <RecipeProvider>
        <App
          ref={(navigator) => {
            setNavigator(navigator);
          }}
        />
      </RecipeProvider>
    </AuthProvider>
  );
};
