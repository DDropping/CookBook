import React, { useContext } from "react";
import { View, Text, Stylesheet, TouchableOpacity } from "react-native";
import { Context } from "../context/MyRecipesContext";
import { Feather } from "@expo/vector-icons";

const MyRecipeScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  return (
    <View>
      <Text>recipe screen</Text>
    </View>
  );
};

MyRecipeScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() => navigation.navigate("EditRecipe")}
        style={{ marginRight: 10 }}
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

export default MyRecipeScreen;
