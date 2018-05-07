import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ReactNativeContainer from './ReactNativeComponents/Container'
import registerServiceWorker from './registerServiceWorker';
import { AppRegistry } from 'react-native';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

AppRegistry.registerComponent('ReactNativeContainer', () => ReactNativeContainer);
AppRegistry.runApplication('ReactNativeContainer', { rootTag: document.getElementById('react-root') });
