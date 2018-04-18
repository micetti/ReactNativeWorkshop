import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  dataTitleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
    marginLeft: 10,
  }
});

const DataTitle = (props) => (
  <View>
    <Text style={styles.dataTitleText} >{props.title}</Text>
  </View>
);

const DataContent = props => (
  <View>
    <Text> {props.content} </Text>
  </View>
);

export default class App extends React.Component {
  render() {
    return (
      <View style={{marginTop: 30}}>
        <DataTitle title={'name'} />
        <DataContent content={'C-3PO'} />
      </View>
    )
  }
}