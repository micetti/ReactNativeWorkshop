import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableHighlight,
  Picker,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import { Constants } from 'expo';

const onboarding = {
  Welcome: 'To this amazing App',
  What: 'This app shows trivia about StarWars',
  How: [
    'Choose a Type from the dropdown',
    'Enter a number in the text field',
    'Hit USE THE FORCE',
  ],
};

class ForceButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
    };

    this.startSearch = this.startSearch.bind(this);
  };

  startSearch() {
    this.setState({ isLoading: true });
    fetch(`https://swapi.co/api/${this.props.type}/${this.props.number}`)
      .then(response => response.json())
      .then(objectResponse => this.props.onDataReceived(objectResponse))
      .then(() => this.setState({ isLoading: false }))
      .catch(error => console.warn(error));
  };

  render() {
    return (
      <TouchableHighlight
        style={styles.forceButtonBorderStyle}
        onPress={this.startSearch}
      >
        { this.state.isLoading ?
          <ActivityIndicator size="small" color='yellow'/> :
          <Text style={styles.forceButtonText}>{'USE THE FORCE'}</Text>
        }
      </TouchableHighlight>
    )
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: onboarding,
      type: 'planets',
      number: '0',
    };

    this.setReceivedData = this.setReceivedData.bind(this);
  };

  setReceivedData(receivedData) {
    this.setState({data: receivedData})
  };

  render() {
    return (
      <View style={styles.app}>
        <ForceButton
          onDataReceived={this.setReceivedData}
          type={this.state.type}
          number={this.state.number}
        />
        <View style={styles.inputBorders}>
          <Picker
            selectedValue={this.state.type}
            onValueChange={(itemValue, itemIndex) => this.setState({type: itemValue})}
            mode={'dropdown'}
            style={styles.inputItemStyle}
          >
            <Picker.Item label='planets' value='planets'/>
            <Picker.Item label='species' value='species'/>
            <Picker.Item label='starships' value='starships'/>
          </Picker>
        </View>
        <View style={styles.inputBorders}>
          <TextInput
            keyboardType={'numeric'}
            style={styles.inputItemStyle}
            allowFontScaling={true}
            underlineColorAndroid={'transparent'}
            maxLength={2}
            onChangeText={(text) => this.setState({number: text})}
            value={this.state.number}
            defaultValue={this.state.number}
          />
        </View>
        <DataScreen content={this.state.data} />
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
    marginTop: Constants.statusBarHeight,
    flex: 1,
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
    marginVertical: 10,
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
    marginBottom: 10,
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
  <View style={{flex:1}}>
    <FlatList
      data={Object.keys(props.content).map(key => ({title: key, content: props.content[key]}))}
      keyExtractor={(item) => item.title}
      renderItem={renderDataScreenItem}
    />
  </View>
);