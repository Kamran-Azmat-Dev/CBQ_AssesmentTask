import {AppRegistry} from 'react-native';
import * as Navigation from './src/navigation'
import {name as appName} from './app.json';

//this is the entery point of app 
//it directly calls the navigation
AppRegistry.registerComponent(appName, () => Navigation);



