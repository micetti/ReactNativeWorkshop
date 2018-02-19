import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  // You can give me a nice Haircut! https://facebook.github.io/react-native/docs/stylesheet.html
  box: {
    // OPTIONAL
  },
  text: {
    color: 'green'
    // OPTIONAL
  }
});

const DataSingleRow = props => (
  // TODO add a Text component and pass it styles.text as a prop. It should display props.content, which always has to
  // be of type string, as you can see in `DataSingleRow.propTypes` below
  <View style={styles.box}>
  </View>
);

DataSingleRow.propTypes = {
  content: PropTypes.string.isRequired,
};


export { DataSingleRow as default }
