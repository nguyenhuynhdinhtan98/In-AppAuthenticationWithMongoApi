import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import createDataContext from "./createDataContext";
import api from "../api/axios";
import { navigate } from "../setNavigatorRef";
const action = (state, action) => {
  switch (action.type) {
    case "error":
      console.log(action.error);
      return { ...state, error: action.error };
    case "signUp":
      return { error: "", token: action.payload };
    case "signIn":
      return { error: "", token: action.payload };
    case "signOut":
      return { error: "", token: "" };
    case "AutoSignin":
      return { token: action.payload };
    default:
      return state;
  }
};
const signUp = dispatch => {
  return async ({ email, password }) => {
    try {
      const output = await api.post("/signup", { email, password });
      await AsyncStorage.setItem("token", output.data.token);
      dispatch({ type: "signUp", payload: output.data.token });
      navigate("TrackList");
    } catch (error) {
      console.log(error);
      dispatch({ type: "error", error: error.message });
    }
  };
};
const signIn = dispatch => {
  return async ({ email, password }) => {
    try {
      const output = await api.post("/signin", { email, password });

      await AsyncStorage.setItem("token", output.data.token);
      dispatch({ type: "signUp", payload: output.data.token });
      navigate("TrackList");
    } catch (error) {
      console.log(error);
      dispatch({ type: "error", error: error.message });
    }
  };
};
const AutoSignIn = dispatch => {
  return async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      dispatch({ type: "AutoSignin", payload: token });
      navigate("TrackList");
    } else {
      navigate("Signin");
    }
  };
};
const signOut = dispatch => {
  return async () => {
    const token = await AsyncStorage.removeItem("token");
    dispatch({ type: "signOut" });
    navigate("Signin");
  };
};

export const { Context, Provider } = createDataContext(
  action,
  { signIn, signOut, signUp, AutoSignIn },
  { token: null, error: "" }
);
