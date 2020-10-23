import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const BrowseRecipesScreen = ({ navigation }) => {
  return (
    <View>
      <Text>BrowseRecipesScreen</Text>
      <Button
        title="go to recipe screen"
        onPress={() => {
          navigation.navigate("Recipe");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default BrowseRecipesScreen;
