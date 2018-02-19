import React from 'react';

import { storiesOf } from '@storybook/react-native';

import DataTitle from '../../components/DataTitle';
import DataSingleRow from '../../components/DataSingleRow';
import DataPoint from '../../components/DataPoint';
import DataFullScreen from '../../components/DataFullScreen';

const exampleData = {
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

storiesOf('Components', module)
  .add('DataTitle', () => <DataTitle title={"I am the title"}/>)
  .add('DataSingleRow', () => <DataSingleRow content={"I am the info here"}/>)
  .add('DataPoint', () => <DataPoint title={"I am the title"} content={"I am the info here"}/>)
  .add('DataPoint_list', () => <DataPoint title={"I am the title"} content={["I am the info here", "spam"]}/>)
  .add('DataFullScreen', () => <DataFullScreen content={exampleData}/>);
