import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const MyRecipeListScreen = ({ navigation }) => {
  return (
    <View>
      <Text>MyRecipeListScreen</Text>
      <Button
        title="go to recipe screen"
        onPress={() => {
          navigation.navigate("MyRecipe");
        }}
      />
    </View>
  );
};

MyRecipeListScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() => navigation.navigate("CreateRecipe")}
        style={{ marginRight: 10 }}
      >
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({});

export default MyRecipeListScreen;
