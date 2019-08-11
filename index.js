/**
 * @format
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import {
  createAppContainer,
  createStackNavigator,
} from 'react-navigation';

import App from './src/scenes/App';
import Slide from './src/scenes/Slide';
import SlidePre from './src/scenes/SlidePre';
import { name as appName } from './app.json';

const mainStackNavigator = createStackNavigator({
  App: {
    screen: App,
    navigationOptions: {
      gesturesEnabled: false,
      header: null,
    },
  },
  Slide: {
    screen: Slide,
    navigationOptions: {
      header: null,
    },
  },
  SlidePre: {
    screen: SlidePre,
    navigationOptions: {
      header: null,
    },
  },
}, {
  initialRouteName: 'App',
});

const AppContainer = createAppContainer(mainStackNavigator);

const AppContainerWrapper = () => {
  return (
    <AppContainer
      // eslint-disable-next-line no-unused-vars
      onNavigationStateChange={(prevState, currentState, action) => {
      }}
    />
  );
};

AppRegistry.registerComponent(appName, () => {
  return AppContainerWrapper;
});
