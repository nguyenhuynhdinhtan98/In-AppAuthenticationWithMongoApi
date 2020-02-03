import React, { Component, useState, useReducer, useContext } from "react";
import Space from "./Spacer";
import { View, StyleSheet, Text } from "react-native";
import { Button, ThemeProvider, Input } from "react-native-elements";
import * as Font from "expo-font";
import { Context } from "../context/AuthorContext";
import { TouchableOpacity } from "react-native-gesture-handler";
import AuthForm from "../component/AuthForm";
const SigninScreen = ({ navigation }) => {
  const { state, signUp, signIn } = useContext(Context);
  return (
    <View style={styles.container}>
      <ThemeProvider>
        <AuthForm
          headerText="Sign In"
          errorMessage={state.error}
          onSubmit={(email, password) => signIn(email, password)}
        />
        <Space>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text style={styles.link}>Register</Text>
          </TouchableOpacity>
        </Space>
      </ThemeProvider>
    </View>
  );
};
SigninScreen.navigationOptions = () => {
  return {
    headerShown: false
  };
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  },
  link: {
    fontStyle: "italic",
    fontSize: 14,
    color: "blue"
  }
});
export default SigninScreen;
