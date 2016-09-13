/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import App from './app/App';

class vkvideoapp extends Component {
  render() {
    return (
      <App/>
    );
  }
}

AppRegistry.registerComponent('vkvideoapp', () => vkvideoapp);
