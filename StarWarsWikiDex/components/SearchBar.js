import React from 'react';
import { View, TouchableHighlight, StyleSheet, Picker, TextInput, Text } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  component: {
    backgroundColor: 'black'
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  typeField: {
    flex: 3,
  },
  elementField: {
    flex: 1,
  },
  elementInput: {
    borderColor: 'green',
  },
  itemStyle: {
    height: 25,
    color: 'yellow',
  },
  borderStyle: {
    borderColor: 'yellow',
    borderWidth: 1,
    marginHorizontal: 10,
    borderRadius: 3,
  },
  buttonText: {
    color: 'yellow',
    fontWeight: 'bold',
    fontSize: 25,
    alignSelf: 'center'
  }
});


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.component}>
        <View style={styles.container}>
          <View style={[styles.typeField, styles.borderStyle]}>
            <Picker
              selectedValue={this.props.type}
              onValueChange={(itemValue, itemIndex) => this.props.updateType(itemValue)}
              mode={'dropdown'}
              style={styles.itemStyle}
            >
              <Picker.Item label='people' value='people'/>
              <Picker.Item label='planets' value='planets'/>
              <Picker.Item label='films' value='films'/>
              <Picker.Item label='species' value='species'/>
              <Picker.Item label='vehicles' value='vehicles'/>
              <Picker.Item label='starships' value='starships'/>
            </Picker>
          </View>
          <View style={[styles.elementField, styles.borderStyle]}>
            <TextInput
              keyboardType={'numeric'}
              style={styles.itemStyle}
              onChangeText={(text) => this.props.updateElement(text)}
              value={this.props.element}
              allowFontScaling={true}
              maxLength={3}
              selectTextOnFocus={true}
              underlineColorAndroid={'transparent'}
            />
          </View>
        </View>
        <TouchableHighlight
          style={styles.borderStyle}
          onPress={() => this.props.startSearch()}
        >
          <Text style={styles.buttonText}>{'USE THE FORCE'}</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

SearchBar.propTypes = {
  type: PropTypes.string.isRequired,
  updateType: PropTypes.func.isRequired,
  element: PropTypes.string.isRequired,
  updateElement: PropTypes.func.isRequired,
  startSearch: PropTypes.func.isRequired,
};


export { SearchBar as default }