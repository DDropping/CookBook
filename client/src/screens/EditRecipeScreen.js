import React, { useState, useContext } from "react";
import { View, Text, Stylesheet, TouchableOpacity } from "react-native";
import { Context } from "../context/MyRecipesContext";

const EditRecipeScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  return (
    <View>
      <Text>Edit recipe screen</Text>
    </View>
  );
};

export default EditRecipeScreen;
