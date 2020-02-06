import React, {
  Component,
  useState,
  useReducer,
  useContext,
  useEffect
} from "react";
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy
} from "expo-location";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
export default callback => {
  const startWatching = async () => {
    try {
      await requestPermissionsAsync();
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 10000,
          distanceInteval: 100
        },
        callback
      );
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    startWatching();
  }, []);
};
