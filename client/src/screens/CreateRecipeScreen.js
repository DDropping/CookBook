import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  FlatList,
} from "react-native";
import { Context } from "../context/MyRecipesContext";

import IngredientItem from "../components/createRecipe/IngredientItem";

const CreateRecipeScreen = ({ navigation }) => {
  const { state, addRecipe } = useContext(Context);
  const [recipe, setRecipe] = useState({
    label: "food",
    ingredients: [{ id: 123123123, ingredient: "foooood" }],
    directions: "cook it",
  });
  const [label, setLabel] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [directions, setDirections] = useState("");

  const addIngredient = (newIngredient) => {
    console.log("adding ingredient");
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
      ingredients: recipe.ingredients.filter(
        (ingredient) => ingredient.id !== id
      ),
    });
  };

  const addLabel = () => {
    setRecipe({ ...recipe, label: label });
  };

  const addDirections = () => {
    setRecipe({ ...recipe, directions: directions });
  };

  return (
    <View>
      <Text style={styles.title}>Label: </Text>
      <TextInput
        style={styles.inputBox}
        value={label}
        onChangeText={(text) => setLabel(text)}
      />

      <Text style={styles.title}>Ingredients: </Text>
      <View style={styles.ingredientContainer}>
        <TextInput
          style={styles.ingredientsInputBox}
          value={ingredient}
          onChangeText={(text) => setIngredient(text)}
        />
        <Button title="Add" onPress={() => addIngredient(ingredient)} />
      </View>
      <FlatList
        data={recipe.ingredients}
        keyExtractor={(item) => item.id.toString()}
        extraData={recipe.ingredients}
        renderItem={({ item }) => {
          {
            console.log("item: ", item);
          }
          return (
            <IngredientItem
              ingredient={item.ingredient}
              removeIngredient={() => removeIngredient(item.id)}
            />
          );
        }}
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
  ingredientsInputBox: {
    borderColor: "black",
    borderRadius: 2,
    borderWidth: 1,
    marginHorizontal: 10,
    fontSize: 20,
    marginBottom: 20,
    flex: 1,
  },
  ingredientContainer: {
    display: "flex",
    flexDirection: "row",
  },
});

export default CreateRecipeScreen;
