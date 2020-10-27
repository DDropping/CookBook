import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

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

BrowseRecipesScreen.navigationOptions = ({ navigation }) => {
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

export default BrowseRecipesScreen;
