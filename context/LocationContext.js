import React, { Component } from "react";
import createDataContext from "./createDataContext";
const action = (state, action) => {
  switch (action.type) {
    case "StartRecording":
      return { ...state, error: action.error };
    case "Location":
      return { ...state, currentLocation: action.location };
    default:
      return state;
  }
};
const startRecording = dispatch => {
  return async () => {};
};
const stopRecording = dispatch => {
  return async () => {};
};
const addLocation = dispatch => {
  return location => {
    dispatch({ type: "Location", location: location });
  };
};
export const { Context, Provider } = createDataContext(
  action,
  { addLocation, startRecording, stopRecording },
  { location: [], recording: false, currentLocation: {} }
);
