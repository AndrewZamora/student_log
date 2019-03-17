/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';

const message = () =>{
  alert('hello');
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>This is really really dope!</Text>
        <Button
          onPress={message}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'cyan',
  },
  title: {
    color: 'green',
  }
});
