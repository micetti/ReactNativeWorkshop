import React from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import DataPoint from './DataPoint';

class DataList extends React.Component {
  constructor(props) {
    super(props);
    this.getDataPoints = this.getDataPoints.bind(this);
    this.renderDataPoint = this.renderDataPoint.bind(this);
  }

  getDataPoints() {
    return (
      <View>
        <FlatList
          data={Object.keys(this.props.content).map(key => ({title: key, content: this.props.content[key]}))}
          keyExtractor={(item, index) => item.title}
          renderItem={this.renderDataPoint}
        />
      </View>
    )
  }

  renderDataPoint = ({index, item}) => {
    return (
      <DataPoint title={item.title} content={item.content}/>
    )
  };

  render() {
    return (
      <View>
        {this.getDataPoints()}
      </View>
    )
  }
}

DataList.propTypes = {
  content: PropTypes.object.isRequired,
};


export { DataList as default }