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
    <Text style={styles.text}>{'Everything below is in React Native'}</Text>
    <Text style={styles.text}>{'But React Native Web does not even have lists yet...'}'</Text>
  </View>
);

export {Header as default}
