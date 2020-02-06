import React, { Component } from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { Icon } from "react-native-elements";
import SigninScreen from "./Screen/SigninScreen";
import SignupScreen from "./Screen/SignupScreen";
import TrackCreateScreen from "./Screen/TrackCreateScreen";
import TrackDetailScreen from "./Screen/TrackDetailScreen";
import TrackListScreen from "./Screen/TrackListScreen";
import Account from "./Screen/Account";
import { Provider as AuthProvider } from "./context/AuthorContext";
import { Provider as LocationProvider } from "./context/LocationContext";
import { setNavigator } from "./setNavigatorRef";
const TabScreens = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signin: SigninScreen,
    Signup: SignupScreen
  }),
  mainFlow: createBottomTabNavigator({
    listFlow: createStackNavigator(
      {
        TrackList: TrackListScreen,
        TrackDetail: TrackDetailScreen
      },
      {
        navigationOptions: {
          tabBarLabel: "Home Page",
          tabBarIcon: () => <Icon name="home" size={30} />
        }
      }
    ),
    TrackCreate: TrackCreateScreen,
    Account: Account
  })
});
const App = createAppContainer(TabScreens);
export default () => {
  return (
    <LocationProvider>
      <AuthProvider>
        <App
          ref={navigator => {
            setNavigator(navigator);
          }}
        />
      </AuthProvider>
    </LocationProvider>
  );
};
