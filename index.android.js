import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './app/App';

class TabLayoutExample extends Component {
  render() {
    return (
      <App/>
    );
  }
}

AppRegistry.registerComponent('TabLayoutExample', () => TabLayoutExample);
