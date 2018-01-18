import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import DataTitle from '../../components/DataTitle';
import DataContentBox from '../../components/DataContentBox';
import DataPoint from '../../components/DataPoint';

storiesOf('Components', module)
  .add('DataTitle', () => <DataTitle title={"I am the title"}/>)
  .add('DataContentBox', () => <DataContentBox content={"I am the context here"}/>)
  .add('DataPoint', () => <DataPoint title={"I am the title"} content={"I am the context here"}/>)
  .add('DataPoint_list', () => <DataPoint title={"I am the title"} content={["I am the context here", "fuuuuuuuuu"]}/>);
