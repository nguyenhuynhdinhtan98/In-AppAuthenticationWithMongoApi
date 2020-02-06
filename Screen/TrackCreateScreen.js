import React, {
  Component,
  useState,
  useReducer,
  useContext,
  useEffect
} from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, ThemeProvider, Input, Icon } from "react-native-elements";
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy
} from "expo-location";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import { withNavigationFocus } from "react-navigation";
import Map from "../component/Map";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../component/useLocation";
const TrackCreateScreen = ({ isFocused }) => {
  return (
    <View>
      <Map />
    </View>
  );
};
TrackCreateScreen.navigationOptions = () => {
  return {
    headerShown: false,
    tabBarIcon: () => <Icon name="create" size={30} />
  };
};
export default withNavigationFocus(TrackCreateScreen);
