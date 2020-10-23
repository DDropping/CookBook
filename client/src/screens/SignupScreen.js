import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";

import Spacer from "../components/Spacer";

const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text h3 style={{ textAlign: "center" }}>
        Sign Up
      </Text>
      <Spacer>
        <Input label="Email" />
      </Spacer>
      <Spacer>
        <Input label="Password" />
      </Spacer>
      <Spacer>
        <Input label="Confirm Password" />
      </Spacer>
      <Spacer>
        <Button
          title="Sign Up"
          onPress={() => {
            navigation.navigate("Signin");
          }}
        />
      </Spacer>
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
  },
});

export default SignupScreen;
