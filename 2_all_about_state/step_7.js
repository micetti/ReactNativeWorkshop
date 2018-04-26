import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableHighlight,
  Picker,
} from 'react-native';
import { Constants } from 'expo';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      picked: 'planets'
    }
  }

  render() {
    return (
      <View style={styles.app}>
        <TouchableHighlight
          style={styles.forceButtonBorderStyle}
          onPress={() => this.setState({count: this.state.count + 1})}
        >
          <Text style={styles.forceButtonText}>{'USE THE FORCE'}</Text>
        </TouchableHighlight>
        <View style={styles.pickerBox}>
          <Picker
            selectedValue={this.state.picked}
            onValueChange={(itemValue, itemIndex) => this.setState({picked: itemValue})}
            mode={'dropdown'}
            style={styles.pickerItemStyle}
          >
            <Picker.Item label='planets' value='planets'/>
            <Picker.Item label='species' value='species'/>
            <Picker.Item label='starships' value='starships'/>
          </Picker>
        </View>
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
  app: {
    backgroundColor: 'black',
    marginTop: Constants.statusBarHeight
  },
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
  inputItemStyle: {
    height: 25,
    color: 'yellow',
  },
  inputBorders: {
    backgroundColor: 'black',
    borderColor: 'yellow',
    borderWidth: 1,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 3,
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

const renderSingleOrMultipleRows = props => {
  if (!Array.isArray(props.content)) {
    return <DataSingleRow content={props.content}/>
  }
  return(
    <FlatList
      data={props.content.map(item => item)}
      keyExtractor={(item, index) => index}
      renderItem={({item}) => <DataSingleRow content={item}/> }
    />
  )
};

const DataElement = props => (
  <View style={styles.dataElementBox}>
    <DataTitle title={props.title} />
    {renderSingleOrMultipleRows(props)}
  </View>
);

const renderDataScreenItem = ({item}) => (
  <DataElement title={item.title} content={item.content}/>
);

const DataScreen = props => (
  <FlatList
    data={Object.keys(props.content).map(key => ({title: key, content: props.content[key]}))}
    keyExtractor={(item) => item.title}
    renderItem={renderDataScreenItem}
  />
);