import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";

import Spacer from "../components/Spacer";

const SigninScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text h3 style={{ textAlign: "center" }}>
        Sign In
      </Text>
      <Spacer>
        <Input label="Email" />
      </Spacer>
      <Spacer>
        <Input label="Password" />
      </Spacer>
      <Spacer>
        <Button
          title="Sign In"
          onPress={() => {
            navigation.navigate("Signin");
          }}
        />
      </Spacer>
      <Spacer>
        <Text style={{ textAlign: "center" }}>- or -</Text>
      </Spacer>
      <Button
        title="Click Here To Sign Up"
        type="clear"
        onPress={() => {
          navigation.navigate("Signup");
        }}
      />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
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

export default SigninScreen;
