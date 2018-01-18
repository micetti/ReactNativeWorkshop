import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'rgb(193,191,110)',
    marginBottom: 10,
    marginHorizontal: 10,
    borderRadius: 3,
  },
  text: {
    fontSize: 12,
  }
});

const DataContentBox = props => (
  <View style={styles.box}>
    <Text style={styles.text}> {props.content} </Text>
  </View>
);

DataContentBox.propTypes = {
  content: PropTypes.string.isRequired,
};


export {DataContentBox as default}