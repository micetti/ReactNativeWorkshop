import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import DataTitle from './DataTitle'
import DataSingleRow from './DataSingleRow'

const styles = StyleSheet.create({
  box: {
    // TODO
  },
  text: {
    // TODO
  }
});

class DataPoint extends React.Component {
  constructor(props) {
    super(props);
    this.getDataRows = this.getDataRows.bind(this);
  }

  getDataRows() {
    // TODO: If you check the propTypes below you will see that this.props.content can either be a string like 'C-3PO'
    // or an array of strings. That is why we have to handle two cases here.
    if (true) { // TODO: add a condition to check if we have a string or an array
      return <DataSingleRow content={this.props.content}/> // if it is a string we simply return one `<DataSingleRow...`
    }
    return (
      // TODO: return a list of <DataSingleRow content={...}/> Components you can use are best explained here:
      // https://facebook.github.io/react-native/docs/using-a-listview.html or check the DataFullScreen component.
      <View>
      </View>
    )
  }

  render() {
    return (
      // If you want to call functions from inside JSX tags you need to wrap them inside {} like below.
        <View style={styles.box}>
          <DataTitle title={this.props.title}/>
          {this.getDataRows()}
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
