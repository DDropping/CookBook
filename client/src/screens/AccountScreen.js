import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";

import { Context as AuthContext } from "../context/AuthContext";
import Spacer from "../components/Spacer";

const AccountScreen = ({ navigation }) => {
  const { signout } = useContext(AuthContext);

  return (
    <View>
      <Button title="Logout" onPress={signout} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;
