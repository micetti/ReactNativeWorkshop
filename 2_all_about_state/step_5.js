import React from 'react';
import { View, StyleSheet, Text, FlatList, TouchableHighlight } from 'react-native';
import { Constants } from 'expo';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    }
  }

  render() {
    return (
      <View style={{marginTop: Constants.statusBarHeight}}>
        <TouchableHighlight
          style={styles.forceButtonBorderStyle}
          onPress={() => this.setState({count: this.state.count + 1})}
        >
          <Text style={styles.forceButtonText}>{'USE THE FORCE'}</Text>
        </TouchableHighlight>
        <DataScreen content={this.state} />
      </View>
    )
  }
}

// ****************************************************************************
/*    Moved the styling down because it is not as important in the following
      steps as it was before.
*/

const styles = StyleSheet.create({
  dataTitleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'yellow',
    marginLeft: 10,
  },
  dataSingleRowBox: {
    backgroundColor: 'black',
    borderColor: 'yellow',
    borderWidth: 1,
    marginBottom: 10,
    marginHorizontal: 10,
    borderRadius: 3,
  },
  dataSingleRowText: {
    fontSize: 16,
    color: 'yellow'
  },
  dataElementBox: {
    backgroundColor: 'black'
  },
  forceButtonBorderStyle: {
    borderColor: 'yellow',
    borderWidth: 1,
    marginHorizontal: 10,
    borderRadius: 3,
    height:35,
    backgroundColor: 'black',
  },
  forceButtonText: {
    color: 'yellow',
    fontWeight: 'bold',
    fontSize: 25,
    alignSelf: 'center'
  },
});


// ****************************************************************************
/*    Below is our component library from the last steps that we don't
      need to worry about anymore. We will just use the components as if
      they were imported modules.














*/
//*****************************************************************************

const DataTitle = props => (
  <View>
    <Text style={styles.dataTitleText} >{props.title}</Text>
  </View>
);

const DataSingleRow = props => (
  <View style={styles.dataSingleRowBox}>
    <Text style={styles.dataSingleRowText}> {props.content} </Text>
  </View>
);

const DataElement = props => (
  <View style={styles.dataElementBox}>
    <DataTitle title={props.title} />
    <DataSingleRow content={props.content} />
  </View>
);

const renderDataScreenItem = props => (
  <DataElement title={props.item.title} content={props.item.content}/>
);

const DataScreen = props => (
  <FlatList
    data={Object.keys(props.content).map(key => ({title: key, content: props.content[key]}))}
    keyExtractor={(item, index) => item.title}
    renderItem={renderDataScreenItem}
  />
);