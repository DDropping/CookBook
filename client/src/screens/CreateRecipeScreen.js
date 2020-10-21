import React, { useState, useContext } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { Context } from "../context/MyRecipesContext";

const CreateRecipeScreen = ({ navigation }) => {
  const { state, addRecipe } = useContext(Context);
  const [recipe, setRecipe] = useState({
    name: "food",
    ingredients: [],
    directions: "cook it",
  });
  const [name, setName] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [directions, setDirections] = useState("");

  const addIngredient = (newIngredient) => {
    setRecipe({
      ...recipe,
      ingredients: [
        ...recipe.ingredients,
        { id: Math.floor(Math.random() * 95969493), ingredient: newIngredient },
      ],
    });
  };

  const removeIngredient = (id) => {
    setRecipe({
      ...recipe,
      ingredients: ingredients.filter((ingredient) => ingredient.id !== id),
    });
  };

  const addName = () => {
    setRecipe({ ...recipe, name: name });
  };

  const addDirections = () => {
    setRecipe({ ...recipe, directions: directions });
  };

  return (
    <View>
      <Text style={styles.title}>Name: </Text>
      <TextInput
        style={styles.inputBox}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Text style={styles.title}>Ingredients: </Text>
      <TextInput
        style={styles.inputBox}
        value={ingredient}
        onChangeText={(text) => setIngredient(text)}
      />
      <Text style={styles.title}>Directions: </Text>
      <TextInput
        style={styles.inputBox}
        value={directions}
        onChangeText={(text) => setDirections(text)}
      />
      <Button
        title="Add New Recipe"
        onPress={() => {
          addRecipe(recipe, () => {
            navigation.navigate("Index");
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginHorizontal: 10,
    fontSize: 20,
  },
  inputBox: {
    borderColor: "black",
    borderRadius: 2,
    borderWidth: 1,
    marginHorizontal: 10,
    fontSize: 20,
    marginBottom: 20,
  },
});

export default CreateRecipeScreen;
