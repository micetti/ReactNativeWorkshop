import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'black',
    shadowColor: 'black',
    shadowOpacity: 0.8,
    elevation: 5,
  },
  text: {
    marginVertical: 15,
    fontSize: 28,
    fontWeight: 'bold',
    color: 'yellow',
    fontFamily: 'monospace'
  }
});

const Header = () => (
  <View style={styles.box}>
    <Text style={styles.text}> StarWars WikiDex </Text>
  </View>
);

export {Header as default}