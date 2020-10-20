import React, { useContext } from "react";
import { View, Text, Stylesheet } from "react-native";
import { Context } from "../context/MyRecipesContext";

const RecipeScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const recipe = state.find(
    (recipe) => recipe.id === navigation.getParam("id")
  );

  return (
    <View>
      <Text>{recipe.title}</Text>
    </View>
  );
};

export default RecipeScreen;
