import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  dataTitleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'yellow',
    marginLeft: 10,
  }
})

const DataTitle = () => (
  <View>
    <Text style={styles.dataTitleText} >{'name'}</Text>
  </View>
);


export default class App extends React.Component {
  render() {
    return (
      <View style={{marginTop: 30}}>
        <DataTitle />
      </View>
    )
  }
}