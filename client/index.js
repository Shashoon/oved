/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Root from './App';
import {registerRootComponent} from 'expo';

registerRootComponent(Root);

// AppRegistry.registerComponent(appName, () => App);
