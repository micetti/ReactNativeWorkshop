import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  // Check https://facebook.github.io/react-native/docs/stylesheet.html and
  // https://facebook.github.io/react-native/docs/style.html
  box: {
    // TODO: try to mach the example design as close as possible
  },
  text: {
    // TODO: try to mach the example design as close as possible
  }
});

const Header = () => (
  <View style={styles.box}>
    <Text style={styles.text}> {'StarWars WikiDex'} </Text>
  </View>
);

export {Header as default}