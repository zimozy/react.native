import React from 'react';
import { Text, View, Button } from 'react-native';

// require('Styles.js')

export class Welcome extends React.Component {
  render() {
    return (
      <View /*style={styles.container}*/>
        <Text>Hi!</Text>
        <Button>I'm new</Button>
        <Button>I have an account</Button>
      </View>
    );
  }
}