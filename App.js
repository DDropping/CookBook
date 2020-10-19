import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import IndexScreen from "./src/screens/IndexScreen";
import { CookBookProvider } from "./src/context/CookBookContext";

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
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
    <CookBookProvider>
      <App />
    </CookBookProvider>
  );
};
