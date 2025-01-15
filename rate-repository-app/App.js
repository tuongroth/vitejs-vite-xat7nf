// index.js
import React from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';
import { name as appName } from './app.json'; // Ensure you have app.json in your project

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, World!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

AppRegistry.registerComponent(appName, () => App);
