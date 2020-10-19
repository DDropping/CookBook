import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { Context } from "../context/CookBookContext";

const IndexScreen = () => {
  const { state, addRecipe } = useContext(Context);

  return (
    <View>
      <Text>My CookBook</Text>
      <Button title="Add New Recipe" onPress={addRecipe} />
      <FlatList
        data={state}
        keyExtractor={(recipe) => recipe.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
