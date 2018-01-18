import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import DataTitle from '../../components/DataTitle';

storiesOf('Components', module)
  .add('DataTitle', () => <DataTitle title={"I am the title"}/>);
