import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import DataTitle from './DataTitle'
import DataSingleRow from './DataSingleRow'

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
    this.getDataRows = this.getDataRows.bind(this);
    this.renderDataSingleRow = this.renderDataSingleRow.bind(this);
  }

  getDataRows() {
    if (typeof(this.props.content) === 'string') {
      return <DataSingleRow content={this.props.content}/>
    }
    return (
      <View>
        <FlatList
          data={this.props.content.map(item => item)}
          keyExtractor={(item, index) => index}
          renderItem={this.renderDataSingleRow}
        />
      </View>
    )
  }

  renderDataSingleRow = ({index, item}) => (
    <DataSingleRow content={item}/>
  );

  render() {
    const {title, content} = this.props;
    return (
      content ? (
        <View style={styles.box}>
          <DataTitle title={title}/>
          {this.getDataRows()}
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
