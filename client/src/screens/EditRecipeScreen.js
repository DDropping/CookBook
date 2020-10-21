import React, { useState, useContext } from "react";
import { View, Text, Stylesheet, TouchableOpacity } from "react-native";
import { Context } from "../context/MyRecipesContext";

const EditRecipeScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const recipeData = state.find(
    (recipe) => recipe.id === navigation.getParam("id")
  );
  const [recipe, setRecipe] = useState(recipeData);

  return (
    <View>
      <Text>{recipe.title}</Text>
    </View>
  );
};

export default EditRecipeScreen;
