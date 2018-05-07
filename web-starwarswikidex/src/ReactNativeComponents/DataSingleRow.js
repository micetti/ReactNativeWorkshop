import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'black',
    borderColor: 'yellow',
    borderWidth: 1,
    marginBottom: 10,
    marginHorizontal: 10,
    borderRadius: 3,
  },
  text: {
    fontSize: 16,
    color: 'yellow'
  }
});

const DataSingleRow = props => (
  <View style={styles.box}>
    <Text style={styles.text}> {props.content} </Text>
  </View>
);

DataSingleRow.propTypes = {
  content: PropTypes.string.isRequired,
};


export { DataSingleRow as default }
