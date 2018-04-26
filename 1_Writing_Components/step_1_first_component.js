import React from 'react';
import { View, Text } from 'react-native';

const DataTitle = () => (
  <View>
    <Text>{'name'}</Text>
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