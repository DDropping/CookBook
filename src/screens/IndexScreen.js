import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/MyRecipesContext";

const IndexScreen = ({ navigation }) => {
  const { state, addRecipe } = useContext(Context);

  return (
    <View>
      <Text>My CookBook</Text>
      <Button title="Add New Recipe" onPress={addRecipe} />
      <FlatList
        data={state}
        keyExtractor={(recipe) => recipe.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate("Recipe")}>
              <Text>{item.title}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
