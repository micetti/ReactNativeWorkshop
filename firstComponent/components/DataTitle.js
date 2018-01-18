import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';


const DataTitle = props => (
  <View>
    <Text> {props.title} </Text>
  </View>
)

export {DataTitle as default}