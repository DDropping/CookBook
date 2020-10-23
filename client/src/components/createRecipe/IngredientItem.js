import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const IngredientItem = ({ ingredient, removeIngredient }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{ingredient}</Text>
      <TouchableOpacity onPress={removeIngredient}>
        <Feather name="trash-2" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 16,
  },
});

export default IngredientItem;
