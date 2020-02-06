import React, { Component, useContext, useState, useEffect } from "react";
import { SafeAreaView } from "react-navigation";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  ActivityIndicator
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Button, ThemeProvider, Input, Icon } from "react-native-elements";
import Space from "../Screen/Spacer";
import { Context as LocationContext } from "../context/LocationContext";
import { Context } from "../context/AuthorContext";
const Map = ({ navigation }) => {
  const {
    state: { currentLocation }
  } = useContext(LocationContext);
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          ...currentLocation.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        }}
        minZoomLevel={2} // default => 0
        maxZoomLevel={15}
      >
        <Circle
          center={currentLocation.coords}
          radius={120}
          strokeColor="rgba(158,158,255,1.0)"
          fillColor="rgba(158,158,255,0.3)"
        />
      </MapView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: 500
  }
});

export default Map;
