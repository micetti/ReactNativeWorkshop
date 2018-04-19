import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';

const fakeData = {
  name: 'C-3PO',
  height: '167',
  mass: '75',
  hair_color: 'n/a',
  skin_color: 'gold',
  eye_color: 'yellow',
  birth_year: '112BBY',
  gender: 'n/a',
};

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

const renderDataScreenItem = (props) => (
  <DataElement title={props.item.title} content={props.item.content}/>
);

const DataScreen = props => (
  <FlatList
    data={Object.keys(props.content).map(key => ({title: key, content: props.content[key]}))}
    keyExtractor={(item, index) => item.title}
    renderItem={renderDataScreenItem}
  />
);

export default class App extends React.Component {
  render() {
    return (
      <View style={{marginTop: 30}}>
        <DataScreen content={fakeData} />
      </View>
    )
  }
}