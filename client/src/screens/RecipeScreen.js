import React, { useContext } from "react";
import { View, Text, Stylesheet, TouchableOpacity } from "react-native";
import { Context } from "../context/MyRecipesContext";
import { Feather } from "@expo/vector-icons";

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

RecipeScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Edit", { id: navigation.getParam("id") })
        }
      >
        <Feather
          name="edit"
          size={25}
          color="black"
          style={{ marginRight: 10 }}
        />
      </TouchableOpacity>
    ),
  };
};

export default RecipeScreen;
