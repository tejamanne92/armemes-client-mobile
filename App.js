/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Platform, StyleSheet, Text, View } from 'react-native';

import AppReducer from './src/reducers/app.reducer';
import HomeContainer from './src/views/home/home.container';

const instructions = Platform.select({
  ios: 
    'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
});

const store = createStore(AppReducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <HomeContainer />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
