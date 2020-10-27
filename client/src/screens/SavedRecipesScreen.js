import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

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

SavedRecipesScreen.navigationOptions = ({ navigation }) => {
  return {
    headerLeft: () => (
      <TouchableOpacity
        onPress={() => navigation.navigate("account")}
        style={{ marginLeft: 10 }}
      >
        <Feather name="user" size={24} color="black" />
      </TouchableOpacity>
    ),
  };
};

export default SavedRecipesScreen;
