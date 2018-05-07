import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'yellow',
    marginLeft: 10,
  }
});

const DataTitle = props => (
  <View>
    <Text style={styles.text}> {props.title} </Text>
  </View>
);

DataTitle.propTypes = {
  title: PropTypes.string.isRequired,
};


export {DataTitle as default}