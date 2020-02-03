import React, { Component, useState, useReducer, useContext } from "react";
import Space from "../Screen/Spacer";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Button, ThemeProvider, Input } from "react-native-elements";
import * as Font from "expo-font";
import { Context } from "../context/AuthorContext";
const AuthForm = ({ headerText, errorMessage, onSubmit }) => {
  const { state, signUp, SignIn } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Space>
        <Text h1 style={{ fontSize: 40, fontWeight: "bold" }}>
          {headerText}
        </Text>
      </Space>
      <Space>
        <Input label="Email" onChangeText={setEmail} />
      </Space>
      <Space>
        <Input label="Password " onChangeText={setPassword} secureTextEntry />
        {errorMessage != null ? <Text> {errorMessage} </Text> : null}
      </Space>
      <Space>
        <Button
          title={headerText}
          onPress={() => onSubmit({ email, password })}
        />
      </Space>
    </>
  );
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
  register: {
    fontStyle: "italic",
    fontSize: 14,
    color: "blue"
  }
});

export default AuthForm;
