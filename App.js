import React, { Component } from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import SigninScreen from "./Screen/SigninScreen";
import SignupScreen from "./Screen/SignupScreen";
import TrackCreateScreen from "./Screen/TrackCreateScreen";
import TrackDetailScreen from "./Screen/TrackDetailScreen";
import TrackListScreen from "./Screen/TrackListScreen";
import Account from "./Screen/Account";
import { Provider } from "./context/AuthorContext";
import { setNavigator } from "./setNavigatorRef";
const TabScreens = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signin: SigninScreen,
    Signup: SignupScreen
  }),
  mainFlow: createBottomTabNavigator({
    listFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen
    }),
    TrackCreate: TrackCreateScreen,
    Account: Account
  })
});
const App = createAppContainer(TabScreens);
export default () => {
  return (
    <Provider>
      <App
        ref={navigator => {
          setNavigator(navigator);
        }}
      />
    </Provider>
  );
};
