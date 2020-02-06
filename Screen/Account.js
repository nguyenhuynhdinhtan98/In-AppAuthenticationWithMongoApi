import React, {
  Component,
  useState,
  useReducer,
  useContext,
  useEffect
} from "react";
import Space from "./Spacer";
import { SafeAreaView } from "react-navigation";
import { View, StyleSheet, Text } from "react-native";
import { Button, ThemeProvider, Input, Icon } from "react-native-elements";
import { Context } from "../context/AuthorContext";
import { MaterialIcons } from "@expo/vector-icons";
const Account = ({ navigation }) => {
  const { state, signOut, AutoSignIn } = useContext(Context);
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Button onPress={signOut} title="Sign Out" />
    </SafeAreaView>
  );
};
Account.navigationOptions = () => {
  return {
    headerShown: false,
    tabBarIcon: () => <MaterialIcons name="supervisor-account" size={30} />
  };
};
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
export default Account;
