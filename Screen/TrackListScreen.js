import React, {
  Component,
  useState,
  useReducer,
  useContext,
  useEffect
} from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy
} from "expo-location";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import { Context as LocationContext } from "../context/LocationContext";
const TrackListScreen = () => {
  const { state, addLocation } = useContext(LocationContext);
  const startWatching = async () => {
    try {
      await requestPermissionsAsync();
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInteval: 10
        },
        location => addLocation(location)
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return (
    <View>
      <Text>just red</Text>
      <Text>just bigBlue</Text>
      <Text>bigBlue, then red</Text>
      <Text>red, then bigBlue</Text>
    </View>
  );
};
TrackListScreen.navigationOptions = () => {
  return {
    headerShown: false,
    tabBarLabel: "Home Page"
  };
};
export default TrackListScreen;
