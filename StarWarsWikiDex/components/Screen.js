import React from 'react';
import { View } from 'react-native';
import Header from './Header';
import DataList from './DataList'
import SearchBar from './SearchBar'

const initialData = {
  name: 'C-3PO',
  height: '167',
  mass: '75',
  hair_color: 'n/a',
  skin_color: 'gold',
  eye_color: 'yellow',
  birth_year: '112BBY',
  gender: 'n/a',
  homeworld: 'https://swapi.co/api/planets/1/',
  films: [
    'https://swapi.co/api/films/2/',
    'https://swapi.co/api/films/5/',
    'https://swapi.co/api/films/4/',
    'https://swapi.co/api/films/6/',
    'https://swapi.co/api/films/3/',
    'https://swapi.co/api/films/1/'
  ],
  species: [
    'https://swapi.co/api/species/2/'
  ],
  vehicles: [],
  starships: [],
  created: '2014-12-10T15:10:51.357000Z',
  edited: '2014-12-20T21:17:50.309000Z',
  url: 'https://swapi.co/api/people/2/'
};

class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'people',
      element: '4',
      data: initialData,
    };
    this.updateType = this.updateType.bind(this);
    this.updateElement = this.updateElement.bind(this);
    this.startSearch = this.startSearch.bind(this);
  }

  updateType(type) {
    this.setState({type})
  }

  updateElement(element) {
    this.setState({element})
  }

  startSearch() {
    fetch(`https://swapi.co/api/${this.state.type}/${this.state.element}`)
      .then(response => response.json())
      .then(objectResponse => this.setState({data: objectResponse}))
      .catch(error => console.warn(error));
  }

  render() {
    return (
      <View>
        <Header/>
        <SearchBar
          type={this.state.type}
          element={this.state.element}
          updateType={this.updateType}
          updateElement={this.updateElement}
          startSearch={this.startSearch}
        />
        <DataList content={this.state.data}/>
      </View>
    )
  }
}

export { Screen as default }