import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import DataTitle from './DataTitle'
import DataContentBox from './DataContentBox'

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'black',
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
      <View>
        <FlatList
          data={this.props.content.map(item => item)}
          keyExtractor={(item, index) => index}
          renderItem={this.renderDataContentBox}
        />
      </View>
    )
  }

  renderDataContentBox = ({index, item}) => (
    <DataContentBox content={item}/>
  );

  render() {
    const {title, content} = this.props;
    return (
      content.length !== 0 ? (
        <View style={styles.box}>
          <DataTitle title={title}/>
          {this.getDataContentBoxes()}
        </View>
      ) : null
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