import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Welcome from 'default';

// require('Styles.js')

export default class App extends React.Component {
  render() {
    return (
      // <Welcome />
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}
