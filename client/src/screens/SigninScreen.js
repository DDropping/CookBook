import React, { useState, useContext, useEffect } from "react";
import { NavigationEvents } from "react-navigation";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";

import { Context as AuthContext } from "../context/AuthContext";
import Spacer from "../components/Spacer";

const SigninScreen = ({ navigation }) => {
  const { state, signin, clearErrorMessage, tryLocalSignin } = useContext(
    AuthContext
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    tryLocalSignin();
  }, []);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <Text h3 style={{ textAlign: "center" }}>
        Sign In
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
        {state.errorMessage ? (
          <Text style={styles.errorMessage}>{state.errorMessage}</Text>
        ) : null}
        <Button title="Sign In" onPress={() => signin({ email, password })} />
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
  errorMessage: {
    color: "red",
    marginBottom: 5,
  },
});

export default SigninScreen;
