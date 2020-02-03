import React, { Component, useState, useReducer, useContext } from "react";
import Space from "./Spacer";
import { View, StyleSheet, Text } from "react-native";
import { Button, ThemeProvider, Input } from "react-native-elements";
import * as Font from "expo-font";
import { Context } from "../context/AuthorContext";
import { TouchableOpacity } from "react-native-gesture-handler";
import AuthForm from "../component/AuthForm";
const SignupScreen = ({ navigation }) => {
  const { state, signUp } = useContext(Context);

  return (
    <View style={styles.container}>
      <ThemeProvider>
        <AuthForm
          headerText="Sign Up"
          onSubmit={signUp}
          errorMessage={state.error}
        />
        <Space>
          <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
            <Text style={styles.link}>Login</Text>
          </TouchableOpacity>
        </Space>
      </ThemeProvider>
    </View>
  );
};
SignupScreen.navigationOptions = () => {
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
  red: {
    color: "red"
  },
  link: {
    fontStyle: "italic",
    fontSize: 14,
    color: "blue"
  }
});

export default SignupScreen;
