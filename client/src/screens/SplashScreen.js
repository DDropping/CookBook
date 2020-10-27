import React, { useContext, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";

import { Context as AuthContext } from "../context/AuthContext";
import Spacer from "../components/Spacer";

const SplashScreen = ({ navigation }) => {
  const { tryLocalSignin } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, []);

  return (
    <View style={styles.Container}>
      <Text>Cook Book</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    backgroundColor: "blue",
  },
});

export default SplashScreen;
