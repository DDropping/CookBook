import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const SigninScreen = ({ navigation }) => {
  return (
    <View>
      <Text>SigninScreen</Text>
      <Button
        title="go to signup"
        onPress={() => {
          navigation.navigate("Signup");
        }}
      />
      <Button
        title="go to main flow"
        onPress={() => {
          navigation.navigate("mainFlow");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SigninScreen;
