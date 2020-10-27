import React, { useState, useContext } from "react";
import { NavigationEvents } from "react-navigation";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";

import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <Text h3 style={{ textAlign: "center" }}>
        Sign Up
      </Text>
      <Spacer>
        <Input
          label="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrent={false}
        />
      </Spacer>
      <Spacer>
        <Input
          label="Password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
        />
      </Spacer>
      <Spacer>
        <Input
          label="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
        />
      </Spacer>
      <Spacer>
        {state.errorMessage ? (
          <Text style={styles.errorMessage}>{state.errorMessage}</Text>
        ) : null}
        <Button title="Sign Up" onPress={() => signup({ email, password })} />
      </Spacer>
      <Spacer>
        <Text style={{ textAlign: "center" }}>- or -</Text>
      </Spacer>
      <Button
        title="Click Here To Sign In"
        type="clear"
        onPress={() => {
          navigation.navigate("Signin");
        }}
      />
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
    marginBottom: 100,
  },
  errorMessage: {
    color: "red",
    marginBottom: 5,
  },
});

export default SignupScreen;
