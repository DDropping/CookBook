import React, { useContext } from "react";
import { View, Text, Stylesheet, TouchableOpacity } from "react-native";
import { Context } from "../context/MyRecipesContext";
import { FontAwesome } from "@expo/vector-icons";

const RecipeScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  return (
    <View>
      <Text>recipe screen</Text>
    </View>
  );
};

RecipeScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity>
        <FontAwesome
          name="bookmark-o"
          size={24}
          color="black"
          style={{ marginRight: 10 }}
        />
      </TouchableOpacity>
    ),
  };
};

export default RecipeScreen;
