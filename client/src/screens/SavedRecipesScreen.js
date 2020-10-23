import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const SavedRecipesScreen = ({ navigation }) => {
  return (
    <View>
      <Text>SavedRecipesScreen</Text>
      <Button
        title="go to recipe"
        onPress={() => {
          navigation.navigate("Recipe");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SavedRecipesScreen;
