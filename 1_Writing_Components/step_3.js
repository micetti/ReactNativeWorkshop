import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  dataTitleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'yellow',
    marginLeft: 10,
  },
  dataContentBox: {
    backgroundColor: 'black',
    borderColor: 'yellow',
    borderWidth: 1,
    marginBottom: 10,
    marginHorizontal: 10,
    borderRadius: 3,
  },
  dataContentText: {
    fontSize: 16,
    color: 'yellow'
  },
  dataElementBox: {
    backgroundColor: 'black'
  },
});

const DataTitle = props => (
  <View>
    <Text style={styles.dataTitleText} >{props.title}</Text>
  </View>
);

const DataContent = props => (
  <View style={styles.dataContentBox}>
    <Text style={styles.dataContentText}> {props.content} </Text>
  </View>
);

const DataElement = props => (
  <View style={styles.dataElementBox}>
    <DataTitle title={props.title} />
    <DataContent content={props.content} />
  </View>
);

export default class App extends React.Component {
  render() {
    return (
      <View style={{marginTop: 30}}>
        <DataElement title={'name'} content={'C-3PO'} />
      </View>
    )
  }
}