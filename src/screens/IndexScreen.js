import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import CookBookContext from "../context/CookBookContext";

const IndexScreen = () => {
  const { data, addRecipe } = useContext(CookBookContext);

  return (
    <View>
      <Text>My CookBook</Text>
      <Button title="Add New Recipe" onPress={addRecipe} />
      <FlatList
        data={data}
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
