import React from 'react';
import { StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  // You can give me a nice Haircut! https://facebook.github.io/react-native/docs/stylesheet.html
  text: {
    color: 'green',
    // OPTIONAL
  }
});

const DataTitle = props => (
    <Text> {'Hello World'} </Text> // TODO: Change this Text to accept styles.text as the style prop and make it display
);                                 // props.title see: https://facebook.github.io/react-native/docs/text.html and in the
                                   // expo app the DataTitle component should then say 'I am the title' in your color

DataTitle.propTypes = {
  title: PropTypes.string.isRequired,
};


export {DataTitle as default}