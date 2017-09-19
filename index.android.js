/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { AppEventsLogger } from 'react-native-fbsdk';

export default class RNwithFBAnalytics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <TouchableOpacity
          onPress={() => {
            AppEventsLogger.logEvent('buttonHome', {'param': 'Click Event'})
          }}
          style={styles.button}
        >
          <Text style={styles.white}>Log Click Event</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    backgroundColor: '#365899',
    padding: 10,
    margin: 10
  },
  white: {
    color: '#FFFFFF'
  }
});

AppRegistry.registerComponent('RNwithFBAnalytics', () => RNwithFBAnalytics);
