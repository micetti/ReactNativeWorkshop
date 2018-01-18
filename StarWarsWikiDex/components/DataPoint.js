import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import DataTitle from './DataTitle'
import DataContentBox from './DataContentBox'

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'rgb(232,230,187)',
    borderRadius: 3,
  },
  text: {
    fontSize: 12,
  }
});

class DataPoint extends React.Component {
  constructor(props) {
    super(props);
    this.getDataContentBoxes = this.getDataContentBoxes.bind(this);
    this.renderDataContentBox = this.renderDataContentBox.bind(this);
  }

  getDataContentBoxes() {
    if (typeof(this.props.content) === 'string') {
      return <DataContentBox content={this.props.content}/>
    }
    return (
      <View >
        <FlatList
          data={this.props.content.map(item => item)}
          renderItem={this.renderDataContentBox}
        />
      </View>
    )
  }

  renderDataContentBox = ({ index, item }) => (
    <DataContentBox key={index} content={item}/>
  );

  render() {
    const { title } = this.props;
    return (
      <View style={styles.box}>
        <DataTitle title={title}/>
        {this.getDataContentBoxes()}
      </View>
    )
  }
}

DataPoint.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
};


export { DataPoint as default }