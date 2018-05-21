import { AppRegistry, Dimensions } from 'react-native';
import App from './App';

GLOBAL.HEIGHT = Dimensions.get('window').height;
GLOBAL.WIDTH = Dimensions.get('window').width;

AppRegistry.registerComponent('azwyazwy', () => App);
